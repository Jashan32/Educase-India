import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="w-[100vw] flex justify-center h-[100dvh] items-center">
            <div className="max-w-[100vw] w-[375px] xl:h-[90%] h-[100dvh] border border-gray-200 bg-[#F7F8F9] px-[20px] flex flex-col justify-end pb-[41px]">
                <div className="font-semibold text-[28px] text-[#1D2226] pb-[10px]">Welcome to PopX</div>
                <div className="text-[#1D2226]/60 text-[18px]">Lorem ipsum dolor sit amet,</div>
                <div className="text-[#1D2226]/60 text-[18px]">consectetur adipiscing elite,</div>
                <Link to="register" className="cursor-pointer w-[335px] h-[45px] bg-[#6C25FF] text-[16px] rounded-[6px] text-white flex justify-center items-center mt-[29px]">Create Account</Link>
                <Link to="/login" className="cursor-pointer w-[335px] h-[45px] bg-[#6C25FF4B] text-[16px] rounded-[6px] text-black flex justify-center items-center mt-[10px]">Alredy Registered? Login</Link>
            </div>
        </div>
    )
}
export default Home