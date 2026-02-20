export default async function UserPage({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const { id } = await params;
   console.log(id);

   return <div>{"hello world"}</div>;
}
