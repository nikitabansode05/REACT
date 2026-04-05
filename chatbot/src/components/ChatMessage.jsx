const ChatMessage=({message,sender})=>{
    return(
        <div>
            {sender==="bot" && <img src="./bot.jpg" height="50" width={50}/>}
            {message}
            {sender==="user" && <img src="./user.png" height="50" width={50}/>}
        </div>
    );

}

export default ChatMessage;