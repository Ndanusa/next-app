import Link from "next/link";
export default function Users(params) {
   return (
      <div>
         <ul>
            <li>
               <Link href={`/main/users/1`}>User 1</Link>
            </li>
            <li>
               <Link href={`/main/users/2`}>User 2</Link>
            </li>
            <li>
               <Link href={`/main/users/3`}>User 3</Link>
            </li>
            <li>
               <Link href={`/main/users/4`}>User 4</Link>
            </li>
            <li>
               <Link href={`/main/users/5`}>User 5</Link>
            </li>
            <li>
               <Link href={`/main/users/6`}>User 6</Link>
            </li>
            <li>
               <Link href={`/main/users/7`}>User 7</Link>
            </li>
            <li>
               <Link href={`/main/users/8`}>User 8</Link>
            </li>
            <li>
               <Link href={`/main/users/9`}>User 9</Link>
            </li>
            <li>
               <Link href={`/main/users/10`}>User 10</Link>
            </li>
         </ul>
      </div>
   );
}
