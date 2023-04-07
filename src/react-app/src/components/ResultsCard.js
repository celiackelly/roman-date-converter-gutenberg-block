import { React, useState } from "@wordpress/element";
import CardSection from "./CardSection";
import Button from "./Button";
import { abbreviateDate, abbreviateYear } from "../utils/dateConversions";

export default function ResultsCard({
	romanDate,
	formattedYear,
	changeOptions,
	handleConvertAnotherDate,
}) {
	const [isAbbreviatedChecked, setIsAbbreviatedChecked] = useState(false);

	return (
		<CardSection className="results-card" title="Roman date:">
			<div>
				<p>{isAbbreviatedChecked ? abbreviateDate(romanDate) : romanDate}</p>
				<p>
					{isAbbreviatedChecked ? abbreviateYear(formattedYear) : formattedYear}
				</p>
			</div>
			<label>
				<input
					type="checkbox"
					name="abbreviated"
					onChange={(e) => setIsAbbreviatedChecked(!isAbbreviatedChecked)}
				></input>
				display abbreviated date
			</label>
			<div className="btn-group">
				<Button
					type="button"
					buttonText="Change options"
					onClick={changeOptions}
				/>
				<Button
					type="button"
					buttonText="Convert another date"
					onClick={handleConvertAnotherDate}
				/>
			</div>
		</CardSection>
	);
}
