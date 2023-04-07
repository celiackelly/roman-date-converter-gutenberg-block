export function formatTweetText(romanDate, formattedYear) {
	let romanDateParamString = romanDate.replaceAll(" ", "%20");
	let formattedYearParamString = formattedYear
		? "," + formattedYear.replaceAll(" ", "%20")
		: "";

	let textParam = `${romanDateParamString}${formattedYearParamString}`;
	return textParam;
}
