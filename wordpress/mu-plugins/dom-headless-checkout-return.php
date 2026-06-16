<?php
/**
 * Plugin Name: D.O.M. Headless Checkout Return
 * Description: After WooCommerce Stripe payment, redirect customers back to domeventagency.com thank-you page.
 * Install: copy this file to wp-content/mu-plugins/ on shop.domeventagency.com (create mu-plugins folder if missing).
 */

if (!defined('ABSPATH')) {
    exit;
}

const DOM_HEADLESS_RETURN_META = '_headless_return_url';

function dom_headless_build_return_url(WC_Order $order): ?string {
    $base = $order->get_meta(DOM_HEADLESS_RETURN_META);
    if (!is_string($base) || $base === '') {
        return null;
    }

    $allowed_hosts = apply_filters('dom_headless_allowed_return_hosts', [
        'domeventagency.com',
        'www.domeventagency.com',
    ]);

    $parsed = wp_parse_url($base);
    $host = isset($parsed['host']) ? strtolower($parsed['host']) : '';
    if ($host === '' || !in_array($host, $allowed_hosts, true)) {
        return null;
    }

    return add_query_arg(
        [
            'order_id' => (string) $order->get_id(),
            'key'      => $order->get_order_key(),
        ],
        $base
    );
}

add_filter('woocommerce_get_checkout_order_received_url', function ($url, $order) {
    if (!$order instanceof WC_Order) {
        return $url;
    }
    $redirect = dom_headless_build_return_url($order);
    return $redirect ?: $url;
}, 10, 2);

add_filter('woocommerce_payment_successful_result', function ($result, $order_id) {
    $order = wc_get_order($order_id);
    if (!$order instanceof WC_Order) {
        return $result;
    }
    $redirect = dom_headless_build_return_url($order);
    if ($redirect) {
        $result['redirect'] = $redirect;
    }
    return $result;
}, 10, 2);
