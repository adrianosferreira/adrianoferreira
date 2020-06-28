import Header from "../components/Header";
import Title from "../components/Title";
import Description from "../components/Description";
import Projects from "../components/Projects";

export default function ProjectsPage() {
	return (<div className="container">
		<Header/>

		<main>
			<Title />

			<Description />

			<Projects/>

		</main>
	</div>)
}
