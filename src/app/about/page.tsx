

import Link from "next/link";
import React from "react";

const AboutPage= ()=>{
    return(
        <div className="bg-slate-300 px-4 w-200">
            <h1 className="bg-gray-700 py-6  italic">about our next.js website</h1>
            <p className="bg-purple-400 italic">you can get any info about our website,so keep in touch!</p>
            <ul>
                <li><Link href="/" className="bg-purple-300 italic">go to homepage</Link></li>
                
                <li><Link href="/contact" className="bg-pink-300 italic" target="_blank"> go to contact page</Link></li>
            
            </ul>
    

        </div>
    );
};
export default AboutPage;