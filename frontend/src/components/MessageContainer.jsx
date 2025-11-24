import React, { useEffect } from "react";
import SendMessage from "./SendMessage";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const MessageContainer = () => {
  const { selectedUser, authUser, onlineUsers } = useSelector( store => store.user );
  const dispatch = useDispatch();

  const isOnline = onlineUsers?.includes(selectedUser?._id);

  return (
    <>
      {selectedUser !== null ? (
        <div className="md:min-w-[550px] flex flex-col">
          <div className="flex gap-2 items-center bg-zinc-900 px-4 py-2 mb-2">
            <div className={`avatar ${isOnline ? 'online' : ''}`}>
              <div className="w-12 rounded-full">
                <img src={selectedUser?.profilePhoto} alt="user-profile" />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between gap-2">
                <p>{selectedUser?.fullName}</p>
              </div>
            </div>
          </div>
          <Messages />
          <SendMessage />
        </div>
      ) : (
        <div className="flex flex-col md:min-w-[550px] justify-center items-center ">
          <h1 className="text-2xl">Hi, {authUser?.fullName}</h1>
          <h1 className="text-2xl">Let's Start Conversation</h1>
        </div>
      )}
    </>
  );
};

export default MessageContainer;
