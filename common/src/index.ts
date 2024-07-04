import z from "zod"

export const signupinput = z.object({
    email:z.string().email(),
    password:z.string(),
    name:z.string().optional()
})

export const signininput = z.object({
    email:z.string().email(),
    password:z.string(),
})

export const createpostinput = z.object({
    title:z.string(),
    content:z.string(),
    published:z.boolean().optional().default(false),
})

export const updatepostinput = z.object({
    title:z.string(),
    content:z.string(),
    id:z.string()
})

export type Signupinput = z.infer<typeof signupinput>
export type Signininput = z.infer<typeof signininput>
export type Createpostinput = z.infer<typeof createpostinput>
export type Updatepostinput = z.infer<typeof updatepostinput>
