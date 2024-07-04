import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import {signupinput,signininput} from "@rk301999/medium-common"

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
};
const userRouter = new Hono<{ Bindings: Bindings }>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const {success} = signupinput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json("invalid user input");
  }

  try {
    const res = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });
    const token = await sign({ id: res.id }, c.env.JWT_SECRET);
    c.status(200);
    return c.json({ message: "user created successfully", token: token });
  } catch (error) {
    c.status(403);
    return c.json({ error: "error while signing up" });
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const {success} = signininput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json("input validation failed ")
  }
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });
  if (!user) {
    c.status(403);
    return c.json({ error: "user not found" });
  }
  const token = await sign({ id: user.id }, c.env.JWT_SECRET);
  c.status(200);
  return c.json({ message: "successfully logged in", token: token });
});

export { userRouter };
