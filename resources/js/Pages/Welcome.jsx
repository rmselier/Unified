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
                <section id="about" className="min-h-[70vh] flex items-center justify-center bg-gray-70 p-6">
                    <figure className="max-w-screen-md mx-auto text-center">
                        <svg className="w-10 h-10 mx-auto mb-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                        </svg>
                        <blockquote>
                            <p className="text-2xl italic font-medium text-gray-900 ">
                                "Unified Dance Festival was created to bring the best dancers, artists, and DJs of Kizomba, Bachata, and Salsa together, to unify the three dance cultures in the heart of Europe! <br/><br/>

                                With the support of an amazing team, we aspire to give our participants an unforgettable experience of the best Salsa beats, passionate and sensual Bachata, and Kizomba moves under one roof. <br/><br/>

                                Be part of our experience, <strong>LET’S BE UNIFIED!</strong>"
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                            <img className="w-16 h-16 rounded-full" src="/storage/uni_logo.jpg" alt="Unified Dance Festival Logo"/>
                            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                                <cite className="pe-3 font-medium text-gray-900 ">Unified Dance Festival Team</cite>
                                <cite className="ps-3 text-sm text-gray-500">Luxembourg</cite>
                            </div>
                        </figcaption>
                    </figure>
                </section>


                {/* Venue Sectie */}
                <section id="venue"
                         className="relative hero min-h-screen flex flex-col items-center justify-center text-black"
                         style={{
                             backgroundImage: "url('/storage/venue4.jpg')",
                             backgroundSize: "cover",
                             backgroundPosition: "center"
                         }}>

                    {/* Overlay voor een donkere tint op de achtergrond */}
                    <div className="absolute inset-0 bg-gray-100 bg-opacity-60"></div>

                    {/* Content in de Venue-sectie */}
                    <div className="relative z-10 hero-content flex flex-col items-center text-neutral-content text-center w-full">
                        <h1 className="text-6xl font-bold mb-6 text-red-900">Venue</h1>

                        <div className="flex w-full flex-col lg:flex-row items-center gap-6 p-6">

                            {/* Linkerzijde: Carousel */}
                            <div className="card bg-gray-50 bg-opacity-80 rounded-box h-80 w-full lg:w-1/2 flex justify-center items-center overflow-hidden">
                                <div className="carousel w-full h-full">
                                    {/* Slide 1 */}
                                    <div className={`carousel-item relative w-full h-full ${currentSlide === 1 ? "block" : "hidden"}`}>
                                        <img src="/storage/venue1.png" className="w-full h-full object-cover aspect-video rounded-box" alt="Slide 1" />
                                    </div>

                                    {/* Slide 2 */}
                                    <div className={`carousel-item relative w-full h-full ${currentSlide === 2 ? "block" : "hidden"}`}>
                                        <img src="/storage/venue2.jpg" className="w-full h-full object-cover aspect-video rounded-box" alt="Slide 2" />
                                    </div>

                                    {/* Slide 3 */}
                                    <div className={`carousel-item relative w-full h-full ${currentSlide === 3 ? "block" : "hidden"}`}>
                                        <img src="/storage/venue3.jpg" className="w-full h-full object-cover aspect-video rounded-box" alt="Slide 3" />
                                    </div>

                                    {/* Navigatie knoppen */}
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <button onClick={prevSlide} className="btn btn-circle opacity-50 hover:opacity-80 transition duration-300">❮</button>
                                        <button onClick={nextSlide} className="btn btn-circle opacity-50 hover:opacity-80 transition duration-300">❯</button>
                                    </div>
                                </div>
                            </div>

                            {/* Rechterzijde: Tekstsectie */}
                            <div className="card bg-gray-50 bg-opacity-80 rounded-box h-80 w-full lg:w-1/2 flex flex-col justify-center items-center p-6 text-center">
                                <h2 className="text-5xl font-bold text-yellow-600">Our Vision</h2>
                                <p className="mt-4 text-black">
                                    We bring together the best dancers, artists, and DJs from Kizomba, Bachata, and Salsa
                                    to create an unforgettable experience. Join us and be part of something truly special!
                                </p>
                            </div>
                        </div>

                        {/* Teller-sectie met meerdere animaties */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
                            {/* Teller 1 */}
                            <div x-data="{ count: 0 }" x-init="
        let start = 0;
        const end = 900;
        const duration = 3000; // Langzamere animatie (3s)
        const stepTime = Math.abs(Math.floor(duration / end));
        let timer = setInterval(() => {
            start += 5;
            if (start > end) {
                start = end;
                clearInterval(timer);
            }
            count = start;
        }, stepTime);
    " className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-60">
                                <h2 className="text-4xl font-bold text-yellow-600" x-text="count + ' m²'"></h2>
                                <p className="text-gray-700">Bachata Sensual</p>
                            </div>

                            {/* Teller 2 */}
                            <div x-data="{ count: 0 }" x-init="
        let start = 0;
        const end = 200;
        const duration = 2500; // Sneller klaar dan de 900m², maar nog steeds vloeiend
        const stepTime = Math.abs(Math.floor(duration / end));
        let timer = setInterval(() => {
            start += 2;
            if (start > end) {
                start = end;
                clearInterval(timer);
            }
            count = start;
        }, stepTime);
    " className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-60">
                                <h2 className="text-4xl font-bold text-yellow-600" x-text="count + ' m²'"></h2>
                                <p className="text-gray-700">Dominican Bachata Party Floor</p>
                            </div>

                            {/* Teller 3 */}
                            <div x-data="{ count: 0 }" x-init="
        let start = 0;
        const end = 900;
        const duration = 3000; // Zelfde snelheid als Teller 1
        const stepTime = Math.abs(Math.floor(duration / end));
        let timer = setInterval(() => {
            start += 5;
            if (start > end) {
                start = end;
                clearInterval(timer);
            }
            count = start;
        }, stepTime);
    " className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-60">
                                <h2 className="text-4xl font-bold text-yellow-600" x-text="count + ' m²'"></h2>
                                <p className="text-gray-700">Urban Kiz/Tarraxa/Ghetto Zouk Floor</p>
                            </div>

                            {/* Teller 4 */}
                            <div x-data="{ count: 0 }" x-init="
        let start = 0;
        const end = 200;
        const duration = 2500; // Zelfde als Teller 2
        const stepTime = Math.abs(Math.floor(duration / end));
        let timer = setInterval(() => {
            start += 2;
            if (start > end) {
                start = end;
                clearInterval(timer);
            }
            count = start;
        }, stepTime);
    " className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-60">
                                <h2 className="text-4xl font-bold text-yellow-600" x-text="count + ' m²'"></h2>
                                <p className="text-gray-700">Kizomba/Semba Party Floor</p>
                            </div>

                            {/* Teller 5 */}
                            <div x-data="{ count: 0 }" x-init="
        let start = 0;
        const end = 200;
        const duration = 2500; // Zelfde als Teller 2 en 4
        const stepTime = Math.abs(Math.floor(duration / end));
        let timer = setInterval(() => {
            start += 2;
            if (start > end) {
                start = end;
                clearInterval(timer);
            }
            count = start;
        }, stepTime);
    " className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-60">
                                <h2 className="text-4xl font-bold text-yellow-600" x-text="count + ' m²'"></h2>
                                <p className="text-gray-700">Salsa Floor</p>
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
