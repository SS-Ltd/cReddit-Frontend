import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { notify } from "./CustomToast";

function ImageUpload({ id }) {
  const [image, setImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    notify("Changes Saved");
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      id={id}
      className={`rounded-lg ${
        !image && "p-5 border-dashed border-2  border-gray-300 "
      } max-w-xs h-40 ${
        image && "w-40"
      } flex flex-col justify-center items-center text-center ${
        isDragActive ? "bg-reddit_greenyDark" : "bg-gray-700"
      } text-gray-600 font-plex text-sm font-bold mt-2`}
    >
      <input {...getInputProps()} />

      {image && (
        <img
          className="object-cover w-full h-full rounded-lg"
          src={image}
          alt="preview"
        />
      )}

      {!image && (
        <svg className="mb-2" viewBox="0 0 36 36" version="1.1">
          <circle cx="18" cy="18" fill="#fff" r="18" stroke="inherit"></circle>
          <path
            clipRule="evenodd"
            d="m25.2 16.8001h-6v-6c0-.6624-.5364-1.2-1.2-1.2s-1.2.5376-1.2 1.2v6h-6c-.6636 0-1.20002.5376-1.20002 1.2s.53642 1.2 1.20002 1.2h6v6c0 .6624.5364 1.2 1.2 1.2s1.2-.5376 1.2-1.2v-6h6c.6636 0 1.2-.5376 1.2-1.2s-.5364-1.2-1.2-1.2z"
            fill="inherit"
            fillRule="evenodd"
          ></path>
        </svg>
      )}
    </div>
  );
}

export default ImageUpload;
