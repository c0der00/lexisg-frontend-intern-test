import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js';

const PdfViewer = () => (
  <div className="h-[80vh] w-full max-w-3xl mx-auto overflow-y-auto border border-gray-300 rounded-md shadow-md bg-white p-4 flex flex-col items-center">
    <Document
      file="/Dani Vs Pritam (Future 10 at age 54-55).pdf"
      loading={<p className="text-center text-gray-500">Loading PDF...</p>}
      onLoadError={(error) => console.error("Error loading PDF:", error)}
    >
      <Page pageNumber={1} scale={1.5} renderTextLayer={false} renderAnnotationLayer={false} />
      <Page pageNumber={2} scale={1.5} renderTextLayer={false} renderAnnotationLayer={false} />
    </Document>
  </div>
);

export default PdfViewer;
