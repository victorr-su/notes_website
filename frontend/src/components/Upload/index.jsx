import "./index.css"
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

export default function Upload() {
	const fileTypes = ["JPG", "PNG", "PDF"];

	const [file, setFile] = useState(null);
	const handleChange = file => {
		setFile(file);
	};
	// const DragDrop = () => {

	// }
	return (

		<div class="upload">
			<div id="uploads-container">

				<h1 id="uploadHeader">Upload your material</h1>
				<FileUploader
					handleChange={handleChange}
					name="file"
					types={fileTypes}
				/>
				<div class="textboxes">
					<div>

						<label htmlFor="School"> School: </label>
						<input type="text" id="School" placeholder="Enter text" />
					</div>
					{/* <br></br> */}
					<div>

						<label htmlFor="ClassCode">Class Name and Code:</label>
						<input type="text" id="ClassCode" placeholder="Enter text" />
					</div>

					{/* <br></br> */}
					<div>

						<label htmlFor="Name"> Full Name: </label>
						<input type="text" id="Name" placeholder="Enter text" />
					</div>
					{/* <br></br> */}
					<div>

						<label htmlFor="Email"> Email: </label>
						<input type="text" id="Email" placeholder="Enter text" />
					</div>
				</div>
				<div class="buttons">
					<button id="notes">Class Notes</button>
					<button id="textbooks">Textbooks</button>
					<button id="worksheets">Relevant Worksheets</button>
					<button id="assignments">Previous Assignments</button>
				</div>

			</div>
		</div>
	)
	// return (

	{/*<form>
			<div className="uploadbutton">
				<h3 id="uploadheader"> Upload your own notes here</h3>
				<div className="dropzone">
					<span id="dropzone__prompt"> Drop file here or click to upload </span>
				</div>
			</div>
		</form>*/}
	// )
}