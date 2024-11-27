import { NextResponse } from 'next/server'
import prisma from '@/../util/db'
import { z } from 'zod'

const guitarSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, "Name is required"),
    brand: z.string().min(1, "Brand is required"),
    price: z.number().min(0, "Price must be non-negative")
})

export async function GET() {
    const guitars = await prisma.guitar.findMany();
    return NextResponse.json(guitars);
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData()
        const guitarData = {
            id: formData.get("id") as string || crypto.randomUUID(),
            name: formData.get("name") as string,
            brand: formData.get("brand") as string,
            price: Number(formData.get("price"))
        }

        // Validate the data
        const validatedData = guitarSchema.parse(guitarData)

        await prisma.guitar.create({ data: validatedData })
        return NextResponse.json({ message: "Item added successfully" })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: error.errors }, { status: 400 })
        }
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 })
    }

    await prisma.guitar.delete({ where: { id } })
    return NextResponse.json({ message: "Item deleted successfully" })
}

export async function PUT(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id')

        if (!id) {
            return NextResponse.json({ message: "ID is required" }, { status: 400 })
        }

        const formData = await request.formData()
        const rawPrice = formData.get('price')
        const price = Number(rawPrice)
        
        // Check if price is valid number
        if (isNaN(price)) {
            return NextResponse.json({ message: "Invalid price format" }, { status: 400 })
        }

        const guitarData = {
            name: formData.get('name') as string,
            brand: formData.get('brand') as string,
            price: price
        }

        // Validate the update data
        const validatedData = guitarSchema.omit({ id: true }).parse(guitarData)

        const updatedGuitar = await prisma.guitar.update({
            where: { id },
            data: validatedData
        })

        return NextResponse.json(updatedGuitar)
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: error.errors }, { status: 400 })
        }
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}