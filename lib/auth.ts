import { NextRequest } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export function isAdmin(req: NextRequest): boolean {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) return false;
  const [type, credentials] = authHeader.split(" ");
  if (type !== "Basic") return false;
  const decoded = Buffer.from(credentials, "base64").toString();
  const [username, password] = decoded.split(":");
  return username === "admin" && password === ADMIN_PASSWORD;
}
