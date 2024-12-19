import React from 'react'

const Contact = () => {
  return (
    <div className="mt-16">
      <div className="container">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Kontak</h1>
          <h1>Hubungi Saya</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Informasi Kontak</h2>
            <p className="mt-4">
              Anda dapat menghubungi saya melalui media sosial yang saya miliki
              atau dengan mengisi form di bawah ini.
            </p>
            <div className="mt-6">
              <p className="text-lg font-semibold">Media Sosial:</p>
              <ul className="list-disc ml-6">
                <li>
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/yanss_wyn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline">
                    @yanss_wyn
                  </a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/wayan-deva?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline">
                    Wayan Deva Adhisthanaya
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Form Kontak</h2>
            <form className="mt-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-bold mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="border-2 border-gray-300 p-2 w-full rounded-md"
                  placeholder="Nama Anda"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border-2 border-gray-300 p-2 w-full rounded-md"
                  placeholder="Alamat Email Anda"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  className="border-2 border-gray-300 p-2 w-full rounded-md"
                  placeholder="Pesan Anda"
                  rows="3"></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact

