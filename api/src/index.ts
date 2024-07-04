import { Hono } from "hono";
import {userRouter} from "./routes/user"
import {postRouter} from "./routes/post"
import { cors } from "hono/cors";

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
};
type Variables = {    
  userId:string,
  // prisma:any
}

const app = new Hono<{ Bindings: Bindings , Variables: Variables }>(); //env type should be defined in ts otherwise ts gives error
app.use("/*",cors())
app.route("/api/v1/user",userRouter)
app.route("/api/v1/post",postRouter)



app.get("/", (c) => {
  return c.text("Hello Hono!");
});




export default app;
