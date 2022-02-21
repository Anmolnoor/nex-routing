import { useRouter } from "next/router";

const ProtfolioIdPage = () => {
	const router = useRouter();
	console.log({ path: router.asPath });
	console.log({ pathName: router.pathname });
	console.log(router.query);

	return <div>Protfolio_Id_Page for the id : {router.query.id}</div>;
};

export default ProtfolioIdPage;
