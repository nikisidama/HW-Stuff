'use client'
import { useParams, useSearchParams } from 'next/navigation';

import Header from '../header';
import Footer from '../footer';
import Image from 'next/image';


export default function Params() {
    const params = useParams();
    const searchParams = useSearchParams();

    return (<>
        <Header />
        <main>
            <button className='absolute left-6 top-20 text-gray-600' onClick={() => window.history.back()}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="size-5"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z" />
                </svg>
            </button>
            <div className="my-10 flex justify-center items-center">
                <div className="m-4 rounded-lg border-gray-200 border-4 bg-white flex items-center justify-center w-1/3">
                    <Image
                        src={searchParams.get("image_url") || ''}
                        width={10}
                        height={10}
                        alt="Image"
                        layout="responsive"
                        objectFit='contain'
                        className='m-4'
                    />
                </div>
                <div className="m-4 rounded-lg bg-gray-200 text-2xl w-1/2">
                    <div className='m-6 flex flex-col justify-between'>
                        <div>
                            <div className='flex justify-between'>
                                <div>
                                    <span className='text-5xl font-bold leading-snug'>{searchParams.get("name")}</span>
                                    <span
                                        className={`${searchParams.get("is_new") === "true" ? "inline-flex" : "hidden"} items-center justify-center rounded-full bg-amber-100 ml-4 px-5 py-1.5 text-amber-700`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="-ms-1 me-2 size-8"
                                        >
                                            <path
                                                d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"
                                                fill-rule="nonzero"
                                            />
                                        </svg>
                                        <p>New</p>
                                    </span>
                                </div>
                                <span className='text-sm w-fit'>ID:{params.slug}</span>
                            </div>
                        </div>
                        <span className='mt-4 ml-2'>${searchParams.get("price")}</span>
                        <div className='mt-34'>
                            <div className='flex justify-around m-6 gap-10'>
                                <div className='w-4/5 text-justify text-base'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis pellentesque risus in malesuada. Etiam pellentesque lorem sit amet varius euismod. Aenean egestas lacinia mauris. Nunc nec commodo ex. Etiam at tortor sed ante accumsan aliquam nec quis quam. Vivamus lacus ex, facilisis in congue non, tempor ac augue. Quisque enim augue, suscipit eu vehicula eget, euismod eget eros. Pellentesque fermentum luctus imperdiet. Sed cursus condimentum pharetra. Proin euismod feugiat est vitae consectetur.</p>
                                    <br />
                                    <p>Sed vel tincidunt velit, rutrum gravida eros. Integer blandit erat sed viverra accumsan. Ut pulvinar vulputate gravida. Suspendisse et molestie nisi. Cras facilisis, magna vitae tincidunt blandit, nunc urna tristique est, vel dapibus dolor lectus vel nisl. Etiam ullamcorper luctus maximus. Pellentesque cursus convallis ante. Mauris sollicitudin lorem eu fermentum mollis. Quisque dui elit, dictum et fringilla sed, pretium ac lectus. Donec et orci a ipsum placerat malesuada. In ornare vulputate sollicitudin. Aenean aliquet dolor massa, rutrum malesuada nisi ullamcorper id. Cras tempus neque sem, quis maximus ante tincidunt vel. Duis rutrum urna sed tempor semper. Maecenas tincidunt facilisis est non porttitor.</p>
                                </div>
                                <div className='w-1/2 flex flex-col justify-start items-center gap-8'>
                                    <button
                                        className="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-20 py-5 text-white focus:outline-none focus:ring active:bg-indigo-500"
                                    >
                                        <span className="absolute -start-full transition-all group-hover:start-4">
                                            <svg
                                                className="size-8 rtl:rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm14-16.5l-.743 2h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195zm-12 4h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"
                                                />
                                            </svg>
                                        </span>

                                        <span className="text-xl font-bold transition-all group-hover:ms-4"> Add to Cart </span>
                                    </button>
                                    <button
                                        className="group relative inline-flex items-center overflow-hidden rounded bg-green-600 px-24 py-5 text-white focus:outline-none focus:ring active:bg-indigo-500"
                                    >
                                        <span className="absolute -start-full transition-all group-hover:start-4">
                                            <svg
                                                className="size-8 rtl:rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M20 10.999c-2.209 0-4 1.792-4 4.001s1.791 4 4 4 4-1.791 4-4-1.791-4.001-4-4.001zm0 7.001c-1.654 0-3-1.346-3-3s1.346-3.001 3-3.001 3 1.347 3 3.001-1.346 3-3 3zm.167-1.351v.351h-.334v-.333c-.344-.006-.702-.088-1-.242l.152-.548c.254.099.574.202.861.202l.213-.022c.383-.086.462-.48.039-.67-.311-.145-1.26-.269-1.26-1.081 0-.455.346-.861.994-.95v-.356h.334v.339c.24.006.512.049.814.141l-.121.548c-.232-.081-.487-.156-.738-.156l-.076.002c-.496.029-.541.459-.193.639.569.268 1.314.467 1.314 1.181.001.573-.446.878-.999.955zm-13.167-5.649c0 1.656 1.344 3 3 3s3-1.344 3-3-1.344-3-3-3-3 1.344-3 3zm3.883-1.368l-.108.493c-.23-.08-.485-.154-.733-.139-.446.026-.486.413-.174.575.514.242 1.182.42 1.182 1.063.002.515-.401.791-.898.86v.315h-.302v-.299c-.311-.005-.632-.079-.898-.217l.135-.493c.287.11.669.229.968.162.345-.078.415-.433.034-.604-.279-.129-1.133-.242-1.133-.973 0-.409.312-.775.895-.855v-.319h.301v.305c.215.005.459.043.731.126zm4.319 7.368h-15.202v-12h20v4.799c-.709 0-1.384.145-2 .402v-1.219c-.959-.42-1.395-1.023-1.814-1.982h-12.372c-.419.959-.855 1.562-1.814 1.982v4.036c.959.42 1.395 1.022 1.814 1.982h10.986c0 .708.144 1.384.402 2z"
                                                />
                                            </svg>
                                        </span>

                                        <span className="text-xl font-bold transition-all group-hover:ms-4"> Buy now </span>
                                    </button>
                                    <button
                                        className={`group align-middle inline-flex items-center justify-center rounded-full bg-pink-100 px-5 py-1 text-pink-900 transition hover:text-pink-500/75 active:bg-pink-300`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            className="-ms-1 me-1.5 w-6 h-6 transition-transform group-hover:scale-125"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                        <p>{searchParams.get("like")}</p>
                                    </button>
                                </div>
                            </div>
                            <p className='text-sm text-gray-300'>data: {JSON.stringify(Object.fromEntries(searchParams))}</p>
                        </div>
                    </div>

                </div>

            </div>

        </main>
        <Footer />
    </>)
}