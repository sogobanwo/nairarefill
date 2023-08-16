import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between mx-[10%] h-[60px]">
        <h1 className="font-bold text-3xl">
          naira<span className="text-[#f48023]">refill</span>
        </h1>
        <div className="flex gap-4">
          <button className="py-2 px-4 text-[#fff] bg-[#f48023] rounded-md">Register</button>
          <button className="py-2 px-4 bg-[#fff] text-[#f48023] border-2 border-[#f48023] rounded-md ">Login</button>
        </div>
      </div>
      <div>
        <div className="w-[35%]">
          <div className="w-[300px] flex justify-center items-center flex-col">
          <h1> We&apos;ve Missed You</h1>
          <p>Kindly signin and get first access to the very best, community and unlock more opportunities.</p>
          <label>Email:</label>
          <input type="text" className="w-[90%] mx-[5%] p-2"/>
          <label>Password:</label>
          <input type="text" className="w-[90%] mx-[5%] p-2"/>
          <button className="w-[90%] mx-[5%] p-2 text-[#fff] bg-[#f48023] rounded-md">Login</button>
          <p></p>
          <p></p>
          </div>
        </div>
        <div className="w-[65%]">
          {/* <Image src="" width={} height={} /> */}
        </div>
      </div>
    </>
  );
}
