import Image from "next/image";
import React, { useCallback, useState } from "react";
// import moment from 'moment';

const MHeader : React.FC = () => {
  const [width, setWidth] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
},[]);

  return (
    <div className=" flex flex-col items-center justify-center fixed top-0 z-50 w-full bg-white h-28">



   <div className={`flex-grow-0 transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}><Image src="/images/logoText.svg" width={300} height={50} alt='logo' onLoad={handleImageLoaded}/>
   <div className="flex flex-row items-center justify-center">

  </div>
   </div>
 
 


</div>
  );
}

export default MHeader;