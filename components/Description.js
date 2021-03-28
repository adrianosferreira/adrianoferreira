const exp = new Date().getFullYear() - new Date('2008-01-01').getFullYear()

const Description = () => (
	<div className="description">
		<h4 className="blue">Munich, Germany.</h4>
		<span className="listStyleHome">$</span>A self-taught <span className="blue">software engineer</span> with over {exp} years of experience building modern <span className="blue">web applications</span>, always compromised in writing clean, readable, and testable code. As an Industrial Automation graduate, he is very passionate about automated tests and continuous integration tools. A very active member of the open-source community that has contributed to some very known projects: Composer, Guzzle, and WordPress.
	</div>
);

export default Description;
