import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blogRouter.use("/api/v1/blog/*", async (c, next) => {
  const header = c.req.header("Authorization");
  const token = header?.split(" ")[1] || "";
  const response = await verify(token, c.env.JWT_SECRET);
  if (response.id) {
    next();
  } else {
    c.status(403);
    return c.json({ error: "Unauthorized" });
  }
});

blogRouter.post("/api/v1/blog", (c) => {
  return c.text("Hello Hono");
});
blogRouter.put("/api/v1/blog", (c) => {
  return c.text("Hello Hono");
});
blogRouter.get("/api/v1/blog/:id", (c) => {
  return c.text("Hello Hono");
});


