import React, { useState } from 'react';
import { FileUpload } from './FileUpload';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { Bot } from 'lucide-react';
import axios from 'axios';

const ChatUIPage = () => {
  const [file, setFile] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Inside your App component
  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
    
    // Get the CSRF token from cookies
    const csrfToken = document.cookie.match(/csrftoken=([\w-]+)/)?.[1];

    // Prepare FormData to send with the POST request
    const formData = new FormData();
    formData.append('pdf_file', uploadedFile);

    // Make the POST request to the API
    axios.post('https://virtual-try-on.eshtyle.com/upload_pdf', formData,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data', // Ensure it's set correctly
        }
      }
    )
      .then(response => {
        console.log('File uploaded successfully:', response.data);
        setMessages([{
          role: 'assistant',
          content: `I've received your file: "${uploadedFile.name}". What would you like to know about it?`
        }]);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        setMessages([{
          role: 'assistant',
          content: 'There was an error uploading your file. Please try again.'
        }]);
      });
  };

  const handleSendMessage = (content) => {
    // Add user message
    const newMessages = [...messages, { role: 'user', content }];
    setMessages(newMessages);
    
    // Simulate AI response
    setIsProcessing(true);
    setTimeout(() => {
      setMessages([...newMessages, {
        role: 'assistant',
        content: "This is a simulated response. In a real implementation, this would process your question against the uploaded PDF content using RAG techniques."
      }]);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-blue-500" />
            <h1 className="text-xl font-semibold text-gray-900">PDF Chat Assistant</h1>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-8">
        {!file ? (
          <div className="max-w-xl mx-auto">
            <FileUpload onFileUpload={handleFileUpload} />
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden flex flex-col h-[calc(100vh-12rem)]">
            <div className="flex-grow overflow-y-auto">
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
              {isProcessing && (
                <div className="p-6">
                  <div className="flex gap-2 items-center text-gray-500">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>
            <ChatInput 
              onSendMessage={handleSendMessage}
              disabled={isProcessing}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default ChatUIPage;
