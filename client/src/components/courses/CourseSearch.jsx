import React from "react";

function CourseSearch() {
  return (
    <form className="flex gap-10 self-center text-[12px] md:text-[16px] py-1 pr-1 pl-4 mt-4 max-w-full bg-white rounded-[30px] md:w-[462px] absolute md:left-10 z-20 top-[40%] md:top-[60%]">
      <label htmlFor="courseSearchInput" className="sr-only">Search your course</label>
      <input
        id="courseSearchInput"
        type="text"
        placeholder="search your course"
        className="grow shrink my-auto text-zinc-500 w-[153px] bg-transparent border-none focus:outline-none"
      />
      <button type="submit" className="px-5 py-1.5 text-white bg-orange-600 rounded-[30px]">
        find course
      </button>
    </form>
  );
}

export default CourseSearch;