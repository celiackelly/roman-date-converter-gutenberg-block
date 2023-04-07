import { React, useState } from "@wordpress/element";
import CardSection from "./CardSection";
import Button from "./Button";
import TweetLink from "./TweetLink";
import { abbreviateDate, abbreviateYear } from "../utils/dateConversions";

export default function ResultsCard({
	romanDate,
	formattedYear,
	changeOptions,
	handleConvertAnotherDate,
}) {
	const [isAbbreviatedChecked, setIsAbbreviatedChecked] = useState(false);

	//do I need to make these into state for them to update appropriately and cause the Tweet button to rerender? or no?
	let dateString = isAbbreviatedChecked ? abbreviateDate(romanDate) : romanDate;
	let yearString = isAbbreviatedChecked
		? abbreviateYear(formattedYear)
		: formattedYear;

	return (
		<CardSection className="results-card" title="Roman date:">
			<div>
				<p>{dateString}</p>
				<p>{yearString}</p>
			</div>
			<div>
				<label>
					<input
						type="checkbox"
						name="abbreviated"
						onChange={(e) => setIsAbbreviatedChecked(!isAbbreviatedChecked)}
					></input>
					display abbreviated date
				</label>
				<TweetLink dateString={dateString} yearString={yearString} />
			</div>
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
