import React, { useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { IProductListProps } from "../interfaces/Product.interface";

const ProductList: React.FC<IProductListProps> = ({
  initialLoad,
  loadMore,
  hasMore,
  products,
}) => {
  useEffect(() => {
    initialLoad();
  }, []);

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<div>Loading...</div>}
      endMessage={<div>No more products to load</div>}
    >
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.images[0]} alt="Product" loading="lazy" />
          <div>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default ProductList;
