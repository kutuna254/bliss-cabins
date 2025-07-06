import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Bliss Cabins</h1>
        <p>Nature. Peace. Escape.</p>
        <a href="#book" className="btn">Book Now</a>
      </header>

      <section className="cabins">
        <h2>Our Cabins</h2>
        <div className="types">
          <div><h3>Studio Cabin</h3><p>Ideal for solo travelers or couples.</p></div>
          <div><h3>1 Bedroom</h3><p>Spacious comfort for two.</p></div>
          <div><h3>2 Bedroom</h3><p>Perfect for families or small groups.</p></div>
        </div>
      </section>

      <section id="book">
        <h2>Book Your Stay</h2>
        <form>
          <input placeholder="Your Name" /><br />
          <input placeholder="Phone Number" /><br />
          <input type="date" /><input type="date" /><br />
          <select><option>Choose Cabin</option><option>Studio</option><option>1 Bedroom</option><option>2 Bedroom</option></select><br />
          <button type="submit">Send Booking</button>
        </form>
      </section>

      <footer>Contact us: blisscabins@gmail.com | Naivasha, Kenya</footer>
    </div>
  );
}

export default App;