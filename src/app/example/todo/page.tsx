'use client'

import { useState } from "react";

export default function todo() {
    // const [item, setItem] = useState({ id: 0, name: '', time: 0 })
    const [name, setName] = useState('task')
    const [time, setTime] = useState(0)
    const [tasks, setTasks] = useState([
        { id: 1, name: "Eat", time: 10 },
        { id: 2, name: "Sleep", time: 17 },
        { id: 3, name: "Repeat", time: 23 },
    ])
    const [editId, setEditId] = useState(-1);

    function makeList(items: any[]) {
        return items.map((item) => (
            <li key={item.id}>
                {item.id} {item.name} - {item.time}
                <button
                    onClick={() => { deleteTask(item.id) }}
                    className="ml-3 font-bold text-red-500"
                >
                    X
                </button>
                <button
                    onClick={() => {
                        editTask(editId === -1 ? item.id : -1);
                    }}
                    className="ml-3 font-bold text-green-500"
                >
                    E
                </button>
            </li>
        ))
    }

    function addTask() {
        // setTasks([...tasks, { id: tasks[tasks.length - 1].id + 1, name, time, }]);
        const id = !tasks.length ? 1 : tasks[tasks.length - 1].id + 1;
        setTasks([...tasks, { id, name, time, }]);
    }

    function deleteTask(id: number) {
        const temp = tasks.filter((item) => item.id !== id);
        setTasks([...temp]);
        setEditId(-1);
    }

    function editTask(id: number) {
        const index = tasks.findIndex((item) => item.id === id);
        setEditId(index);
        if (index !== -1) {
            setName(tasks[index].name);
            setTime(tasks[index].time);
        }
    }

    function updateTask() {
        const temp = tasks;
        temp[editId].name = name;
        temp[editId].time = time;
        setTasks([...temp]);
        setEditId(-1);
    }

    return <>
        <div className="flex flex-col justify-center items-center bg-black text-white h-screen">
            <h1>TO DO LIST</h1>
            <div className="flex flex-col justify-center items-center">
                <input
                    type="text"
                    value={name}
                    className="bg-black border-2 border-white p-2 m-2"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    value={time}
                    className="bg-black border-2 border-white p-2 m-2"
                    onChange={(e) => setTime(+e.target.value)} // onChange={(e) => setTime(parseInt(e.target.value))}
                />
                <div className={`gap-4 ${editId === -1 ? '' : "hidden"}`}>
                    <button onClick={addTask} className="border-2 border-white">
                        Add task
                    </button>
                </div>
                <div className={`gap-4 ${editId === -1 ? "hidden" : "flex"}`}>
                    <button onClick={updateTask} className="border-2 border-white">
                        Update task
                    </button>
                    <button onClick={() => { setEditId(-1); }} className="border-2 border-white">
                        Cancel
                    </button>
                </div>
            </div>
            <ol className="mt-10">
                {makeList(tasks)}
            </ol>
        </div>
    </>
}