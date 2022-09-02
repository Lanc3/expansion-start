import { ScrollContext } from '@/utils/scroll-observer';
import Image from 'next/image';
import React, { useCallback, useContext, useRef, useState } from 'react';

const Masthead : React.FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const refContainer = useRef<HTMLDivElement>(null);
    const {scrollY} = useContext(ScrollContext);
    let progress = 0;
    const {current: container} = refContainer;
    if(container) {
        progress = Math.min(1,scrollY/container.clientHeight);
    }
    const handleImageLoaded = useCallback(() => {
        setImageLoaded(true);
    },[]);
    return (
        <div ref={refContainer} style={{transform:`translateY(-${progress * 20}vh)`}} className='min-h-screen min-w-screen flex flex-col items-center justify-center sticky top-0 -z-10'>
            
            
            <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
                <source src={"video/new.webm"} type="video/webm; codecs=vp9"/>
            </video>

            <div className='p-12 font-bold z-10 text-[#06176D] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex justify-center flex-col'>
                <h2 className='mb-3 text-1xl xl:text-3xl tracking-tight'>
                    <span>
                        Web & App Development,
                    </span>
                </h2>
                <p className=''>
                    <span>Providing design and development to help your</span>
                </p>
                <p className=''>business expand in the digital world</p>
            </div>
            <div className={`flex-grow-0 pb-20 md:pd-10 transition-all duration-1000 ${imageLoaded ? 'opacity-100':'opacity-0 -translate-y-10'}`}>
                <Image src='/images/arrow.png' width={188/3} height={105/3}
                alt="scroll down" onLoad={handleImageLoaded}/>
            </div>
        </div>
    );
}

export default Masthead;