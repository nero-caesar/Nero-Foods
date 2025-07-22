import React from 'react';
import type { Product } from './carttypes.ts';

interface Props {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const Cartlist: React.FC<Props> = ({ products, onAddToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            {product.image && (
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
            )}
            <div style={{ padding: '1.5rem' }}>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                {product.name}
              </h4>
              {product.description && (
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.875rem',
                  marginBottom: '1rem'
                }}>
                  {product.description}
                </p>
              )}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'rgb(255, 204, 0)'
                }}>
                  {product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => onAddToCart(product)}
                  style={{
                    backgroundColor: 'rgb(85, 191, 75)',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span>+</span>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cartlist;
