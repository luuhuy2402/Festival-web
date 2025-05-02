function App() {
    return (
        <>
            <header className="relative h-screen bac">
                <div className="absolute top-0 left-0 w-full z-20 flex items-center justify-between py-5 px-10 text-white ">
                    <span className="font-HarleyStyle text-4xl font-bold">
                        H
                    </span>
                    <nav className="font-Staatliches">
                        <ul className="flex items-center justify-between gap-x-20 text-[17px] uppercase">
                            <li>
                                <a href="#" className="link-underline pb-0.5">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="link-underline pb-0.5">
                                    Pages
                                </a>
                            </li>

                            <li>
                                <a href="#" className="link-underline pb-0.5">
                                    Releases
                                </a>
                            </li>
                            <li>
                                <a href="#" className="link-underline pb-0.5">
                                    Artists
                                </a>
                            </li>
                            <li>
                                <a href="#" className="link-underline pb-0.5">
                                    Events
                                </a>
                            </li>
                            <li>
                                <a href="#" className="link-underline pb-0.5">
                                    Videos
                                </a>
                            </li>
                            <li>
                                <a href="#" className="link-underline pb-0.5">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" className="link-underline pb-0.5">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="link-underline pb-0.5">
                                    Elements
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* <ul className="flex items-center justify-between gap-x-10">
                        <li>
                            <a href="#">
                                <i
                                    className="fa-brands fa-facebook-f"
                                    style={{
                                        fontSize: "20px",
                                    }}
                                ></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i
                                    className="fa-brands fa-instagram"
                                    style={{
                                        fontSize: "20px",
                                    }}
                                ></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i
                                    className="fa-solid fa-music"
                                    style={{
                                        fontSize: "20px",
                                    }}
                                ></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i
                                    className="fa-solid fa-cart-shopping"
                                    style={{
                                        fontSize: "20px",
                                    }}
                                ></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i
                                    className="fa-solid fa-bars"
                                    style={{
                                        fontSize: "20px",
                                    }}
                                ></i>
                            </a>
                        </li>
                    </ul> */}
                    <ul className="flex items-center justify-between gap-x-10">
                        <li className="group relative">
                            <a href="#" className="hover:opacity-60 transition">
                                <i className="fa-brands fa-facebook-f text-[20px]"></i>
                            </a>
                            <span className="absolute -bottom-8 left-10  mb-2 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                                Facebook
                            </span>
                        </li>
                        <li className="group relative">
                            <a href="#" className="hover:opacity-60 transition">
                                <i className="fa-brands fa-instagram text-[20px]"></i>
                            </a>
                            <span className="absolute -bottom-8 left-10 mb-2 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                                Instagram
                            </span>
                        </li>
                        <li className="group relative">
                            <a href="#" className="hover:opacity-60 transition">
                                <i className="fa-solid fa-music text-[20px]"></i>
                            </a>
                            <span className="absolute -bottom-8 left-10 mb-2 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                                Music
                            </span>
                        </li>
                        <li className="group relative">
                            <a href="#" className="hover:opacity-60 transition">
                                <i className="fa-solid fa-cart-shopping text-[20px]"></i>
                            </a>
                            <span className="absolute -bottom-8 left-10 mb-2 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                                Cart
                            </span>
                        </li>
                        <li className="">
                            <a href="#" className="hover:opacity-60 transition">
                                <i className="fa-solid fa-bars text-[20px]"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source
                        src="https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/People-Watching-Concert-FREE-STOCK-FOOTAGE-1080p-FULL-HD.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Overlay */}
                <div class="absolute inset-0 bg-black/50 "></div>

                {/*  Content */}
                <div class="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-4">
                    <h1 class="text-[200px]  mb-6 font-HarleyStyle tracking-wider">
                        Herion Fest
                    </h1>

                    <div class="flex justify-around text-xl mb-20 w-full font-Montserrat font-semibold">
                        <div>
                            <div class="text-[54px] pb-3">00</div>
                            <div className="">Hours</div>
                        </div>
                        <div>
                            <div class="text-[54px] pb-3">00</div>
                            <div>Minutes</div>
                        </div>
                        <div>
                            <div class="text-[54px] pb-3">00</div>
                            <div>Seconds</div>
                        </div>
                    </div>

                    <a
                        href="#"
                        class="font-Staatliches bg-red-500  hover:bg-white text-white hover:text-black px-14 py-6 rounded-md font-semibold transition tracking-widest"
                    >
                        GET YOUR PASS
                    </a>
                </div>
            </header>
            <main>
                <section className="py-32 px-12">
                    <div className="grid grid-cols-3 gap-x-12">
                        <article class="col-span-1 relative h-[480px] overflow-hidden rounded-md shadow-lg transition-transform duration-300 hover:-translate-y-2">
                            <figure class="w-full h-full">
                                <img
                                    src="https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/joseph-young-IOzGybDmKR8-unsplash.jpg"
                                    alt="Performance Day 1"
                                    class="w-full h-full object-cover"
                                />
                                <figcaption class="absolute inset-0 flex items-center flex-col justify-center text-white gap-y-8">
                                    <header class="">
                                        <h2 class="font-HarleyStyle text-7xl">
                                            $45
                                        </h2>
                                    </header>
                                    <div class="text-center">
                                        <p class="items-center text-lg font-Montserrat">
                                            Lorem ipsum • consectetur <br />
                                            adip •incididunt
                                        </p>
                                    </div>
                                    <button
                                        href="#"
                                        className="px-14 py-6 bg-[#ee2851] hover:bg-white hover:text-black font-Staatliches text-lg tracking-wider"
                                    >
                                        Pass Day I
                                    </button>
                                </figcaption>
                            </figure>
                        </article>

                        <article class="col-span-1 relative h-[480px] overflow-hidden rounded-md shadow-lg transition-transform duration-300 hover:-translate-y-2">
                            <figure class="w-full h-full">
                                <img
                                    src="https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/austin-neill-SLUeuL-mrRg-unsplash.jpg"
                                    alt="Performance Day 1"
                                    class="w-full h-full object-cover"
                                />
                                <figcaption class="absolute inset-0 flex items-center flex-col justify-center text-white gap-y-8">
                                    <header class="">
                                        <h2 class="font-HarleyStyle text-7xl">
                                            $65
                                        </h2>
                                    </header>
                                    <div class="text-center">
                                        <p class="items-center text-lg font-Montserrat">
                                            Lorem ipsum • consectetur <br />
                                            adip •incididunt
                                        </p>
                                    </div>
                                    <button
                                        href="#"
                                        className="px-14 py-6 bg-[#ee2851] hover:bg-white hover:text-black font-Staatliches text-lg tracking-wider"
                                    >
                                        Pass Day II
                                    </button>
                                </figcaption>
                            </figure>
                        </article>
                        <article class="col-span-1 relative h-[480px] overflow-hidden rounded-md shadow-lg transition-transform duration-300 hover:-translate-y-2">
                            <figure class="w-full h-full">
                                <img
                                    src="https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/neonbrand-MENIBa0eZeA-unsplash.jpg"
                                    alt="Performance Day 1"
                                    class="w-full h-full object-cover"
                                />
                                <figcaption class="absolute inset-0 flex items-center flex-col justify-center text-white gap-y-8">
                                    <header class="">
                                        <h2 class="font-HarleyStyle text-7xl">
                                            $75
                                        </h2>
                                    </header>
                                    <div class="text-center">
                                        <p class="items-center text-lg font-Montserrat">
                                            Lorem ipsum • consectetur <br />
                                            adip •incididunt
                                        </p>
                                    </div>
                                    <button
                                        href="#"
                                        className="px-14 py-6 bg-[#ee2851] hover:bg-white hover:text-black font-Staatliches text-lg tracking-wider"
                                    >
                                        Pass 2 Days
                                    </button>
                                </figcaption>
                            </figure>
                        </article>
                    </div>
                </section>
            </main>
            <footer className="bg-black pb-12">
                <section className="w-full h-full px-10 py-28 flex justify-between items-center text-white">
                    <div className="flex flex-col gap-y-6">
                        <h3 className="font-Staatliches text-xl">Stay Tuned</h3>
                        <p className="font-Montserrat text-md">
                            herion@wolfthemes.com <br />
                            (485) 209-5175
                        </p>

                        <div className="flex gap-x-10">
                            <a href="#">
                                <i className="fa-brands fa-instagram text-2xl"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-facebook-f text-2xl"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-x-twitter text-2xl"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-spotify text-2xl"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-youtube text-2xl"></i>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-6 items-center">
                        <h3 className="font-HarleyStyle text-8xl">Herion</h3>
                        <div className="font-Montserrat text-center">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing
                                <br /> elit,
                                <br /> sed do eiusmod tempor incididunt ut
                                labore et dolore
                                <br /> magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-y-6">
                        <h3 className="font-Staatliches text-xl">
                            Quick Links
                        </h3>
                        <nav>
                            <ul className="flex flex-col items-end gap-y-2">
                                <li>
                                    <a href="#">My Account</a>
                                </li>
                                <li>
                                    <a href="#">Shipping & Returns</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
                <div className="font-Montserrat text-[#a2a2a2] text-sm flex items-center justify-center gap-x-7 ">
                    <span>© 2025 WolfThemes Records</span>
                    <ul className="flex items-center justify-center gap-x-5">
                        <li>
                            <a href="#">Privacy policy</a>
                        </li>
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#">Press</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li>
                            <a href="#">Cookie Policy</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default App;
