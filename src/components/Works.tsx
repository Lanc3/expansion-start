import ParalaxView from "./ParalaxView";
import { Tile, TileBackground, TileContent, TitleWrapper } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./Work";


const Works = () => {
    return (
        <TitleWrapper numberOfPages={3}>
            <TileBackground>
                <WorkBackground/>
            </TileBackground>
            <TileContent>
                <Tile page={0}
                 renderContent={({progress}) => (
                     <WorkContainer>
                         <WorkLeft progress={progress}>
                             <div className="px-5">We built</div>
                             <div className="px-5 text-4xl md:text-5xl font-semibold tracking-tight">Mindo - The Medical Independant News</div>
                         </WorkLeft>
                         <WorkRight progress={progress}>
                         <ParalaxView source={"/images/mindo.jpg"}/>
                         </WorkRight>
                     </WorkContainer>
                 )}
                 >
                 </Tile>
                 </TileContent>
            <TileContent>
                <Tile page={1}
                 renderContent={({progress}) => (
                     <WorkContainer>
                         <WorkLeft progress={progress}>
                             <div className="px-5">We built</div>
                             <div className="px-5 text-4xl md:text-5xl font-semibold tracking-tight">CrashEstimates - Get a quote to repair vehicle panels</div>
                         </WorkLeft>
                         <WorkRight progress={progress}>
                         <ParalaxView source={"/images/crash.jpg"}/>
                         </WorkRight>
                     </WorkContainer>
                 )}
                 >
                 </Tile>
                 </TileContent>
                 <TileContent>
                <Tile page={2}
                 renderContent={({progress}) => (
                     <WorkContainer>
                         <WorkLeft progress={progress}>
                             <div className="px-5">We built</div>
                             <div className="px-5 text-4xl md:text-5xl font-semibold tracking-tight">PriceMe - Getting a quote has never been easier.</div>
                         </WorkLeft>
                         <WorkRight progress={progress}>
                         <ParalaxView source={"/images/priceme.png"}/>
                         </WorkRight>
                     </WorkContainer>
                 )}
                 >
                 </Tile>
                 </TileContent>
        </TitleWrapper>
    );
}

export default Works;