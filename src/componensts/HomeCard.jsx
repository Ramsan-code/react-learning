import { Link } from "react-router-dom";

function HomeCard({ url }) {
  return (
    <>
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 mb-3 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            <Link to={url}>{url.toUpperCase()}</Link>
          </div>
          <p className="text-gray-500 dark:text-gray-400">This is {url} page</p>
        </div>
      </div>
    </>
  );
}

export default HomeCard;
