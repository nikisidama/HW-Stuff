"use client"
import { useEffect, useState } from 'react'
import Loading from '@/components/Loading'

const BASE_URL = `https://dummyjson.com/products`
const URL_PRODUCT = `${BASE_URL}?limit=10&select=title,price`
const URL_CATEGORY = `${BASE_URL}/categories`

type ProductType = {
    products: [{
        id: number,
        title: string,
        price: number
    }],
    total: number,
    skip: number,
    limit: number
}

type CatagoryType = {
    slug: string,
    name: string,
    url: string
}

export default function page() {
    const [categories, setCategory] = useState<CatagoryType[]>()
    const [products, setProduct] = useState<ProductType>()
    const [catName, setCat] = useState('')

    useEffect(() => {
        async function getCategories() {
            try {
                const response = await fetch(URL_CATEGORY);
                const data = await response.json();
                setCategory(data)
            } catch (e) {
                console.log(e)
            }
        }
        async function getProducts() {
            try {
                const response = await fetch(URL_PRODUCT);
                const data = await response.json();
                setProduct(data)

            } catch (e) {
                console.log(e)
            }
        }
        getProducts()
        getCategories()

    }, [])

    if (!products || !categories) return <Loading />

    function addCat() {
        if (!categories || !catName) { return }
        setCategory([{
            slug: "string",
            name: catName,
            url: "string"
        }, ...categories])
        console.log("done")
    }

    return (<>
        <header></header>
        <main className='bg-white text-black w-screen h-full flex flex-col items-center'>
            <h1 className='text-4xl font-semibold mt-4'>Product List 2024</h1>
            <div className='flex mt-4 ml-8'>
                <div className='w-1/2'>
                    <label>Add new catagory</label><br />
                    <div className='flex'>
                        <input
                            type='text'
                            name='catagory'
                            className='border-2 border-black'
                            value={catName}
                            onChange={(e) => setCat(e.target.value)}
                        >
                        </input>
                        <button onClick={addCat} className='border-2 border-black ml-2 px-2 py-1'>Add</button>
                    </div>
                    <div className='text-3xl mt-6'>Categories</div>
                    <div className='flex flex-col flex-1 mt-2'>
                        {categories.map((catagory, index) => <div key={index}>{index}. {catagory.name}</div>)}
                    </div>
                </div>
                <div className='w-1/2'>
                    <label className='text-3xl'>Products</label>
                    <div className='flex flex-col gap-3 flex-1 mt-4'>
                        {products.products.map(product =>
                            <div key={product.id} className='relative w-2/3 flex items-center p-6 bg-indigo-200 rounded-md border-black border-2'>

                                <div className='w-full flex justify-between'>
                                    <span>{product.title}</span>
                                    <span>{product.price}</span>
                                </div>
                                <span className='absolute bottom-0 right-0 text-xs text-blue-800 bg-blue-50 px-1'>{product.id}</span>
                            </div>
                        )}
                        <div className='text-white'>

                        {JSON.stringify(products)}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer></footer>
    </>)
}