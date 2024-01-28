import React, { useEffect } from "react";
import Slider from "react-slick";
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <InfiniteScroll
      dataLength={products.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<div>Loading...</div>}
      endMessage={<div>You have reached the end</div>}
      className="infinite-scroll"
    >
      {products.map((product) => (
        <div key={product.id} className="card">
          <Slider {...settings}>
            {product.images.map((image, index) => (
              <div className="img-slider">
                <img key={index} src={image} alt="Product" loading="lazy" />
              </div>
            ))}
          </Slider>
          <div>
            <h3>{product.title}</h3>
            <div className="ho-flex">
              <p>Price: ${product.price}</p>
              <p>Discount: {product.discountPercentage}%</p>
            </div>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
          </div>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default ProductList;
