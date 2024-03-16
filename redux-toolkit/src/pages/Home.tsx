import Products from "../Components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="heading">Welcome to Redux toolkit</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
