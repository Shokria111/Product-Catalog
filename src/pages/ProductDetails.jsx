import { Link, useNavigate, useParams } from "react-router-dom";
import {getProductById} from '../data/data';

function ProductDetails() {

  const { id } = useParams();
  const navigate = useNavigate();
  const data = getProductById(id);

  if(!data){
    return(
      <section className="container py-5">
        <div className="alert alert-danger rounded-4">
          Product not found.
        </div>
        <Link className="btn btn-outline-primary rounded-pill" to="/products">
          Back
        </Link>
      </section>
    );
  }
  return (
    <section className="container py-5">
      <div className="card rounded-4 shadow-sm overflow-hidden">
        <img 
          src={data.image}
          alt={data.name}
          className="w-100"
          style={{height: 320, objectFit: "cover"}}
        />
        <div className="card-body p-4 p-lg-5">
          <h1 className="h2 fw-bold mb-3">{data.name}</h1>
          <p className="lead text-secondary">{data.description}</p>
          <div className="mt-4">
            <h4 className="fw-bold mb-3">Price: ${data.price}</h4>
            <p className="text-secondary mb-4">Category: {data.category}</p>
            <button className="btn btn-primary rounded-pill" onClick={() => navigate(-1)}>
              ← Back
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails;