import React from 'react';
import { auth } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation';
import ChatComponent from '../../../components/ChatComponent';
import ChatSidebar from '@/components/ChatSidebar';
import { db } from '@/lib/db';
import { chats } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

type Props = {
  params: {
    chatId: string;
  }
}

const ChatPage = async ({ params: { chatId } }: Props) => {
  try {
    const { userId } = await auth();
    if (!userId) {
      return redirect('/sign-in');
    }
    
    const _chats = await db.select().from(chats).where(eq(chats.userId, userId));
    console.log('Chats:', _chats);

    if (!_chats || _chats.length === 0) {
      console.log('No chats found, redirecting to home');
      return redirect('/');
    }

    let currentChat = _chats.find(chat => chat.id === parseInt(chatId));
    if (!currentChat) {
      console.log('Chat not found, redirecting to first chat');
      currentChat = _chats[0];
      return redirect(`/chat/${currentChat.id}`);
    }

    return (
      <div className="flex h-screen overflow-hidden bg-gray-100">
        {/* Chat Sidebar */}
        <div className="w-64 flex-shrink-0 bg-[#1E1915] text-white">
          <ChatSidebar chats={_chats} chatId={parseInt(chatId)} />
        </div>
        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* ChatComponent will now occupy the rest of the space */}
          <ChatComponent />
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error in ChatPage:', error);
    return <div>An error occurred. Please try again later.</div>;
  }
};

export default ChatPage;








