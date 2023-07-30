import React from "react";
import "./hastalarımız.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
const Hastalarımız = () => {
  return (
    <>
      <h2 style={{ margin: "30px 0", textAlign: "center", color: "#6DBEBF" }}>
        Hastalarımızdan Gelenler
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper hastalarımız"
      >
        <SwiperSlide>
          <img src={require("../../../images/homefoto/homevector/avm.jpg")} />
          <h4>Dikiştutmaz SABRİ</h4>
          <p>
            Ben kanal tedavisi ve dolgu işlemi yaptırdım öncelikle zamana karşı
            hassas oluşları, gerekli ilgi ve hassasiyet gösterdiklerini
            gördüm.Şuan dişimde herhangi sıkıntım kalmadı.Kocaman Teşekkürler.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../../../images/homefoto/homevector/aw.jpg")} />
          <h4>Tango NECLA</h4>
          <p>
            Ben kanal tedavisi ve dolgu işlemi yaptırdım öncelikle zamana karşı
            hassas oluşları, gerekli ilgi ve hassasiyet gösterdiklerini
            gördüm.Şuan dişimde herhangi sıkıntım kalmadı.Kocaman Teşekkürler.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../../../images/homefoto/homevector/avm.jpg")} />
          <h4>Susta KAZIM</h4>
          <p>
            Ben kanal tedavisi ve dolgu işlemi yaptırdım öncelikle zamana karşı
            hassas oluşları, gerekli ilgi ve hassasiyet gösterdiklerini
            gördüm.Şuan dişimde herhangi sıkıntım kalmadı.Kocaman Teşekkürler.
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hastalarımız;
