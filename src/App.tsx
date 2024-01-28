import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import { IProduct } from "./interfaces/Product.interface";
import { getProducts } from "./api/ProductsApi";
import { searchProducts } from "./api/searchApi";

const App: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const [hasMore, setHasMore] = useState(true);
  const limit = 20;
  const [skip, setSkip] = useState(0);

  const loadInitialProducts = async () => {
    try {
      const newProducts = await getProducts(20, 0);

      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setProducts(newProducts);
        setSkip(20);
      }
    } catch (error) {
      console.error("Error loading initial products:", error);
    }
  };

  const search = async (query: string) => {
    try {
      const newProducts = await searchProducts(query);

      if (newProducts.length === 0) {
        setProducts(newProducts);
        setHasMore(false);
      } else {
        setProducts(newProducts);
      }
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  const loadMoreProducts = async () => {
    if (!hasMore) return;
    try {
      const newProducts = await getProducts(limit, skip);
      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setProducts([...products, ...newProducts]);
        setSkip((prevSkip) => prevSkip + limit);
      }
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={search} />
      <ProductList
        initialLoad={loadInitialProducts}
        loadMore={loadMoreProducts}
        hasMore={hasMore}
        products={products}
      />
    </div>
  );
};

export default App;
