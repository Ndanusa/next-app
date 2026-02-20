import Image from "next/image";
import Link from "next/dist/client/link";
export default function Home() {
   console.log("this is a client component");
   return (
      <div
         className={
            "min-h-screen bg-gradient-to-bt from-indigo-50 to-indigo-100 flex items-center justify-center"
         }>
         <div className={`container mx-auto px-4 py-16`}>
            <div className={`text-center`}>
               <h1 className={`text-5xl font-bold text-gray-900 mb-6`}>
                  Inventory Management
               </h1>
               <p className={`text-xl text-gray-500 mb-8 max-w-2xl mx-auto`}>
                  Streamline your inventory tracking with our powerful,
                  easy-to-use management system. track products, monitor stock
                  levels, and gain valuable insights
               </p>
               <div className={`flex gap-4 justify-center`}>
                  <Link
                     href={`/sign-in`}
                     className={`bg-indigo-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition-colors`}>
                     Sign In
                  </Link>
                  <Link
                     href={`#`}
                     className={`bg-white text-indigo-600 px-8 py-3 rounded-2xl font-semibold border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all`}>
                     Learn More
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
