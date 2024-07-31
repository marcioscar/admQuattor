import { DataTable } from "@/components/Data-table";
import { Navbar } from "@/components/Navbar";
import { columns } from "@/components/Reccolumns";
import { requireUserSession } from "@/utils/auth.server";
import { deleteReceita, getReceitas } from "@/utils/receitas.server";
import type { ActionFunctionArgs, LoaderFunction } from "@remix-run/node";
import { Outlet, redirect, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
	await requireUserSession(request);
	const receitas = await getReceitas();
	console.log(receitas);
	return receitas;
};

export const action = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData();
	let values = Object.fromEntries(formData);
	console.log(values);
	if (values._action === "delete") {
		await deleteReceita(values);
		return redirect(`.`);
	}
};
export default function Receitas() {
	const receitas = useLoaderData<typeof loader>();
	return (
		<>
			<Navbar />
			<div className='container mx-auto py-4'>
				<Outlet />
				<h1 className='flex  justify-center font-bold text-slate-500 text-xl'>
					RECEITAS
				</h1>

				<DataTable columns={columns} data={receitas} />
			</div>
		</>
	);
}
