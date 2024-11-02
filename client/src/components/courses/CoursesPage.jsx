import React from "react";
import CourseSearch from "./CourseSearch";
import FeatureCard from "./FeatureCard";
import MainComponent from "./Browse Sections/MainComponent";

function CoursePage() {
  const features = [
    {
      icon: "bg-sky-400",
      url: "fa-solid fa-clock",
      title: "Lifetime access",
      description: "Without any time constraints learn the courses actively."
    },
    {
      icon: "bg-white",
      url: "fa-solid fa-chalkboard-user text-yellow-300",
      title: "Professional mentor",
      description: "Learn courses from professional mentor and level up your skill"
    },
    {
      icon: "bg-green-400",
      url: "fa-solid fa-certificate",
      title: "Official certificate",
      description: "Obtain official course certification by completing the course"
    },
    {
      icon: "bg-blue-500",
      title: "Offline mode",
      url: "fa-solid fa-circle-check",
      description: "Learn course material without internet connection"
    }
  ];
  return (
    <main className="flex overflow-hidden flex-col">
      <section className="flex flex-col pb-12 w-full max-md:max-w-full relative">
        <div className="mt-0 w-full max-md:max-w-full start-page my-5">
          <div className="md:ml-[45%] w-full md:w-[48%] md:mt-[-8%] mt-[60%] md:pr-0 pr-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a352c5a9ae04d4b1546ad2b60c296ca92649cba685bc203158371e8bf0b110f0?placeholderIfAbsent=true&apiKey=ee2b05a1b4fb470485852e4a897cb916" alt="" className="object-contain grow mt-20 w-full aspect-[1.21] max-md:mt-10 max-md:max-w-full" />
          </div>
        </div>
        <div className="mt-[-2%] self-center px-20 max-w-full bg-white rounded-[30px] w-[1229px] max-md:px-5">
          <div className="flex gap-5 max-md:flex-col">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
        <div className="md:w-[240px] w-[100%] h-[230px] bg-[#FFC107] rounded-xl absolute md:bottom-7 bottom-[34%] md:left-[33%]"></div>
      </section>
      <CourseSearch />
      <div className="bg-[#91C8E4] absolute md:w-[19.2%] w-[35%] h-[120px] top-[7%] md:top-[18%] z-20 rounded-lg"></div>
      <div className="bg-[#749BC2] absolute w-[250px] md:w-[350px] h-[150px] md:h-[240px] left-[10%] top-[15%] md:top-[20%] z-10 rounded-lg"></div>
      <h1 className="text-[#FF3D00] absolute top-[17.5%] text-[11px] md:text-[16px] md:top-[23%] left-[3.5%] z-20 font-medium">Guaranted & Certified</h1>
      <h1 className="font-black text-white md:text-4xl text-[22px] absolute md:top-[28%] top-[20%] left-[3.5%] z-20 md:w-[30%]">Improve Your <span className="text-[#FFC107]">Skills</span> <br /> by taking <span className="text-[#FFC107]"><span style={{ borderBottom: "4px solid #FF3D00" }}>High Quality</span> <br /> Classes!</span></h1>

      {/* Browse Courses */}
      <MainComponent/>

    </main>
  );
}

export default CoursePage;