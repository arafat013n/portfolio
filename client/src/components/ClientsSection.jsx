import React from "react";

const ClientsSection = () => {
    return (
        <section className="py-12" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
                    Clients
                </h2>
                <div className="container gap-8 mx-auto px-4 flex flex-wrap md:flex-nowrap items-center justify-center">
                    <div className="overflow-hidden shadow rounded-lg card-container">
                        <div className="card">
                            <div className="client-logo text-center">
                                <img
                                    src="/client1.jpg"
                                    alt="Client Logo"
                                    className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md"
                                />
                                <p className="client-name mt-2">
                                    Lorem Ipsum Inc.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden shadow rounded-lg card-container">
                        <div className="card">
                            <div className="client-logo text-center">
                                <img
                                    src="/client2.jpg"
                                    alt="Client Logo"
                                    className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md"
                                />
                                <p className="client-name mt-2">
                                    Dolor Sit Amet Co.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden shadow rounded-lg card-container">
                        <div className="card">
                            <div className="client-logo text-center">
                                <img
                                    src="/client3.jpg"
                                    alt="Client Logo"
                                    className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md"
                                />
                                <p className="client-name mt-2">
                                    Consectetur Ltd.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
