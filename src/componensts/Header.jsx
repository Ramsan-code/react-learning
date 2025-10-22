import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={style.container}>
      <div style={style.logo}>
        <Link to="/" style={style.linkTitle}>
          <h1>ReactLearning</h1>
        </Link>
      </div>

      <nav style={style.nav}>
        <Link to="/" style={style.navLink}>
          Home
        </Link>
        <Link to="/introduction" style={style.navLink}>
          Introduction
        </Link>
        <Link to="/jsx" style={style.navLink}>
          JSX
        </Link>
        <Link to="/components" style={style.navLink}>
          Components
        </Link>
        <Link to="/props" style={style.navLink}>
          Props
        </Link>
        <Link to="/hooks" style={style.navLink}>
          Hooks
        </Link>
         <Link to="/forms" style={style.navLink}>
          Form
        </Link>
      </nav>
    </header>
  );
}

const style = {
  container: {
    backgroundColor: "#1d293d",
    height: "60px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  linkTitle: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
    letterSpacing: "0.5px",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.3s ease",
  },
};

export default Header;
