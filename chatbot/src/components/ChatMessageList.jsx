import ChatMessage from "./ChatMessage";

const messages=[{message:"hii" , sender:"user"},
                    {message:"hello", sender:"bot"},
                    {message:"How are you ??",sender:"user"},
                    {message:"Pretty Good",sender:"bot"}
                ];
                
 const chatMessageComponents=messages.map((chatMessage)=>{
        return(
            <ChatMessage message={chatMessage.message} sender={chatMessage.sender}/>
        );
    });

const ChatMessageList=()=>{
    return(
        <div>
            {chatMessageComponents}
        </div>
    );
}
export default ChatMessageList