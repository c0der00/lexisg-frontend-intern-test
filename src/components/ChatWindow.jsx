import React from 'react';
import MessageBubble from './MessageBubble';

const ChatWindow = ({ messages, onCitationClick }) => {
  
  
  return (
    
    <div className="p-4 overflow-y-auto" style={{ maxHeight: '75vh' }}>
      {messages.map((msg, index) => (
        console.log(msg),
        <MessageBubble
          key={index}
          sender={msg.sender}
          text={msg.text}
          citation={msg.citation}
          onCitationClick={onCitationClick}          
        />
      ))}
    </div>
  );
};

export default ChatWindow;
