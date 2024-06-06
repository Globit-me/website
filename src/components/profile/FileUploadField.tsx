import React from "react";

interface FileUploadFieldProps {
  id: string;
  name: string;
  placeholder: string;
}

const FileUploadField: React.FC<FileUploadFieldProps> = ({
  id,
  name,
  placeholder,
}) => (
  <div className="relative flex flex-col mb-4">
    <input
      type="file"
      id={id}
      name={name}
      className="peer block w-full border rounded px-3 py-3 leading-tight border-custom-blue focus:outline-none hover:ring-2 hover:ring-custom-blue focus:ring-2 focus:ring-custom-blue focus:border-custom-blue transition duration-300"
      placeholder={placeholder}
    />
    <label
      htmlFor={id}
      className="absolute left-4 top-0 px-1 text-xs bg-white text-custom-black -translate-y-1/2 peer-focus:text-custom-blue transition duration-300"
    >
      {placeholder}
    </label>
  </div>
);

export default FileUploadField;
