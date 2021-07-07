import "./HomePage.scss";
import lion from "../../images/lion.jpg";
import arrow from "../../images/arrow.png";

function HomePage() {
  return (
    <div>
      <div className="home-page_head__container">
        <img className="home-page_head__img" alt="lion" src={lion}/>
        <h1 className="home-page_head__title">For Millionaires by Millionaires.</h1>
        <button className="home-page_head__button">Learn More</button>
      </div>
      <div className="home-page_body__container">
        <img className="home-page_body__arrow" alt="arrow" src={arrow}/>
        <div className="home-page_body__title">1, 000, 000 Fixed Limited Supply</div>
        <div className="home-page_body__text">Million has a fixed supply of 1,000,000 tokens total. No more can ever be created (guaranteed by code). Million
          is deflationary by nature. Million begins with a peg of 1.00 $USDC per token, and its value increases over time with scarcity.
        </div>
      </div>
    </div>
  );
}

export default HomePage;