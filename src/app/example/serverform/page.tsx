"use client"
import { useFormState, useFormStatus } from "react-dom"
import createMessage from "./_action/createMessage"

const formStyle = 'border-white bg-transparent text-white border-2 p-4 m-2 rounded-lg'

function SubmitButton() {
    const { pending } = useFormStatus() // pending = true means still process on the server

    return (<button
        disabled={pending}
        type="submit"
        className={formStyle}
    >
        Submit{pending && "..."}
    </button>
    )
}

export default function page() {
    const [state, action] = useFormState(createMessage, null)

    return (<>
        <main className='flex flex-col justify-center items-center w-full h-screen'> 
            <div className="text-4xl">Server form</div>
            <div>{ JSON.stringify(state)}</div>
            <form action={action} className='flex flex-col justify-center items-center text-lg'>
                <label htmlFor="message">Message</label>
                <input type="text" name="message" minLength={3} maxLength={10} className={formStyle} />
                <br/>
                <label htmlFor="email">email</label>
                <input type="text" name="email" className={formStyle} />
                <br/>
                <SubmitButton/>
            </form>
        </main>
    </>
    )
}