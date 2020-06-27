import Header from "../components/Header";
import Title from "../components/Title";
import Description from "../components/Description";

export default function Home() {
	return (<div className="container">
		<Header/>

		<main>
			<Title />

			<Description />

			<div className="grid">
				<div className="card">
					<p className="blue">LANGUAGES & FRAMEWORKS</p>
					<ul>
						<li>PHP (Zend Certified Engineer, PHPUnit, Symfony, Codeception)</li>
						<li>JavaScript (ES6, React, Webpack, Jest)</li>
						<li>WordPress</li>
						<li>HTML & CSS (SASS)</li>
					</ul>
				</div>

				<div className="card">
					<p className="blue">INFRASTRUCTURE</p>
					<ul>
						<li>Docker</li>
						<li>Amazon AWS (EC2)</li>
						<li>CI/CD (GitLab, Travis)</li>
						<li>Configuration of Linux servers</li>
						<li>SSH</li>
					</ul>
				</div>

				<div className="card">
					<p className="blue">DATABASES</p>
					<ul>
						<li>MySQL</li>
						<li>Redis</li>
						<li>MongoDB</li>
					</ul>
				</div>

			</div>

			<h2>PROFESSIONAL EXPERIENCE</h2>

			<div className="professional">
				<div className="job">
					<h5>Jan/2013 — Jun/2020</h5>
					<h3>OnTheGoSystems</h3>
					<h4>Senior Software Engineer</h4>
					<ul>
						<li><span className="listStyle">$</span>Wrote high scalable PHP code which are currently running in over 1,000,000 sites.</li>
						<li><span className="listStyle">$</span>Worked in the development of the most popular multilingual plugin for WordPress, WPML.</li>
						<li><span className="listStyle">$</span>Maintained and improved the legacy PHP application responsible by handling upgrades on client sites. Reduced dramatically the number of bug fixes releases by introducing automated tests.</li>
						<li><span className="listStyle">$</span>Developed WordPress integration plugins for Elementor Page Builder, Visual Composer, and Beaver Builder. That increased considerably the number of new clients.</li>
						<li><span className="listStyle">$</span>Refactored and improved our own support JavaScript chat application reducing the large amount of bad feedbacks we were getting from the clients.</li>
						<li><span className="listStyle">$</span>Refactored many legacy PHP code and covered with automated tests.</li>
						<li><span className="listStyle">$</span>Took the PHP automated tests to the next level by introducing browser testing through Selenium. That helped to prevent a huge number of bugs not caught with unit and integration tests.</li>
						<li><span className="listStyle">$</span>Developed a command line interface for the Selenium tests. That increased the total running time of the tests in CI by 200%.</li>
						<li><span className="listStyle">$</span>Developed a React web app for the proper management of deployments to AWS EC2 instances.</li>
						<li><span className="listStyle">$</span>Developed a service for collecting and managing stats from customer sites. This application helped the company to understand the clients </li>
						<li><span className="listStyle">$</span>Developed a REST service (PHP) and a Node app for recovering financial data that was lost after a hack attack. The service successfully recovered 99% of the data lost (orders, user accounts, renewals).</li>
					</ul>
				</div>

				<div className="job">
					<h5>Jan/2012 — Jan/2013</h5>
					<h3>Come Fácil</h3>
					<h4>Owner</h4>
					<ul>
						<li><span className="listStyle">$</span>Developed a complete PHP/MySQL web application for a food delivering marketplace composed by an e-commerce shopping cart, reports generation system, mobile app, some CRUDs for managing customers, products, and orders.</li>
						<li><span className="listStyle">$</span>Developed a real-time dashboard service for monitoring the orders and notifying restaurants owners by emails and SMS messages.</li>
						<li><span className="listStyle">$</span>Defined the MySQL database schema.</li>
						<li><span className="listStyle">$</span>Developed a white-label service for letting restaurant owners to use the product as a standalone food delivery system.</li>
					</ul>
				</div>

				<div className="job">
					<h5>Jun/2008 — Jan/2012</h5>
					<h3>Freelancer</h3>
					<h4>Full Stack Web Developer</h4>
					<ul>
						<li><span className="listStyle">$</span>Worked with agencies as a full-stack developer to offer help in some critical projects for top-tier clients.</li>
						<li><span className="listStyle">$</span>Developed a number of WordPress themes & plugins.</li>
						<li><span className="listStyle">$</span>Wrote high scalable PHP and JavaScript code for a bunch of distinct projects.</li>
						<li><span className="listStyle">$</span>Managed a team of remote developers for outsourcing some jobs.</li>
					</ul>
				</div>

				<div className="job">
					<h5>Sep/2008 — Jul/2012</h5>
					<h3>Alt_C Developer</h3>
					<h4>Database Engineer</h4>
					<ul>
						<li><span className="listStyle">$</span>Maintained a number of MySQL databases.</li>
						<li><span className="listStyle">$</span>Planned database schemas.</li>
						<li><span className="listStyle">$</span>Debugged database issues.</li>
					</ul>
				</div>

			</div>

			<h2 className="personaltitle">PERSONAL PROJECTS</h2>

			<div className="professional">
				<div>
					<ul>
						<li><span className="personaltitlelist">$</span>I publish much of my code under an open-source license on <a href="https://github.com/adrianosferreira">GitHub</a>.</li>
						<li><span className="personaltitlelist">$</span>I contribute to some very known open-source projects: Composer, Guzzle, and WordPress.</li>
						<li><span className="personaltitlelist">$</span>Developed a <a href="https://restroutes.com/">WordPress plugin</a> that works as an interface for designing custom REST endpoints.</li>
						<li><span className="personaltitlelist">$</span>The interface was built with React/Redux and the backend with PHP/MySQL/WordPress REST API.</li>
						<li><span className="personaltitlelist">$</span>Built a PHP <a href="https://github.com/adrianosferreira/document-distance">Composer library</a> for calculating the distance between two documents using the cosine similarity</li>
						<li><span className="personaltitlelist">$</span>Built a <a href="https://github.com/adrianosferreira/geophy">Gateway REST API</a> service with PHP for consuming a Real Estate public API service and expose refined and dedicated custom endpoints for a web application.</li>
						<li><span className="personaltitlelist">$</span>I maintain several Linux servers for web hosting and other related purposes.</li>
						<li><span className="personaltitlelist">$</span>Developed a PHP <a href="https://github.com/adrianosferreira/data-structures">Composer library</a> which provides a set of data structures in PHP.</li>
					</ul>
				</div>
			</div>

			<h2>EDUCATION</h2>

			<div className="professional">
				<div>
					<ul>
						<li><span className="listStyle">$</span><a href="http://www.zend.com/en/yellow-pages/ZEND029563">Zend Certified PHP Engineer</a> — Zend by Rogue Wave Software — 2017</li>
						<li><span className="listStyle">$</span>Agile Development — ITA — Aeronautic Technologic Institute — 2018</li>
						<li><span className="listStyle">$</span>Industrial Automation — FIEMG System — 2004-2006</li>
					</ul>
				</div>
			</div>

		</main>
	</div>)
}
