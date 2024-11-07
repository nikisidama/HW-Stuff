"use client"

import { useState, useEffect } from 'react'
import Guitar from './guitar'
import Loading from '@/components/Loading'

type GuitarType = {
  id: string
  name: string
  brand: string
  price: number
}

export default function page() {
  const [data, setData] = useState<GuitarType[]>([])
  const [menu, setMenu] = useState<boolean>(true)

  const refreshData = async () => {
    const response = await fetch('/api/musicshop')
    const data = await response.json()
    setData(data)
  }

  useEffect(() => { refreshData() }, [])

  async function handleAddItem(formData: FormData) {
    const defaultValues = {
        id: crypto.randomUUID(),
        name: 'New Guitar',
        brand: 'Unknown Brand',
        price: 0
    }

    const enhancedFormData = new FormData()
    
    enhancedFormData.append('id', formData.get('id')?.toString() || defaultValues.id)
    enhancedFormData.append('name', formData.get('name')?.toString() || defaultValues.name)
    enhancedFormData.append('brand', formData.get('brand')?.toString() || defaultValues.brand)
    enhancedFormData.append('price', formData.get('price')?.toString() || defaultValues.price.toString())

    const response = await fetch('/api/musicshop', {
        method: 'POST',
        body: enhancedFormData
    })
    
    if (response.ok) {
        refreshData()
    } else {
        console.error('Failed to add item')
    }
}

  async function handleDeleteItem(id: string) {
    const response = await fetch(`/api/musicshop?id=${id}`, { method: 'DELETE' })
    if (response.ok) refreshData()
  }

  async function handleEditItem(id: string, formData: FormData) {
    const response = await fetch(`/api/musicshop?id=${id}`, {
      method: 'PUT',
      body: formData
    })
    if (response.ok) refreshData()
  }

  if (!data) return <Loading />

  return (<>
    <header className="bg-gray-800 text-white p-4">
      <h1>Guitar Shop</h1>
    </header>
    <main className="bg-white w-full h-full text-black p-4">
      <h2>Guitars</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <Guitar id={item.id} name={item.name} brand={item.brand} price={item.price} deleteItem={handleDeleteItem} editItem={handleEditItem} />
          </li>
        ))}
      </ul>

      <div className={`w-fit h-fit flex justify-center items-center text-black z-10 bottom-0 right-0 bg-white p-4 border-2 border-gray-500 rounded-md ${menu ? 'absolute' : 'hidden'}`}>
        <form action={handleAddItem} className='flex flex-col gap-2'>
          <label htmlFor="id">ID</label>
          <input type="text" name="id" id="id" autoComplete='off' className='border-2 border-gray-500 rounded-md px-2' />
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" autoComplete='off' className='border-2 border-gray-500 rounded-md px-2' />
          <label htmlFor="brand">Brand</label>
          <input type="text" name="brand" id="brand" autoComplete='off' className='border-2 border-gray-500 rounded-md px-2' />
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" autoComplete='off' className='border-2 border-gray-500 rounded-md px-2' />
          <button type="submit" className='bg-white text-black p-4 border-2 border-gray-500 rounded-md'>Add Guitar</button>
          <button onClick={(e) => {e.preventDefault(); setMenu(false)}} className='bg-white text-black p-4 border-2 border-gray-500 rounded-md'>Close</button>
        </form>
      </div>
    </main>
    <button onClick={() => setMenu(true)} className='fixed bottom-0 right-0 bg-white text-black p-4 border-2 border-gray-500 rounded-md'>Add Guitar</button>
    <footer className="bg-gray-800 text-white p-4">
      <p>Copyright 2024</p>
    </footer>
  </>)
}