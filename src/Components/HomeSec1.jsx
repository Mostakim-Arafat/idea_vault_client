import React from 'react';
const HomeSec1 = () => {
    const steps = [
    {
        number: '01',
        title: 'VAULT YOUR IDEAS',
        description: 'Securely log your raw innovation concepts, project mechanics, and developer frameworks instantly within your private dashboard.',
        // Using daisyUI's secondary brand color palette
        bgStyle: 'bg-secondary text-secondary-content',
    },
    {
        number: '02',
        title: 'ACCELERATE & OPTIMIZE',
        description: 'Leverage our integrated validation templates, sandbox trackers, and AI metrics to refine your concept into a production-ready model.',
        // Using daisyUI's warning brand color palette
        bgStyle: 'bg-warning text-warning-content',
    },
    {
        number: '03',
        title: 'CONNECT WITH SYNDICATES',
        description: 'Toggle your concept pipeline visibility to match with micro-VCs, angel syndicates, or top global startup accelerators.',
        // Using daisyUI's clean background surface token
        bgStyle: 'bg-base-100 text-base-content border border-base-300',
    },
];

    return (
        // bg-base-200 sets the canvas wrapper color automatically based on light/dark daisyUI themes
        <section className="bg-base-200 w-full min-h-screen p-6 md:p-16 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">

                {/* Top Header Row Layout */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-3">
                        {/* daisyUI Badge component */}
                        <span className="badge badge-neutral uppercase tracking-widest text-[10px] font-bold p-3">
                            Always Available
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none max-w-xl text-base-content">
                            Build Share <br /> & Grow
                        </h2>
                    </div>
                </div>

                {/* 3-Column structural daisyUI Card Layout grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className={`card rounded-xl p-8 md:p-10 min-h-[380px] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 shadow-sm ${step.bgStyle}`}
                        >
                            {/* Upper Section: Huge Counter Block Indicator */}
                            <div>
                                <span className="text-4xl md:text-5xl font-black block border-b border-current/10 pb-6 mb-6">
                                    {step.number}
                                </span>
                            </div>

                            {/* Lower Body Content Section */}
                            <div className="space-y-2">
                                <h3 className="card-title text-xl font-black tracking-tighter uppercase">
                                    {step.title}
                                </h3>
                                <p className="text-sm font-medium leading-relaxed opacity-85 max-w-[280px]">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HomeSec1;