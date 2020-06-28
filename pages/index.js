import Header from "../components/Header";
import Title from "../components/Title";
import Description from "../components/Description";

export default function Home() {
	return (<div className="container">

			<Header />

			<main>
				<Title />

				<Description/>

				<div className="home">
					<div className="grid">
						<a href="https://github.com/adrianosferreira/" className="card">
							<h3 className="">GitHub &rarr;</h3>
							<p>What I'm up to</p>
						</a>

						<a href="https://www.linkedin.com/in/adrianosferreira/" className="card">
							<h3 className="">Linkedin &rarr;</h3>
							<p>My professional net</p>
						</a>

						<a href="/resume" className="card">
							<h3 className="">Resume &rarr;</h3>
							<p>My career thus far</p>
						</a>

						<a href="/projects" className="card">
							<h3 className="">Projects &rarr;</h3>
							<p>What I've built</p>
						</a>
					</div>
				</div>
			</main>
		</div>)
}
