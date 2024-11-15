import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function ChatInput({ onSendMessage, disabled }) {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex gap-4 p-4 bg-white border-t">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask a question about your document..."
        className="flex-grow p-3 border rounded-lg resize-none h-[52px] focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        disabled={disabled}
      />
      <button
        onClick={handleSubmit}
        disabled={disabled || !message.trim()}
        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
}
