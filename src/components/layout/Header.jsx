import { FcFilmReel } from "react-icons/fc";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-base-200">
      <header className="container mx-auto flex flex-row items-center justify-between px-4 py-4">
        <div className="flex flex-row gap-2">
          <FcFilmReel size={30} />
          <h1 className="text-2xl font-semibold">Movie App</h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <div>
            <Link to="/">
              <button className="btn btn-ghost">Home</button>
            </Link>
          </div>
          <div>
            <Link to="/about">
              <button className="btn btn-ghost">About</button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
