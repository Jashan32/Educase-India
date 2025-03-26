function Account() {
    return (
        <div className="w-[100vw] flex justify-center h-[100dvh] items-center">
            <div className="xl:h-[90%] h-[100dvh]  flex flex-col">

                <div className="shadow-b-sm z-10 shadow-b-black font-normal h-[68px] flex items-center text-[18px] text-[#1D2226] pl-[20px]">
                    Account Settings
                </div>

                <div className="border border-gray-200 max-w-[100vw] w-[375px] h-full bg-[#F7F8F9] flex flex-col justify-start pt-[30px]">

                    <div className="px-[20px] flex gap-[20px] relative">
                        <img src="./pimg.png" className="h-[76px]" />
                        <img src="./camera.png" className="absolute left-[59px] top-[50px] w-[23px] h-[21px]" />
                        <div className="flex flex-col">
                            <div className="text-[#1D2226] text-[15px] font-semibold">Marry Doe</div>
                            <div className="text-[#1D2226]/60">Marry@Gmail.com</div>
                        </div>
                    </div>

                    <div className="px-[20px] text-[13px] text-[#1D2226] mt-[30px] pb-[10px]">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                    </div>

                    <div className="w-full border-b border-dashed border-gray-400 pt-[10px]"></div>
                </div>
            </div>
        </div>
    );
}

export default Account;
