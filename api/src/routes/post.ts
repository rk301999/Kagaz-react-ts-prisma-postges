import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import {createpostinput,updatepostinput} from "@rk301999/medium-common"

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
};
type Variables = {
  userId: string;
  // prisma:any
};

const postRouter = new Hono<{ Bindings: Bindings; Variables: Variables }>();

postRouter.use("/*", async (c, next) => {
  const id = c.req.header("Authorization") || "";
  console.log("id",id);
  
  if (!id) {
    c.status(401);
    return c.json({ error: "Unauthorized user" });
  }

  const token = id.split(" ")[1];
  const verifyJWT = await verify(token, c.env.JWT_SECRET);

  if (!verifyJWT) {
    c.status(401);
    return c.json({ error: "unauthorized user" });
  }
  //@ts-ignore
  c.set("userId", verifyJWT.id);
  await next();
});

postRouter.post("/", async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

    const body = await c.req.json();
    const {success} = createpostinput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json("input validation failed ")
      }
    const userId = c.get("userId");
    const blog = await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            published:body.published,
            authorId:userId
        }
      })

  c.status(200)
  return c.json({id:blog.id});
});

postRouter.put("/", async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

    const body = await c.req.json();
    const {success} = updatepostinput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json("input validation failed ")
      }
    const post= await prisma.post.update({
        where:{
            id:body.id,
        },
        data:{
            title:body.title,
            content:body.content,
        }
    })
    c.status(200)
    return c.json({"message":"updated",id:post.id})
});

postRouter.get("/bulk", async(c) => {
    
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
      const post = await prisma.post.findMany({
        select:{
          id:true,
          title:true,
          content:true,
          author:{
            select:{
              name:true,
            }
          }
        }
      });
      
      c.status(200)
      return c.json(post);
    } catch (error) {
      c.status(400)
      return c.json("Error while fetching data")
    }
  });

postRouter.get("/:id", async(c) => {
  const { id } = c.req.param();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const post = await prisma.post.findFirst({
      where:{
          id:id
      },
      select:{
        id:true,
        title:true,
        content:true,
        author:{
          select:{
            name:true,
          }
        }
      }
    })
    if(!post){
      c.status(400)
      return c.json("user not found")
    }
    c.status(200)
    return c.json(post);
  } catch (error) {
    c.status(400)
    return c.json("Error while fetching data")
  }
});

//add pagination

export { postRouter };
