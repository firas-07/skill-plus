import React from "react";
import ArticleCard from "./ArticleCard";
import FilterSection from "./FilterSection";
import SearchBar from "./SearchBar";

const articleData = [
  {
    company: "Wipro",
    title: "Wipro: All you need to know About the company",
    description: "One of the most important and frequently asked question",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/24d65e91d1152057f1a3a1d7609cd5bc57c3b7a49db9aeb03079b94f86f5f547?placeholderIfAbsent=true&apiKey=ee2b05a1b4fb470485852e4a897cb916"
  },
  {
    company: "Accenture",
    title: "Accenture - All you need to know about the company",
    description: "One of the most important and frequently asked question",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f647721a92a68d8ffb789d66320333b600a3bd95bde6a83f5f4dedf4c237a84f?placeholderIfAbsent=true&apiKey=ee2b05a1b4fb470485852e4a897cb916"
  },
  {
    company: "Cognizant",
    title: "Cognizant - All you need to know about the company",
    description: "One of the most important and frequently asked question",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c45f3de569679d4697987b26388829038bdebcdc58ddbfb88c6b0569e1fd4393?placeholderIfAbsent=true&apiKey=ee2b05a1b4fb470485852e4a897cb916"
  },
  {
    company: "Infosys",
    title: "Infosys - All you need to know about the company",
    description: "One of the most important and frequently asked question",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/591a7c6bfaf021c03ece8af5f94617c20bd25e578052c740363c3c7100dae74d?placeholderIfAbsent=true&apiKey=ee2b05a1b4fb470485852e4a897cb916"
  }
];

function ArticlesPage() {
  return (
    <main className="flex overflow-hidden flex-col px-2 pt-5 md:pt-10 pb-5 max-md:px-5 rounded-xl mx-4 md:mx-10">
      <section className="flex flex-col items-start px-10 w-full rounded-3xl max-md:px-5 max-md:max-w-full">
        <header className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1176px] max-md:max-w-full">
          <h1 className="text-4xl font-bold text-[#E6B9A6]">Articles</h1>
          <SearchBar />
        </header>
        <hr className="shrink-0 self-stretch mt-6 w-full h-0.5 border-2 hidden md:block border-white border-solid" />
        <div className="flex flex-2 gap-5 justify-between w-full max-w-[1137px] max-md:max-w-full">
          <FilterSection />
          <div className="shrink-0 border-2 hidden md:block border-white border-solid h-[800px] w-[3px]" />
          <div className="flex flex-col self-end max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex flex-col md:w-[160%] md:grid md:grid-rows-2 md:grid-cols-2 md:justify-around">
                {articleData.map((article, index) => (
                  <ArticleCard key={index} {...article} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ArticlesPage;