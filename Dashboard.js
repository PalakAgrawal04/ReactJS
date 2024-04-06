
import { GoHome } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { LuLayoutTemplate } from "react-icons/lu";

import { IoIosSearch } from "react-icons/io";
import Tablet from "./components/Tablet";

const Dashboard = () => {
    return (
        <>
            <div className="container h-screen w-full bg-[#e1daff] flex justify-center items-center gap-[10px] px-[10px]">

                <div className="left-section w-[16%] h-[95%] bg-white rounded-[10px] ">
                    <div className="left-links h-[15%] w-full px-[20px] flex flex-col justify-center items-start border-b-[1px] border-solid border-gray-300 font-regular">

                        <button className=" w-full h-[30px] flex justify-start items-center gap-[8px]">
                            <GoHome />
                            <h2>Home</h2>
                        </button>
                        <button className=" w-full h-[30px] flex justify-start items-center gap-[8px]">
                            <SlCalender />
                            <h2>My Work</h2>
                        </button>
                    </div>
                    {/* SEARCH & WORK SECTION OF LEFT SECTION */}
                    <div className="search-left  h-[85%] w-full  px-[10px] flex flex-col justify-start items-start py-[10px] gap-[20px]">
                        <div className="account h-[8%] w-full  flex justify-start items-center">
                            <select name="account" id="acc" className="h-[100%] w-[180px] bg-transparent font-bold">
                                <option value="w1">Main workspace</option>
                                <option value="w2">work 2</option>
                            </select>
                        </div>
                        <div className="search-bar flex justify-center items-center gap-[10px]">
                            <input type="text" placeholder="Search" className="h-[35px] rounded-[3px] border-solid border-2 border-gray-200"></input>
                            <div className="addBtn h-[30px] w-[30px] bg-[#7558E6] rounded-[3px] flex justify-center items-center font-regular text-[20px] text-white">+</div>
                        </div>
                        <div className="works h-[500px] w-full   py-[] flex flex-col justify-start items-center gap-[10px]">
                            {/* <div className="work1 bg-blue-500 rounded-[3px] h-[40px] w-[100%] px-[10px] flex justify-start items-center">
                                <h2>abc</h2>
                            </div> */}
                            <button className=" w-full rounded-[3px] h-[40px]  px-[10px] bg-[#a994ff] flex justify-start items-center gap-[8px]">
                                <LuLayoutTemplate />
                                <h2>abc</h2>
                            </button>
                            <button className=" w-full rounded-[3px] h-[40px] px-[10px] bg-[#a994ff] flex justify-start items-center gap-[8px]">
                                <LuLayoutTemplate />
                                <h2>xyz</h2>
                            </button>

                        </div>

                    </div>
                </div>
                <div className="right-section  w-[84%] h-[95%] bg-white rounded-[10px] flex flex-col justify-center items-center px-[30px]">
                        <div className="rtop  h-[18%] bg-red-600 w-[100%]">

                        </div>
                        <div className="rbottom h-[82%] w-[100%]  bg-white">
                            <Tablet/>
                        </div>   
                </div>
            </div>
        </>
    );
}

export default Dashboard;