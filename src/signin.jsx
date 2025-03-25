import { Link } from "react-router-dom";

function SignIn() {
    return (
        <div className="w-[100vw] flex justify-center h-[100dvh] items-center">
            <div className="max-w-[100vw] w-[375px] xl:h-[90%] h-[100dvh] border border-gray-200 bg-gray-50 px-[20px] flex flex-col justify-start pt-[40px]">
                <div className="font-semibold text-[28px] text-[#1D2226] pb-[10px] pr-[147px]">Signin to your PopX account</div>
                <div className="text-[#1D2226]/60 text-[18px]">Lorem ipsum dolor sit amet,</div>
                <div className="text-[#1D2226]/60 text-[18px]">consectetur adipiscing elite,</div>

                <div className="relative w-full mt-[33px]">
                    <label className="absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-purple-600 text-sm">Email Password</label>
                    <input placeholder="Enter password" className="w-full border border-[#CBCBCB] h-[40px] rounded-[10px] pl-[6px]" />
                </div>

                <div className="relative w-full mt-[23px]">
                    <label className="absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-purple-600 text-sm">Email Password</label>
                    <input placeholder="Enter password" className="w-full border border-[#CBCBCB] h-[40px] rounded-[10px] pl-[6px]" />
                </div>

                <Link to="/account" className="cursor-pointer w-[335px] h-[45px] bg-[#CBCBCB] text-[16px] rounded-[6px] text-white flex justify-center items-center mt-[14px]">Login</Link>

            </div>
        </div>
    )
}
export default SignIn