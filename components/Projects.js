const Projects = () => (
	<React.Fragment>
		<h2 className="personaltitle">PERSONAL PROJECTS</h2>

		<div className="professional">

			<div className="job">
				<h3><a href="https://restroutes.com">Rest Routes</a></h3>
				<p><span className="personaltitlelist">$</span>Developed a WordPress plugin that works as an interface for building custom REST endpoints. Initially, I built a very basic version that has been free of charge distributed through <a href="https://wordpress.org/plugins/rest-routes">WordPress.org</a> repository. Due to the success of it, after +7,000 installs, I've decided to develop a Pro version for the plugin. For this, I've completely re-wrote the PHP codebase and adopted React for the dynamic interface. Also, thinking about the limitation of the free version, I've extended it with many new features.</p>
			</div>

			<div className="job">
				<h3><a href="https://github.com/adrianosferreira/document-distance">Document Distance</a></h3>
				<p><span className="personaltitlelist">$</span>Built a PHP Composer library for calculating the distance between two documents using the cosine similarity.</p>
			</div>

			<div className="job">
				<h3><a href="https://github.com/adrianosferreira/pathfinding">Pathfinding</a></h3>
				<p><span className="personaltitlelist">$</span>Implemented a visualizer of a pathfinding algorithm using BFS (Breadth First Search) through JS(ES6, Webpack) and HTML(Canvas).</p>
			</div>

			<div className="job">
				<h3><a href="https://github.com/adrianosferreira/geophy">Gateway REST API</a></h3>
				<p><span className="personaltitlelist">$</span>Built a Gateway REST API service with PHP for consuming a Real Estate public API service and expose refined and dedicated custom endpoints for a web application.</p>
			</div>

			<div className="job">
				<h3><a href="https://github.com/adrianosferreira/data-structures">Data Structures</a></h3>
				<p><span className="personaltitlelist">$</span>Developed a PHP Composer library which provides a set of data structures in PHP.</p>
			</div>

			<div className="job">
				<h3><a href="https://github.com/adrianosferreira/wp-plugin-skeleton">WP PLugin Skeleton</a></h3>
				<p><span className="personaltitlelist">$</span>Developed a plugin skeleton package for developing WordPress plugins.</p>
			</div>

			<div className="job">
				<h3>Misc</h3>
				<ul>
					<li><span className="personaltitlelist">$</span>I publish much of my code under an open-source license on <a href="https://github.com/adrianosferreira">GitHub</a>.</li>
					<li><span className="personaltitlelist">$</span>I maintain several Linux servers for web hosting and other related purposes.</li>
					<li><span className="personaltitlelist">$</span>Developed a PHP <a href="https://github.com/adrianosferreira/data-structures">Composer library</a> which provides a set of data structures in PHP.</li>
				</ul>
			</div>
		</div>
	</React.Fragment>
);

export default Projects;