import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Header = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((result) => setCategories(result))
    })

    return (
        <div className="container mx-auto px-10 mt-4 mb-8">
            <div className="bg-white rounded-xl w-full inline-block py-8 shadow-lg flex justify-center">
                <div className="float block text-center">
                    <Link href="/">
                        <span className="p-5 cursor-pointer font-bold text-4xl text-black hover:text-orange-500 "> The Wandering Nomad </span>
                    </Link>
                </div>
                {/* <div className="hidden md:float-left md:contents">
                    {categories.map((category, index) => (
                        <Link key={index} href={`/category/${category.slug}`}><span className="hover:text-orange-500 md:float-right mt-2 align-middle text-black mr-4 font-semibold cursor-pointer">{category.name}</span></Link>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default Header