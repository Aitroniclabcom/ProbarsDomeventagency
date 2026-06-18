// Single source of truth for shop-wide commerce constants.
// Change the delivery fee here and it updates the cart, checkout, and order total.

/** Flat courier delivery fee, tax-inclusive (incl. 21% PVN). */
export const DELIVERY_FEE = 6;

/** Latvian VAT rate used to derive the net shipping amount sent to WooCommerce. */
export const PVN_RATE = 0.21;
