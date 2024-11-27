import { Navbar } from "./_component/Navbar";


export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <>
        <main>
            <Navbar />
            {children}
        </main>
    </>
}
