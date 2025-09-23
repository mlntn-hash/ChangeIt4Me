"use client";

import { useState } from "react";
import Image from "next/image";

const users = [
  {
    id: 1,
    name: "Jane Cooper",
    message: "Lorem ipsum dolor sit amet...",
    avatar: "/avatar1.png",
    unread: 1,
  },
  {
    id: 2,
    name: "Leslie Alexander",
    message: "Lorem ipsum dolor sit amet...",
    avatar: "/avatar2.png",
    unread: 0,
  },
];

type Message = {
  sender: "me" | "them";
  text: string;
};

export default function ChatApp() {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [messages, setMessages] = useState<Record<number, Message[]>>({
    1: [
      { sender: "them", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." },
      { sender: "me", text: "Lorem ipsum dolor sit amet." },
    ],
  });
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || selectedUser === null) return;

    setMessages((prev) => ({
      ...prev,
      [selectedUser]: [...(prev[selectedUser] || []), { sender: "me", text: input }],
    }));

    setInput("");
  };

  return (
    <div className="flex-1 bg-white rounded-lg">
      {!selectedUser ? (
        <>
          <h1 className="text-[45px] font-medium mb-4 border-b border-gray-300 pb-2 pt-[10px]">
            Messages
          </h1>

          <div className="space-y-4 px-6">
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user.id)}
                className="flex items-center justify-between p-4 rounded-lg cursor-pointer hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] transition"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium text-[18px]">{user.name}</p>
                    <p className="text-gray-500 text-[14px]">{user.message}</p>
                  </div>
                </div>
                {user.unread > 0 && (
                  <span className="bg-orange-500 text-white text-sm px-2 py-1 rounded-full">
                    {user.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col h-[600px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-300 p-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedUser(null)}
                className="text-[20px] pr-[30px] font-medium"
              >
                ← Back
              </button>
              <h1 className="text-[45px] font-medium">Messages</h1>
            </div>
          </div>

          {/* User Info */}
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center gap-4">
              <Image
                src={users.find((u) => u.id === selectedUser)?.avatar || "/avatar1.png"}
                alt="user"
                width={60}
                height={60}
                className="rounded-full"
              />
              <p className="font-medium text-[20px]">
                {users.find((u) => u.id === selectedUser)?.name}
              </p>
            </div>
            <button className="px-4 py-2 w-[160px] border border-[#507001] text-[#181818] rounded-md hover:bg-[#f0f5e9]">
              View Profile
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto space-y-3 p-6 bg-white">
            {(messages[selectedUser] || []).map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg w-max max-w-[70%] text-[16px] ${
                  msg.sender === "me"
                    ? "self-end bg-[#F3F3F3] ml-auto"
                    : "self-start bg-[#EDEEE6]"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="flex items-center gap-3 p-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write a message"
                className="w-full shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-md px-4 py-3 focus:outline-none text-[16px] pr-10"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                📎
              </span>
            </div>
            <button
              type="submit"
              className="bg-[#507001] text-[20px] w-[200px] h-[50px] text-white px-6 py-3 rounded-md hover:bg-[#2d4e30] transition-colors duration-500 ease-in-out"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

