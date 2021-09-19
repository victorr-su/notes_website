import React from "react"
import "./index.css"


export default function Search() {


	return (
		<div id="search-container">
			<div>
				<div id="search-component">

					<div className="search">
						<input id="course-code" type="text" placeholder="Course Code" />
						<input id="school" type="text" placeholder="School" />
					</div>
					<button id="search-button">
						<i class="fas fa-search"></i>

					</button>
				</div>
			</div>
		</div>
	)
}