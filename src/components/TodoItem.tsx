'use client'

import { useState } from "react"

type TodoType = {
    index: number
    id: string
    title: string
    done: boolean
    deleteTask: (id: string) => void
    toggleTask: (id: string, done: boolean) => void
    editTask: (id: string, title: string) => void
}

export default function TodoItem({ index, id, title, done, deleteTask, toggleTask, editTask }: TodoType) {
    const [isEditing, setIsEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    function handleEdit() {
        editTask(id, newTitle)
        setIsEditing(false)
    }

    return (
        <div className='flex items-center justify-between border-2 border-black p-4 m-1 relative'>
            <div className='flex items-center gap-4'>
                <span>
                    {index + 1}
                </span>
                <span className='text-xl'>
                    {title}
                </span>
                <span className={`${done ? "text-green-500" : "text-red-500"} text-xl`}>
                    {done ? "Done" : "Not Done"}
                </span>
                {isEditing && (
                    <div className="absolute flex items-center pl-4 gap-2 right-0 bg-white/20 backdrop-blur-sm w-full h-full">
                        <span className={`${done ? "text-green-500" : "text-red-500"} text-xl font-bold w-10`}>{done ? '✅' : '❌'}</span>
                        <input type="text" defaultValue={title} onChange={e => setNewTitle(e.target.value)} />
                        <button className="border-2 border-black m-2 px-2 bg-green-500" onClick={handleEdit}>✅</button>
                        <button className="border-2 border-black m-2 px-2 bg-red-500" onClick={() => setIsEditing(false)}>✖️</button>
                    </div>
                )}
            </div>
            <div className="flex items-center gap-2 z-10">
                <div className="px-2 border-2 border-black bg-white">
                    <input id={id}
                        type="checkbox"
                        className="cursor-pointer peer accent-green-500"
                        defaultChecked={done}
                        onChange={e => toggleTask(id, e.target.checked)}
                    />
                </div>
                <button onClick={() => setIsEditing(!isEditing)} className='border-2 border-black px-2 bg-yellow-500'>📝</button>
                <button onClick={() => deleteTask(id)} className='border-2 border-black px-2 bg-red-500'>🗑️</button>
            </div>
        </div>
    )
}