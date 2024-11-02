import React from "react";

function FileUploadSection({ title}) {
  return (
    <section className={`flex flex-col px-2 mt-1.5 w-full`}>
      <h2 className="self-start mt-1 ml-6 text-lg font-medium text-black">{title}</h2>
      <input type="file" className="ml-6 mt-3"/>
    </section>
  );
}

export default FileUploadSection;