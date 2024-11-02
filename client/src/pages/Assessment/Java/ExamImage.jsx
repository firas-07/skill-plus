import React from 'react';

function ExamImage() {
  return (
    <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff445b7b94cc3579fd6f8abad3379c9d3056248e0e5083d569098a0156e07351?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75"
        alt="Illustration of online proctoring"
        className="object-contain grow w-full aspect-[0.93] max-md:max-w-full"
      />
    </div>
  );
}

export default ExamImage;