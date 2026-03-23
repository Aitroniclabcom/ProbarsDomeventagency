-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  name_lv TEXT,
  name_ru TEXT,
  name_en TEXT,
  description TEXT,
  description_lv TEXT,
  description_ru TEXT,
  description_en TEXT,
  price DECIMAL(10,2) NOT NULL,
  discount_price DECIMAL(10,2),
  image_url TEXT,
  is_digital BOOLEAN DEFAULT FALSE,
  digital_file_url TEXT,
  digital_download_link TEXT,
  stock INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create delivery_options table
CREATE TABLE IF NOT EXISTS delivery_options (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  name_lv TEXT,
  name_ru TEXT,
  name_en TEXT,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  estimated_days INTEGER,
  is_active BOOLEAN DEFAULT TRUE,
  is_digital_only BOOLEAN DEFAULT FALSE,
  logo_url TEXT
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_email TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT,
  shipping_address TEXT,
  delivery_option_id VARCHAR,
  subtotal DECIMAL(10,2) NOT NULL,
  delivery_price DECIMAL(10,2) DEFAULT 0,
  total DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending',
  stripe_payment_intent_id TEXT,
  stripe_session_id TEXT,
  is_paid BOOLEAN DEFAULT FALSE,
  paid_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id VARCHAR NOT NULL,
  product_id VARCHAR NOT NULL,
  product_name TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  is_digital BOOLEAN DEFAULT FALSE,
  digital_file_url TEXT,
  digital_download_link TEXT,
  download_count INTEGER DEFAULT 0
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  title_lv TEXT,
  title_ru TEXT,
  title_en TEXT,
  content TEXT NOT NULL,
  content_lv TEXT,
  content_ru TEXT,
  content_en TEXT,
  slug TEXT NOT NULL UNIQUE,
  featured_image_url TEXT,
  is_published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create site_settings table
CREATE TABLE IF NOT EXISTS site_settings (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT NOT NULL UNIQUE,
  value TEXT,
  updated_at TIMESTAMP DEFAULT NOW()
);
