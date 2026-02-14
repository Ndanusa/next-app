import Image from "next/image";
export default function Home() {
   return (
      <div>
         hello world
         <div>
            <Image
               src={"/next.svg"}
               alt="Vercel logo"
               width={200}
               height={30}
               className="dark:invert"
            />
         </div>
      </div>
   );
}
