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
            
        </>
    );
}

export default App;
