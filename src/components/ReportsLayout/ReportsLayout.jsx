import { useState } from "react";
import "../ReviewForm/ReviewForm";

const ReportsLayouts = () => {
	const [_showForm, setShowForm] = useState(false);

	return (
		<>
			<div className="review">
				<h3>Review</h3>
				<table>
					<tr>
						<th>Serial number</th>
						<th>Doctor Name</th>
						<th>Doctor Specialty</th>
						<th>View Report</th>
						<th>Download Report</th>
					</tr>
					<tr>
						<td>1</td>
						<td>Dr. Smith</td>
						<td>Cardiology</td>
						<td>
							<button onClick={() => setShowForm(true)}>
								View Report
							</button>
						</td>
						<td>
							<button onClick={() => setShowForm(true)}>
								<a href="#" download="report1.pdf">Download Report</a>
							</button>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Dr. Johnson</td>
						<td>Neurology</td>
						<td>
							<button onClick={() => setShowForm(true)}>
								View Report
							</button>
						</td>
						<td>
							<button onClick={() => setShowForm(true)}>
								Download Report
							</button>
						</td>
					</tr>
				</table>
			</div>
		</>
	);
};

export default ReportsLayouts;

