import React from "react";

const About = () => {
    return (
        <div className="mt-10">
            <div className="container">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-semibold">Tentang</h1>
                    <p className="text-lg text-gray-900">
                        Kenal lebih dekat dengan saya
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-5 gap-4 p-4">
                    <div className="col-span-1 md:col-span-2 md:row-span-4">
                        <div className="relative">
                            <div className="w-full md:w-1/2 h-64 outline outline-4 outline-primary rounded-lg mx-auto">
                                <div className="w-full md:w-1/2 h-64 bg-secondary rounded-lg absolute md:left-[22%] md:top-[5%]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 md:row-span-4 md:col-start-3">
                        <div className="">
                            <div className="flex gap-2 items-center">
                                <p className="text-2xl font-medium text-primary">
                                    HALOO!
                                </p>
                                <div className="w-10 h-2 bg-primary rounded-lg"></div>
                            </div>
                            <h1 className="text-2xl font-semibold text-gray-900">
                                Saya adalah seorang junior web developer
                            </h1>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsa cupiditate excepturi at.
                                Dicta saepe aperiam nihil quasi, accusamus
                                neque, excepturi nam nisi voluptate cum sunt
                                atque sapiente illum nesciunt aliquam.
                            </p>
                            <hr />
                            <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
                                <div className="flex flex-col">
                                    <div className="mb-2">
                                        <h1 className="font-semibold">Nama:</h1>
                                        <span>Wayan Deva Adhisthanaya</span>
                                    </div>
                                    <div className="mb-2">
                                        <h1 className="font-semibold">
                                            Bidang:
                                        </h1>
                                        <span>Frontend Developer</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="mb-2">
                                        <h1 className="font-semibold">
                                            Email:
                                        </h1>
                                        <span>
                                            <a href="mailto:wayaandeva123@gmail.com">
                                                wayaandeva123@gmail.com
                                            </a>
                                        </span>
                                    </div>
                                    <div className="mb-2">
                                        <h1 className="font-semibold">
                                            Status:
                                        </h1>
                                        <span>Mahasiswa</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-5 md:mt-0 md:w-2/3 h-auto mx-auto p-5 shadow-lg bg-white rounded-3xl">
                    <div className="flex items-center gap-2 mb-2">
                        <h1 className="text-xl font-semibold">Kampus Saya</h1>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                            />
                        </svg>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                        D3 - Teknologi Informasi
                    </p>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Pariatur suscipit consequatur odio fuga
                        laboriosam, corrupti velit illum cumque, distinctio
                        nobis temporibus eaque assumenda repellat sapiente ab
                        sint, perferendis maiores in officia quia animi
                        blanditiis ipsam. Quasi vel qui magni quae.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
