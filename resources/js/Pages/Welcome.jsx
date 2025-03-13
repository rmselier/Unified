import { useState } from "react";
import Layout from '@/Layouts/Layout.jsx';

export default function Welcome() {
    const [currentSlide, setCurrentSlide] = useState(1); // Start bij slide 1

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev % 3) + 1);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 1 ? 3 : prev - 1));
    };

    return (
        <Layout>
            <div className="min-h-screen bg-gray-100">
                {/* Home Sectie */}
                <section id="home" className="hero min-h-screen"
                         style={{
                             backgroundImage: "url('/storage/unified_banner.jpg')",
                         }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Welcome to Our Website!</h1>
                            <a href="#tickets" className="btn bg-red-900 text-white">Join us!</a>
                        </div>
                    </div>
                </section>

                {/* About Sectie */}
                <section id="about" className="h-screen flex items-center justify-center bg-gray-50 p-6">
                    <div className="text-center max-w-2xl">
                        <h1 className="text-6xl font-bold text-yellow-600">About Us</h1>
                        <p className="mt-4 text-black">
                            Unified Dance Festival was created to bring the best dancers, artists, and DJs of Kizomba, Bachata, and Salsa together, to unify the three dance cultures in the heart of Europe! <br/><br/>

                            With the support of an amazing team, we aspire to give our participants an unforgettable experience of the best Salsa beats, passionate and sensual Bachata, and Kizomba moves under one roof. <br/><br/>

                            Be part of our experience, <strong>LET’S BE UNIFIED!</strong>
                        </p>
                    </div>
                </section>

                {/* Venue Sectie */}
                <section id="venue"
                         className="hero min-h-screen flex flex-col items-center justify-center text-black"
                         style={{
                             backgroundImage: "url('/storage/venue4.jpg')",
                             backgroundSize: "cover",
                             backgroundPosition: "center"
                         }}>

                    {/* Overlay voor een donkere tint op de achtergrond */}
                    <div className="hero-overlay bg-opacity-60"></div>

                    {/* Content in de Venue-sectie */}
                    <div className="hero-content flex flex-col items-center text-neutral-content text-center w-full">
                        <h1 className="text-6xl font-bold mb-6 text-white">Venue</h1>

                        <div className="flex w-full flex-col lg:flex-row items-center gap-6 p-6">
                            {/* Linkerzijde: Carousel */}
                            <div className="card bg-gray-50 bg-opacity-80 rounded-box h-80 w-full lg:w-1/2 flex justify-center items-center">
                                <div className="carousel w-full max-w-md">
                                    {/* Slide 1 */}
                                    <div className={`carousel-item relative w-full ${currentSlide === 1 ? "block" : "hidden"}`}>
                                        <img src="/storage/venue1.png" className="w-full rounded-lg" alt="Slide 1" />
                                    </div>

                                    {/* Slide 2 */}
                                    <div className={`carousel-item relative w-full ${currentSlide === 2 ? "block" : "hidden"}`}>
                                        <img src="/storage/venue2.jpg" className="w-full rounded-lg" alt="Slide 2" />
                                    </div>

                                    {/* Slide 3 */}
                                    <div className={`carousel-item relative w-full ${currentSlide === 3 ? "block" : "hidden"}`}>
                                        <img src="/storage/venue3.jpg" className="w-full rounded-lg" alt="Slide 3" />
                                    </div>

                                    {/* Navigatie knoppen */}
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <button onClick={prevSlide} className="btn btn-circle">❮</button>
                                        <button onClick={nextSlide} className="btn btn-circle">❯</button>
                                    </div>
                                </div>
                            </div>

                            {/* Rechterzijde: Tekstsectie */}
                            <div className="card bg-gray-50 bg-opacity-80 rounded-box h-80 w-full lg:w-1/2 flex flex-col justify-center items-center p-6 text-center">
                                <h2 className="text-5xl font-bold text-yellow-600">Our Vision</h2>
                                <p className="mt-4 text-gray-800">
                                    We bring together the best dancers, artists, and DJs from Kizomba, Bachata, and Salsa
                                    to create an unforgettable experience. Join us and be part of something truly special!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Tickets Sectie */}
                <section id="tickets" className="h-screen flex items-center justify-center bg-pink-400 text-white">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Tickets</h1>
                        <p className="mt-2 text-lg">We are passionate about delivering quality services.</p>
                    </div>
                </section>

                {/* Hotel Sectie */}
                <section id="hotel" className="h-screen flex items-center justify-center bg-white text-black">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Hotel</h1>
                        <p className="mt-2 text-lg">Explore what we have to offer.</p>
                    </div>
                </section>

                {/* Contact Sectie */}
                <section id="contact" className="h-screen flex items-center justify-center bg-pink-400 text-white">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Contact</h1>
                        <p className="mt-2 text-lg">We would love to hear from you!</p>
                        <button className="mt-4 px-6 py-2 bg-white text-red-500 rounded-xl shadow hover:bg-gray-300 transition">
                            Get in Touch
                        </button>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
