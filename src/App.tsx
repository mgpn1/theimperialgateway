import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Location from './components/Location';
import Gallery from './components/Gallery';
import Offers from './components/Offers';
import BookingWidget from './components/BookingWidget';

function App() {
  return (
    <div className="font-sans text-hyatt-darkGray">
      <Header />
      <main>
        <Hero />
        <BookingWidget />
        <Rooms />
        <Amenities />
        <Location />
        <Gallery />
        <Offers />
      </main>
      <Footer />
    </div>
  );
}

export default App;