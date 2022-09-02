import Member from '@/components/Member';
import React from "react";

const AboutUs: React.FC = () => {
    return (
        <section className={"flex flex-col bg-white py-20 text-3xl md:text-4xl"}>
            <div className="container mx-auto px-11 text-[#06176D]">
                <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
                    <strong>As the digital world expands we are here to help your business expand with it.</strong> Our skills in user experience and development we will create an online presence that will match your business perfectly.
                </p>
            </div>
            <div className="container mx-auto px-11 text-center mt-28 text-[#06176D] pt-10">
                <h2 className="text-[#F8780E]">Our Team</h2>
                <div className="mt-2">Small, Dedicated Team</div>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid=cols-2 xl:grid-cols-2 gap-6 lg:gap-20">
                    <div><Member image="/images/profile.png" id="Aaron" name="Aaron Keating" socialId="@Lanc3" link="https://github.com/Lanc3"/></div>
                    <div><Member image="/images/nicola.jpg" id="Nicola" name="Nicola Byrne" socialId="@Rockella" link="https://github.com/Lanc3"/></div>

                </div>
            </div>
        </section>
    );
}

export default AboutUs;