import { Link } from "react-router-dom";

function Signup() {
    return (
        <div className="w-[100vw] flex justify-center h-[100dvh] items-center">
            <div className="max-w-[100vw] w-[375px] xl:h-[90%] h-[100dvh] border border-gray-200 bg-[#F7F8F9] px-[20px] flex flex-col justify-between pt-[40px]">
                <div>

                    <div className="font-semibold text-[28px] text-[#1D2226] pb-[10px] pr-[147px]">Create your PopX account</div>

                    <div className="relative w-full mt-[31px]">
                        <label className="absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-[#6C25FF] text-sm">Full Name<span className="text-[#DD4A3D]">*</span></label>
                        <input placeholder="Marry Doe" className="w-full border border-[#CBCBCB] h-[40px] rounded-[10px] pl-[6px]" />
                    </div>
                    <div className="relative w-full mt-[23px]">
                        <label className="absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-[#6C25FF] text-sm">Phone number<span className="text-[#DD4A3D]">*</span></label>
                        <input placeholder="Marry Doe" className="w-full border border-[#CBCBCB] h-[40px] rounded-[10px] pl-[6px]" />
                    </div>
                    <div className="relative w-full mt-[23px]">
                        <label className="absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-[#6C25FF] text-sm">Email address<span className="text-[#DD4A3D]">*</span></label>
                        <input placeholder="Marry Doe" className="w-full border border-[#CBCBCB] h-[40px] rounded-[10px] pl-[6px]" />
                    </div>
                    <div className="relative w-full mt-[23px]">
                        <label className="absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-[#6C25FF] text-sm">Password<span className="text-[#DD4A3D]">*</span></label>
                        <input placeholder="Marry Doe" className="w-full border border-[#CBCBCB] h-[40px] rounded-[10px] pl-[6px]" />
                    </div>
                    <div className="relative w-full mt-[23px]">
                        <label className="absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-[#6C25FF] text-sm">Company name</label>
                        <input placeholder="Marry Doe" className="w-full border border-[#CBCBCB] h-[40px] rounded-[10px] pl-[6px]" />
                    </div>
                    <div className="text-[13px] pt-[18px]">Are you an Agency?</div>
                    <div className="flex gap-[23px]">

                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="agency" value="yes" className="hidden peer" />

                            <div className="w-5 h-5 border-2 border-[#6C25FF] rounded-full flex items-center justify-center peer-checked:bg-[#6C25FF]">
                                <div className="w-2.5 h-2.5 bg-white rounded-full peer-checked:bg-black"></div>
                            </div>

                            <span className="text-[#1D2226]">Yes</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="agency" value="no" className="peer hidden" />
                            <div className="w-5 h-5 border-2 border-[#6C25FF] rounded-full flex items-center justify-center peer-checked:bg-[#6C25FF] peer-checked:border-[#6C25FF]">
                                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>
                            <span className="text-[#1D2226]">No</span>
                        </label>
                    </div>
                </div>


                <Link to='/account' className="cursor-pointer w-[335px] h-[45px] bg-[#6C25FF] text-[16px] rounded-[6px] text-white flex justify-center items-center mt-[14px] mb-[30px]">Create Account</Link>

            </div>
        </div>
    )
}
export default Signup