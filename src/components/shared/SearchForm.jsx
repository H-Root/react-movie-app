import { useContext } from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";
import Error from "./Error";
import OMDPContext from "../../context/OMDPContext";
import { AnimatePresence } from "framer-motion";

const SearchForm = () => {
  const { setSearch, handleOMDPSearch, search, error, loading } =
    useContext(OMDPContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOMDPSearch();
  };

  return (
    <div className="relative">
      <AnimatePresence exitBeforeEnter>
        {error.isError && <Error />}
      </AnimatePresence>
      <form onSubmit={handleSubmit} className="pt-7">
        <div className="form-control items-start">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="input input-primary input-bordered w-full pr-16"
              value={search}
              onInput={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              {loading ? (
                <div className={`${loading ? "animate-spin" : ""}`}>
                  <FaSpinner />
                </div>
              ) : (
                <FaSearch />
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
