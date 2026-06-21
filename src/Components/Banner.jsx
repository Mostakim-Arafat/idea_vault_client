import React from 'react';

const Banner = () => {
    const slides = [
        {
            id: "slide1",
            next: "#slide2",
            prev: "#slide3",
            tag: "Ignite Innovation",
            title: "Where Groundbreaking Ideas Meet Execution",
            description: "Securely lock your startup concepts in your private vault and showcase your vision to elite incubator panels.",
            // Replace these URLs with your actual image paths from your /public folder or external host
            bgImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600&auto=format&fit=crop')",
            textColor: "text-white",
            ctaText: "Explore Ideas"
        },
        {
            id: "slide2",
            next: "#slide3",
            prev: "#slide1",
            tag: "Venture Ecosystem",
            title: "Decentralized Funding for Next-Gen Creators",
            description: "Skip traditional gatekeepers. Push your concept directly to verified angel syndicates and micro-VCs.",
            bgImage: "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600&auto=format&fit=crop')",
            textColor: "text-white",
            ctaText: "Awarded Thoughts"
        },
        {
            id: "slide3",
            next: "#slide1",
            prev: "#slide2",
            tag: "Hyper-Growth Toolkit",
            title: "Accelerate Your Path to Product-Market Fit",
            description: "Access interactive project validation sandboxes engineered to take you from MVP to validation scaling.",
            bgImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop')",
            textColor: "text-white",
            ctaText: "Lates Ideas"
        }
    ];

    return (
        <div className="w-full bg-base-100 py-12 px-6">
            <div className="max-w-6xl mx-auto">

                {/* daisyUI Native Carousel component */}
                <div className="carousel w-full rounded-2xl shadow-xl min-h-[440px]">
                    {slides.map((slide) => (
                        <div
                            id={slide.id}
                            key={slide.id}
                            className={`carousel-item relative w-full flex items-center p-8 md:p-16 bg-cover bg-center ${slide.textColor}`}
                            style={{ backgroundImage: slide.bgImage }}
                        >
                            {/* Dark overlay to make text readable over images */}
                            <div className="absolute inset-0 bg-neutral-950/50 z-0 rounded-2xl" />

                            {/* Changed from <a> back to a static <div> so clicking text does nothing */}
                            <div className="max-w-2xl space-y-6 z-10 block text-left">
                                <span className="badge badge-outline border-current text-current uppercase tracking-widest text-[10px] font-bold px-3 py-2">
                                    {slide.tag}
                                </span>
                                <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                                    {slide.title}
                                </h1>
                                <p className="text-sm md:text-base opacity-85 max-w-xl">
                                    {slide.description}
                                </p>

                                {/* Only the button is wrapped in the navigation anchor link now */}
                                <div className="pt-2">
                                    <a href={slide.next} className="btn btn-primary uppercase text-xs tracking-wider inline-flex">
                                        {slide.ctaText}
                                    </a>
                                </div>
                            </div>

                            {/* Navigation Arrows on Left and Right sides */}
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
                                <a href={slide.next} className="btn btn-circle btn-sm bg-base-100/30 border-none text-white hover:bg-base-100/60" aria-label="Next slide">❯</a>
                                <a href={slide.next} className="btn btn-circle btn-sm bg-base-100/30 border-none text-white hover:bg-base-100/60" aria-label="Next slide">❯</a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Banner;