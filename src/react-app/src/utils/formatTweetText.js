export function formatTweetText(romanDate, formattedYear) {
	let romanDateParamString = romanDate.replaceAll(" ", "%20");
	let formattedYearParamString = formattedYear
		? ",%20" + formattedYear.replaceAll(" ", "%20")
		: "";

	let textParam = `${romanDateParamString}${formattedYearParamString}`;
	return textParam;
}
