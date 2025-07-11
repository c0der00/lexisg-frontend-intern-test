import React, { useState, useRef, useEffect } from "react";

const InputBar = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
    autoResize();
  };

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px"; 
    }
  };

  const handleSubmit = () => {
    if (!text.trim()) return;
    setLoading(true);
    onSubmit(text);
    setText("");
    setTimeout(() => setLoading(false), 800);
  };

  useEffect(() => {
    autoResize();
  }, [text]);

  return (
    <div className="sticky p-8 bottom-0 bg-gray-800 pb-20 border-t">
      <div className="flex items-center">
        <textarea
          ref={textareaRef}
          className="flex-1 bg-gray-500 border rounded p-2 resize-none max-h-40 overflow-auto"
          placeholder="Ask a legal question..."
          value={text}
          onChange={handleChange}
          rows={2}
          style={{ overflow: 'hidden' }}
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          {loading ? "Loading..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default InputBar;
