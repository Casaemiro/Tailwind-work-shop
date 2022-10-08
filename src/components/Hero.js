import Filters from "./Filters";
import HeroBigText from "./HeroBigText";
import HeroSmallText from "./HeroSmallText";
import Name from "./Name";
import SearchBar from "./SearchBar"
import TrendingSearches from "./TrendingSearches"


const Hero = () => {
    return (
        <div className="flex-column justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 py-5">
            <Filters />
            <HeroBigText />
            <HeroSmallText />
            <SearchBar />
            <TrendingSearches />
            <Name />
        </div>
    );
}

export default Hero;