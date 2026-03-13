import restaurantFood from "../images/restaurantfood.jpg";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/booking" className="button-link">Reserve a Table</Link>
      </div>

      <div className="hero-image">
        <img src={restaurantFood} alt="Little Lemon food" />
      </div>
    </section>
  );
}

export default CallToAction;