import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("Authorization");
  const token = header?.split(" ")[1] || "";
  const response = await verify(token, c.env.JWT_SECRET);
  if (response.id) {
    c.set("jwtPayload", response.id);
    await next();
  } else {
    c.status(403);
    return c.json({ error: "Unauthorized" });
  }
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const payload = c.get("jwtPayload");

  const blog = await prisma.post.create({
    data: {
      title: body?.title,
      content: body?.content,
      authorId: payload
    },
  });
  
  return c.json(blog);
});
blogRouter.put("/", (c) => {
  return c.text("Hello Hono");
});
blogRouter.get("/:id", (c) => {
  return c.text("Hello Hono");
});
