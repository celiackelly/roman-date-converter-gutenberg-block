import React from "@wordpress/element";
import { formatTweetText } from "../utils/formatTweetText";

export default function TweetLink({ dateString, yearString }) {
	let tweetTextParamValue = formatTweetText(dateString, yearString);

	return (
		<>
			<a
				href={`https://twitter.com/intent/tweet?text=${tweetTextParamValue}&screen_name=salvi_sitis&ref_src=twsrc%5Etfw`}
				class="twitter-share-button block"
				data-show-count="false"
			>
				Tweet
			</a>
			<script
				async
				src="https://platform.twitter.com/widgets.js"
				charset="utf-8"
			></script>
		</>
	);
}
