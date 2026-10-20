import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams, Link } from 'react-router-dom';
import Bredcrums from '../Components/Bredcrums/BredCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === parseInt(productId)) || all_product[0];

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>Product Not Found</h2>
        <Link to="/" style={{ color: 'var(--primary)', marginTop: '20px', display: 'inline-block' }}>
          ← Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="product-page-container">
      <Bredcrums product={product}/>
      <ProductDisplay product={product}/>
      <Description product={product}/>
      <RelatedProducts currentCategory={product.category}/>
    </div>
  )
}

export default Product