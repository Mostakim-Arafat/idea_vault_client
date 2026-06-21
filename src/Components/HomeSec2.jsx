import React from 'react';

const HomeSec2 = () => {
    const faqs = [
        {
            id: 1,
            question: "How secure is my data in the Idea Vault?",
            answer: "Every piece of innovation you log is protected with enterprise-grade encryption. Your personal ideas are completely hidden from public queries by default, ensuring your intellectual property remains secure until you decide to share or team up with investors."
        },
        {
            id: 2,
            question: "Can I selectively share ideas with active syndicate investors?",
            answer: "Yes. Within your profile settings or individual idea dashboards, you can toggle accessibility hooks. You can keep ideas entirely private, expose them strictly to verified micro-VCs and incubator accounts, or make them public to gather community interaction."
        },
        {
            id: 3,
            question: "How do community interactions and trending scores work?",
            answer: "Trending metrics are calculated automatically based on recent community engagement signals—such as upvotes, bookmark saves, and structural comments. Highly trending concepts gain extra exposure on the main exploration banner loops."
        }
    ];

    return (
        <section className="bg-base-100 text-base-content w-full py-16 px-6 md:py-24">
            <div className="max-w-3xl mx-auto w-full space-y-12">

                {/* Top Header Labels */}
                <div className="text-center space-y-3">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60">
                        FAQs
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight uppercase">
                        Get Clarity on <br /> The Idea Vault
                    </h2>
                </div>

                {/* Accordion List Container using daisyUI Join component */}
                <div className="join join-vertical w-full space-y-3 bg-transparent">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="collapse collapse-plus join-item border-b border-base-content/10 rounded-none transition-all duration-200 hover:bg-base-200/40"
                        >
                            {/* Invisible radio input manages open/close active states smoothly */}
                            <input type="radio" name="faq-accordion" defaultChecked={faq.id === 1} />

                            {/* Accordion Question Title */}
                            <div className="collapse-title text-base md:text-lg font-bold tracking-tight pr-12 pt-6 pb-6 text-left">
                                {faq.question}
                            </div>

                            {/* Accordion Answer Content */}
                            <div className="collapse-content">
                                <p className="text-sm md:text-base opacity-75 leading-relaxed max-w-2xl pb-6 text-left">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Call-To-Action Wrapper */}
                <div className="text-center pt-8 space-y-4 border-t border-base-content/5">
                    <div className="space-y-1">
                        <h4 className="text-md font-bold tracking-tight">
                            Still Have Questions? We Have Answers.
                        </h4>
                        <p className="text-xs opacity-60 max-w-md mx-auto leading-relaxed">
                            Our platform support team is always ready to help you optimize your pipeline vectors for venture scaling.
                        </p>
                    </div>

                    <button className="btn btn-neutral btn-sm rounded-full px-6 shadow-sm normal-case text-xs">
                        Contact Us
                    </button>
                </div>

            </div>
        </section>
    );
};

export default HomeSec2;