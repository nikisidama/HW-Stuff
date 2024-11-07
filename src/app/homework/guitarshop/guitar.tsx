"use client"
import { useState } from 'react'

type GuitarType = {
    id: string
    name: string
    brand: string
    price: number
    deleteItem: (id: string) => void
    editItem: (id: string, formData: FormData) => void
}

export default function Guitar({ id, name, brand, price, deleteItem, editItem }: GuitarType) {
    const [isEditing, setIsEditing] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        editItem(id, formData)
        setIsEditing(false)
    }

    if (isEditing) {
        return (
            <form onSubmit={handleSubmit} className="flex items-center gap-1">
                <span className="border-2 border-gray-500 rounded-md px-2">{id}</span>
                <input 
                    name="name"
                    defaultValue={name}
                    className="border-2 border-red-400 rounded-md px-2"
                />
                <input 
                    name="brand"
                    defaultValue={brand}
                    className="border-2 border-blue-400 rounded-md px-2"
                />
                <input 
                    name="price"
                    type="number"
                    defaultValue={price}
                    className="border-2 border-green-400 rounded-md px-2"
                />
                <span className="border-2 border-gray-500 rounded-md px-2">
                    <button type="submit">💾</button>
                    |
                    <button type="button" onClick={() => setIsEditing(false)}>❌</button>
                </span>
            </form>
        )
    }

    return (
        <div className="flex items-center gap-1">
            <span className="border-2 border-gray-500 rounded-md px-2">{id}</span>
            <span className="border-2 border-red-400 rounded-md px-2">🎸 - {name}</span>
            <span className="border-2 border-blue-400 rounded-md px-2">{brand}</span>
            <span className="border-2 border-green-400 rounded-md px-2">{price} $</span>
            <span className="border-2 border-gray-500 rounded-md px-2">
                <button onClick={() => setIsEditing(true)}>📝</button>
                |
                <button onClick={() => deleteItem(id)}>🗑️</button>
            </span>
        </div>
    )
}
