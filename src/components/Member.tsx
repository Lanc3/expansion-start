import Image from 'next/image';
import Link from 'next/link';
import React from "react";

interface Props{
    id:string
    name:string
    socialId:string
    link:string
    image:string
}

const Member: React.FC<Props> = ({image,id,name,socialId,link}) => {
    return (
        <div>
            <Image src={image} alt={name} width={1366} height={1366}/>
            <div className="text-[#F8780E] text-2xl xl:text-3xl">
                {name}
            </div>
            <div className="text-xl">
                <Link href={link}>
                    <a target="_blank">{socialId}</a>
                </Link>
            </div>
        </div>
    );
}

export default Member;