import Logo from "./musicShop.webp"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-gray-900">
      <div className="mx-auto flex h-16 max-w-screen-x items-center gap-8 px-1 sm:px-6 lg:px-8">
        <a className="block" href="/hw8">
          <span className="sr-only">Home</span>
          <Image
            src={Logo}
            alt="Logo"
            className="w-28"
          />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <div className="flex items-center gap-6 text-sm">
              <a className="text-white transition hover:text-white/75" href="#"> Products </a>
              <a className="text-white transition hover:text-white/75" href="#"> Blog </a>
              <a className="text-white transition hover:text-white/75" href="#"> About </a>
            </div>
          </nav>

          <input
            type="text"
            id="Search"
            placeholder="Search ..."
            className="w-full mx-36 rounded-md border-gray-700 border-2 outline-none text-white bg-transparent py-2.5 pe-10 shadow-sm sm:text-sm"
          />

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-gray-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700"
                href="#"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:text-gray-600/75 sm:block"
                href="#"
              >
                Register
              </a>
            </div>

            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
