import Link from "next/link";

export default function Users() {
   return (
      <div>
         <ul>
            <li>
               <Link href={`/users/1`}></Link>
            </li>
            <li>
               <Link href={`/users/2`}></Link>
            </li>
            <li>
               <Link href={`/users/3`}></Link>
            </li>
            <li>
               <Link href={`/users/4`}></Link>
            </li>
            <li>
               <Link href={`/users/5`}></Link>
            </li>
            <li>
               <Link href={`/users/6`}></Link>
            </li>
            <li>
               <Link href={`/users/7`}></Link>
            </li>
            <li>
               <Link href={`/users/8`}></Link>
            </li>
            <li>
               <Link href={`/users/9`}></Link>
            </li>
            <li>
               <Link href={`/users/10`}></Link>
            </li>
         </ul>
      </div>
   );
}
