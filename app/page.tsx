import Image from "next/image";
import Link from "next/dist/client/link";
export default function Home() {
   console.log("this is a client component");
   return (
      <div
         className={
            "min-h-screen bg-gradient-to-bt from-purple-50 to-purple-100 flex items-center justify-center"
         }>
         <div className={`container mx-auto px-4 py-16`}>
            <div className={`text-center`}>
               <h1 className={`text-5xl font-bold text-gray-900 mb-6`}>
                  Inventory Management
               </h1>
               <p className={`text-xl text-gray-200 mb-8 max-w-2xl mx-auto`}>
                  Streamline your inventory tracking with our powerful,
                  easy-to-use management system. track products, monitor stock
                  levels, and gain valuable insights
               </p>
               <div className={`flex gap-4 justify-center`}>
                  <Link
                     href={`/sign-in`}
                     className={`bg-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-purple-700 transition-colors`}
                     style={{ cornerShape: "superellipse(2)" }}>
                     Sign In
                  </Link>
                  <Link
                     href={`#`}
                     className={`bg-white text-purple-600 px-8 py-3 rounded-2xl font-semibold border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all`}
                     style={{ cornerShape: "superellipse(2)" }}>
                     Learn More
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
