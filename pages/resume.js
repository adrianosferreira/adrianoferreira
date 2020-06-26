import Head from 'next/head'

export default function Home() {
	return (<div className="container">
		<Head>
			<title>Adriano Ferreira — Full Stack Web Developer</title>
			<link rel="icon" href="/favicon.ico"/>
		</Head>

		<main>
			<h1 className="title">
				Adriano Ferreira
			</h1>

			<p className="description">
				A self-taught full-stack developer with over 10 years of experience building modern web applications, always compromised in writing clean, readable, and testable code. As an Industrial Automation graduate, he is very passionate about automated tests and continuous integration tools.
			</p>

			<div className="grid">
				<div className="card">
					<h3>LANGUAGES & FRAMEWORKS</h3>
					<ul>
						<li>PHP (Zend Certified Engineer, PHPUnit, Symfony, Codeception)</li>
						<li>JavaScript (ES6, React, Webpack, Jest)</li>
						<li>WordPress</li>
						<li>HTML & CSS (SASS)</li>
					</ul>
				</div>

				<div className="card">
					<h3>INFRASTRUCTURE</h3>
					<ul>
						<li>Docker</li>
						<li>Amazon AWS (EC2)</li>
						<li>CI/CD (GitLab, Travis)</li>
						<li>Configuration of Linux servers</li>
						<li>SSH</li>
					</ul>
				</div>

				<div className="card">
					<h3>DATABASES</h3>
					<ul>
						<li>MySQL</li>
						<li>Redis</li>
						<li>MongoDB</li>
						<li>SSH</li>
					</ul>
				</div>

			</div>

			<h1>PROFESSIONAL EXPERIENCE</h1>

			<div className="professional">
				<div>
					<h3>OnTheGoSystems</h3>
					<h4>Senior Software Engineer</h4>
					<h5>Jan/2013 — Jun/2020</h5>
					<ul>
						<li>Wrote high scalable PHP code which are currently running in over 1,000,000 sites.</li>
						<li>Worked in the development of the most popular multilingual plugin for WordPress, WPML. Maintained and improved the legacy PHP application responsible by handling upgrades on client sites. Reduced dramatically the number of bug fixes releases by introducing automated tests. Developed WordPress integration plugins for Elementor Page Builder, Visual Composer, and Beaver Builder. That increased considerably the number of new clients.</li>
						<li>Refactored and improved our own support JavaScript chat application reducing the large amount of bad feedbacks we were getting from the clients.</li>
						<li>Refactored many legacy PHP code and covered with automated tests.</li>
						<li>Took the PHP automated tests to the next level by introducing browser testing through Selenium. That helped to prevent a huge number of bugs not caught with unit and integration tests. Developed a command line interface for the Selenium tests. That increased the total running time of the tests in CI by 200%.</li>
					</ul>
				</div>

				<div>
					<h3>Come Fácil</h3>
					<h4>Owner</h4>
					<h5>Jan/2012 — Jan/2013</h5>
					<ul>
						<li>Developed a complete PHP/MySQL web application for a food delivering marketplace composed by an e-commerce shopping cart, reports generation system, mobile app, some CRUDs for managing customers, products, and orders.</li>
						<li>Developed a real-time dashboard service for monitoring the orders and notifying restaurants owners by emails and SMS messages.</li>
						<li>Defined the MySQL database schema.</li>
						<li>Developed a white-label service for letting restaurant owners to use the product as a standalone food delivery system.</li>
					</ul>
				</div>

				<div>
					<h3>Freelancer</h3>
					<h4>Full Stack Web Developer</h4>
					<h5>Jun/2008 — Jan/2012</h5>
					<ul>
						<li>Worked with agencies as a full-stack developer to offer help in some critical projects for top-tier clients.</li>
						<li>Developed a number of WordPress themes & plugins.</li>
						<li>Wrote high scalable PHP and JavaScript code for a bunch of distinct projects.</li>
						<li>Managed a team of remote developers for outsourcing some jobs.</li>
					</ul>
				</div>

				<div>
					<h3>Alt_C Developer</h3>
					<h4>Database Engineer</h4>
					<h5>Sep/2008 — Jul/2012</h5>
					<ul>
						<li>Maintained a number of MySQL databases.</li>
						<li>Planned database schemas.</li>
						<li>Debugged database issues.</li>
					</ul>
				</div>

			</div>

			<h1>PERSONAL PROJECTS</h1>

			<div className="professional">
				<div>
					<ul>
						<li>I publish much of my code under an open-source license on <a href="https://github.com/adrianosferreira">GitHub</a>.</li>
						<li>I contribute to some very known open-source projects: Composer, Guzzle, and WordPress.</li>
						<li>Developed a <a href="https://restroutes.com/">WordPress plugin</a> that works as an interface for designing custom REST endpoints.</li>
						<li>The interface was built with React/Redux and the backend with PHP/MySQL/WordPress REST API.</li>
						<li>Developed a React web app for the proper management of deployments to AWS EC2 instances.</li>
						<li>Built a PHP <a href="https://github.com/adrianosferreira/document-distance">Composer library</a> for calculating the distance between two documents using the cosine similarity</li>
						<li>Built a <a href="https://github.com/adrianosferreira/geophy">Gateway REST API</a> service with PHP for consuming a Real Estate public API service and expose refined and dedicated custom endpoints for a web application.</li>
						<li>I maintain several Linux servers for web hosting and other related purposes.</li>
						<li>Developed a PHP <a href="https://github.com/adrianosferreira/data-structures">Composer library</a> which provides a set of data structures in PHP.</li>
					</ul>
				</div>
			</div>

			<h1>EDUCATION</h1>

			<div className="professional">
				<div>
					<ul>
						<li><a href="http://www.zend.com/en/yellow-pages/ZEND029563">Zend Certified PHP Engineer</a> — Zend by Rogue Wave Software — 2017</li>
						<li>Agile Development — ITA — Aeronautic Technologic Institute — 2018</li>
						<li>Industrial Automation — FIEMG System — 2004-2006</li>
					</ul>
				</div>
			</div>

		</main>

		<style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        a {
			text-decoration: underline;
		}

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          justify-content: center;
          max-width: 1000px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 40%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

		<style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
	</div>)
}
