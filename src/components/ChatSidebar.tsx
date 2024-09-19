"use client"

import React from 'react';
import Link from 'next/link';
import { UserButton } from "@clerk/nextjs";
import { DrizzleChat } from '@/lib/db/schema';
import { Button } from "@/components/ui/button";
import { PlusCircle, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";





type Props = {
  chats: DrizzleChat[],
  chatId: number
}

const ChatSidebar = ({ chats, chatId }: Props) => {
  return (
    <div className="w-full h-screen p-4 text-gray-200 bg-[#1E1915]">
      <Link href="/">
        <Button className="w-full border-dashed border-white border">
          <PlusCircle className="mr-2 w-4 h-4" />
          Create a new Chat
        </Button>
      </Link>
      <div className="flex flex-col gap-2 mt-4">
        {chats.map(chat => (
          <Link key={chat.id} href={`/chat/${chat.id}`}>
            <div className={
              cn('rounded-lg p-3 text-slate-300 flex items-center', {
                'bg-orange-600 text-white': chat.id === chatId,
                'hover:bg-[#2A241E] hover:text-white': chat.id !== chatId
              })
        }>
              <MessageCircle className="mr-2"/>
              <p className="w-full overflow-hidden text-sm truncate whitespace-nowrap text-ellipsis">{chat.pdfName}</p>

            </div>
          </Link>
        ))}
      </div>
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-2 text-sm text-orange-600 flex-wrap">
            <Link href='/' className="text-sm text-orange-600 hover:text-orange-500">Back to homepage</Link>
          </div>

        </div>
    </div>
  )
}

export default ChatSidebar






/*
const ChatSidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <Link href="/" className="text-xl font-bold">Judicial AI</Link>
        <UserButton  />
      </div>
      <nav className="flex-1 overflow-y-auto">
        {/* Add chat history items here *///}
        //<div className="py-2">
          //<h3 className="mb-2 text-sm font-semibold">Recent Chats</h3>
          //{/* Map through recent chats and display them */}
        //</div>
      //</nav>
      //<div className="mt-auto">
        //<Link href="/" className="text-sm hover:underline">Back to homepage</Link>
      //</div>
    //</div>
  //);
//};
//export default ChatSidebar;

