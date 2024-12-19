import React from "react";

const Keahlian = () => {
  return (
    <div className="bg-gray-100 py-12 mt-10">
      <div className="container">
        <h2 className="text-3xl font-semibold text-primary text-center mb-8">
          Keahlian Saya
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Keahlian 1 */}
          <div className="w-full rounded-xl bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
            <div className="w-24 h-24 bg-blue-500 rounded-full absolute -right-5 -top-7">
              <p className="absolute bottom-6 left-7 text-white text-2xl">01</p>
            </div>
            <div className="fill-blue-500 w-12">
            <i className="bx bx-code-block text-blue-500 text-6xl mb-2"></i>
            </div>
            <h1 className="font-semibold text-xl text-primary">Front-end Development</h1>
            <p className="text-sm text-zinc-500 leading-6">
              Menguasai HTML, CSS, JavaScript, dan framework seperti React.
            </p>
          </div>

          {/* Keahlian 2 */}
          <div className="w-full rounded-xl bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
            <div className="w-24 h-24 bg-blue-500 rounded-full absolute -right-5 -top-7">
              <p className="absolute bottom-6 left-7 text-white text-2xl">02</p>
            </div>
            <div className="fill-blue-500 w-12">
            <i className="bx bx-server text-blue-500 text-6xl mb-2"></i>
            </div>
            <h1 className="font-semibold text-xl text-primary">Front-end Development</h1>
            <p className="text-sm text-zinc-500 leading-6">
              Menguasai HTML, CSS, JavaScript, dan framework seperti React.
            </p>
          </div>

          {/* Keahlian 3 */}
          <div className="w-full rounded-xl bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
            <div className="w-24 h-24 bg-blue-500 rounded-full absolute -right-5 -top-7">
              <p className="absolute bottom-6 left-7 text-white text-2xl">03</p>
            </div>
            <div className="fill-blue-500 w-12">
            <i className="bx bx-paint text-blue-500 text-6xl mb-2"></i>
            </div>
            <h1 className="font-semibold text-xl text-primary">Front-end Development</h1>
            <p className="text-sm text-zinc-500 leading-6">
              Menguasai HTML, CSS, JavaScript, dan framework seperti React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keahlian;
