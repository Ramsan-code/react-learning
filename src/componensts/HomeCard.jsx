import { Link } from "react-router-dom";

function HomeCard({ url, text }) {
  return (
    <>
      <div className="content-container">
        <div>
          <div>
            <Link to={url}>
              <h1>{url.toUpperCase()}</h1>
            </Link>
            <p className="">This is {url} page</p>
          </div>
          <div className="content-body">{text}React-learning</div>
        </div>
      </div>
    </>
  );
}

export default HomeCard;






