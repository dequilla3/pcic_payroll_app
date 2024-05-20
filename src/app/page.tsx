import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="container mx-auto max-w-xs text-center pt-">
        <div className="mx-auto mb-3 w-max">
          <Image src="/pcic_logo.png" alt="PCIC Logo" width={100} height={50} />
        </div>
        <div className="text-center mb-5 font-bold">
          PCICXI Employee Self Service
        </div>
        <input
          className="border border-gray-300 px-4 py-2 w-full text-xs focus:outline-none focus:border-green-400 mb-1 rounded-md"
          type="text"
          placeholder="Username"
        />
        <input
          className="border border-gray-300 px-4 py-2 w-full text-xs focus:outline-none focus:border-green-400 mb-1 rounded-md"
          type="password"
          placeholder="Password"
        />
        <button
          type="button"
          className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-xs px-8 py-2.5 text-center block w-full mb-2"
        >
          Login
        </button>
      </div>
    </div>
  );
}
