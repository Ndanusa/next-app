import Image from "next/image";
import Link from "next/link";
export default function Header() {
   return (
      <div className="px-10 py-5 bg-indigo-50 shadow-md shadow-gray-100">
         <nav className="flex items-center justify-between">
            <Image src={`/next.svg`} alt="next logo" width={120} height={60} />
            <ul className="flex items-center gap-10 text-indigo-950 ">
               <li>
                  <Link href="/main">Home</Link>
               </li>
               <li>
                  <Link href="/about">About</Link>
               </li>
               <li>
                  <Link href="/users">Users</Link>
               </li>
               <li>
                  <Link href="/contact">Contact</Link>
               </li>
               <li>
                  <Link href="/projects">Projects</Link>
               </li>
            </ul>
            <div>
               <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg">
                  Learn more
               </button>
            </div>
         </nav>
      </div>
   );
}
