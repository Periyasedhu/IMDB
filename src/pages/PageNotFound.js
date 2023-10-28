import { useEffect } from "react";
import Button from "../components/Button";
import PageNotfound from "../images/pagenotfound.png";
import { Link } from "react-router-dom";
function PageNotFound() {
  useEffect(() => {
    document.title = `Page Not Found/movieApp`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-grey-700 font-bold my-10 dark:text-white">
            404, Oops!
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotfound}
              alt="404 Page Not Found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>&larr; Back</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PageNotFound;
