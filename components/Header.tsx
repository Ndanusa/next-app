import Image from "next/image";
export default function Header() {
   return (
      <div className="px-10 py-5 bg-indigo-50 shadow-md shadow-gray-100">
         <nav className="flex items-center justify-between">
            <Image src={`/next.svg`} alt="next logo" width={120} height={60} />
            <ul className="flex items-center gap-10 text-indigo-950 ">
               <li>
                  <a href="/">Home</a>
               </li>
               <li>
                  <a href="/about">About</a>
               </li>
               <li>
                  <a href="/users">Users</a>
               </li>
               <li>
                  <a href="/contact">Contact</a>
               </li>
               <li>
                  <a href="/projects">Projects</a>
               </li>
            </ul>
            <div>
               <button
                  className="px-4 py-2 text-white bg-indigo-600 rounded-2xl"
                  style={{ cornerShape: "superellipse(2)" }}>
                  Learn more
               </button>
            </div>
         </nav>
      </div>
   );
}
