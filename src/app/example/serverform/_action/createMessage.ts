"use server"

import { z } from "zod"

const schema = z.object({
    message: z.string({
        invalid_type_error: 'Invalid',
    }).min(1).max(10),
    email: z.string().email(),
})

const wait = (delay: number) => new Promise(resolve => setTimeout(resolve, delay))

export default async function createMessage(previous: unknown, formData: FormData) {
    const result = schema.safeParse({
        message: formData.get('message'),
        email: formData.get('email'),
    })

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        }
    }

    const { message, email } = result.data
    console.log("Data: ", result.data)

    console.log("Before processing")
    await wait(500)
    console.log("Message: ", message)
    return `${message}: ${email}`
}
