import { ScrollContext } from '../utils/scroll-observer';
import React,{useRef,useContext} from 'react';
interface WrapperProps {
    numberOfPages: number;
}

interface TileContextValue{
    currentPage: number;
    numberOfPages: number;
}

export const TileContext = React.createContext<TileContextValue>({
    numberOfPages:0,
    currentPage:0
});
export const TitleWrapper :React.FC<WrapperProps> = ({numberOfPages,children}) => {
    const {scrollY} = useContext(ScrollContext);
    const tileRef = useRef<HTMLDivElement>(null);
    const {current:container} = tileRef;
    let currentPage = 0;
    if(container){
        const {clientHeight,offsetTop} = container;
        const screenHeight = window.innerHeight;
        const halfScreenHeight = screenHeight/2;
        const percentY = (scrollY - offsetTop)/(clientHeight - screenHeight);
        currentPage = Math.min(numberOfPages -0.5,Math.max(0,percentY*numberOfPages))
    }
    return (
        <TileContext.Provider value={{numberOfPages,currentPage}}>
        <div ref={tileRef} className="relative bg-black text-white" style={{height:numberOfPages*100 + 'vh'}}>
            {children}
        </div>
        </TileContext.Provider>
    )
}

export const TileBackground :React.FC = ({children}) => (
    <div className='absolute h-full w-full'>{children}</div>
);

export const TileContent :React.FC = ({children}) => (
    <div className='sticky top-0 h-screen overflow-hidden'>{children}</div>
);
interface Props{
    page:number,
    renderContent : (props: {progress:number}) => any
}
export const Tile :React.FC<Props> = ({page,renderContent}) => {
    const {currentPage,numberOfPages} = useContext(TileContext);
    const progress = Math.max(0,currentPage - page);
    const refContainer = useRef<HTMLDivElement>(null);
    let opacity = Math.min(1,Math.max(0,progress*4))
    if(progress > 0.75 && page < numberOfPages -1){
        opacity = Math.max(0,(1.0 - progress) *4);
    }
    return (
            <div
            ref={refContainer}
            className="absolute top-0 w-full text-white"
            style={{pointerEvents:progress >= 0 || progress >= 1 ? 'none' : undefined,
            opacity
            }}
            >
                {renderContent({progress})}
            </div>
    )
};