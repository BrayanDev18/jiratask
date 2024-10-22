import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { loginFormSchema, registerFormSchema } from "../../../lib/formSchemas";

const app = new Hono()
  .post("/login", zValidator("json", loginFormSchema), async (c) => {
    const { email, password } = c.req.valid("json")
    console.log(email, password);

    return c.json({ email, password })
  })
  .post("/register", zValidator("json", registerFormSchema), async (c) => {
    const { firstName, lastName, email, password } = c.req.valid("json")

    return c.json({ firstName, lastName, email, password })
  })

export default app