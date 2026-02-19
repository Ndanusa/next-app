import Image from "next/image";

export default function Home() {
  return (
    <div className={"min-h-screen bg-gradient-to-bt from-purple-50 to-purple-100 flex items-center justify-center"}>
      <div className={`container mx-auto px-4 py-16`}>
        <div className={`text-center`}>
          <h1 className={`text-5xl font-bold text-gray-900 mb-6`}>
            Inventory Management
          </h1>
          <p className={`text-xl text-gray-900 mb-8 max-w-2xl mx-auto`}>
              Streamline your inventory tracking with our powerful, easy-to-use management system. track products, monitor stock levels, and gain valuable insights
          </p>

        </div>
      </div>
    </div>
  );
}
