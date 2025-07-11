import React from 'react';

const MessageBubble = ({ sender, text, citation, onCitationClick }) => {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} my-2`}>
      <div className={`max-w-[80%] px-4 py-3 rounded-lg ${isUser ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'} shadow`}>
        <p className="whitespace-pre-wrap">{text}</p>

        {citation && (
          <div className="mt-3 text-sm">
            <div className="text-gray-300 mb-1">{citation.text}</div>
            <div>
              <span className="font-semibold">Source: </span>
              <button
                onClick={() => onCitationClick(citation)}
                className="text-white underline hover:text-blue-800"
              >
                {citation.source}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
