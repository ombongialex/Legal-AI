import React from 'react';
import { auth } from "@clerk/nextjs/server";
import ChatComponent from '../../../components/ChatComponent';
import ChatSidebar from '@/components/ChatSidebar';

export default async function ChatPage({ params }: { params: { chatId: string } }) {
  const { userId } = await auth();
  if (!userId) {
    return <div>Please log in to view this page.</div>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <ChatSidebar />
      <div className="flex-1 flex flex-col">
        <ChatComponent chatId={params.chatId} />
      </div>
    </div>
  );
}