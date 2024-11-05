import { revalidatePath } from 'next/cache'
import prisma from '@/../util/db'
import TodoItem from '@/components/TodoItem'


export default async function Todo() {
    // Create
    // const title = "My Test title "
    // await prisma.todo.create({ data: { title, done: false } })

    // Read
    const firstRow = await prisma.todo.findFirst()
    console.log("data: ", firstRow)

    const all = await prisma.todo.findMany()
    console.log("data: ", all)

    // Update
    // await prisma.todo.update({ where: { id: data.id }, data: { title:"New title", done: true } })

    // Delete
    // await prisma.todo.delete({ where: { id: data.id }} )

    const data = await prisma.todo.findMany()
    console.log("data: ", data)

    async function addTask(formData: FormData) {
        "use server"
        console.log("Input: ", formData.get("title"))
        const title = formData.get("title") as string
        await prisma.todo.create({ data: { title, done: true } })
        revalidatePath("/example/dbex")
    }

    async function deleteTask(id: string) {
        "use server"
        await prisma.todo.delete({ where: { id } })
        revalidatePath("/example/dbex")
    }

    async function toggleTask(id: string, done: boolean) {
        "use server"
        console.log(id, done)
        await prisma.todo.update({ where: { id }, data: { done } })
        revalidatePath("/example/dbex")
    }

    return (
        <main className='flex flex-col justify-center items-center w-screen h-screen bg-white text-black'>
            <h1>Simple DB</h1>

            <div>
                {data.map((item, index) => (
                    <TodoItem key={index}
                        index={index} id={item.id} title={item.title} done={item.done}
                        deleteTask={deleteTask}
                        toggleTask={toggleTask}
                    />
                ))
                }
            </div>

            <div>
                <form action={addTask}>
                    <input
                        className='border-2 border-black'
                        type="text" name="title" minLength={3} maxLength={20} />
                    <button type="submit">Add</button>
                </form>
            </div>

            <div className='flex flex-col gap-4 w-1/2 h-1/2 border-black border-2'>
                {all.map((data) => <div className={`text-xl ${data.done ? "text-green-500" : "text-red-500"}`} key={data.id}>{data.title} | {JSON.stringify(data.createdAt)} | {JSON.stringify(data.updatedAt)} </div>)}
            </div>
            <div>{JSON.stringify(firstRow)}</div>
        </main>
    );
}

