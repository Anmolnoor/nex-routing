import { useRouter } from "next/router";
import React from "react";

const SlugPage = () => {
	const router = useRouter();
	console.log(router.query);
	return <div>SlugPage</div>;
};

export default SlugPage;
