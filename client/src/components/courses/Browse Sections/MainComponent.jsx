import React from 'react';
import PopularCourses from './PopularCourses';
import Testimonials from './Testimonials';

const MainComponent = () => {
  return (
    <main className="flex flex-col mt-[-70%]">
      <PopularCourses />
      <Testimonials />
    </main>
  );
};

export default MainComponent;