import Header from "../components/Header";
import Title from "../components/Title";
import Description from "../components/Description";
import Projects from "../components/Projects";

function calculateAge(start, end) {
	let ageDifMs = end.getTime() - start.getTime();
	let ageDate = new Date(ageDifMs);
	let res = ageDate.getUTCFullYear() - 1970;

	if(!res) {
		return '(Less than one year)';
	}

	if(res === 1) {
		return `(${res} year)`;
	}

	return `(${res} years)`;
}

export default function Home() {
	return (<div className="container">
		<Header/>

		<main>
			<Title />

			<Description />

			<div className="description">
				<p>Let's get in touch! My email is <a href="mailto:adrianokta@gmail.com">adrianokta@gmail.com</a></p>
			</div>

			<div className="grid skills">
				<div className="card">
					<p className="green">LANGUAGES & FRAMEWORKS</p>
					<ul>
						<li>PHP (Zend Certified Engineer, PHPUnit, Symfony, Codeception)</li>
						<li>JavaScript (ES6, React, Webpack, Jest)</li>
						<li>WordPress</li>
						<li>HTML & CSS (SASS)</li>
					</ul>
				</div>

				<div className="card">
					<p className="green">INFRASTRUCTURE</p>
					<ul>
						<li>Nginx</li>
						<li>Docker</li>
						<li>Amazon AWS (EC2)</li>
						<li>CI/CD (GitLab, Travis, Bamboo)</li>
						<li>Configuration of Linux servers</li>
					</ul>
				</div>

				<div className="card">
					<p className="green">DATABASES</p>
					<ul>
						<li>MySQL</li>
						<li>Redis</li>
						<li>MongoDB</li>
					</ul>
				</div>

			</div>

			<h2 style={{marginTop: '50px'}}>PROFESSIONAL EXPERIENCE</h2>

			<div className="professional">
				<div className="job">
					<h5>Nov/2020 — Current {calculateAge(new Date('2020-11-01'), new Date())}</h5>
					<h3><a href="https://www.check24.de/">CHECK24</a></h3>
					<h4>Senior Software Engineer</h4>
				</div>

				<div className="job">
					<h5>May/2020 — Nov/2020 {calculateAge(new Date('2020-05-01'), new Date('2020-11-01'))}</h5>
					<h3><a href="https://www.elegantthemes.com/">Elegant Themes</a></h3>
					<h4>Senior Software Engineer</h4>
					<ul>
						<li><span className="listStyle">$</span>Wrote high scalable PHP and JavaScript (React) code.</li>
						<li><span className="listStyle">$</span>Introduced automated tests in the GitHub actions pipeline.</li>
						<li><span className="listStyle">$</span>Worked in the development of the very famous WordPress page builder plugin, Divi.</li>
					</ul>
				</div>

				<div className="job">
					<h5>Jan/2013 — May/2020 {calculateAge(new Date('2013-01-01'), new Date('2020-05-01'))}</h5>
					<h3><a href="https://onthegosystems.com/">OnTheGoSystems</a></h3>
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
						<li><span className="listStyle">$</span>Developed a service for collecting and managing stats from customer sites. This application Developed a service for collecting and managing stats from customer sites. This application helped the company to understand the client's environment thus provide more suitable products.</li>
						<li><span className="listStyle">$</span>Developed a REST service (PHP) and a Node app for recovering financial data that was lost after a hack attack. The service successfully recovered 99% of the data lost (orders, user accounts, renewals).</li>
					</ul>
				</div>

				<div className="job">
					<h5>Jan/2012 — Jan/2013 {calculateAge(new Date('2012-01-01'), new Date('2013-01-01'))}</h5>
					<h3>Come Fácil</h3>
					<h4>Owner</h4>
					<ul>
						<li><span className="listStyle">$</span>Developed a complete PHP/MySQL web application for a food delivering marketplace composed by an e-commerce shopping cart, reports generation system, mobile app, some CRUDs for managing customers, products, and orders.</li>
						<li><span className="listStyle">$</span>Developed a real-time dashboard service for monitoring the orders and notifying restaurants owners by emails and SMS messages.</li>
						<li><span className="listStyle">$</span>Defined the MySQL database schema.</li>
						<li><span className="listStyle">$</span>Developed a white-label service for letting restaurant owners to use the product as a standalone food delivery system.</li>
						<li><span className="listStyle">$</span>Conducted many product presentations for attracting new business partners.</li>
					</ul>
				</div>

				<div className="job">
					<h5>Jun/2008 — Jan/2012 {calculateAge(new Date('2008-06-01'), new Date('2012-01-01'))}</h5>
					<h3>Freelancer</h3>
					<h4>Full Stack Web Developer</h4>
					<ul>
						<li><span className="listStyle">$</span>Worked with agencies as a full-stack developer to offer help in some critical projects for top-tier clients.</li>
						<li><span className="listStyle">$</span>Developed a number of WordPress themes & plugins.</li>
						<li><span className="listStyle">$</span>Wrote high scalable PHP and JavaScript code for a bunch of distinct projects.</li>
						<li><span className="listStyle">$</span>Managed a team of remote developers for outsourcing some jobs.</li>
					</ul>
				</div>

			</div>

			<Projects/>

			<h2>EDUCATION</h2>

			<div className="professional">
				<div className="job">
					<ul>
						<li><span className="listStyle">$</span><a href="http://www.zend.com/en/yellow-pages/ZEND029563">Zend Certified PHP Engineer</a> — Zend by Rogue Wave Software — 2017</li>
						<li><span className="listStyle">$</span>Mechatronic Technician — FIEMG System — 2004-2006</li>
						<li><span className="listStyle">$</span>Agile Development — ITA — Aeronautic Technology Institute — 2018</li>
					</ul>
				</div>
			</div>

		</main>
	</div>)
}
