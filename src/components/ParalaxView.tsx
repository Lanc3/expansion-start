import React from "react";
import Tilt from 'react-parallax-tilt';

interface Props{
 source:string
}

const ParalaxView: React.FC<Props> = ({source}) => {
    return (
    <Tilt
    className="parallax-effect-img"
    tiltMaxAngleX={40}
    tiltMaxAngleY={40}
    perspective={800}
    transitionSpeed={1500}
    scale={1.1}
    gyroscope={true}>
       <img src={source} className="inner-element" alt="pic" />
    </Tilt>
    );
}

export default ParalaxView;