import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline"],
    ["blockquote", "code-block"],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    ["link", "image", "video"],
    [{ script: "sub" }, { script: "super" }],
    ["clean"],
  ],
};

const formats = [
  "background",
  "bold",
  "color",
  "font",
  "inline",
  "italic",
  "link",
  "size",
  "strike",
  "script",
  "underline",
  "blockquote",
  "header",
  "indent",
  "list",
  "align",
  "direction",
  "code-block",
  "formula",
  "image",
  "video",
];

export const Editor = () => {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      placeholder="Begin writing your blog!"
      className=""
      modules={modules}
      formats={formats}
      style={{ height: "100%", width: "100%" }}
    />
  );
};
