import  { createContext, useState } from 'react'
import run from '../../Config/Config'
export const Context =createContext()
export default function ContextProvider({children}) {
    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")


    function newChat(){
        setLoading(false)
        setShowResults(false)
    }


    function delay(index,nextword){
        setTimeout(()=>{
            setResultData(prev=>prev+nextword)
        },75*index)
    }
    async function onSent(prompt) {
        setLoading(true)
        setResultData("")
        setShowResults(true)
        let res;
        if(prompt !== undefined){
            res = await run(prompt)
            setRecentPrompt(prompt)
            
        }else{
            setRecentPrompt(input)
            setPrevPrompts((prev)=>[...prev,input])
            res = await run(input)
        }
        const resArray = res.split("**")
        let newArray = "";
        for(let i = 0; i < resArray.length; i++) {
            if(i==0 || i%2 !== 1){
                newArray += resArray[i];
            }
            else{
                newArray += "<b>"+resArray[i]+"</b>"
            }
        }
        let newRes = newArray.split("*").join("</br>")
        let newResAarry = newRes.split(" ")
        for(let i=0; i < newResAarry.length;i++){
            const nextWord = newResAarry[i]
                delay(i,nextWord+" ")
        }
        setLoading(false)
        setInput("")
        
        
    }
    return (
        <Context.Provider value={{newChat, onSent , input , setInput , recentPrompt , prevPrompts , setRecentPrompt , setPrevPrompts , showResults,loading,resultData}}>
            {children}
        </Context.Provider>
    )
}

