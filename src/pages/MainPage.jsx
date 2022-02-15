import SearchForm from "../components/shared/SearchForm";
import AllResults from "../components/resultsView/AllResults";
import { useContext } from "react";
import OMDPContext from "../context/OMDPContext";
import AnimationCard from "../components/layout/AnimationCard";
import Details from "../components/detailes/Details";

const MainPage = () => {
  const { show } = useContext(OMDPContext);
  return (
    <AnimationCard>
      {show ? <Details /> : ""}
      <div>
        <SearchForm />
        <div className="mt-6"><AllResults /></div>
      </div>
    </AnimationCard>
  );
};

export default MainPage;
