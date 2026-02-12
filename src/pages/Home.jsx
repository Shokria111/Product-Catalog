import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

function Home() {
  return (
    <div>
      <section className=" hero-section bg-light py-5" >
        <div className="container py-5 text-center">
          <h1 className="display-4 fw-bold mb-3">
            Discover Your Natural Glow
          </h1>
          <p className="lead text-secondary mb-4">
            Premium beauty essentials crafted to elevate your everyday routine.
          </p>
          <Link to="/products" className="btn btn-primary btn-lg rounded-pill px-5">
            Explore Collection
          </Link>
        </div>
      </section>
      <section className="container py-5 glass rounded-4 p-4 h-100">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Shop by Category</h2>
          <p className="text-secondary">
            Curated collections designed for every beauty need.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 text-center p-4">
              <h4 className="fw-bold">Skincare</h4>
              <p className="text-secondary">Nourish and protect your skin.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 text-center p-4">
              <h4 className="fw-bold">Makeup</h4>
              <p className="text-secondary">Enhance your natural beauty.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 text-center p-4">
              <h4 className="fw-bold">Haircare</h4>
              <p className="text-secondary">Strength and shine for every strand.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose Us</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold">Premium Ingredients</h5>
              <p className="text-secondary">
                Carefully selected formulas for visible results.
              </p>
            </div>

            <div className="col-md-4">
              <h5 className="fw-bold">Cruelty-Free</h5>
              <p className="text-secondary">
                Ethical beauty without compromise.
              </p>
            </div>

            <div className="col-md-4">
              <h5 className="fw-bold">Fast Shipping</h5>
              <p className="text-secondary">
                Delivered quickly to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5 text-center">
        <h2 className="fw-bold mb-3">
          Ready to Elevate Your Beauty Routine?
        </h2>
        <Link to="/products" className="btn btn-dark btn-lg rounded-pill px-5">
          Browse Products
        </Link>
      </section>



    </div>

  )
}
export default Home;