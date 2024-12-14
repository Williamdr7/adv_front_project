import React, { useState } from "react";
import negotiationsData from "@/data/negotiations.json";

export default function Negotiations() {
  const [activeNegotiation, setActiveNegotiation] = useState<number | null>(
    null,
  );
  const [newMessage, setNewMessage] = useState("");

  const toggleNegotiation = (id: number) => {
    setActiveNegotiation(activeNegotiation === id ? null : id);
  };

  const handleSendMessage = (id: number) => {
    if (newMessage.trim()) {
      const negotiation = negotiationsData.find(neg => neg.id === id);
      if (negotiation) {
        negotiation.messages.push({ sender: "user", text: newMessage });
        setNewMessage("");
      }
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Negotiations</h1>
      {negotiationsData.map(negotiation => (
        <div key={negotiation.id} className="mb-4 border rounded-lg">
          <div
            className="p-4 cursor-pointer bg-gray-200"
            onClick={() => toggleNegotiation(negotiation.id)}
          >
            {negotiation.title}
          </div>
          {activeNegotiation === negotiation.id && (
            <div className="p-4">
              <div className="mb-4">
                {negotiation.messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}
                  >
                    <span
                      className={`inline-block p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                    >
                      {msg.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex">
                <input
                  type="text"
                  value={newMessage}
                  onChange={e => setNewMessage(e.target.value)}
                  className="flex-grow border rounded-l-lg p-2"
                  placeholder="Type your message..."
                />
                <button
                  onClick={() => handleSendMessage(negotiation.id)}
                  className="bg-blue-500 text-white rounded-r-lg p-2"
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
