export default function Main() {
    // Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur rem suscipit nemo. Repudiandae magni, fuga, mollitia aliquid, pariatur nulla recusandae necessitatibus ad itaque ea aut eveniet repellat voluptate exercitationem.
    return (<>
        <div className="absolute opacity-100 top-0 left-0 h-full w-full z-40 bg-black forgor💀">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-9xl">You Forgot something..</h1>
                <span className="mt-44">HINT: next.config.mjs, tailwind.config.ts</span>
                <span className="animate-shake">
                    <a href="/" className="animate-rainbow">More Information</a>
                </span>
            </div>
        </div>
        <div className="absolute opacity-100 top-0 left-0 h-full w-full z-50 bg-black animate-fadeOut pointer-events-none"></div>
    </>
    )
}