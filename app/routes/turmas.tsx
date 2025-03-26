import type { ActionFunctionArgs, LoaderFunction } from "@remix-run/node";

import {
	getAluno,
	getSale,
	getTurmas,
	updateTurma,
} from "@/utils/aluno.server";

import { useLoaderData } from "@remix-run/react";
import { columns } from "@/components/Turmacolumns";
import { DataTableTurma } from "@/components/Data-table-turma";
export const loader: LoaderFunction = async ({ request }) => {
	const turmas = await getTurmas();
	const aluno = await getAluno(17841);
	const sale = await getSale("17841");

	console.log(sale.map((s) => s.saleItens).pop());
	console.log(aluno);
	return turmas;
};

export const action = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData();
	let values = Object.fromEntries(formData);
	console.log(values);
	updateTurma(values);
	return null;
};
export default function Turmas() {
	const turma = useLoaderData<typeof loader>();
	return (
		<div className='container'>
			<DataTableTurma columns={columns} data={turma} />
		</div>
	);
}
