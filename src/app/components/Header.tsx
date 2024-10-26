import Link from "next/link";

const header = () => {
  return (
    <div>
        <header className="bg-gray-700 py-4">
            <nav className="flex-justify-between-item-center px-6">
<div className=" text-2xl text-white">MyCreativeSpace</div>
<ul className="flex-gap-5">
    <li><Link href ="/" className="text-gray-500 underline decoration-slate-950 hover: text-500">Home</Link></li>
    <li><Link href ="contact" className="text-gray-500 underline decoration-slate-950 hover: text-500">CONTACT US</Link></li>
    <li><Link href ="about" className="text-gray-500 underline decoration-slate-950 hover: text-500">ABOUT US</Link></li>


</ul>


            </nav>
        </header>
      
    </div> 
  );
};

export default header;
