import { useState } from "react";
import ChatMessage from "./ChatMessage";



const ChatMessageList=()=>{
    const [messages,setMessages]=useState([{message:"hii" , sender:"user",id:crypto.randomUUID()},
                                       {message:"hello", sender:"bot",id:crypto.randomUUID()},
                                       {message:"How are you ??",sender:"user",id:crypto.randomUUID()},
                                       {message:"Pretty Good",sender:"bot",id:crypto.randomUUID()}
                ]);
                
    const chatMessageComponents=messages.map((chatMessage)=>{
            return(
                <ChatMessage message={chatMessage.message} sender={chatMessage.sender} key={chatMessage.id}/>
            );
        });

    function generateMessage(){
        setMessages([ ...messages,
            {
                message:"Ohh Great",
                sender:"user",
                id:crypto.randomUUID()
            }]);
    }


    return(
        <div>
            <button onClick={generateMessage}>Send Message</button>
            {chatMessageComponents}
        </div>
    );
}
export default ChatMessageList