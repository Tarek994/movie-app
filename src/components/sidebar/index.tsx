import HomeIcon from "../icons/home-icon";
import MovieIcon from "../icons/movie-icon";
import bookmarkIcon from "../icons/bookmark-icon";
import TvSeriesIcon from "../icons/series-icon";

const navLinks = [
  {
    name: "Home",
    icone: HomeIcon,
    link: "/",
  },
  {
    name: "Movies",
    icone: MovieIcon,
    link: "/movies",
  },
  {
    name: "Tv Series",
    icone: TvSeriesIcon,
    link: "/tv-series",
  },
  {
    name: "Bookmarks",
    icon: bookmarkIcon,
    link: "/bookmarks",
  },
];
const Sidebar = () => {
  return <div>Sidebar</div>;
};

export default Sidebar;