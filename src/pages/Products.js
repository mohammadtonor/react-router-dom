import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "P1", title: "Product1" },
  { id: "P2", title: "Product2" },
  { id: "P3", title: "Product3" }
];

function ProductsPage() {
  const renderedProducts = PRODUCTS.map((prod) => (
    <li key={prod.id}>
      <Link to={`/products/${prod.id}`}>{prod.title}</Link>
    </li>
  ));

  return (
    <>
      <h1>The Product Page</h1>
      <ul>{renderedProducts}</ul>
    </>
  );
}

export default ProductsPage;
