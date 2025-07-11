import React, { useEffect, useRef } from 'react';
import PdfViewer from './PdfViewer';

const PdfModal = ({ citation, onClose }) => {
  const paraRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (paraRef.current) {
        paraRef.current.scrollIntoView({ behavior: 'smooth' });
        paraRef.current.classList.add('bg-yellow-100');
      }
    }, 500);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded w-[90%] h-[90%] relative overflow-auto">
        <button
          className="absolute top-2 right-2 text-black font-bold"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-lg font-semibold mb-3">{citation.source}</h2>
         <PdfViewer/>
      </div>
    </div>
  );
};

export default PdfModal;
