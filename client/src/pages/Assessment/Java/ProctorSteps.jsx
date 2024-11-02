import React from 'react';

const steps = [
  "Students and candidates log in to the Exam Online Platform and select their exam.",
  "The Procter verifies the identity of the test-taker through facial recognition and government-issued identification.",
  "The proctor monitors the test-taking environment through live video and screen monitoring.",
  "The test is conducted under strict proctoring guidelines and incidents are reported in real time."
];

function ProctorSteps() {
  return (
    <>
      {steps.map((step, index) => (
        <div key={index} className="flex flex-wrap gap-3.5 mt-14 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7ab48088b1f350aaa140f1c228fa871c8eaf2651f87ca9d3e7ab0f903800efa?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75"
            alt=""
            className="object-contain shrink-0 self-start w-8 aspect-[1.1]"
          />
          <div className="flex-auto w-[699px] max-md:max-w-full">{step}</div>
        </div>
      ))}
    </>
  );
}

export default ProctorSteps;