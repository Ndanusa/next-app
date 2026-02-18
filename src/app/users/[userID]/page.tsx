import { notFound } from "next/navigation";
import { UserInterface } from "../../interfaces/interface";
import React from "react";

export default async function UserPage({ params }) {
   const { userID } = await params;
   const response = await fetch("http:localhost:3400/users");
   const users = await response.json();
   const user = users.find((item: UserInterface) => {
      return item.id == userID;
   });
   if (!user) {
      notFound();
   }
   return (
      <div className="flex items-center justify-center h-[80vh]">
         <div
            className="text-green-950 bg-green-300 w-fit p-3.5 rounded-2xl "
            // style={{ cornerShape: "superellipse(2)" }}
         >
            <p>name- {user.name}</p>
            <p>id - {user.id}</p>
            <p>email {user.email}</p>
            <p>age - {user.age}</p>
            <p>job - {user.job}</p>
            <p>job role - {user.role}</p>
         </div>
      </div>
   );
}
