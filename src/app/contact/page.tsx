
 import Link from 'next/link';
import React from "react";
const contactPage =()=>{
    return(
        <div className='bg-orange-200 py-6 px-4 m-20 w-200' >
            <h1 className='bg-cyan-500 px-4  italic' >contact us</h1>


            <ul>
                <li><Link href="/" className='bg-yellow-50 italic'>go to homepage</Link></li>
                
                <li><Link href="/about" className='bg-emerald-300 italic ' target="_blank"> go to Aboutpage</Link></li>
                
            </ul>



        </div>
    );
};
export default contactPage;