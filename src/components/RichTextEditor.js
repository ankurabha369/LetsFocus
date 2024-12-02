import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill's snow theme
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import htmlToPdfmake from "html-to-pdfmake";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const RichTextEditor = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  const printAsPdf = () => {
    const html = content;
    const pdfContent = htmlToPdfmake(html);
    const documentDefinition = { content: pdfContent };
    pdfMake.createPdf(documentDefinition).download("notes.pdf");
  };

  return (
    <div className="p-2 mt-7 bg-white/25 backdrop-blur-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Rich Text Editor</h2>
      <div className="mb-2 pb-5">
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleContentChange}
          placeholder="Write your notes here..."
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image"],
              ["clean"],
            ],
          }}
          className="h-[60vh]  md:h-[60vh] w-full"
        />
      </div>
      {/* Print Button */}
      <div className="flex justify-end relative bottom-8 mr-2">
        <button
          onClick={printAsPdf}
          className="bg-blue-500 text-white px-4 py-2  rounded"
        >
          <FontAwesomeIcon icon={faPrint} />
        </button>
      </div>
    </div>
  );
};

export default RichTextEditor;
