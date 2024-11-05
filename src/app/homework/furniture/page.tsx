import Image from "next/image";
import Script from "next/script";

export default function hw6() {
  return (
    (<div className="text-[#544D4D] bg-[#F6F2E0] flex flex-col">
      <header className="text-xl font-bold flex justify-between items-center p-4">
        <div className="flex items-center font-extrabold">
          <div className="h-5 mr-2">
            <Image
              src={"https://cdn-icons-png.flaticon.com/512/103/103719.png"}
              width={0}
              height={0}
              alt="Home"
              sizes="100%"
              style={{ width: 'auto', height: '1.25rem', marginRight: '0.5rem' }}
            />
          </div>
          <span>CoC</span>
        </div>
        <div className="hidden md:flex">
          <a className="uppercase cursor-pointer ml-8">Home</a>
          <a className="uppercase cursor-pointer ml-8">About</a>
          <a className="uppercase cursor-pointer ml-8">Contact</a>
        </div>
        <div className="md:hidden cursor-pointer" id="toggle-menu">
          <div className="w-8 h-0.5 bg-black mt-1"></div>
          <div className="w-8 h-0.5 bg-black mt-1"></div>
          <div className="w-8 h-0.5 bg-black mt-1"></div>
        </div>
      </header>
      <div className="absolute z-50 top-10 right-4 bg-[#F6F2E0] border-2 border-[#957979] p-4 flex flex-col" id="top-menu-box"> 
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
      </div>
      <main className="flex-1 flex flex-col">
        <hr className="bg-[#957979] h-px border-0"></hr>
        <div className="relative h-96 m-4 rounded-xl overflow-hidden">
          <div className="absolute inset-0 w-full h-full object-cover">
            <Image
              src={"https://octorate.com/wordpress/wp-content/uploads/2023/03/aparthotel-1.webp"}
              width={0}
              height={0}
              alt="background"
              sizes="auto"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-white/0">
            <div className="mt-6 md:mt-12 ml-6">
              <div className="relative">
                <h3 className="font-extrabold text-2xl text-yellow-500 absolute top-1 left-1 md:block hidden">Lorem ipsum dolor</h3>
                <h3 className="font-extrabold text-2xl relative">Lorem ipsum dolor</h3>
              </div>
              <div className="relative mt-4">
                <h1 className="font-extrabold text-4xl uppercase text-yellow-500 absolute top-1 left-1 md:block hidden">We are the best</h1>
                <h1 className="font-extrabold text-4xl uppercase relative">We are the best</h1>
              </div>
              <br></br>
              <p className="w-1/3 leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis labore odio magni minima suscipit, cum nostrum laudantium maiores aperiam fugit illum culpa. Asperiores!</p>
              <br></br>
              <button className="font-bold bg-[#544D4D] text-white border-none rounded-full px-8 py-2 text-base cursor-pointer">Join us now</button>
            </div>
          </div>
        </div>
        <hr className="bg-[#957979] h-px border-0"></hr>
        <div className="font-bold uppercase flex justify-around m-2">
          <div className="cursor-pointer flex-1 text-center">Service 1</div>
          <div className="cursor-pointer flex-1 text-center">Service 2</div>
          <div className="md:block hidden cursor-pointer flex-1 text-center">Service 3</div>
        </div>
        <hr className="bg-[#957979] h-px border-0"></hr>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 m-4">
          <Image
            src={"https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/j53hjuggwqvfiqnsww3n/header-photo"}
            width={0}
            height={0}
            alt="Image 1"
            sizes="auto"
            className="w-full h-60 md:h-80 rounded-xl object-cover"
          />
          <Image
            src={"https://images.squarespace-cdn.com/content/v1/5bb5c1c2ebfc7f543b399240/1539157482689-FWKQSIJ7LQHWWUPZIZTF/6.jpg?format=2500w"}
            width={0}
            height={0}
            alt="Image 2"
            sizes="auto"
            className="w-full h-60 md:h-80 rounded-xl object-cover"
          />
          <Image
            src={"https://e-luxuryhomes.com/wp-content/uploads/2024/03/mx4mskk9zeo-1.jpg"}
            width={0}
            height={0}
            alt="Image 3"
            sizes="auto"
            className="w-full h-60 md:h-80 rounded-xl object-cover"
          />
          <Image
            src={"https://home-n-garden.co.uk/wp-content/uploads/2024/06/balcony-open-air-1170x610.jpg"}
            width={0}
            height={0}
            alt="Image 4"
            sizes="auto"
            className="w-full h-60 md:h-80 rounded-xl object-cover"
          />
        </div>
        <hr className="bg-[#957979] h-px border-0"></hr>
      </main>
      <footer className="text-center p-4">
        <b>Lorem ipsum dolor sit amet</b>
        <br></br>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem atque ventatis voluptatibus ex dolore.</p>
        <br></br>
        <b>Copyright © All Right Reserved</b>
      </footer>
      <Script id="inline-script" strategy="afterInteractive">
        {`
          document.getElementById('toggle-menu').addEventListener('click', function() {
            var menu = document.getElementById('top-menu-box');
            menu.classList.toggle('hidden');
        });document.getElementById('toggle-menu').addEventListener('click', function() {
            var menu = document.getElementById('top-menu-box');
            menu.classList.toggle('hidden');
        });
        `}
      </Script>
    </div>)
  );
}
