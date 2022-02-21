import Link from "next/link";

const Index = () => {
	return (
		<div>
			<center>
				<h1>The Home page</h1>
				<ul>
					<li>
						<Link href='/portfolio'>Portfolio</Link>
					</li>
					<li>
						<Link href='/clients'>Clients</Link>
					</li>
				</ul>
			</center>
		</div>
	);
};

export default Index;
