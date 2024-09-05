import React from 'react';
import Link from 'next/link';
import { UserButton } from "@clerk/nextjs";

const ChatSidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <Link href="/" className="text-xl font-bold">Judicial AI</Link>
        <UserButton  />
      </div>
      <nav className="flex-1 overflow-y-auto">
        {/* Add chat history items here */}
        <div className="py-2">
          <h3 className="mb-2 text-sm font-semibold">Recent Chats</h3>
          {/* Map through recent chats and display them */}
        </div>
      </nav>
      <div className="mt-auto">
        <Link href="/" className="text-sm hover:underline">Back to homepage</Link>
      </div>
    </div>
  );
};

export default ChatSidebar;