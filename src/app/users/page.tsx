import React from "react";
import Link from "next/link";
export default async function Page() {
   const response = await fetch("http:localhost:3400/users");
   const users = await response.json();
   return (
      <div>
         {users.map((item, index) => {
            return (
               <Link href={`/users/${item.id}`}>
                  <div>
                     <p>
                        {index + 1}. Name - {item.name}
                     </p>{" "}
                     <p>Age: {item.age}</p>
                  </div>
               </Link>
            );
         })}
      </div>
   );
}
