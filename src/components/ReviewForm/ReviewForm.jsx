import { useState } from "react";
import "./ReviewForm.css";
import Review from "./Review";

const ReviewForm = () => {
	const [showForm, setShowForm] = useState(false);

	return (
		<>
			<div className="review">
				<h3>Review</h3>
				<table>
					<tr>
						<th>Serial number</th>
						<th>Doctor Name</th>
						<th>Doctor Specialty</th>
						<th>Proivde feedback</th>
						<th>Review given</th>
					</tr>
					<tr>
						<td>1</td>
						<td>Dr. Smith</td>
						<td>Cardiology</td>
						<td>
							<button onClick={() => setShowForm(true)}>Provide feedback</button>
						</td>
						<td>No review given</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Dr. Johnson</td>
						<td>Neurology</td>
						<td>
							<button onClick={() => setShowForm(true)}>Provide feedback</button>
						</td>
						<td>No review given</td>
					</tr>
				</table>
			</div>
			{showForm && <Review />}
		</>
	);
};

export default ReviewForm;

