import React from 'react';
import "./index.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/1070260-class-notes-us-uh-engi-1100-lecture1.jpg"
import img2 from "../../assets/0641e3fd87a05c093fde6c02fb17e178.jpg"
import img3 from "../../assets/4917123287_e5ce5ff3cc_b.jpg"
import img4 from "../../assets/bg1.png"
import img5 from "../../assets/calc.jpg"
import img6 from "../../assets/english-notes-aesthetic.jpg"
import img7 from "../../assets/f302bb6f29dd90d255b3208b235b6ad4.jpg"
import img8 from "../../assets/npg8fzvi12921.jpg"

export default function CarouselSlider() {
	return (
		<Carousel
			showThumbs={false}
		>
			<div>
				<img src={img1} />

			</div>
			<div>
				<img src={img2} />
			</div>
			<div>
				<img src={img3} />
			</div>
			<div>
				<img src={img4} />
			</div>
			<div>
				<img src={img5} />
			</div>
			{/*	
			<div>
			<img src={img6} />
			</div>
			<div>
				<img src={img7} />
			</div> */}
			<div>
				<img src={img8} />
			</div>
		</Carousel>
	);
};
