import Image from "next/image";
import sideImage from "@/public/Banwo olorunsogo (2).jpg";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between px-[10%] h-[60px] bg-[#fff]">
        <h1 className="font-bold text-3xl">
          naira<span className="text-[#f48023]">refill</span>
        </h1>
        <div className="flex gap-4">
          <button className="py-2 px-4 text-[#fff] bg-[#f48023] rounded-md">
            Register
          </button>
          <button className="py-2 px-4 bg-[#fff] text-[#f48023] border-2 border-[#f48023] rounded-md ">
            Login
          </button>
        </div>
      </div>
      <div className="w-[100%] flex ">
        <div className="w-[35%] h-[90vh] flex justify-center items-center flex-col">
          <div className="w-[400px]">
            <h1 className="text-3xl font-bold my-4"> We&apos;ve Missed You</h1>
            <p className="text-[18px]">
              Kindly signin and get first access to the very best, community and
              unlock more opportunities.
            </p>
            <label className="text-left">Email:</label>
            <input type="text" className="w-[90%] p-2 border-2 my-4" />
            <label className="text-left">Password:</label>
            <input type="text" className="w-[90%] p-2 border-2 my-4" />
            <button className="w-[90%] my-4 p-2 text-[#fff] bg-[#f48023] rounded-md">
              Login
            </button>
            <p className="my-4">Forgot username or password?</p>
            <p>Don&apos;t have an account? <a href="#">SignUp</a></p>
          </div>
        </div>

        <Image src={sideImage} alt="k" className="w-[65%] h-[100vh]" />
      </div>
    </>
  );
}
