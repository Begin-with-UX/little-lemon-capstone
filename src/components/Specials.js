import greekSalad from "../images/greek salad.jpg";
import bruschetta from "../images/bruchetta.svg";
import lemonDessert from "../images/lemon dessert.jpg";

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This week's specials!</h2>
        <button>Online Menu</button>
      </div>

      <div className="specials-cards">
        <article className="special-card">
          <img src={greekSalad} alt="Greek salad" />
          <div className="special-card-content">
            <div className="special-title-row">
              <h3>Greek salad</h3>
              <span>$12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
            <p>Order a delivery</p>
          </div>
        </article>

        <article className="special-card">
          <img src={bruschetta} alt="Bruschetta" />
          <div className="special-card-content">
            <div className="special-title-row">
              <h3>Bruchetta</h3>
              <span>$5.99</span>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared with
              garlic and seasoned with salt and olive oil.
            </p>
            <p>Order a delivery</p>
          </div>
        </article>

        <article className="special-card">
          <img src={lemonDessert} alt="Lemon dessert" />
          <div className="special-card-content">
            <div className="special-title-row">
              <h3>Lemon Dessert</h3>
              <span>$5.00</span>
            </div>
            <p>
              This comes straight from grandma's recipe book, every last ingredient
              has been sourced and is as authentic as can be imagined.
            </p>
            <p>Order a delivery</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Specials;