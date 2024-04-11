import Nav from "./Nav";

const Home = () => {
  console.log(process.env.REACT_APP_BASE_URL);
  return (
    <>
      <Nav />
      <h1>Hello from Home page</h1>
    </>
  );
};

export default Home;
