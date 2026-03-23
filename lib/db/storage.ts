import {
  type User, type InsertUser, users,
  type Product, type InsertProduct, products,
  type DeliveryOption, type InsertDeliveryOption, deliveryOptions,
  type Order, type InsertOrder, orders,
  type OrderItem, type InsertOrderItem, orderItems,
  type BlogPost, type InsertBlogPost, blogPosts,
  type SiteSetting, siteSettings,
} from "./schema";
import { db } from "./index";
import { eq, desc } from "drizzle-orm";

export class DatabaseStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }
  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }
  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  async getProducts(): Promise<Product[]> {
    return db.select().from(products);
  }
  async getActiveProducts(): Promise<Product[]> {
    return db.select().from(products).where(eq(products.isActive, true));
  }
  async getProduct(id: string): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }
  async createProduct(product: InsertProduct): Promise<Product> {
    const [created] = await db.insert(products).values(product).returning();
    return created;
  }
  async updateProduct(id: string, product: Partial<InsertProduct>): Promise<Product | undefined> {
    const [updated] = await db.update(products).set({ ...product, updatedAt: new Date() }).where(eq(products.id, id)).returning();
    return updated;
  }
  async deleteProduct(id: string): Promise<boolean> {
    await db.delete(products).where(eq(products.id, id));
    return true;
  }
  async getDeliveryOptions(): Promise<DeliveryOption[]> {
    return db.select().from(deliveryOptions);
  }
  async getActiveDeliveryOptions(): Promise<DeliveryOption[]> {
    return db.select().from(deliveryOptions).where(eq(deliveryOptions.isActive, true));
  }
  async getDeliveryOption(id: string): Promise<DeliveryOption | undefined> {
    const [option] = await db.select().from(deliveryOptions).where(eq(deliveryOptions.id, id));
    return option;
  }
  async createDeliveryOption(option: InsertDeliveryOption): Promise<DeliveryOption> {
    const [created] = await db.insert(deliveryOptions).values(option).returning();
    return created;
  }
  async updateDeliveryOption(id: string, option: Partial<InsertDeliveryOption>): Promise<DeliveryOption | undefined> {
    const [updated] = await db.update(deliveryOptions).set(option).where(eq(deliveryOptions.id, id)).returning();
    return updated;
  }
  async deleteDeliveryOption(id: string): Promise<boolean> {
    await db.delete(deliveryOptions).where(eq(deliveryOptions.id, id));
    return true;
  }
  async getOrders(): Promise<Order[]> {
    return db.select().from(orders);
  }
  async getOrder(id: string): Promise<Order | undefined> {
    const [order] = await db.select().from(orders).where(eq(orders.id, id));
    return order;
  }
  async createOrder(order: InsertOrder): Promise<Order> {
    const [created] = await db.insert(orders).values(order).returning();
    return created;
  }
  async updateOrder(id: string, order: Partial<InsertOrder>): Promise<Order | undefined> {
    const [updated] = await db.update(orders).set(order).where(eq(orders.id, id)).returning();
    return updated;
  }
  async getOrderItems(orderId: string): Promise<OrderItem[]> {
    return db.select().from(orderItems).where(eq(orderItems.orderId, orderId));
  }
  async createOrderItem(item: InsertOrderItem): Promise<OrderItem> {
    const [created] = await db.insert(orderItems).values(item).returning();
    return created;
  }
  async incrementDownloadCount(itemId: string): Promise<void> {
    const [item] = await db.select().from(orderItems).where(eq(orderItems.id, itemId));
    if (item) {
      await db.update(orderItems).set({ downloadCount: (item.downloadCount || 0) + 1 }).where(eq(orderItems.id, itemId));
    }
  }
  async getBlogPosts(): Promise<BlogPost[]> {
    return db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
  }
  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return db.select().from(blogPosts).where(eq(blogPosts.isPublished, true)).orderBy(desc(blogPosts.publishedAt));
  }
  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post;
  }
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post;
  }
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [created] = await db.insert(blogPosts).values(post).returning();
    return created;
  }
  async updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const [updated] = await db.update(blogPosts).set({ ...post, updatedAt: new Date() }).where(eq(blogPosts.id, id)).returning();
    return updated;
  }
  async deleteBlogPost(id: string): Promise<boolean> {
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
    return true;
  }
  async getSetting(key: string): Promise<string | null> {
    const [setting] = await db.select().from(siteSettings).where(eq(siteSettings.key, key));
    return setting?.value ?? null;
  }
  async setSetting(key: string, value: string): Promise<void> {
    const existing = await this.getSetting(key);
    if (existing !== null) {
      await db.update(siteSettings).set({ value, updatedAt: new Date() }).where(eq(siteSettings.key, key));
    } else {
      await db.insert(siteSettings).values({ key, value });
    }
  }
  async getAllSettings(): Promise<SiteSetting[]> {
    return db.select().from(siteSettings);
  }
}

export const storage = new DatabaseStorage();
