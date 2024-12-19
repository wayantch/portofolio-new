import React from "react";
import image from "../assets/images/image-1.jpg";
import image1 from "../assets/images/wayan.png";

import CV from "../assets/pdf/CV_WayanDevaAdhisthanaya.pdf";

const Hero = () => {
  return (
    <div id="beranda" className="relative h-screen">
      {/* Gambar latar belakang dengan overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.18)",
          zIndex: -1, // Pastikan gambar berada di belakang konten
        }}
      />
      {/* Konten dengan kecerahan penuh */}
      <div className="container relative h-full grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="flex flex-col justify-center text-white space-y-2 relative pt-20 md:pt-0">
          <p className="font-medium text-lg">Halo semuanya, nama saya...</p>
          <h1 className="text-2xl md:text-4xl font-semibold">
            Wayan Deva Adhisthanaya
          </h1>
          <p className="text-gray-200 text-sm md:text-lg">
            Saya merupakan lulusan dari SMK Binamitra jurusan Teknik Komputer
            dan Jaringan. Saat ini, saya tengah menempuh pendidikan di
            Politeknik Takumi dengan program studi Teknologi Informasi.
            Selain itu, saya juga memiliki minat terhadap budaya Jepang
          </p>
          <div className="pt-4">
            <a href={CV} target="_blank" className="px-8 py-3 bg-primary rounded-lg">
              Lihat Resume
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center relative">
          <div className="overflow-hidden bg-white rounded-[50%] w-64 md:w-80 h-auto shadow-xl shadow-white">
            <img src={image1} alt="" className="w-full h-full" />
          </div>
          <div className="absolute left-5 bottom-5 md:left-20 md:bottom-36">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10 md:size-16 text-orange-600 -rotate-12 hover:rotate-0 transition-all duration-300 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="absolute right-5 top-0 md:right-20 md:top-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10 md:size-16 text-[#ffe32d] hover:translate-y-2 hover:translate-x-3 transition-all duration-300 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
