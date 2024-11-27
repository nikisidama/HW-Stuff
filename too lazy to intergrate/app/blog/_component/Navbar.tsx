import { getSession } from "@/utils/loginUser"
import Link from "next/link"
import Logout from "./Logout"

export const Navbar = async () => {
    const user = await getSession()

    return (
        <header>
            <nav className="flex justify-between mb-4">
                <Link href={"/blog"}>Blog</Link>
                <div>
                    {user ?
                        <>Hello: {user.name} | <Logout /> </> :
                        <>
                            <Link className="mr-2" href="/blog/login">Login</Link>|
                            <Link className="ml-2" href="/blog/register">Register</Link>
                        </>}
                </div>
            </nav>
        </header>
    )
}
