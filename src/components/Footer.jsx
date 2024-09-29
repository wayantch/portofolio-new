import React from "react";

const Footer = () => {
    return (
        <>
            <div className="mt-16 bg-primary w-full h-auto py-6">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-white">
                        {/* Logo */}
                        <div className="flex flex-col items-center">
                            <img
                                src="/path-to-your-logo.png"
                                alt="Logo"
                                className="w-32 mb-2"
                            />
                            <p className="text-center">
                                Wayan Deva Adhisthanaya
                            </p>
                        </div>

                        {/* Halaman */}
                        <div className="flex flex-col">
                            <h4 className="font-semibold text-lg">Halaman</h4>
                            <ul className="space-y-2 mt-2">
                                <li>
                                    <a href="/" className="hover:underline">
                                        Beranda
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/about"
                                        className="hover:underline"
                                    >
                                        Tentang
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/portfolio"
                                        className="hover:underline"
                                    >
                                        Portofolio
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/contact"
                                        className="hover:underline"
                                    >
                                        Kontak
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Media Sosial */}
                        <div className="flex flex-col">
                            <h4 className="font-semibold text-lg">
                                Media Sosial
                            </h4>
                            <ul className="space-y-2 mt-2">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/username"
                                        className="hover:underline"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/username"
                                        className="hover:underline"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/username"
                                        className="hover:underline"
                                    >
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Hubungi Saya */}
                        <div className="flex flex-col">
                            <h4 className="font-semibold text-lg">
                                Hubungi Saya
                            </h4>
                            <p>
                                Email:{" "}
                                <a
                                    href="mailto:wayaandeva123@gmail.com"
                                    className="hover:underline"
                                >
                                    wayaandeva123@gmail.com
                                </a>
                            </p>
                            <p>
                                Telepon:{" "}
                                <a
                                    href="tel:+62123456789"
                                    className="hover:underline"
                                >
                                    +62 123 456 789
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center bg-blue-600">
                <p className="text-sm text-white py-2">
                    &copy; {new Date().getFullYear()} Wayan Deva Adhisthanaya.
                    Semua Hak Dilindungi.
                </p>
            </div>
        </>
    );
};

export default Footer;
