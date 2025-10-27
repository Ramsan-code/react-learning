import HomeCard from "../componensts/HomeCard";

function Home() {
  return (
    <>
      <HomeCard url="introduction" text="React intro page  show 404 error"/>
      <HomeCard url="jsx" />
      <HomeCard url="components" />
      <HomeCard url="props" />
      <HomeCard url="hooks" />
      <HomeCard url="forms" />
    </>
  );
}

export default Home;
