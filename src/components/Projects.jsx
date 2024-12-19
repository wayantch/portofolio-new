import React from "react";
import project1 from "../assets/images/takumi.png";
import project2 from "../assets/images/raiden.png";
import project3 from "../assets/images/agency.png";

const Projects = () => {
  return (
    <div className="mt-16">
      <div className="mb-5 text-center">
        <h1 className="text-3xl font-semibold">Proyek</h1>
        <p className="text-lg text-gray-900">
          Beberapa proyek yang pernah saya kerjakan
        </p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="w-full h-auto bg-white shadow-lg rounded-xl ">
          <img src={project1} alt="image" className="rounded-t-xl" />
          <div className="p-5 space-y-2">
            <h1 className="text-xl font-semibold">Politeknik Takumi</h1>
            <p className="line-clamp-3">
              Situs resmi Politeknik Takumi yang menyediakan informasi lengkap
              tentang program studi, kegiatan kampus, dan layanan akademik.
              Jelajahi inovasi teknologi dan budaya belajar yang ditawarkan di
              sini.
            </p>
            <div className="flex gap-2 pt-2">
              <div className="flex items-center">
                <button
                  onClick={() => window.open("https://takumi.ac.id/", "_blank")}
                  class="h-fit w-fit px-[1em] py-[0.25em] border-[1px] text-primary border-primary rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
                  <p>Selengkapnya</p>
                  <svg
                    class="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                    stroke="currentColor"
                    stroke-width="1"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      stroke-linejoin="round"
                      stroke-linecap="round"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Project 1 */}

        {/* Project 2 */}
        <div className="w-full h-auto bg-white shadow-lg rounded-xl ">
          <img src={project2} alt="image" className="rounded-t-xl" />
          <div className="p-5 space-y-2">
            <h1 className="text-xl font-semibold">Raiden Shogun</h1>
            <p className="line-clamp-3">
              Website ini dibuat untuk hiburan belaka. Website ini dibuat menggunakan React Js dan Tailwind CSS.
              Fitur-fitur yang tersedia di website ini yaitu dapat menampilkan
              informasi tentang Raiden Shogun, dapat menampilkan galeri foto
              Raiden Shogun, dan dapat menampilkan video-video tentang Raiden
              Shogun.
            </p>
            <div className="flex gap-2 pt-2">
              <div className="flex items-center">
                <button
                  onClick={() =>
                    window.open("https://raiden-ei.netlify.app/", "_blank")
                  }
                  class="h-fit w-fit px-[1em] py-[0.25em] border-[1px] text-primary border-primary rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
                  <p>Selengkapnya</p>
                  <svg
                    class="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                    stroke="currentColor"
                    stroke-width="1"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      stroke-linejoin="round"
                      stroke-linecap="round"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Project 2 */}

        {/* Project 3 */}
        <div className="w-full h-auto bg-white shadow-lg rounded-xl ">
          <img src={project3} alt="image" className="rounded-t-xl" />
          <div className="p-5 space-y-2">
            <h1 className="text-xl font-semibold">Digital Agency</h1>
            <p className="line-clamp-3">
              Digital Agency yang menyediakan jasa pembuatan website, branding, dan
              digital marketing. Kami membantu bisnis Anda tumbuh dengan
              menggunakan teknologi dan kreativitas yang tinggi. Mulai dari
              desain website yang menarik hingga strategi pemasaran yang efektif,
              kami siap membantu Anda mencapai tujuan bisnis.
            </p>
            <div className="flex gap-2 pt-2">
              <div className="flex items-center">
                <button
                  onClick={() =>
                    window.open("https://agency-wyn.netlify.app/", "_blank")
                  }
                  class="h-fit w-fit px-[1em] py-[0.25em] border-[1px] text-primary border-primary rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
                  <p>Selengkapnya</p>
                  <svg
                    class="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                    stroke="currentColor"
                    stroke-width="1"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      stroke-linejoin="round"
                      stroke-linecap="round"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Project 3 */}
      </div>
    </div>
  );
};

export default Projects;
