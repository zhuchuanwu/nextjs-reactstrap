import React from 'react';
import TopHeader from '../TopHeader/TopHeader';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

export default function Header() {
  return (
    <div className="header-section" id="header">
      <TopHeader />
      <HeaderMenu />
    </div>
  );
}
