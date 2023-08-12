import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomText } from "../utils/helper";
// import { YOUTUBE_LIVE_CHAT_API } from '../utils/contants'

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API polling
      console.log("API polling");
      // liveChatdata()
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomText(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  // const liveChatdata = async () =>{
  //     const data = await fetch(YOUTUBE_LIVE_CHAT_API)
  //     const json = data.json()
  //     console.log(json[1])
  // }
  return (
    <>
      <div className="w-full h-[500px] ml-5 p-2 border border-gray-300 rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="px-2 w-full border border-gray-300 rounded-lg ml-5"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Shweta Saindane",
              message: liveMessage,
            })
          );
          setLiveMessage("")
        }}
      >
        <input
          className="w-[80%] pl-2 border border-gray rounded-lg"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          type="text"
        />
        <button className="p-2 m-2 bg-gray-400 rounded-lg px-3 font-bold">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
