import React from "react";
import "../Css/home.css";
//import CarouselPage from "./CarouselPage";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      {/*<CarouselPage />*/}
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__productsRow">
        <Product
          id="1223434"
          title="TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control&QoS (Archer A7)"
          image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SX569_.jpg"
          price={79.99}
          rating={3}
        />
        <Product
          id="1235324"
          title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
          image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SY606_.jpg"
          price={23}
          rating={5}
        />
      </div>
      <div className="home__productsRow">
        <Product
          id="123114"
          title="HP 63 | Ink Cartridge | Black | F6U62AN"
          image="https://images-na.ssl-images-amazon.com/images/I/41Q-WavqjiL._AC_US160_.jpg"
          price={20.89}
          rating={4.49}
        />
        <Product
          id="123134"
          title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver"
          image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg"
          price={441.49}
          rating={5}
        />
        <Product
          id="121234"
          title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
          image="https://images-na.ssl-images-amazon.com/images/I/51wpN1SESrL._AC_US160_.jpgom/images/G/01/amazonglobal/images/email/asins/DURM-244337D24F250BSI._V533746475_.jpg"
          price={289.99}
          rating={5}
        />
      </div>
      <div className="home__productsRow">
        <Product
          id="12134"
          title="Sceptre 20 1600x900 75Hz Ultra Thin LED Monitor 2x HDMI VGA Built-in Speakers, Machine Black Wide Viewing Angle 170° (Horizontal) / 160° (Vertical)"
          image="https://images-na.ssl-images-amazon.com/images/I/41U7p-j9JyL._AC_US160_.jpg"
          price={74.97}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
