import { NextResponse } from 'next/server'
import prisma from '@/../util/db'

export async function GET() {
    const guitars = await prisma.guitar.findMany();
    return NextResponse.json(guitars);
}

export async function POST(request: Request) {
    const formData = await request.formData()
    const id = formData.get("id") as string || crypto.randomUUID()
    const name = formData.get("name") as string || "NAME"
    const brand = formData.get("brand") as string || "BRAND"
    const price = parseInt(formData.get("price") as string || "0")
    await prisma.guitar.create({ data: { id, name, brand, price } })
    return NextResponse.json({ message: "Item added successfully" })
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
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 })
    }

    const formData = await request.formData()
    const name = formData.get('name') as string
    const brand = formData.get('brand') as string
    const price = Number(formData.get('price'))

    const updatedGuitar = await prisma.guitar.update({
        where: { id },
        data: {
            name,
            brand,
            price
        }
    })

    return NextResponse.json(updatedGuitar)
}