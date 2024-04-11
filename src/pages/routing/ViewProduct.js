import { useParams } from "react-router-dom";
import Nav from "./Nav";

const ViewProduct = () => {
  const params = useParams();

  const { product_id } = params;

  console.log(product_id);
  return (
    <>
      <Nav />
      <h1>Hello from View Product page</h1>
    </>
  );
};

export default ViewProduct;
