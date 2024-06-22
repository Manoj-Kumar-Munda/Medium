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
  try {
    const response = await verify(token, c.env.JWT_SECRET);
    if (response.id) {
      c.set("jwtPayload", response.id);
      await next();
    } else {
      c.status(403);
      return c.json({ error: "You are not logged in" });
    }
  } catch (error) {
    c.status(403);
    return c.json({ error: "You are not logged in" });
  }
});

//pagination
blogRouter.get("/all", async (c) => {
  console.log("hello world");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    console.log("hello");

    const blogs = await prisma.post.findMany();
    console.log("blogs: ", blogs);

    return c.json({
      blogs,
    });
  } catch (error) {
    c.status(500);
    return c.json({
      message: "Error while fetching data",
    });
  }
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const payload = c.get("jwtPayload");

  try {
    const blog = await prisma.post.create({
      data: {
        title: body?.title,
        content: body?.content,
        authorId: payload,
      },
    });

    return c.json(blog);
  } catch (error) {
    c.status(500);
    return c.json({
      message: "Error while creating blog",
    });
  }
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const updatedBlog = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body?.title,
        content: body?.content,
      },
    });
    return c.json(updatedBlog);
  } catch (error) {
    c.status(500);
    return c.json({
      message: "Error while fetching data",
    });
  }
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findFirst({
      where: {
        id,
      },
    });
    return c.json(blog);
  } catch (error) {
    c.status(500);
    return c.json({
      message: "Error while fetching data",
    });
  }
});
