import React from "react";
import image1 from "../assets/images/wayan.png";

const About = () => {
  return (
    <div id="#tentang" className="mt-10">
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold">Tentang</h1>
          <p className="text-lg text-gray-900">Kenal lebih dekat dengan saya</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-5 gap-4 p-4">
          <div className="col-span-1 md:col-span-2 md:row-span-4">
            <div className="relative">
              <div className="w-full md:w-1/2 h-64 outline outline-4 outline-primary rounded-lg mx-auto">
                <div className="w-full md:w-1/2 h-64 bg-zinc-100 rounded-lg shadow-md absolute md:left-[22%] md:top-[5%] overflow-hidden">
                  <img src={image1} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 md:row-span-4 md:col-start-3">
            <div className="">
              <div className="flex gap-2 items-center">
                <p className="text-2xl font-medium text-primary">HALOO!</p>
                <div className="w-10 h-2 bg-primary rounded-lg"></div>
              </div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Saya adalah seorang junior web developer
              </h1>
              <p className="mb-4">
                Saya memiliki minat besar dalam pengembangan website dan
                teknologi frontend. Dalam pekerjaan saya, saya fokus pada desain
                antarmuka yang intuitif dan pengalaman pengguna yang
                menyenangkan. Saya selalu bersemangat untuk belajar hal baru dan
                berkolaborasi dalam proyek pengembangan teknologi.
              </p>
              <hr />
              <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
                <div className="flex flex-col">
                  <div className="mb-2">
                    <h1 className="font-semibold">Nama:</h1>
                    <span>Wayan Deva Adhisthanaya</span>
                  </div>
                  <div className="mb-2">
                    <h1 className="font-semibold">Bidang:</h1>
                    <span>Frontend Developer</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="mb-2">
                    <h1 className="font-semibold">Email:</h1>
                    <span>
                      <a href="mailto:wayaandeva123@gmail.com">
                        wayaandeva123@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="mb-2">
                    <h1 className="font-semibold">Status:</h1>
                    <span>Mahasiswa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-5 md:mt-0 md:w-[70%] h-auto mx-auto p-5 shadow-lg bg-white rounded-3xl">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-xl font-semibold">Kampus Saya</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
              <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
            </svg>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            <a href="https://takumi.ac.id" target="_blank">
              Politeknik Takumi
            </a>{" "}
            | D3 - Teknologi Informasi
          </p>

          <p>
            Politeknik Takumi adalah institusi pendidikan yang fokus pada
            pengembangan keterampilan teknis dan praktis di bidang Teknologi
            Informasi. Program D3 Teknologi Informasi dirancang untuk
            menghasilkan lulusan yang siap kerja dengan keahlian dalam
            pemrograman, jaringan, dan pengembangan aplikasi modern.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
