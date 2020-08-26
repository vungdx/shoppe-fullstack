import React from 'react';
import Navbar from '../component/header/Navbar';
import Search from '../component/header/Search';
import Footer from '../component/footer/Footer';
import Category from '../component/content/Category';
import HomeFilter from '../component/content/HomeFilter';
import HomeProducts from '../component/content/HomeProducts';

function HomeScreen(props) {

  return (
    <div className="HomeScreen">
      <header className="header">
        <div className="grid">
          <Navbar />
          <Search />
        </div >
      </header>

      <div className="content">
        <div className="grid">
          <div className="grid__row padding-top">
            <div className="grid__column-2">
              <Category />
            </div>
            <div className="grid__column-10">
              <HomeFilter />
              <HomeProducts />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomeScreen;
