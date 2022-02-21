import { useRouter } from "next/router";
import React from "react";

const PageNotFound = () => {
	const router = useRouter();

	return (
		<center>
			<h1>404 Error!!!</h1>
			<h3>{router.asPath}</h3>
			<h2>This Page You are trying to load Does not Exist</h2>
		</center>
	);
};

export default PageNotFound;
