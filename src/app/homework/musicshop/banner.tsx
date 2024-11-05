export default function Banner() {
  return (
    <section
      className="relative bg-[url(https://wallpapercat.com/w/full/d/d/2/1169610-3840x2160-desktop-4k-musical-instruments-wallpaper-image.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div
        className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/0 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

      <div
        className="relative mx-auto max-w-screen px-4 py-32 sm:px-6 lg:flex lg:h-50 lg:items-center lg:px-12"
      >
        <div className="max-w-xl text-left">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Let us find your

            <strong className="block font-extrabold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl text-transparent sm:text-5xl">
               Instruments. 
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
            numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-gray-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-400 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-grey-600 shadow hover:text-grey-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
