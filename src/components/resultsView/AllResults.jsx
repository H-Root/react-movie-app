import { FaSpinner } from "react-icons/fa"
import { FcFilm } from "react-icons/fc"
import { useContext } from "react";
import OMDPContext from "../../context/OMDPContext";
import MovieCard from "./MovieCard";
import PageFlipper from "./PageFlipper";

// todo // ReMake The App Better

const AllResults = () => {
  const { loading, data } = useContext(OMDPContext);
  
  
  if ((!data || data === "" || data === undefined) && !loading) return <div className="flex justify-center items-center"><FcFilm className="rotate-90" size={60} /></div>;
  return loading ? (
    <div className="relative">
      <span className="animate-spin absolute">
        <FaSpinner size={30} />
      </span>
    </div>
  ) : (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-4">
        {data.data.Search.map((item) => {
          return (
              <MovieCard key={item.imdbID} movie={item} />
          );
        })}
      </div>
      <PageFlipper />
    </>
  );
};

export default AllResults;
