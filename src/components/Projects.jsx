import React from "react";
import project1 from "../assets/images/raiden.jpeg";

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
                        <h1 className="text-xl font-semibold">
                            Raiden Shogun Web
                        </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Odio, ipsa.
                        </p>
                        <div className="flex gap-2 pt-2">
                            <div className="flex items-center">
                                <a
                                    href=""
                                    className="px-4 py-2 outline outline-primary text-primary rounded-3xl flex items-center "
                                >
                                    Github
                                    <i class="bx bx-right-arrow-alt "></i>
                                </a>
                            </div>
                            <div className="flex items-center">
                                <a
                                    href=""
                                    className="px-4 py-2 outline outline-primary text-primary rounded-3xl flex items-center "
                                >
                                    View
                                    <i class="bx bx-right-arrow-alt "></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 1 */}

                {/* Project 2 */}
                <div className="w-full h-auto bg-white shadow-lg rounded-xl ">
                    <img src={project1} alt="image" className="rounded-t-xl" />
                    <div className="p-5 space-y-2">
                        <h1 className="text-xl font-semibold">
                            Raiden Shogun Web
                        </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Odio, ipsa.
                        </p>
                        <div className="flex gap-2 pt-2">
                            <div className="flex items-center">
                                <a
                                    href=""
                                    className="px-4 py-2 outline outline-primary text-primary rounded-3xl flex items-center "
                                >
                                    Github
                                    <i class="bx bx-right-arrow-alt "></i>
                                </a>
                            </div>
                            <div className="flex items-center">
                                <a
                                    href=""
                                    className="px-4 py-2 outline outline-primary text-primary rounded-3xl flex items-center "
                                >
                                    View
                                    <i class="bx bx-right-arrow-alt "></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 2 */}
                
                {/* Project 3 */}
                <div className="w-full h-auto bg-white shadow-lg rounded-xl ">
                    <img src={project1} alt="image" className="rounded-t-xl" />
                    <div className="p-5 space-y-2">
                        <h1 className="text-xl font-semibold">
                            Raiden Shogun Web
                        </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Odio, ipsa.
                        </p>
                        <div className="flex gap-2 pt-2">
                            <div className="flex items-center">
                                <a
                                    href=""
                                    className="px-4 py-2 outline outline-primary text-primary rounded-3xl flex items-center "
                                >
                                    Github
                                    <i class="bx bx-right-arrow-alt "></i>
                                </a>
                            </div>
                            <div className="flex items-center">
                                <a
                                    href=""
                                    className="px-4 py-2 outline outline-primary text-primary rounded-3xl flex items-center "
                                >
                                    View
                                    <i class="bx bx-right-arrow-alt "></i>
                                </a>
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
