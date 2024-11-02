import React from "react";

function CertificationSection() {
  return (
    <section className="flex flex-col px-2 w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/38a080ce70bc52faa931f16a1060f96c3701158609c43f6959212b29d026c993?placeholderIfAbsent=true&apiKey=15630d8a7aee4fc69f4720f636fae31b" className="object-contain self-center mt-1.5 max-w-full rounded-none aspect-square w-[100px]" alt="" />
      <h1 className="self-center mt-2 text-2xl font-medium text-black">Certifications</h1>
      <h2 className="self-start mt-2 ml-6 text-lg font-medium text-black">Certifications</h2>
      <input
        type="text"
        className="self-center px-2 ml-6 py-1 mt-1 max-w-full text-base font-medium bg-white rounded-xl border border-black border-solid text-stone-300 w-[367px]"
        placeholder="Enter Certification name"
        aria-label="Enter Certification name"
      />
      <h2 className="self-start mt-2 ml-6 text-lg font-medium text-black">Course Completed</h2>
      <input
        type="text"
        className="self-center px-2 ml-6 py-1 mt-1 max-w-full text-base font-medium bg-white rounded-xl border border-black border-solid text-stone-300 w-[367px]"
        placeholder="Enter completed courses"
        aria-label="Enter completed courses"
      />
    </section>
  );
}

export default CertificationSection;