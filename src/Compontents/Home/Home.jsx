import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../Context/Context";

export default function Home() {
    const {onSent , input , setInput , recentPrompt , showResults , loading , resultData} = useContext(Context)
    return (
    <>
        <div className="flex-1 min-h-[100vh]  lg:max-h-[100vh] pb-[30vh]  relative" >
            <div className="flex items-center justify-between text-2xl p-5 text-[#585858]">
                <h3>Gemini</h3>
                <img src={assets.user_icon} alt="user_icon"  className="w-12  rounded-full mr-11 md:mr-0"/>
            </div>
            <div className="max-w-[900px] m-auto">
                {!showResults?<>
                <div className="p-5 my-12 text-6xl text-[#c4c7c5] font-medium ">
                    <p><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4b90ff] to-[#ff5546]">Hello, Dev.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className=" grid  grid-cols-2 lg:grid-cols-4 gap-4 px-5">
                    <div className=" p-4 rounded-lg relative cursor-pointer bg-[#f0f4f9] h-44 lg:h-52 hover:bg-[#dfe4ea] transition-all">
                        <p className="text-[17px] text-[#585858]">Suggest beautiful places to seen on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="compass_icon" className=" absolute w-9 p-1  rounded-3xl bottom-3 right-3 bg-white" />
                    </div>
                    <div className="p-4 rounded-lg relative cursor-pointer bg-[#f0f4f9] h-44 lg:h-52 hover:bg-[#dfe4ea] transition-all">
                        <p className="text-[17px] text-[#585858]">Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="bulb_icon" className=" absolute w-9 p-1  rounded-3xl bottom-3 right-3 bg-white"/>
                    </div>
                    <div className="p-4 rounded-lg relative cursor-pointer bg-[#f0f4f9] h-44 lg:h-52 hover:bg-[#dfe4ea] transition-all">
                        <p className="text-[17px] text-[#585858]">Brainstorm team bonding activities for our work retreat </p>
                        <img src={assets.message_icon} alt="message_icon" className=" absolute w-9 p-1  rounded-3xl bottom-3 right-3 bg-white"/>
                    </div>
                    <div className="p-4 rounded-lg relative cursor-pointer bg-[#f0f4f9] h-44 lg:h-52 hover:bg-[#dfe4ea] transition-all">
                        <p className="text-[17px] text-[#585858]">Improve the readability of the following code  </p>
                        <img src={assets.code_icon} alt="code_icon" className=" absolute w-9 p-1  rounded-3xl bottom-3 right-3 bg-white"/>
                    </div>
                </div>
                </>:
                <div className="px-5 max-h-[60vh] overflow-y-scroll result  ">
                    <div className="flex items-center gap-5 my-10">
                        <img src={assets.user_icon} alt="user_icon" className="w-10 rounded-full" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="flex items-start gap-5">
                        <img src={assets.gemini_icon} alt="gemini_icon"  className="w-10"/>
                        {loading?<div className="w-full flex flex-col gap-3">
                                <div className="loader "></div>
                                <div className="loader"></div>
                                <div className="loader"></div>
                        </div>:<p dangerouslySetInnerHTML={{__html:resultData}} className=" leading-7"></p>}
                        
                    </div>
                </div>
                }
                
                <div className=" absolute bottom-0  w-full max-w-[900px] px-5  m-auto">
                    <div className=" flex items-center justify-between gap-5 py-1 md:py-3 px-5 bg-[#f0f4f9] rounded-full">
                        <input onKeyUp={(e)=>{
                            if(e.key=="Enter"){
                                onSent()
                            }
                        }} onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here "  
                        className="flex-1  outline-none border-none bg-transparent p-2  text-lg" />
                        <div className=" flex items-center gap-4">
                            <img onClick={()=>onSent()} src={assets.send_icon} alt="send_icon" className="w-4  md:w-6 cursor-pointer"/>
                        </div>
                    </div>
                    <p className="text-sm my-4 mx-auto text-center font-light">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                </div>
            </div>
        </div>
    </>
    )
}
