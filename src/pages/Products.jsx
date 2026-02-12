import {data} from '../data/data';
import { Link, useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Products() {

  const [searchParams, setSearchTerm] = useSearchParams();
  const q = (searchParams.get('q') || "").toLowerCase();

  const filtered = data.filter((product)=>
    product.name.toLowerCase().includes(q) ||
    product.category.toLowerCase().includes(q) ||
    product.description.toLowerCase().includes(q) ||
    product.price.toString().includes(q)
  ); 

  return(
    <section className='container py-5'>
      <div className="d-flex flex-column flex-md-row gap-3 align-items-md-end justify-content-between mb-4">
        <div>
          <h2 className="fw-bold mb-1">Products</h2>
          <p className="text-secondary mb-0">Explore our range of beauty products</p>
        </div>
        
        {/* Search Input pattern */}
        <div className="col-12 col-md-5 col-lg-4">
          <label className="form-label">Search</label>
          <input
           className="form-control form-control-lg rounded-pill" 
           type="text" 
           placeholder="Search products..."
           value = {q}
           onChange= {(e) => setSearchTerm({q: e.target.value})}
            />
        </div>
      </div>
          
        <div className="row g-4 justify-content-center mt-2">
          {/* only the product show with out searching ability, use data.map()... */}
        {filtered.map((product) => (
            <div className="col-md-6 col-lg-4" key={product.id}>
              <div className="card card-hover rounded-4 h-100 shadow-sm overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-100'
                  style={{height:190, objectFit: "cover"}}
                  loading="lazy"
                />
                <div className="card-body p-4">
                  <h3 className="h5 fw-bold mb-2">{product.name}</h3>
                  <p className="text-secondary mb-3">{product.description}</p>
                  <Link to={`/products/${product.id}`} className="mt-auto btn btn-primary rounded-pill">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-12">
              <div className="alert alert-warning rounded-4">
              No products found. Try a different keyword.
            </div>
            </div>
          )}
        </div>
        
    </section>
    

  )
};
export default Products;