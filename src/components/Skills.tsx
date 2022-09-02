import React, { useContext, useRef } from "react";
import s from '../styles/skills.module.css';
import { ScrollContext } from "../utils/scroll-observer";

const opacityForBlock = (sectionProgress: number,blockNumber:number) => {
    const progress = sectionProgress -blockNumber;
    if(progress >=0 && progress <1) return 1
    return 0.2
}

const Skills:React.FC = () => {
    const {scrollY} = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    const numOfPages = 6;
    let progress = 0;
    const{current:container} = refContainer
    if(container){
        const {clientHeight,offsetTop} = container;
        const screenHeight = window.innerHeight;
        const halfScreen = screenHeight/2;
        const percentY = Math.min(clientHeight +halfScreen,Math.max(-screenHeight,scrollY - offsetTop)+halfScreen)/clientHeight;
        progress = Math.min(numOfPages -0.5,Math.max(0,percentY*numOfPages))
    }

    return (
        <div ref={refContainer} className="bg-[#06176D] text-white">
            <div className='p-12 font-bold z-10 text-[#fff] text-center flex-1 flex justify-center flex-col'>
                <h2 className='text-1xl xl:text-3xl tracking-tight'>
                    <span>
                        Web & App Development
                    </span>
                </h2>
  
            </div>
            <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-2xl md:text-6xl lg:text-6xl tracking-tight font-semibold">
            <div className="leading=[1.15]">
            <div className="text-[#F8780E]" style={{opacity:opacityForBlock(progress,0)}}>In 5 simple steps.</div>
            <span className={`text-[#F8780E] py-5 inline-block after:content-['_']`} style={{opacity:opacityForBlock(progress,1)}}>
                Contact us and we will get back to you as soon as possible.
            </span>
            <span className={`text-[#F8780E] py-5 inline-block after:content-['_']`} style={{opacity:opacityForBlock(progress,2)}}>
                We will then discuss the project and create a plan for the development.
            </span>
            <span className={` text-[#F8780E] py-5 inline-block after:content-['_']`} style={{opacity:opacityForBlock(progress,3)}}>
                We will break down a payment plan that suits you best.</span>
            <span className={`text-[#F8780E] py-5 inline-block after:content-['_']`} style={{opacity:opacityForBlock(progress,4)}}>
                Full transparency in development and no hidden fees. We will work with you to make sure you are satisfied with the result.
            </span>
            <span className={`${s.skillText} text-[#F8780E] inline-block`} style={{opacity:opacityForBlock(progress,5)}}>
                We will Deploy your project and make it available to you.
            </span>
            </div>
            </div>
            
        </div>
    );
}

export default Skills;