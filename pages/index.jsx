import React from 'react';
import Header from '../components/Header/Header';
import HomeSlider from '../components/index/HomeSlider/HomeSlider';
import HeadDefault from '../layout/head/HeadDefault';
export default function index() {
  return (
    <div>
      <HeadDefault
        title="Employees | Next.JS with Reactstrap (React dashboard web application)"
        description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
      />
      <Header />
      <HomeSlider />
    </div>
  );
}
