import { useEffect, useState } from "react";
import { Header } from "./components";
import { Footer } from "./components";
import { ProductCard } from "./components";
import { products } from "./constants";

function App() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Catalog Loaded");
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header setSearch={setSearch} />

      <div className="container my-4">
        <div className="row justify-content-center">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
