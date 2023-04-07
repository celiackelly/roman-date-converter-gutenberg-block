import DateConverter from "./components/DateConverter";

export default function App() {
	return (
		<>
			<script
				async
				src="https://platform.twitter.com/widgets.js"
				charset="utf-8"
			></script>
			<DateConverter />
		</>
	);
}
