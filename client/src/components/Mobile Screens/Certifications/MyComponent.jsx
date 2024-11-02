import React from "react";
import CertificationSection from "./CertificationSection";
import FileUploadSection from "./FileUploadSection";
import ContinueButton from "./ContinueButton";
import {Link} from 'react-router-dom'
function MyComponent() {
  return (
    <main className="flex overflow-hidden flex-col mx-auto w-full bg-stone-100 max-w-[480px]">
      <Link to={'/yourdetails'}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a159dadb6347f73a3ead4b76adf34d418f1cbe9741cc9f6e02b1800a5d2d14c5?placeholderIfAbsent=true&apiKey=15630d8a7aee4fc69f4720f636fae31b" className="object-contain mt-7 ml-3 w-10 aspect-square" alt="" />
      </Link>
      <CertificationSection />
      <FileUploadSection
        title="Upload Certificates"
        buttonText="Choose file"
      />
      <FileUploadSection
        title="Upload Internship Certificates"
      />
      <ContinueButton />
    </main>
  );
}

export default MyComponent;