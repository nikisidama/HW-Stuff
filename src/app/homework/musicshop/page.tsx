'use client'
import { useState } from "react";

import Products from "./product";
import Header from "./header";
import Footer from "./footer";
import Banner from "./banner";
import CategoryList from "./catagory";
import PageNav from "./pageNav";

// export const metadata = {
//     title: 'MUSIC SHOP - All products',
//     description: 'music',
// };

const categories = [
    {
        name: "String",
        subcategories: ["Electric Guitars", "Acoustic Guitars", "Violins", "Cellos", "Bass Guitars", "Others"]
    },
    {
        name: "Percussion",
        subcategories: ["Drum Kits", "Cymbals", "Congas", "Bongos", "Tambourines", "Xylophones", "Others"]
    },
    {
        name: "Keyboard",
        subcategories: ["Pianos", "Keyboards", "Synthesizers", "Organs", "Accordions"]
    },
    {
        name: "Wind",
        subcategories: ["Flutes", "Clarinets", "Saxophones", "Trumpets", "Trombones", "Others"]
    },
    {
        name: "Brass",
        subcategories: ["Tubas", "Cornets", "Euphoniums", "Bugles"]
    }
];


export default function pro2() {

    const [product, setProduct] = useState([
        {
            name: "Ibanez PF15ECE",
            price: 500,
            image_url: "https://www.musicarms.net/wp-content/uploads/2019/03/Face-cover-Ibanez-PF15ECE-1.jpg",
            like: 61,
            is_new: false,
        },
        {
            name: "Fender American Professional Stratocaster",
            price: 1200,
            image_url: "https://www.bigtone.in.th/wp-content/uploads/2020/11/FD-AM-PRO-II-STRAT-3TS-MN-01.jpg",
            like: 22,
            is_new: true,
        },
        {
            name: "Yamaha CVP-601",
            price: 8000,
            image_url: "https://static.wixstatic.com/media/0ebe00_6999c7a3a4d1479a976770c2398e5b7d~mv2.jpg/v1/fill/w_735,h_735,al_c,q_85,enc_auto/0ebe00_6999c7a3a4d1479a976770c2398e5b7d~mv2.jpg",
            like: 25,
            is_new: false,
        },
        {
            name: "Roland TD-17KVX",
            price: 750,
            image_url: "https://www.theeramusic.com/wp-content/uploads/2021/10/td-17kvx2_angle_gal.png",
            like: 37,
            is_new: true,
        },
        {
            name: "Gibson Les Paul Standard",
            price: 1500,
            image_url: "https://www.musicconcept.co.th/wp-content/uploads/2023/11/GS-STD50-LP-HCB-01.jpg",
            like: 28,
            is_new: false,
        },
        {
            name: "Yamaha YAS-280",
            price: 600,
            image_url: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_27/279389/18649417_800.jpg",
            like: 34,
            is_new: true,
        },
        {
            name: "Roland JX-3P",
            price: 300,
            image_url: "https://rvb-img.reverb.com/image/upload/s--Vce3GpHC--/a_exif,c_thumb,f_auto,fl_progressive,g_south,h_296,q_auto:eco,w_296/v1473454687/sgyljkjgilczspy6ywxp.jpg",
            like: 52,
            is_new: false,
        },
        {
            name: "Steinway & Sons Model D",
            price: 120000,
            image_url: "https://image.invaluable.com/housePhotos/neworleansauction/98/738998/H0122-L321760806_original.jpg",
            like: 45,
            is_new: false,
        },
        {
            name: "Pearl Drums Midtown",
            price: 800,
            image_url: "https://skymusic.com.au/cdn/shop/files/pearl-midtown-orange-crush_5000x.jpg?v=1692856090",
            like: 35,
            is_new: true,
        },
        {
            name: "Hohner Special 20",
            price: 100,
            image_url: "https://down-th.img.susercontent.com/file/sg-11134201-22090-ks2pvg3ywxhv14",
            like: 89,
            is_new: false,
        },
        {
            name: "Korg Kronos 2",
            price: 3500,
            image_url: "https://www.bigtone.in.th/wp-content/uploads/2018/01/Kronos61-large.jpg",
            like: 44,
            is_new: true,
        },
        {
            name: "Martin D-28",
            price: 2900,
            image_url: "https://rvb-img.reverb.com/image/upload/s---goet5lB--/t_card-square/v1679936023/trorkw8pdg3jivvjf2di.png",
            like: 60,
            is_new: false,
        },
        {
            name: "Ludwig Black Beauty Snare Drum",
            price: 700,
            image_url: "https://sc1.musik-produktiv.com/pic-010075217l/ludwig-black-beauty-lb417bt-14-x-6-5-with-brass-hardware.jpg",
            like: 69,
            is_new: true,
        },
        {
            name: "Moog Subsequent 37",
            price: 1700,
            image_url: "https://proplugin.com/wp-content/uploads/2024/08/Moog-Subsequent-37-7.webp",
            like: 31,
            is_new: false,
        },
        {
            name: "Buffet Crampon R13 Clarinet",
            price: 3900,
            image_url: "https://clarinetandflute.com/cdn/shop/products/buffetr13_bebd7c17-e969-41ee-9fe2-b8ea46c89122.jpg?v=1532429087",
            like: 24,
            is_new: true,
        },
        {
            name: "Taylor 814ce",
            price: 3300,
            image_url: "https://m.media-amazon.com/images/I/61YmFw-tskL.jpg",
            like: 59,
            is_new: false,
        },
        {
            name: "Mapex Armory Drum Set",
            price: 950,
            image_url: "https://s3.amazonaws.com/images.static.steveweissmusic.com/products/images/uploads/1144507_52316_popup.jpg",
            like: 25,
            is_new: true,
        },
        {
            name: "Yamaha YTR-2330 Trumpet",
            price: 1300,
            image_url: "https://www.saxandwoodwind.com.au/DesktopModules/Revindex.Dnn.RevindexStorefront/Portals/99/Gallery/77fdf62a-8754-422d-8fdc-5e5069aab138.jpg",
            like: 26,
            is_new: false,
        },
        {
            name: "Nord Stage 3",
            price: 4000,
            image_url: "https://moogaudio.com/cdn/shop/products/clavianordstage3compact_1024x.jpg?v=1622826884",
            like: 43,
            is_new: true,
        },
        {
            name: "Fender Precision Bass",
            price: 1800,
            image_url: "https://www.bigtone.in.th/wp-content/uploads/2018/11/FD-PLY-P-Bass-PF-3TS-1.jpg",
            like: 51,
            is_new: false,
        },
    ]);

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image_url, setImage] = useState('');
    const [like, setLike] = useState(0);
    const [is_new, setIsNew] = useState(false);
    const [editing, setEdit] = useState(false);
    const [edid, setEdId] = useState(0);

    function addProduct() {
        setProduct([...product, {
            name: name || "Produck",
            price: price || 0,
            image_url: image_url || "https://pinoyballers.com/wp-content/uploads/2022/02/45406445-300x300.jpg",
            like: like || 0,
            is_new: is_new || false
        }])
    }

    function removeProduct(index: number) {
        const temp = product.filter((_, i) => i !== index);
        setProduct(temp);
        setEdit(false);
    }

    function editProduct(index: number) {
        const temp = product.map((instrument, i) =>
            i === index ? { ...instrument, name, price, image_url, like, is_new } : instrument
        );
        setProduct(temp);
        setEdit(false);
        setName('');
        setPrice(0);
        setImage('');
        setLike(0);
        setIsNew(false);
    }

    return (
        <>
            <Header />
            <main>
                <Banner />
                <div className="p-4 flex items-center justify-center gap-8">
                    <div className="relative w-1/2">
                        <label htmlFor="Search" className="sr-only"> Search </label>

                        <input
                            type="text"
                            id="Search"
                            placeholder="Search for..."
                            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                        />

                        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                            <button type="button" className="text-gray-600 hover:text-gray-700">
                                <span className="sr-only">Search</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </button>
                        </span>
                    </div>
                    <div className="relative">
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                            >
                                <span className="text-sm font-medium"> Availability </span>

                                <span className="transition group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>

                            <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                                <div className="w-96 rounded border border-gray-200 bg-white">
                                    <header className="flex items-center justify-between p-4">
                                        <span className="text-sm text-gray-700"> 0 Selected </span>

                                        <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                            Reset
                                        </button>
                                    </header>

                                    <ul className="space-y-1 border-t border-gray-200 p-4">
                                        <li>
                                            <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                                <input type="checkbox" id="FilterInStock" className="size-5 rounded border-gray-300" />

                                                <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                                            </label>
                                        </li>

                                        <li>
                                            <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                                <input type="checkbox" id="FilterPreOrder" className="size-5 rounded border-gray-300" />

                                                <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                                            </label>
                                        </li>

                                        <li>
                                            <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    id="FilterOutOfStock"
                                                    className="size-5 rounded border-gray-300"
                                                />

                                                <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className="relative">
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                            >
                                <span className="text-sm font-medium"> Price </span>

                                <span className="transition group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>

                            <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                                <div className="w-96 rounded border border-gray-200 bg-white">
                                    <header className="flex items-center justify-between p-4">
                                        <span className="text-sm text-gray-700"> The highest price is $600 </span>

                                        <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                            Reset
                                        </button>
                                    </header>

                                    <div className="border-t border-gray-200 p-4">
                                        <div className="flex justify-between gap-4">
                                            <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                                <span className="text-sm text-gray-600">$</span>

                                                <input
                                                    type="number"
                                                    id="FilterPriceFrom"
                                                    placeholder="From"
                                                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                />
                                            </label>

                                            <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                                <span className="text-sm text-gray-600">$</span>

                                                <input
                                                    type="number"
                                                    id="FilterPriceTo"
                                                    placeholder="To"
                                                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-2">
                    <CategoryList categories={categories} />
                    <div className="relative flex gap-4 flex-wrap m-1 p-4 px-6 rounded-lg bg-gray-200 lg:col-span-9">
                        {product.map((item, index) => (
                            <Products
                                key={index}
                                name={item.name}
                                price={item.price}
                                image={item.image_url}
                                like={item.like}
                                isNew={item.is_new}
                                link={`/hw8/${index}?name=${item.name.replace(/\s+/g, '-')}&price=${item.price}&image_url=${item.image_url}&like=${item.like}&is_new=${item.is_new}`}
                                onEdit={() => {
                                    if (!editing) {
                                        setEdit(true);
                                        setEdId(index);
                                        setName(item.name);
                                        setPrice(item.price);
                                        setImage(item.image_url);
                                        setLike(item.like);
                                        setIsNew(item.is_new);
                                    } else {
                                        setEdit(false);
                                        setName('');
                                        setPrice(0);
                                        setImage('');
                                        setLike(0);
                                        setIsNew(false);
                                    }
                                }}
                                onDelete={() => removeProduct(index)}
                            />))}
                    </div>
                    <PageNav />
                </div>
            </main>
            <Footer />
            <div>
                <details className="group [&_summary::-webkit-details-marker]:hidden fixed bottom-4 right-4 p-2 z-10" open={editing}>
                    <summary className={`text-white rounded-lg cursor-pointer p-2 ${editing ? 'bg-gradient-to-r from-green-500 to-blue-500' : 'bg-gradient-to-r from-blue-500 to-purple-600'}`}>
                        {editing ? "Edit" : "Add"}
                    </summary>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="p-4 mt-2 bg-white shadow-md rounded">
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                            className="block w-full p-2 mb-2 border border-gray-300 rounded"
                        />
                        <input
                            type="number"
                            name="price"
                            value={price}
                            placeholder="Price"
                            onChange={(e) => setPrice(+e.target.value)}
                            className="block w-full p-2 mb-2 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            name="image"
                            value={image_url}
                            placeholder="Image URL"
                            onChange={(e) => setImage(e.target.value)}
                            className="block w-full p-2 mb-2 border border-gray-300 rounded"
                        />
                        <input
                            type="number"
                            name="like"
                            value={like}
                            placeholder="Likes"
                            onChange={(e) => setLike(+e.target.value)}
                            className="block w-full p-2 mb-2 border border-gray-300 rounded"
                        />
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="isNew"
                                checked={is_new}
                                onChange={(e) => setIsNew(e.target.checked)}
                                className="mr-2"
                            />
                            New
                        </label>
                    </form>
                    <div className={`gap-4 ${editing ? "hidden" : ''}`}>
                        <button onClick={addProduct} className="block w-full p-2 bg-blue-500 text-white rounded">
                            Add Product
                        </button>
                    </div>
                    <div className={`gap-4 ${editing ? "flex" : "hidden"}`}>
                        <button onClick={() => editProduct(edid)} className="block w-full p-2 bg-green-500 text-white rounded">
                            Update task
                        </button>
                        <button onClick={() => setEdit(false)} className="block w-full p-2 bg-gray-500 text-white rounded">
                            Cancel
                        </button>
                    </div>
                </details>
            </div>
        </>
    );
}