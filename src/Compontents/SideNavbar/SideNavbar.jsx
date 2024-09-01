import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../Context/Context";

export default function SideNavbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenSmall, setIsOpenSmall] = useState(false)
    const{onSent ,prevPrompts,setRecentPrompt,newChat} = useContext(Context)
    async function handelSent(prompt){
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
    return (
        <>
        <div className=" absolute top-6 right-5 md:hidden z-20">
            <img src={assets.menu_icon} alt="menu_icon"  className="w-10"  onClick={()=>setIsOpenSmall((prev)=>!prev)
        }/>
        </div>
        {isOpenSmall?<div className=" absolute right-0 left-0 top-[88px] bg-[#f0f4f9] py-5 z-50 w-full h-[90%]">
            <div className="">
                    {isOpenSmall?<img onClick={()=>setIsOpenSmall((prev)=>!prev)} src={assets.close_icon} alt="close_icon" className="w-10 ml-auto cursor-pointer"/>:<img onClick={()=>setIsOpen((prev)=>!prev)} src={assets.menu_icon} alt="menu-bar" className="w-5 ml-auto cursor-pointer"/>}
                    
                    
                    <div onClick={()=>newChat()} className=" mt-5  ml-5 inline-flex items-center gap-3 py-3 px-4 bg-[#e6eaf1] text-sm text-gray-400 rounded-3xl cursor-pointer">
                        <img src={assets.plus_icon} alt="newChat-icon" className="w-4 " />
                        {isOpenSmall?<p>New Chat</p>:null}
                    </div>
                    {isOpenSmall?<div className="flex flex-col px-5">
                        <h3 className="mt-8 mb-5 recent">Recent</h3>
                        {prevPrompts.map((item,index)=><div key={index} onClick={()=>handelSent(item)} className=" flex items-start gap-3 p-3 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb] transition-all" >
                            <img src={assets.message_icon} alt="message-icon" className="w-5"/>
                            <p>{item.slice(0,18)} ...</p>
                        </div>)}
                        
                    </div>:null}
                    
                </div>
                <div className="flex items-center justify-between absolute bottom-5 w-full">
                    <div className="flex items-start gap-3 p-3 pr-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb] transition-all">
                        <img src={assets.question_icon} alt="question_icon" className="w-5"/>
                        {isOpenSmall?<p>Help</p>:null}
                    </div>
                    <div className="flex items-start gap-3 p-3 pr-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb] transition-all">
                        <img src={assets.history_icon} alt="history_icon" className="w-5"/>
                        {isOpenSmall?<p>Activity</p>:null}
                    </div>
                    <div className="flex items-start gap-3 p-3 pr-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb] transition-all">
                        <img src={assets.setting_icon} alt="setting_icon" className="w-5"/>
                        {isOpenSmall?<p>Settings</p>:null}
                    </div>
                </div>
        </div>:null}
        <div  className="min-h-screen hidden md:inline-flex flex-col justify-between bg-[#f0f4f9] py-6 px-4">
                <div className="">
                    {isOpen?<img onClick={()=>setIsOpen((prev)=>!prev)} src={assets.close_icon} alt="close_icon" className="w-7 ml-auto cursor-pointer"/>:<img onClick={()=>setIsOpen((prev)=>!prev)} src={assets.menu_icon} alt="menu-bar" className="w-5 ml-auto cursor-pointer"/>}
                    
                    
                    <div onClick={()=>newChat()} className=" mt-12 inline-flex items-center gap-3 py-3 px-4 bg-[#e6eaf1] text-sm text-gray-400 rounded-3xl cursor-pointer">
                        <img src={assets.plus_icon} alt="newChat-icon" className="w-5 " />
                        {isOpen?<p>New Chat</p>:null}
                    </div>
                    {isOpen?<div className="flex flex-col">
                        <h3 className="mt-8 mb-5 recent">Recent</h3>
                        {prevPrompts.map((item,index)=><div key={index} onClick={()=>handelSent(item)} className=" flex items-start gap-3 p-3 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb] transition-all" >
                            <img src={assets.message_icon} alt="message-icon" className="w-5"/>
                            <p>{item.slice(0,18)} ...</p>
                        </div>)}
                        
                    </div>:null}
                    
                </div>
                <div className="flex flex-col">
                    <div className="flex items-start gap-3 p-3 pr-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb] transition-all">
                        <img src={assets.question_icon} alt="question_icon" className="w-5"/>
                        {isOpen?<p>Help</p>:null}
                    </div>
                    <div className="flex items-start gap-3 p-3 pr-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb] transition-all">
                        <img src={assets.history_icon} alt="history_icon" className="w-5"/>
                        {isOpen?<p>Activity</p>:null}
                    </div>
                    <div className="flex items-start gap-3 p-3 pr-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb] transition-all">
                        <img src={assets.setting_icon} alt="setting_icon" className="w-5"/>
                        {isOpen?<p>Settings</p>:null}
                    </div>
                </div>
        </div>
        </>
    ) 
}
