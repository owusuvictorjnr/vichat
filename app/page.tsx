import React from 'react';
import ChatInput from './ChatInput';
import MessageList from './MessageList';

// Anything in this appDir is a server side and nw our index.js
const HomePage = () => {
  return (
    <main>
      {/* Message List */}

      <MessageList />

      {/* ChatInput */}

      <ChatInput />
    </main>
  );
};

export default HomePage;
