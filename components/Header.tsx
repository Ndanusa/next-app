export default function Header() {
   return (
      <div className=" px-10 py-3">
         <nav className="flex items-center justify-between">
            <ul>
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
                  className="px-4 py-2 bg-indigo-500 rounded-2xl"
                  style={{ cornerShape: "superellipse(2)" }}>
                  Learn more
               </button>
            </div>
         </nav>
      </div>
   );
}
