import React, { useEffect, useState } from "react"
import "./index.css"
import { GET_NOTES_ENDPOINT, PATCH_NOTES_ENDPOINT } from "../../constants";
import axios from "axios";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";


const rows = [
	{ school: "Waterloo", course_code: "1234", file: "somefile", creation_date: "2015/02/02", rating: 1500 },
	{ school: "UMBC", course_code: "1234", file: "somefile", creation_date: "2016/02/03", rating: 1000 },
	{ school: "Purdue", course_code: "1234", file: "somefile", creation_date: "2017/03/03", rating: 3 },
]


export default function Notes(courseCode, school) {
	const [notes, setNotes] = useState(rows);

	useEffect(() => {
		const request = async () => {

			const res = await axios.get(GET_NOTES_ENDPOINT, null, {
				params: {
					course_code: courseCode,
					school
				}
			});
			// setNotes(() => res.body)
			console.log(res.body)
		}
		request()


	}, [courseCode, school])

	const onLike = async (note) => {
		const body = {
			rating: note.rating + 1
		}
		const res = await axios.patch(PATCH_NOTES_ENDPOINT, body);

	}

	const onDislike = async (note) => {
		const body = {
			rating: note.rating - 1
		}
		const res = await axios.patch(PATCH_NOTES_ENDPOINT, body);

	}


	return (
		<div >


			<h1 className="notes_header">
				Looking for some notes?
			</h1>

			<div className="idk">
				<div className="note-row">

					<div id="label">School</div>
					<div id="label">Course Code</div>
					<div id="label">Publish Date</div>
					<div id="label">Rating</div>
					<div id="label">Get Notes</div>
				</div>
				{
					notes.map((note) => (
						<div className="note-row" key={note.id}>
							<div id="label">{note.school}</div>
							<div id="label">{note.course_code}</div>
							<div id="label">{note.creation_date}</div>
							<div id="label">{note.rating}</div>
							<a href={`${note.url}`} >Download</a>
							<div>
								<i class="fas fa-thumbs-up" id="like" onClick={() => onLike(note)}></i>
								<i class="fas fa-thumbs-down" id="dislike" onClick={() => onDislike(note)}></i>
							</div>

						</div>
					))
				}

			</div>


		</div >
	)
}