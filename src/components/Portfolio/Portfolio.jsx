import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import food_delivery from "../../img/foodDelivery.png"
import movie_site from "../../img/Film_site.png"
import education_site from "../../img/Education.png"
import age_calculator_site from "../../img/AGE_Calculator.png"
import book_site from "../../img/Book_Mangement.png"
import shopping_site from "../../img/Shopping_Cart.png"

const Portfolio = () => {

  return (
   <>
   <section class="portfolio" id="portfolio">
		<div class="main-text">
			<h1 className="home-text">Latest Project</h1>
		</div>

		<div class="portfolio-content">
			<div class="row">
      <img src={food_delivery} alt="" />
				<div class="layer">
					<h5>Food_Delivery_Site_Front_End</h5>
					<a href="https://youtu.be/f0Of4JcMpaA"><i class='bx bx-link-external'></i></a> <a href="https://github.com/devPrakash7/foodDelivery"><i class='bx bx-link-external' ></i></a>
				</div> 
			</div>
		

			<div class="row">
      <img src={movie_site} alt="" />
				<div class="layer">
					<h5>movie_Site_Front_End</h5>
					<a href="https://youtu.be/Q6m5oAsOncU"><i class='bx bx-link-external' ></i></a> <a href="https://github.com/devPrakash7/movie"><i class='bx bx-link-external' ></i></a>
				</div>
			</div>

			<div class="row">
      <img src={education_site} alt="" />
				<div class="layer">
					<h5>Education_Instructor_Front_End</h5>
					<a href="https://youtu.be/oim3LtFNUpI"><i class='bx bx-link-external' ></i></a> <a href="https://github.com/devPrakash7/EducationInstructure"><i class='bx bx-link-external' ></i></a>
				</div>
			</div>

			<div class="row">
      <img src={age_calculator_site} alt="" />
				<div class="layer">
					<h5>Age_Calculator_Front_End</h5>
					<a href="https://youtu.be/6UY9TG5r8Wc"><i class='bx bx-link-external' ></i></a> <a href="https://github.com/devPrakash7/AgeCalculator/tree/master/AgeCalculatorProject"><i class='bx bx-link-external' ></i></a>
				</div>
			</div>

			<div class="row">
			<img src={book_site} alt="" />
				<div class="layer">
					<h5>Book_Mangement_Backend</h5>
					<a href="https://github.com/devPrakash7/Book-management-project-3"><i class='bx bx-link-external' ></i></a>
				</div>
			</div>

			<div class="row">
				<img src={shopping_site} alt="" />
				<div class="layer">
					<h5>Shopping_Cart_Backend</h5>
					<a href="https://github.com/devPrakash7/Shopping-cart-Backend"><i class='bx bx-link-external' ></i></a>
				</div>
			</div>
		</div>
	</section>
   </>
  );
};

export default Portfolio;
