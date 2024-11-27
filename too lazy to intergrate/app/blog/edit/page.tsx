"use client"
import { useFormState } from "react-dom"
import { redirect } from "next/navigation"
import Link from "next/link"
import SubmitButton from "../_component/SubmitButton"
import { style } from "../constants/style"
import updatePost from "../_actions/updatePost"
import { getSession } from "@/utils/loginUser"
import { useEffect, useState } from "react"

type userType = {
  id: number
  name: string
  email: string
}

export default function Edit({ searchParams }: { searchParams: { [key: string]: string } }) {
  const { id, subject, detail } = searchParams;
  const [data, action] = useFormState(updatePost, {})
  const [user, getUser] = useState<userType>()

  console.log("Id: ", id, subject, detail)
  
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getSession()
      getUser(user)
    }
    fetchUser()
  }, [])

  if (data.message) {
    redirect("/blog")
  }

  if (!user) {
    return <>Unauthorized</>
  }

  if(user.id !== parseInt(id)) {
    return <>Unauthorized</>
  }

  return (
    <>
      Edit
      <hr />
      <form action={action} className="mt-4">
        <div className="flex flex-col mb-2">
          <label htmlFor="subject">Subject</label>
          <input className={style} type="subject" name="subject" id="subject" defaultValue={subject} required />
          {data.error?.subject && <div className="text-red-600">{data.error?.subject[0]}</div>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="detail">Detail</label>
          <textarea className={style} name="detail" id="detail" defaultValue={detail} required />
          {data.error?.detail && <div className="text-red-600">{data.error?.detail[0]}</div>}
        </div>
        <div><input type="hidden" name="id" id="id" value={id} /></div>
        <div>
          {data.error?.message && <div className="text-red-600">{data.error?.message}</div>}
        </div>
        <div>
          {data.message ? <p>{data.message}</p> : <SubmitButton label="Update" />}
        </div>
      </form>
      <br /><hr />
      <Link href="/blog">Back</Link>
    </>
  )
} 