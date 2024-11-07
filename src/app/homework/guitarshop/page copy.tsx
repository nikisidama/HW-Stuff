import { revalidatePath } from 'next/cache'
import prisma from '@/../util/db'
import Guitar from './guitar'

export default async function page() {
  const data = await prisma.guitar.findMany()

  async function addItem(formData: FormData) {
    "use server"
    const id = formData.get("id") as string || crypto.randomUUID()
    const name = formData.get("name") as string || "NAME"
    const brand = formData.get("brand") as string || "BRAND"
    const price = parseInt(formData.get("price") as string || "0")
    await prisma.guitar.create({ data: { id, name, brand, price } })
    revalidatePath("/homework/guitarshop")
  }

  async function deleteItem(id: string) {
    "use server"
    await prisma.guitar.delete({ where: { id } })
    revalidatePath("/homework/guitarshop")
  }

  async function editItem(id: string, formData: FormData) {
    "use server"
    const name = formData.get("name") as string || "NAME"
    const brand = formData.get("brand") as string || "BRAND"
    const price = parseInt(formData.get("price") as string || "0")
    await prisma.guitar.update({ where: { id }, data: { name, brand, price } })
    revalidatePath("/homework/guitarshop")
  }

  return (<>
    <header className="bg-gray-800 text-white p-4">
      <h1>Guitar Shop</h1>
    </header>
    <main className="bg-white w-full h-full text-black p-4">
      <h2>Guitars</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Guitar id={item.id} name={item.name} brand={item.brand} price={item.price} deleteItem={deleteItem} editItem={editItem} />
          </li>
        ))}
      </ul>

      <div className="w-full h-full flex justify-center items-center text-black z-10">
        <form action={addItem} className='flex flex-col gap-2'>
          <label htmlFor="id">ID</label>
          <input type="text" name="id" id="id" autoComplete='off' className='border-2 border-gray-500 rounded-md px-2'/>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" autoComplete='off' className='border-2 border-gray-500 rounded-md px-2'/>
          <label htmlFor="brand">Brand</label>
          <input type="text" name="brand" id="brand" autoComplete='off' className='border-2 border-gray-500 rounded-md px-2'/>
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" autoComplete='off' className='border-2 border-gray-500 rounded-md px-2'/>
          <button type="submit">Edit</button>
        </form>
      </div>
    </main>
    <footer className="bg-gray-800 text-white p-4">
      <p>Copyright 2024</p>
    </footer>
  </>)
}