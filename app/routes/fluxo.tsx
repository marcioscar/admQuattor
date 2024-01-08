import type { V2_MetaFunction, LoaderArgs, ActionArgs } from "@remix-run/node";

import {
	useLoaderData,
	isRouteErrorResponse,
	useRouteError,
} from "@remix-run/react";
import { Navbar } from "~/components/Navbar";
import { getRecebidos, getReceitas } from "~/utils/receitas.server";
import _, { capitalize } from "lodash";
import { getDespesas } from "~/utils/despesas.server";
import { groupSalario, groupSalarioAreas } from "~/utils/folha.server";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "Quattor Adm" },
		{ name: "Quattor Academia ADM", content: "Quattor Academia" },
	];
};
export const loader = async ({ request }: LoaderArgs) => {
	const receitas = await getRecebidos();
	const despesas = await getDespesas();

	function recMes(mes: any) {
		const tot = receitas.filter((o) => o.data.includes(mes));
		return _.sumBy(tot, "valor");
	}
	const recMes1 = recMes("01/2024");
	const recMes2 = recMes("02/2024");
	const recMes3 = recMes("03/2024");
	const recMes4 = recMes("04/2024");
	const recMes5 = recMes("05/2024");
	const recMes6 = recMes("06/2024");
	const recMes7 = recMes("07/2024");
	const recMes8 = recMes("08/2024");
	const recMes9 = recMes("09/2024");
	const recMes10 = recMes("10/2024");
	const recMes11 = recMes("11/2024");
	const recMes12 = recMes("12/2024");

	function recCentroMes(mes: any) {
		const tot = _.map(
			_.groupBy(
				receitas.filter((o) => o.data.includes(mes)),
				"centro"
			),
			(centro, idx) => {
				return { centro: idx, valor: _.sumBy(centro, "valor") };
			}
		);
		return _.orderBy(tot, ["valor"], ["desc"]);
	}
	const ReceitasCentro1 = recCentroMes("01/2024");
	const ReceitasCentro2 = recCentroMes("02/2024");
	const ReceitasCentro3 = recCentroMes("03/2024");
	const ReceitasCentro4 = recCentroMes("04/2024");
	const ReceitasCentro5 = recCentroMes("05/2024");
	const ReceitasCentro6 = recCentroMes("06/2024");
	const ReceitasCentro7 = recCentroMes("07/2024");
	const ReceitasCentro8 = recCentroMes("08/2024");
	const ReceitasCentro9 = recCentroMes("09/2024");
	const ReceitasCentro10 = recCentroMes("10/2024");
	const ReceitasCentro11 = recCentroMes("11/2024");
	const ReceitasCentro12 = recCentroMes("12/2024");

	function despMes(mes: any) {
		const desp = despesas.filter((o) => o.referencia.includes(mes));
		return _.orderBy(desp, ["valor"], ["desc"]);
	}
	const despMes1 = despMes("jan-2024");

	const despMes2 = despMes("fev-2024");
	const despMes3 = despMes("mar-2024");
	const despMes4 = despMes("abr-2024");
	const despMes5 = despMes("mai-2024");
	const despMes6 = despMes("jun-2024");
	const despMes7 = despMes("jul-2024");
	const despMes8 = despMes("ago-2024");
	const despMes9 = despMes("set-2024");
	const despMes10 = despMes("out-2024");
	const despMes11 = despMes("nov-2024");
	const despMes12 = despMes("dez-2024");

	function despTipo(mes: any, tipo: any) {
		const tot = _.map(
			_.groupBy(
				despesas.filter(
					(o) => o.referencia.includes(mes) && o.tipo.includes(tipo)
				),
				"conta"
			),
			(conta, idx) => {
				return { conta: idx, valor: _.sumBy(conta, "valor") };
			}
		);
		return _.orderBy(tot, ["valor"], ["desc"]);
	}
	const DespFixas1 = despTipo("jan-2024", "fixa");
	const DespFixas2 = despTipo("fev-2024", "fixa");
	const DespFixas3 = despTipo("mar-2024", "fixa");
	const DespFixas4 = despTipo("abr-2024", "fixa");
	const DespFixas5 = despTipo("mai-2024", "fixa");
	const DespFixas6 = despTipo("jun-2024", "fixa");
	const DespFixas7 = despTipo("jul-2024", "fixa");
	const DespFixas8 = despTipo("ago-2024", "fixa");
	const DespFixas9 = despTipo("set-2024", "fixa");
	const DespFixas10 = despTipo("out-2024", "fixa");
	const DespFixas11 = despTipo("nov-2024", "fixa");
	const DespFixas12 = despTipo("dez-2024", "fixa");

	const TotSalarios = await groupSalario();
	const TotSalMes1 = _.filter(TotSalarios, ["_id", "jan-2024"]);
	const TotSalMes2 = _.filter(TotSalarios, ["_id", "fev-2024"]);
	const TotSalMes3 = _.filter(TotSalarios, ["_id", "mar-2024"]);
	const TotSalMes4 = _.filter(TotSalarios, ["_id", "abr-2024"]);
	const TotSalMes5 = _.filter(TotSalarios, ["_id", "mai-2024"]);
	const TotSalMes6 = _.filter(TotSalarios, ["_id", "jun-2024"]);
	const TotSalMes7 = _.filter(TotSalarios, ["_id", "jul-2024"]);
	const TotSalMes8 = _.filter(TotSalarios, ["_id", "ago-2024"]);
	const TotSalMes9 = _.filter(TotSalarios, ["_id", "set-2024"]);
	const TotSalMes10 = _.filter(TotSalarios, ["_id", "out-2024"]);
	const TotSalMes11 = _.filter(TotSalarios, ["_id", "nov-2024"]);
	const TotSalMes12 = _.filter(TotSalarios, ["_id", "dez-2024"]);

	const salAreas1 = await groupSalarioAreas("jan-2023");
	const salAreas2 = await groupSalarioAreas("fev-2024");
	const salAreas3 = await groupSalarioAreas("mar-2024");
	const salAreas4 = await groupSalarioAreas("abr-2024");
	const salAreas5 = await groupSalarioAreas("mai-2024");
	const salAreas6 = await groupSalarioAreas("jun-2024");
	const salAreas7 = await groupSalarioAreas("jul-2024");
	const salAreas8 = await groupSalarioAreas("ago-2024");
	const salAreas9 = await groupSalarioAreas("set-2024");
	const salAreas10 = await groupSalarioAreas("out-2024");
	const salAreas11 = await groupSalarioAreas("nov-2024");
	const salAreas12 = await groupSalarioAreas("dez-2024");
	// const rec = await getReceitas();

	// console.log(
	//   _.filter(
	//     _.map(_.groupBy(rec, "centro"), (centro, idx) => {
	//       return { centro: idx, valor: _.sumBy(centro, "valor") };
	//     }),
	//     ["centro", "Adesão"]
	//   )
	// );

	return {
		ReceitasCentro1,
		ReceitasCentro2,
		ReceitasCentro3,
		ReceitasCentro4,
		ReceitasCentro5,
		ReceitasCentro6,
		ReceitasCentro7,
		ReceitasCentro8,
		ReceitasCentro9,
		ReceitasCentro10,
		ReceitasCentro11,
		ReceitasCentro12,

		recMes1,
		recMes2,
		recMes3,
		recMes4,
		recMes5,
		recMes6,
		recMes7,
		recMes8,
		recMes9,
		recMes10,
		recMes11,
		recMes12,

		despMes1,
		despMes2,
		despMes3,
		despMes4,
		despMes5,
		despMes6,
		despMes7,
		despMes8,
		despMes9,
		despMes10,
		despMes11,
		despMes12,

		DespFixas1,
		DespFixas2,
		DespFixas3,
		DespFixas4,
		DespFixas5,
		DespFixas6,
		DespFixas7,
		DespFixas8,
		DespFixas9,
		DespFixas10,
		DespFixas11,
		DespFixas12,

		TotSalMes1,
		TotSalMes2,
		TotSalMes3,
		TotSalMes4,
		TotSalMes5,
		TotSalMes6,
		TotSalMes7,
		TotSalMes8,
		TotSalMes9,
		TotSalMes10,
		TotSalMes11,
		TotSalMes12,

		salAreas1,
		salAreas2,
		salAreas3,
		salAreas4,
		salAreas5,
		salAreas6,
		salAreas7,
		salAreas8,
		salAreas9,
		salAreas10,
		salAreas11,
		salAreas12,
	};
};

export const action = async ({ request }: ActionArgs) => {
	return null;
};

export default function Index() {
	const {
		ReceitasCentro1,
		ReceitasCentro2,
		ReceitasCentro3,
		ReceitasCentro4,
		ReceitasCentro5,
		ReceitasCentro6,
		ReceitasCentro7,
		ReceitasCentro8,
		ReceitasCentro9,
		ReceitasCentro10,
		ReceitasCentro11,
		ReceitasCentro12,

		recMes1,
		recMes2,
		recMes3,
		recMes4,
		recMes5,
		recMes6,
		recMes7,
		recMes8,
		recMes9,
		recMes10,
		recMes11,
		recMes12,

		despMes1,
		despMes2,
		despMes3,
		despMes4,
		despMes5,
		despMes6,
		despMes7,
		despMes8,
		despMes9,
		despMes10,
		despMes11,
		despMes12,

		DespFixas1,
		DespFixas2,
		DespFixas3,
		DespFixas4,
		DespFixas5,
		DespFixas6,
		DespFixas7,
		DespFixas8,
		DespFixas9,
		DespFixas10,
		DespFixas11,
		DespFixas12,

		TotSalMes1,
		TotSalMes2,
		TotSalMes3,
		TotSalMes4,
		TotSalMes5,
		TotSalMes6,
		TotSalMes7,
		TotSalMes8,
		TotSalMes9,
		TotSalMes10,
		TotSalMes11,
		TotSalMes12,

		salAreas1,
		salAreas2,
		salAreas3,
		salAreas4,
		salAreas5,
		salAreas6,
		salAreas7,
		salAreas8,
		salAreas9,
		salAreas10,
		salAreas11,
		salAreas12,
	} = useLoaderData<typeof loader>();

	let TotSal1 = 0;
	Number.isNaN(parseFloat(TotSalMes1.map((t: any) => t.salario)))
		? (TotSal1 = 55000)
		: (TotSal1 = parseFloat(TotSalMes1.map((t: any) => t.salario)));

	let TotSal2 = 0;
	Number.isNaN(parseFloat(TotSalMes2.map((t: any) => t.salario)))
		? (TotSal2 = 55000)
		: (TotSal2 = parseFloat(TotSalMes2.map((t: any) => t.salario)));

	let TotSal3 = 0;
	Number.isNaN(parseFloat(TotSalMes3.map((t: any) => t.salario)))
		? (TotSal3 = 55000)
		: (TotSal3 = parseFloat(TotSalMes3.map((t: any) => t.salario)));

	let TotSal4 = 0;
	Number.isNaN(parseFloat(TotSalMes4.map((t: any) => t.salario)))
		? (TotSal4 = 55000)
		: (TotSal4 = parseFloat(TotSalMes4.map((t: any) => t.salario)));

	let TotSal5 = 0;
	Number.isNaN(parseFloat(TotSalMes5.map((t: any) => t.salario)))
		? (TotSal5 = 55000)
		: (TotSal5 = parseFloat(TotSalMes5.map((t: any) => t.salario)));

	let TotSal6 = 0;
	Number.isNaN(parseFloat(TotSalMes6.map((t: any) => t.salario)))
		? (TotSal6 = 55000)
		: (TotSal6 = parseFloat(TotSalMes6.map((t: any) => t.salario)));

	let TotSal7 = 0;
	Number.isNaN(parseFloat(TotSalMes7.map((t: any) => t.salario)))
		? (TotSal7 = 55000)
		: (TotSal7 = parseFloat(TotSalMes7.map((t: any) => t.salario)));

	let TotSal8 = 0;
	Number.isNaN(parseFloat(TotSalMes8.map((t: any) => t.salario)))
		? (TotSal8 = 55000)
		: (TotSal8 = parseFloat(TotSalMes8.map((t: any) => t.salario)));

	let TotSal9 = 0;
	Number.isNaN(parseFloat(TotSalMes9.map((t: any) => t.salario)))
		? (TotSal9 = 55000)
		: (TotSal9 = parseFloat(TotSalMes9.map((t: any) => t.salario)));

	let TotSal10 = 0;
	Number.isNaN(parseFloat(TotSalMes10.map((t: any) => t.salario)))
		? (TotSal10 = 55000)
		: (TotSal10 = parseFloat(TotSalMes10.map((t: any) => t.salario)));

	let TotSal11 = 0;
	Number.isNaN(parseFloat(TotSalMes11.map((t: any) => t.salario)))
		? (TotSal11 = 55000)
		: (TotSal11 = parseFloat(TotSalMes11.map((t: any) => t.salario)));

	let TotSal12 = 0;
	Number.isNaN(parseFloat(TotSalMes12.map((t: any) => t.salario)))
		? (TotSal12 = 55000)
		: (TotSal12 = parseFloat(TotSalMes12.map((t: any) => t.salario)));

	function DespesasVariavelTotalf(desp: any) {
		return _.sumBy(_.filter(desp, ["tipo", "variavel"]), "valor");
	}

	function DespesasFixasTotal(mes: any, totmes: any) {
		return _.sumBy(_.filter(mes, ["tipo", "fixa"]), "valor") + Number(totmes);
	}

	function DespesasVariaveisf(mes: any) {
		return _.filter(mes, ["tipo", "variavel"]);
	}

	function PontoEquilibriof(
		DespesasFixasTotal: any,
		DespesasVariavelTotalf: any,
		recMes: any
	) {
		return DespesasFixasTotal / 1 - DespesasVariavelTotalf / recMes;
	}

	function MargemDeContribuicaof(recMes: any, DespesasVariavelTotal: any) {
		return recMes - DespesasVariavelTotalf(DespesasVariavelTotal);
	}

	function LucroOpf(recMes: any, despmes: any, totmes: any) {
		return (
			MargemDeContribuicaof(recMes, despmes) -
			DespesasFixasTotal(despmes, totmes)
		);
	}

	function totalReceitas(recMes: any) {
		return recMes;
	}

	const inicial = 65962.3;

	// const saldoInicial4 = 64339.85;
	const saldoInicial1 = inicial;
	const saldoInicial2 = SaldoFinal(saldoInicial1, recMes1, despMes1, TotSal1);
	const saldoInicial3 = SaldoFinal(saldoInicial2, recMes2, despMes2, TotSal2);
	const saldoInicial4 = SaldoFinal(saldoInicial3, recMes3, despMes3, TotSal3);
	const saldoInicial5 = SaldoFinal(saldoInicial4, recMes4, despMes4, TotSal4);
	const saldoInicial6 = SaldoFinal(saldoInicial5, recMes5, despMes5, TotSal5);
	const saldoInicial7 = SaldoFinal(saldoInicial6, recMes6, despMes6, TotSal6);
	const saldoInicial8 = SaldoFinal(saldoInicial7, recMes7, despMes7, TotSal7);
	const saldoInicial9 = SaldoFinal(saldoInicial8, recMes8, despMes8, TotSal8);
	const saldoInicial10 = SaldoFinal(saldoInicial9, recMes9, despMes9, TotSal9);
	const saldoInicial11 = SaldoFinal(
		saldoInicial10,
		recMes10,
		despMes10,
		TotSal10
	);

	const saldoInicial12 = SaldoFinal(
		saldoInicial11,
		recMes11,
		despMes11,
		TotSal11
	);

	function SaldoFinal(
		inicial: any,
		recMes: any,
		despmes: any,
		Totalsalmes: any
	) {
		return inicial + LucroOpf(recMes, despmes, Totalsalmes);
	}

	return (
		<>
			<Navbar />
			<div className='flex  justify-center min-h-screen'>
				<ul className='mx-auto grid w-full grid-cols-12 gap-x-1 px-8'>
					<li className=''>
						<input
							className='peer sr-only'
							type='radio'
							value='janeiro'
							name='answer'
							id='janeiro'
							defaultChecked
						/>
						<label
							className='flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out'
							htmlFor='janeiro'>
							Janeiro
						</label>

						<div className='absolute w-full  bg-stone-200   p-2 mt-2 rounded-lg transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1'>
							<table className='text-sm w-3/4 border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 '>
								<thead className='text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400'>
									<tr>
										<th scope='col' className='px-6 text-center w-2/5 py-3'>
											JANEIRO 2024
										</th>

										<th scope='col' className='px-6 w-1/5 py-3 text-right'>
											Valor
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AV
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AH
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className=' border-b bg-emerald-300 '>
										<th className='py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap '>
											Receita / Faturamento
										</th>
										<td className='py-2 px-6 text-slate-900 font-mono text-right'>
											{totalReceitas(recMes1).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes1) / totalReceitas(recMes1)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											100%
										</td>
									</tr>
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Receitas com serviços
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{totalReceitas(recMes1).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes1) / totalReceitas(recMes1)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											100%
										</td>
									</tr>
									{ReceitasCentro1?.map((rec: any, index) => (
										<tr key={index} className='bg-white border-b  '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{rec.centro}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{rec.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(rec.valor / totalReceitas(recMes1))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}

									<tr className='bg-orange-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Custos Variáveis
										</th>
										<td className='py-2 px-6  text-black font-mono text-right'>
											{DespesasVariavelTotalf(despMes1)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasVariavelTotalf(despMes1) /
													totalReceitas(recMes1)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>

									{DespesasVariaveisf(despMes2)?.map((desp: any) => (
										<tr key={desp.id} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{desp.conta}
											</th>
											<td className='py-2  px-6 font-mono text-right'>
												{desp.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(desp.valor / totalReceitas(recMes1))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Margem de Contribuição
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{MargemDeContribuicaof(recMes1, despMes1).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												MargemDeContribuicaof(recMes1, despMes1) /
													totalReceitas(recMes1)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-amber-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Despesas Fixas
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{DespesasFixasTotal(despMes1, TotSal1)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasFixasTotal(despMes1, TotSal1) /
													totalReceitas(recMes1)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									{DespFixas1?.map((fixa, index: any) => (
										<tr className='border-b bg-white' key={index}>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{fixa.conta}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{fixa.valor?.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(fixa.valor / totalReceitas(recMes1))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr className='bg-amber-200 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Salários
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{TotSal1.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(TotSal1 / totalReceitas(recMes1))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>

									{salAreas1?.map((sal: any) => (
										<tr key={sal.mod} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{capitalize(sal.mod)}
											</th>
											<td className='py-2 px-6  font-mono text-right'>
												{sal.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(sal.valor / totalReceitas(recMes1))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr
										className={`${
											LucroOpf(recMes1, despMes1, TotSal1) > 0
												? "bg-teal-300"
												: "bg-red-300"
										} border-b`}>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Lucro Operacional
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{LucroOpf(recMes1, despMes1, TotSal1).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												LucroOpf(recMes1, despMes1, TotSal1) /
													totalReceitas(recMes1)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-blue-400'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Ponto de Equilíbrio
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{PontoEquilibriof(
												DespesasFixasTotal(despMes1, TotSal1),
												DespesasVariavelTotalf(despMes1),
												recMes1
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												PontoEquilibriof(
													DespesasFixasTotal(despMes1, TotSal1),
													DespesasVariavelTotalf(despMes1),
													recMes1
												) / totalReceitas(recMes1)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-slate-200'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Inicial
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{saldoInicial1.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(saldoInicial1 / totalReceitas(recMes1))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-green-300'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Final
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{SaldoFinal(
												saldoInicial1,
												recMes1,
												despMes1,
												TotSal1
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												(saldoInicial1 + LucroOpf(recMes1, despMes1, TotSal1)) /
													totalReceitas(recMes1)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>

					<li className=''>
						<input
							className='peer sr-only'
							type='radio'
							value='fevereiro'
							name='answer'
							id='fevereiro'
						/>
						<label
							className='flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out'
							htmlFor='fevereiro'>
							Fevereiro
						</label>

						<div className='absolute w-full  bg-stone-200   p-2 mt-2 rounded-lg transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1'>
							<table className='text-sm w-3/4 border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 '>
								<thead className='text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400'>
									<tr>
										<th scope='col' className='px-6 text-center w-2/5 py-3'>
											FEVEREIRO 2024
										</th>

										<th scope='col' className='px-6 w-1/5 py-3 text-right'>
											Valor
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AV
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AH
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className=' border-b bg-emerald-300 '>
										<th className='py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap '>
											Receita / Faturamento
										</th>
										<td className='py-2 px-6 text-slate-900 font-mono text-right'>
											{totalReceitas(recMes2).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes2) / totalReceitas(recMes2)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											100%
										</td>
									</tr>
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Receitas com serviços
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{totalReceitas(recMes2).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes2) / totalReceitas(recMes2)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											100%
										</td>
									</tr>
									{ReceitasCentro2?.map((rec: any, index) => (
										<tr key={index} className='bg-white border-b  '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{rec.centro}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{rec.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(rec.valor / totalReceitas(recMes2))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}

									<tr className='bg-orange-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Custos Variáveis
										</th>
										<td className='py-2 px-6  text-black font-mono text-right'>
											{DespesasVariavelTotalf(despMes2)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasVariavelTotalf(despMes2) /
													totalReceitas(recMes2)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>

									{DespesasVariaveisf(despMes2)?.map((desp: any) => (
										<tr key={desp.id} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{desp.conta}
											</th>
											<td className='py-2  px-6 font-mono text-right'>
												{desp.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(desp.valor / totalReceitas(recMes2))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Margem de Contribuição
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{MargemDeContribuicaof(recMes2, despMes2).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												MargemDeContribuicaof(recMes2, despMes2) /
													totalReceitas(recMes2)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-amber-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Despesas Fixas
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{DespesasFixasTotal(despMes2, TotSal2)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasFixasTotal(despMes2, TotSal2) /
													totalReceitas(recMes2)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									{DespFixas2?.map((fixa, index: any) => (
										<tr className='border-b bg-white' key={index}>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{fixa.conta}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{fixa.valor?.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(fixa.valor / totalReceitas(recMes2))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr className='bg-amber-200 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Salários
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{TotSal2.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(TotSal2 / totalReceitas(recMes2))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>

									{salAreas2?.map((sal: any) => (
										<tr key={sal.mod} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{capitalize(sal.mod)}
											</th>
											<td className='py-2 px-6  font-mono text-right'>
												{sal.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(sal.valor / totalReceitas(recMes2))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr
										className={`${
											LucroOpf(recMes2, despMes2, TotSal2) > 0
												? "bg-teal-300"
												: "bg-red-300"
										} border-b`}>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Lucro Operacional
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{LucroOpf(recMes2, despMes2, TotSal2).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												LucroOpf(recMes2, despMes2, TotSal2) /
													totalReceitas(recMes2)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-blue-400'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Ponto de Equilíbrio
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{PontoEquilibriof(
												DespesasFixasTotal(despMes2, TotSal2),
												DespesasVariavelTotalf(despMes2),
												recMes2
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												PontoEquilibriof(
													DespesasFixasTotal(despMes2, TotSal2),
													DespesasVariavelTotalf(despMes2),
													recMes2
												) / totalReceitas(recMes2)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-slate-200'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Inicial
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{saldoInicial2.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(saldoInicial2 / totalReceitas(recMes2))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-green-300'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Final
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{SaldoFinal(
												saldoInicial2,
												recMes2,
												despMes2,
												TotSal2
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												(saldoInicial2 + LucroOpf(recMes2, despMes2, TotSal2)) /
													totalReceitas(recMes2)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>

					<li className=''>
						<input
							className='peer sr-only'
							type='radio'
							value='marco'
							name='answer'
							id='marco'
						/>
						<label
							className='flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out'
							htmlFor='marco'>
							Março
						</label>

						<div className='absolute w-full  bg-stone-200   p-2 mt-2 rounded-lg transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1'>
							<table className='text-sm w-3/4 border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 '>
								<thead className='text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400'>
									<tr>
										<th scope='col' className='px-6 text-center w-2/5 py-3'>
											MARÇO 2024
										</th>

										<th scope='col' className='px-6 w-1/5 py-3 text-right'>
											Valor
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AV
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AH
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className=' border-b bg-emerald-300 '>
										<th className='py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap '>
											Receita / Faturamento
										</th>
										<td className='py-2 px-6 text-slate-900 font-mono text-right'>
											{totalReceitas(recMes3).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes3) / totalReceitas(recMes3)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											100%
										</td>
									</tr>
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Receitas com serviços
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{totalReceitas(recMes3).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes3) / totalReceitas(recMes3)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											100%
										</td>
									</tr>
									{ReceitasCentro3?.map((rec: any, index) => (
										<tr key={index} className='bg-white border-b  '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{rec.centro}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{rec.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(rec.valor / totalReceitas(recMes3))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}

									<tr className='bg-orange-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Custos Variáveis
										</th>
										<td className='py-2 px-6  text-black font-mono text-right'>
											{DespesasVariavelTotalf(despMes3)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasVariavelTotalf(despMes3) /
													totalReceitas(recMes3)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>

									{DespesasVariaveisf(despMes3)?.map((desp: any) => (
										<tr key={desp.id} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{desp.conta}
											</th>
											<td className='py-2  px-6 font-mono text-right'>
												{desp.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(desp.valor / totalReceitas(recMes3))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Margem de Contribuição
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{MargemDeContribuicaof(recMes3, despMes3).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												MargemDeContribuicaof(recMes3, despMes3) /
													totalReceitas(recMes3)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-amber-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Despesas Fixas
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{DespesasFixasTotal(despMes3, TotSal3)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasFixasTotal(despMes3, TotSal3) /
													totalReceitas(recMes3)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									{DespFixas3?.map((fixa, index: any) => (
										<tr className='border-b bg-white' key={index}>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{fixa.conta}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{fixa.valor?.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(fixa.valor / totalReceitas(recMes3))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr className='bg-amber-200 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Salários
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{TotSal3.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(TotSal3 / totalReceitas(recMes3))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>

									{salAreas3?.map((sal: any) => (
										<tr key={sal.mod} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{capitalize(sal.mod)}
											</th>
											<td className='py-2 px-6  font-mono text-right'>
												{sal.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(sal.valor / totalReceitas(recMes3))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr
										className={`${
											LucroOpf(recMes3, despMes3, TotSal3) > 0
												? "bg-teal-300"
												: "bg-red-300"
										} border-b`}>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Lucro Operacional
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{LucroOpf(recMes3, despMes3, TotSal3).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												LucroOpf(recMes3, despMes3, TotSal3) /
													totalReceitas(recMes3)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-blue-400'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Ponto de Equilíbrio
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{PontoEquilibriof(
												DespesasFixasTotal(despMes3, TotSal3),
												DespesasVariavelTotalf(despMes3),
												recMes3
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												PontoEquilibriof(
													DespesasFixasTotal(despMes3, TotSal3),
													DespesasVariavelTotalf(despMes3),
													recMes3
												) / totalReceitas(recMes3)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-slate-200'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Inicial
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{saldoInicial3.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(saldoInicial3 / totalReceitas(recMes3))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-green-300'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Final
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{SaldoFinal(
												saldoInicial3,
												recMes3,
												despMes3,
												TotSal3
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												(saldoInicial3 + LucroOpf(recMes3, despMes3, TotSal3)) /
													totalReceitas(recMes3)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>

					<li className=''>
						<input
							className='peer sr-only'
							type='radio'
							value='abril'
							name='answer'
							id='abril'
						/>
						<label
							className='flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out'
							htmlFor='abril'>
							Abril
						</label>

						<div className='absolute w-full  bg-stone-200   p-2 mt-2 rounded-lg transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1'>
							<table className='text-sm w-3/4 border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 '>
								<thead className='text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400'>
									<tr>
										<th scope='col' className='px-6 text-center w-2/5 py-3'>
											ABRIL 2024
										</th>

										<th scope='col' className='px-6 w-1/5 py-3 text-right'>
											Valor
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AV
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AH
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className=' border-b bg-emerald-300 '>
										<th className='py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap '>
											Receita / Faturamento
										</th>
										<td className='py-2 px-6 text-slate-900 font-mono text-right'>
											{totalReceitas(recMes4).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes4) / totalReceitas(recMes4)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											100%
										</td>
									</tr>
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Receitas com serviços
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{totalReceitas(recMes4).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes4) / totalReceitas(recMes4)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											100%
										</td>
									</tr>
									{ReceitasCentro4?.map((rec: any, index) => (
										<tr key={index} className='bg-white border-b  '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{rec.centro}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{rec.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(rec.valor / totalReceitas(recMes4))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}

									<tr className='bg-orange-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Custos Variáveis
										</th>
										<td className='py-2 px-6  text-black font-mono text-right'>
											{DespesasVariavelTotalf(despMes4)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasVariavelTotalf(despMes4) /
													totalReceitas(recMes4)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>

									{DespesasVariaveisf(despMes4)?.map((desp: any) => (
										<tr key={desp.id} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{desp.conta}
											</th>
											<td className='py-2  px-6 font-mono text-right'>
												{desp.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(desp.valor / totalReceitas(recMes4))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Margem de Contribuição
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{MargemDeContribuicaof(recMes4, despMes4).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												MargemDeContribuicaof(recMes4, despMes4) /
													totalReceitas(recMes4)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-amber-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Despesas Fixas
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{DespesasFixasTotal(despMes4, TotSal4)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasFixasTotal(despMes4, TotSal4) /
													totalReceitas(recMes4)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									{DespFixas4?.map((fixa, index: any) => (
										<tr className='border-b bg-white' key={index}>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{fixa.conta}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{fixa.valor?.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(fixa.valor / totalReceitas(recMes4))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr className='bg-amber-200 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Salários
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{TotSal4.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(TotSal4 / totalReceitas(recMes4))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>

									{salAreas4?.map((sal: any) => (
										<tr key={sal.mod} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{capitalize(sal.mod)}
											</th>
											<td className='py-2 px-6  font-mono text-right'>
												{sal.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(sal.valor / totalReceitas(recMes4))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr
										className={`${
											LucroOpf(recMes4, despMes4, TotSal4) > 0
												? "bg-teal-300"
												: "bg-red-300"
										} border-b`}>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Lucro Operacional
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{LucroOpf(recMes4, despMes4, TotSal4).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												LucroOpf(recMes4, despMes4, TotSal4) /
													totalReceitas(recMes4)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-blue-400'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Ponto de Equilíbrio
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{PontoEquilibriof(
												DespesasFixasTotal(despMes4, TotSal4),
												DespesasVariavelTotalf(despMes4),
												recMes4
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												PontoEquilibriof(
													DespesasFixasTotal(despMes4, TotSal4),
													DespesasVariavelTotalf(despMes4),
													recMes4
												) / totalReceitas(recMes4)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-slate-200'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Inicial
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{saldoInicial4.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(saldoInicial4 / totalReceitas(recMes4))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-green-300'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Final
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{SaldoFinal(
												saldoInicial4,
												recMes4,
												despMes4,
												TotSal4
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												(saldoInicial4 + LucroOpf(recMes4, despMes4, TotSal4)) /
													totalReceitas(recMes4)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>

					<li className=''>
						<input
							className='peer sr-only'
							type='radio'
							value='maio'
							name='answer'
							id='maio'
						/>
						<label
							className='flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out'
							htmlFor='maio'>
							Maio
						</label>

						<div className='absolute w-full  bg-stone-200   p-2 mt-2 rounded-lg transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1'>
							<table className='text-sm w-3/4 border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 '>
								<thead className='text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400'>
									<tr>
										<th scope='col' className='px-6 text-center w-2/5 py-3'>
											MAIO 2024
										</th>

										<th scope='col' className='px-6 w-1/5 py-3 text-right'>
											Valor
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AV
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AH
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className=' border-b bg-emerald-300 '>
										<th className='py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap '>
											Receita / Faturamento
										</th>
										<td className='py-2 px-6 text-slate-900 font-mono text-right'>
											{totalReceitas(recMes5).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes5) / totalReceitas(recMes5)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											100%
										</td>
									</tr>
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Receitas com serviços
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{totalReceitas(recMes5).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes5) / totalReceitas(recMes5)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											100%
										</td>
									</tr>
									{ReceitasCentro5?.map((rec: any, index) => (
										<tr key={index} className='bg-white border-b  '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{rec.centro}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{rec.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(rec.valor / totalReceitas(recMes5))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}

									<tr className='bg-orange-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Custos Variáveis
										</th>
										<td className='py-2 px-6  text-black font-mono text-right'>
											{DespesasVariavelTotalf(despMes5)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasVariavelTotalf(despMes5) /
													totalReceitas(recMes5)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>

									{DespesasVariaveisf(despMes5)?.map((desp: any) => (
										<tr key={desp.id} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{desp.conta}
											</th>
											<td className='py-2  px-6 font-mono text-right'>
												{desp.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(desp.valor / totalReceitas(recMes5))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Margem de Contribuição
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{MargemDeContribuicaof(recMes5, despMes5).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												MargemDeContribuicaof(recMes5, despMes5) /
													totalReceitas(recMes5)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-amber-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Despesas Fixas
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{DespesasFixasTotal(despMes5, TotSal5)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasFixasTotal(despMes5, TotSal5) /
													totalReceitas(recMes5)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									{DespFixas5?.map((fixa, index: any) => (
										<tr className='border-b bg-white' key={index}>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{fixa.conta}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{fixa.valor?.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(fixa.valor / totalReceitas(recMes5))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr className='bg-amber-200 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Salários
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{TotSal5.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(TotSal5 / totalReceitas(recMes5))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>

									{salAreas5?.map((sal: any) => (
										<tr key={sal.mod} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{capitalize(sal.mod)}
											</th>
											<td className='py-2 px-6  font-mono text-right'>
												{sal.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(sal.valor / totalReceitas(recMes5))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr
										className={`${
											LucroOpf(recMes5, despMes5, TotSal5) > 0
												? "bg-teal-300"
												: "bg-red-300"
										} border-b`}>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Lucro Operacional
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{LucroOpf(recMes5, despMes5, TotSal5).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												LucroOpf(recMes5, despMes5, TotSal5) /
													totalReceitas(recMes5)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-blue-400'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Ponto de Equilíbrio
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{PontoEquilibriof(
												DespesasFixasTotal(despMes5, TotSal5),
												DespesasVariavelTotalf(despMes5),
												recMes5
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												PontoEquilibriof(
													DespesasFixasTotal(despMes5, TotSal5),
													DespesasVariavelTotalf(despMes5),
													recMes5
												) / totalReceitas(recMes5)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-slate-200'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Inicial
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{saldoInicial5.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(saldoInicial5 / totalReceitas(recMes5))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
									<tr className='bg-green-300'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Final
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{SaldoFinal(
												saldoInicial5,
												recMes5,
												despMes5,
												TotSal5
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												(saldoInicial5 + LucroOpf(recMes5, despMes5, TotSal5)) /
													totalReceitas(recMes5)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'></td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>
					<li className=''>
						<input
							className='peer sr-only'
							type='radio'
							value='junho'
							name='answer'
							id='junho'
						/>
						<label
							className='flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out'
							htmlFor='junho'>
							Junho
						</label>

						<div className='absolute w-full bg-stone-200 left-3 p-6  mt-2 rounded-lg mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1'>
							<table className='text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 '>
								<thead className='text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400'>
									<tr>
										<th scope='col' className='px-6 text-center w-2/5 py-3'>
											JUNHO 2024
										</th>

										<th scope='col' className='px-6 w-1/5 py-3 text-right'>
											Valor
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AV
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AH
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className=' border-b bg-emerald-300 '>
										<th className='py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap '>
											Receita / Faturamento
										</th>
										<td className='py-2 px-6 text-slate-900 font-mono text-right'>
											{totalReceitas(recMes6).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes6) / totalReceitas(recMes6)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(totalReceitas(recMes6) - totalReceitas(recMes5)) /
													totalReceitas(recMes5)
											)}
										</td>
									</tr>
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Receitas com serviços
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{totalReceitas(recMes6).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes6) / totalReceitas(recMes6)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(totalReceitas(recMes6) - totalReceitas(recMes5)) /
													totalReceitas(recMes5)
											)}
										</td>
									</tr>
									{ReceitasCentro6?.map((rec: any, index) => (
										<tr key={index} className='bg-white border-b  '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{rec.centro}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{rec.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(rec.valor / totalReceitas(recMes6))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}

									<tr className='bg-orange-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Custos Variáveis
										</th>
										<td className='py-2 px-6  text-black font-mono text-right'>
											{DespesasVariavelTotalf(despMes6)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasVariavelTotalf(despMes6) /
													totalReceitas(recMes6)
											)}
										</td>

										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(DespesasVariavelTotalf(despMes6) -
													DespesasVariavelTotalf(despMes5)) /
													DespesasVariavelTotalf(despMes5)
											)}
										</td>
									</tr>

									{DespesasVariaveisf(despMes6)?.map((desp: any) => (
										<tr key={desp.id} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{desp.conta}
											</th>
											<td className='py-2  px-6 font-mono text-right'>
												{desp.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(desp.valor / totalReceitas(recMes6))}
											</td>
											<td></td>
										</tr>
									))}
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Margem de Contribuição
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{MargemDeContribuicaof(recMes6, despMes6).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												MargemDeContribuicaof(recMes6, despMes6) /
													totalReceitas(recMes6)
											)}
										</td>

										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(MargemDeContribuicaof(recMes6, despMes6) -
													MargemDeContribuicaof(recMes5, despMes5)) /
													MargemDeContribuicaof(recMes5, despMes5)
											)}
										</td>
									</tr>
									<tr className='bg-amber-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Despesas Fixas
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{DespesasFixasTotal(despMes6, TotSal6)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasFixasTotal(despMes6, TotSal6) /
													totalReceitas(recMes6)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(DespesasFixasTotal(despMes6, TotSal6) -
													DespesasFixasTotal(despMes5, TotSal5)) /
													DespesasFixasTotal(despMes5, TotSal5)
											)}
										</td>
									</tr>
									{DespFixas6?.map((fixa, index: any) => (
										<tr className='bg-white border-b' key={index}>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{fixa.conta}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{fixa.valor?.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(fixa.valor / totalReceitas(recMes6))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr className='bg-amber-200 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Salários
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{TotSal6.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(TotSal6 / totalReceitas(recMes6))}
										</td>

										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format((TotSal6 - TotSal5) / TotSal5)}
										</td>
									</tr>
									{salAreas6?.map((sal: any) => (
										<tr key={sal.mod} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{capitalize(sal.mod)}
											</th>
											<td className='py-2 px-6  font-mono text-right'>
												{sal.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(sal.valor / totalReceitas(recMes6))}
											</td>
											<td></td>
										</tr>
									))}
									<tr
										className={`${
											LucroOpf(recMes6, despMes6, TotSal6) > 0
												? "bg-teal-300"
												: "bg-red-300"
										} border-b`}>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Lucro Operacional
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{LucroOpf(recMes6, despMes6, TotSal6).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												LucroOpf(recMes6, despMes6, TotSal6) /
													totalReceitas(recMes6)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(LucroOpf(recMes6, despMes6, TotSal6) -
													LucroOpf(recMes5, despMes5, TotSal5)) /
													LucroOpf(recMes5, despMes5, TotSal5)
											)}
										</td>
									</tr>
									<tr className='bg-blue-400'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Ponto de Equilíbrio
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{PontoEquilibriof(
												DespesasFixasTotal(despMes6, TotSal6),
												DespesasVariavelTotalf(despMes6),
												recMes6
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												PontoEquilibriof(
													DespesasFixasTotal(despMes6, TotSal6),
													DespesasVariavelTotalf(despMes6),
													recMes6
												) / totalReceitas(recMes6)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(PontoEquilibriof(
													DespesasFixasTotal(despMes6, TotSal6),
													DespesasVariavelTotalf(despMes6),
													recMes6
												) -
													PontoEquilibriof(
														DespesasFixasTotal(despMes5, TotSal5),
														DespesasVariavelTotalf(despMes5),
														recMes5
													)) /
													PontoEquilibriof(
														DespesasFixasTotal(despMes5, TotSal5),
														DespesasVariavelTotalf(despMes5),
														recMes5
													)
											)}
										</td>
									</tr>
									<tr className='bg-slate-200'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Inicial
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{saldoInicial6.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(saldoInicial6 / totalReceitas(recMes6))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(saldoInicial6 - saldoInicial5) / saldoInicial5
											)}
										</td>
									</tr>
									<tr className='bg-green-300'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Final
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{SaldoFinal(
												saldoInicial6,
												recMes6,
												despMes6,
												TotSal6
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>

										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												(SaldoFinal(saldoInicial6, recMes6, despMes6, TotSal6) +
													LucroOpf(recMes6, despMes6, TotSal6)) /
													totalReceitas(recMes6)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(SaldoFinal(saldoInicial6, recMes6, despMes6, TotSal6) -
													SaldoFinal(
														saldoInicial5,
														recMes5,
														despMes5,
														TotSal5
													)) /
													SaldoFinal(saldoInicial5, recMes5, despMes5, TotSal5)
											)}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>

					<li className=''>
						<input
							className='peer sr-only'
							type='radio'
							value='julho'
							name='answer'
							id='julho'
						/>
						<label
							className='flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out'
							htmlFor='julho'>
							Julho
						</label>

						<div className='absolute bg-stone-200 left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1'>
							<table className='text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 '>
								<thead className='text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400'>
									<tr>
										<th scope='col' className='px-6 text-center w-2/5 py-3'>
											JULHO 2024
										</th>

										<th scope='col' className='px-6 w-1/5 py-3 text-right'>
											Valor
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AV
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AH
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className=' border-b bg-emerald-300 '>
										<th className='py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap '>
											Receita / Faturamento
										</th>
										<td className='py-2 px-6 text-slate-900 font-mono text-right'>
											{totalReceitas(recMes7).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes7) / totalReceitas(recMes7)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(totalReceitas(recMes7) - totalReceitas(recMes6)) /
													totalReceitas(recMes6)
											)}
										</td>
									</tr>
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Receitas com serviços
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{totalReceitas(recMes7).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes7) / totalReceitas(recMes7)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(totalReceitas(recMes7) - totalReceitas(recMes6)) /
													totalReceitas(recMes6)
											)}
										</td>
									</tr>
									{ReceitasCentro7?.map((rec: any, index) => (
										<tr key={index} className='bg-white border-b  '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{rec.centro}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{rec.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(rec.valor / totalReceitas(recMes7))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}

									<tr className='bg-orange-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Custos Variáveis
										</th>
										<td className='py-2 px-6  text-black font-mono text-right'>
											{DespesasVariavelTotalf(despMes7)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasVariavelTotalf(despMes7) /
													totalReceitas(recMes7)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(DespesasVariavelTotalf(despMes7) -
													DespesasVariavelTotalf(despMes6)) /
													DespesasVariavelTotalf(despMes6)
											)}
										</td>
									</tr>

									{DespesasVariaveisf(despMes7)?.map((desp: any) => (
										<tr key={desp.id} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{desp.conta}
											</th>
											<td className='py-2  px-6 font-mono text-right'>
												{desp.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(desp.valor / totalReceitas(recMes7))}
											</td>
										</tr>
									))}
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Margem de Contribuição
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{MargemDeContribuicaof(recMes7, despMes7).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												MargemDeContribuicaof(recMes7, despMes7) /
													totalReceitas(recMes7)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(MargemDeContribuicaof(recMes7, despMes7) -
													MargemDeContribuicaof(recMes6, despMes6)) /
													MargemDeContribuicaof(recMes6, despMes6)
											)}
										</td>
									</tr>
									<tr className='bg-amber-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Despesas Fixas
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{DespesasFixasTotal(despMes7, TotSal7)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasFixasTotal(despMes7, TotSal7) /
													totalReceitas(recMes7)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(DespesasFixasTotal(despMes7, TotSal7) -
													DespesasFixasTotal(despMes6, TotSal6)) /
													DespesasFixasTotal(despMes6, TotSal6)
											)}
										</td>
									</tr>
									{DespFixas7?.map((fixa, index: any) => (
										<tr className='border-b bg-white' key={index}>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{fixa.conta}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{fixa.valor?.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(fixa.valor / totalReceitas(recMes7))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr className='bg-amber-200 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Salários
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{TotSal7.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(TotSal7 / totalReceitas(recMes7))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format((TotSal7 - TotSal6) / TotSal6)}
										</td>
									</tr>
									{salAreas7?.map((sal: any) => (
										<tr key={sal.mod} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{capitalize(sal.mod)}
											</th>
											<td className='py-2 px-6  font-mono text-right'>
												{sal.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(sal.valor / totalReceitas(recMes7))}
											</td>
										</tr>
									))}
									<tr
										className={`${
											LucroOpf(recMes7, despMes7, TotSal7) > 0
												? "bg-teal-300"
												: "bg-red-300"
										} border-b`}>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Lucro Operacional
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{LucroOpf(recMes7, despMes7, TotSal7).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												LucroOpf(recMes7, despMes7, TotSal7) /
													totalReceitas(recMes7)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(LucroOpf(recMes7, despMes7, TotSal7) -
													LucroOpf(recMes6, despMes6, TotSal6)) /
													LucroOpf(recMes6, despMes6, TotSal6)
											)}
										</td>
									</tr>
									<tr className='bg-blue-400'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Ponto de Equilíbrio
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{PontoEquilibriof(
												DespesasFixasTotal(despMes7, TotSal7),
												DespesasVariavelTotalf(despMes7),
												recMes7
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												PontoEquilibriof(
													DespesasFixasTotal(despMes7, TotSal7),
													DespesasVariavelTotalf(despMes7),
													recMes7
												) / totalReceitas(recMes7)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(PontoEquilibriof(
													DespesasFixasTotal(despMes7, TotSal7),
													DespesasVariavelTotalf(despMes7),
													recMes7
												) -
													PontoEquilibriof(
														DespesasFixasTotal(despMes6, TotSal6),
														DespesasVariavelTotalf(despMes6),
														recMes6
													)) /
													PontoEquilibriof(
														DespesasFixasTotal(despMes6, TotSal6),
														DespesasVariavelTotalf(despMes6),
														recMes6
													)
											)}
										</td>
									</tr>
									<tr className='bg-slate-200'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Inicial
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{saldoInicial7.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(saldoInicial7 / totalReceitas(recMes7))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(saldoInicial7 - saldoInicial6) / saldoInicial6
											)}
										</td>
									</tr>
									<tr className='bg-green-300'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Final
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{SaldoFinal(
												saldoInicial7,
												recMes7,
												despMes7,
												TotSal7
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												(SaldoFinal(saldoInicial7, recMes7, despMes7, TotSal7) +
													LucroOpf(recMes7, despMes7, TotSal7)) /
													totalReceitas(recMes7)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(SaldoFinal(saldoInicial7, recMes7, despMes7, TotSal7) -
													SaldoFinal(
														saldoInicial6,
														recMes6,
														despMes6,
														TotSal6
													)) /
													SaldoFinal(saldoInicial6, recMes6, despMes6, TotSal6)
											)}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>

					<li className=''>
						<input
							className='peer sr-only'
							type='radio'
							value='agosto'
							name='answer'
							id='agosto'
						/>
						<label
							className='flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out'
							htmlFor='agosto'>
							Agosto
						</label>

						<div className='absolute bg-stone-200  left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1'>
							<table className='text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 '>
								<thead className='text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400'>
									<tr>
										<th scope='col' className='px-6 text-center w-2/5 py-3'>
											AGOSTO 2024
										</th>

										<th scope='col' className='px-6 w-1/5 py-3 text-right'>
											Valor
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AV
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AH
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className=' border-b bg-emerald-300 '>
										<th className='py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap '>
											Receita / Faturamento
										</th>
										<td className='py-2 px-6 text-slate-900 font-mono text-right'>
											{totalReceitas(recMes8).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes8) / totalReceitas(recMes8)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(totalReceitas(recMes8) - totalReceitas(recMes7)) /
													totalReceitas(recMes7)
											)}
										</td>
									</tr>
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Receitas com serviços
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{totalReceitas(recMes8).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes8) / totalReceitas(recMes8)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(totalReceitas(recMes8) - totalReceitas(recMes7)) /
													totalReceitas(recMes7)
											)}
										</td>
									</tr>
									{ReceitasCentro8?.map((rec: any, index) => (
										<tr key={index} className='bg-white border-b  '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{rec.centro}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{rec.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(rec.valor / totalReceitas(recMes8))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}

									<tr className='bg-orange-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Custos Variáveis
										</th>
										<td className='py-2 px-6  text-black font-mono text-right'>
											{DespesasVariavelTotalf(despMes8)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasVariavelTotalf(despMes8) /
													totalReceitas(recMes8)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(DespesasVariavelTotalf(despMes8) -
													DespesasVariavelTotalf(despMes7)) /
													DespesasVariavelTotalf(despMes7)
											)}
										</td>
									</tr>

									{DespesasVariaveisf(despMes8)?.map((desp: any) => (
										<tr key={desp.id} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{desp.conta}
											</th>
											<td className='py-2  px-6 font-mono text-right'>
												{desp.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(desp.valor / totalReceitas(recMes8))}
											</td>
										</tr>
									))}
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Margem de Contribuição
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{MargemDeContribuicaof(recMes8, despMes8).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												MargemDeContribuicaof(recMes8, despMes8) /
													totalReceitas(recMes8)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(MargemDeContribuicaof(recMes8, despMes8) -
													MargemDeContribuicaof(recMes7, despMes7)) /
													MargemDeContribuicaof(recMes7, despMes7)
											)}
										</td>
									</tr>
									<tr className='bg-amber-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Despesas Fixas
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{DespesasFixasTotal(despMes8, TotSal8)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasFixasTotal(despMes8, TotSal8) /
													totalReceitas(recMes8)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(DespesasFixasTotal(despMes8, TotSal8) -
													DespesasFixasTotal(despMes7, TotSal7)) /
													DespesasFixasTotal(despMes7, TotSal7)
											)}
										</td>
									</tr>
									{DespFixas8?.map((fixa, index: any) => (
										<tr className='bg-white border-b' key={index}>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{fixa.conta}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{fixa.valor?.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(fixa.valor / totalReceitas(recMes8))}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'></td>
										</tr>
									))}
									<tr className='bg-amber-200 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Salários
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{TotSal8.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(TotSal8 / totalReceitas(recMes8))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format((TotSal8 - TotSal7) / TotSal7)}
										</td>
									</tr>
									{salAreas8?.map((sal: any) => (
										<tr key={sal.mod} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{capitalize(sal.mod)}
											</th>
											<td className='py-2 px-6  font-mono text-right'>
												{sal.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(sal.valor / totalReceitas(recMes8))}
											</td>
										</tr>
									))}
									<tr
										className={`${
											LucroOpf(recMes8, despMes8, TotSal8) > 0
												? "bg-teal-300"
												: "bg-red-300"
										} border-b`}>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Lucro Operacional
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{LucroOpf(recMes8, despMes8, TotSal8).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												LucroOpf(recMes8, despMes8, TotSal8) /
													totalReceitas(recMes8)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(LucroOpf(recMes8, despMes8, TotSal8) -
													LucroOpf(recMes7, despMes7, TotSal7)) /
													LucroOpf(recMes7, despMes7, TotSal7)
											)}
										</td>
									</tr>
									<tr className='bg-blue-400'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Ponto de Equilíbrio
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{PontoEquilibriof(
												DespesasFixasTotal(despMes8, TotSal8),
												DespesasVariavelTotalf(despMes8),
												recMes8
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												PontoEquilibriof(
													DespesasFixasTotal(despMes8, TotSal8),
													DespesasVariavelTotalf(despMes8),
													recMes8
												) / totalReceitas(recMes8)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(PontoEquilibriof(
													DespesasFixasTotal(despMes8, TotSal8),
													DespesasVariavelTotalf(despMes8),
													recMes8
												) -
													PontoEquilibriof(
														DespesasFixasTotal(despMes7, TotSal7),
														DespesasVariavelTotalf(despMes7),
														recMes7
													)) /
													PontoEquilibriof(
														DespesasFixasTotal(despMes7, TotSal7),
														DespesasVariavelTotalf(despMes7),
														recMes7
													)
											)}
										</td>
									</tr>
									<tr className='bg-slate-200'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Inicial
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{saldoInicial8.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(saldoInicial8 / totalReceitas(recMes8))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(saldoInicial8 - saldoInicial7) / saldoInicial7
											)}
										</td>
									</tr>
									<tr className='bg-green-300'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Final
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{SaldoFinal(
												saldoInicial8,
												recMes8,
												despMes8,
												TotSal8
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												(SaldoFinal(saldoInicial8, recMes8, despMes8, TotSal8) +
													LucroOpf(recMes8, despMes8, TotSal8)) /
													totalReceitas(recMes8)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(SaldoFinal(saldoInicial8, recMes8, despMes8, TotSal8) -
													SaldoFinal(
														saldoInicial7,
														recMes7,
														despMes7,
														TotSal7
													)) /
													SaldoFinal(saldoInicial7, recMes7, despMes7, TotSal7)
											)}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>
					<li className=''>
						<input
							className='peer sr-only'
							type='radio'
							value='setembro'
							name='answer'
							id='setembro'
						/>
						<label
							className='flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:ring-slate-400 peer-checked:bg-slate-300 transition-all duration-500 ease-in-out'
							htmlFor='setembro'>
							Setembro
						</label>

						<div className='absolute bg-stone-200 left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1'>
							<table className='text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 '>
								<thead className='text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400'>
									<tr>
										<th scope='col' className='px-6 text-center w-2/5 py-3'>
											SETEMBRO 2024
										</th>

										<th scope='col' className='px-6 w-1/5 py-3 text-right'>
											Valor
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AV
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AH
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className=' border-b bg-emerald-300 '>
										<th className='py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap '>
											Receita / Faturamento
										</th>
										<td className='py-2 px-6 text-slate-900 font-mono text-right'>
											{totalReceitas(recMes9).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes9) / totalReceitas(recMes9)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(totalReceitas(recMes9) - totalReceitas(recMes8)) /
													totalReceitas(recMes8)
											)}
										</td>
									</tr>
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Receitas com serviços
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{totalReceitas(recMes9).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes9) / totalReceitas(recMes9)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(totalReceitas(recMes9) - totalReceitas(recMes8)) /
													totalReceitas(recMes8)
											)}
										</td>
									</tr>
									{ReceitasCentro9?.map((rec: any, index) => (
										<tr key={index} className='bg-white border-b  '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{rec.centro}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{rec.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(rec.valor / totalReceitas(recMes9))}
											</td>
											<td></td>
										</tr>
									))}

									<tr className='bg-orange-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Custos Variáveis
										</th>
										<td className='py-2 px-6  text-black font-mono text-right'>
											{DespesasVariavelTotalf(despMes9)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasVariavelTotalf(despMes9) /
													totalReceitas(recMes9)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(DespesasVariavelTotalf(despMes9) -
													DespesasVariavelTotalf(despMes8)) /
													DespesasVariavelTotalf(despMes8)
											)}
										</td>
									</tr>

									{DespesasVariaveisf(despMes9)?.map((desp: any) => (
										<tr key={desp.id} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{desp.conta}
											</th>
											<td className='py-2  px-6 font-mono text-right'>
												{desp.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(desp.valor / totalReceitas(recMes9))}
											</td>
										</tr>
									))}
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Margem de Contribuição
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{MargemDeContribuicaof(recMes9, despMes9).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												MargemDeContribuicaof(recMes9, despMes9) /
													totalReceitas(recMes9)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(MargemDeContribuicaof(recMes9, despMes9) -
													MargemDeContribuicaof(recMes8, despMes8)) /
													MargemDeContribuicaof(recMes8, despMes8)
											)}
										</td>
									</tr>
									<tr className='bg-amber-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Despesas Fixas
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{DespesasFixasTotal(despMes9, TotSal9)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasFixasTotal(despMes9, TotSal9) /
													totalReceitas(recMes9)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(DespesasFixasTotal(despMes9, TotSal9) -
													DespesasFixasTotal(despMes8, TotSal8)) /
													DespesasFixasTotal(despMes8, TotSal8)
											)}
										</td>
									</tr>
									{DespFixas9?.map((fixa, index: any) => (
										<tr className='bg-white border-b' key={index}>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{fixa.conta}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{fixa.valor?.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(fixa.valor / totalReceitas(recMes9))}
											</td>
											<td></td>
										</tr>
									))}
									<tr className='bg-amber-200 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Salários
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{TotSal9.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(TotSal9 / totalReceitas(recMes9))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format((TotSal9 - TotSal8) / TotSal8)}
										</td>
									</tr>
									{salAreas9?.map((sal: any) => (
										<tr key={sal.mod} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{capitalize(sal.mod)}
											</th>
											<td className='py-2 px-6  font-mono text-right'>
												{sal.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(sal.valor / totalReceitas(recMes9))}
											</td>
										</tr>
									))}
									<tr
										className={`${
											LucroOpf(recMes9, despMes9, TotSal9) > 0
												? "bg-teal-300"
												: "bg-red-300"
										} border-b`}>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Lucro Operacional
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{LucroOpf(recMes9, despMes9, TotSal9).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												LucroOpf(recMes9, despMes9, TotSal9) /
													totalReceitas(recMes9)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(LucroOpf(recMes9, despMes9, TotSal9) -
													LucroOpf(recMes8, despMes8, TotSal8)) /
													LucroOpf(recMes8, despMes8, TotSal8)
											)}
										</td>
									</tr>
									<tr className='bg-blue-400'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Ponto de Equilíbrio
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{PontoEquilibriof(
												DespesasFixasTotal(despMes9, TotSal9),
												DespesasVariavelTotalf(despMes9),
												recMes9
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												PontoEquilibriof(
													DespesasFixasTotal(despMes9, TotSal9),
													DespesasVariavelTotalf(despMes9),
													recMes9
												) / totalReceitas(recMes9)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(PontoEquilibriof(
													DespesasFixasTotal(despMes9, TotSal9),
													DespesasVariavelTotalf(despMes9),
													recMes9
												) -
													PontoEquilibriof(
														DespesasFixasTotal(despMes8, TotSal8),
														DespesasVariavelTotalf(despMes8),
														recMes8
													)) /
													PontoEquilibriof(
														DespesasFixasTotal(despMes8, TotSal8),
														DespesasVariavelTotalf(despMes8),
														recMes8
													)
											)}
										</td>
									</tr>
									<tr className='bg-slate-200'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Inicial
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{saldoInicial9.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(saldoInicial9 / totalReceitas(recMes9))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(saldoInicial9 - saldoInicial8) / saldoInicial8
											)}
										</td>
									</tr>
									<tr className='bg-green-300'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Final
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{SaldoFinal(
												saldoInicial9,
												recMes9,
												despMes9,
												TotSal9
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												(SaldoFinal(saldoInicial9, recMes9, despMes9, TotSal9) +
													LucroOpf(recMes9, despMes9, TotSal9)) /
													totalReceitas(recMes9)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(SaldoFinal(saldoInicial9, recMes9, despMes9, TotSal9) -
													SaldoFinal(
														saldoInicial8,
														recMes8,
														despMes8,
														TotSal8
													)) /
													SaldoFinal(saldoInicial8, recMes8, despMes8, TotSal8)
											)}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>
					<li className=''>
						<input
							className='peer sr-only'
							type='radio'
							value='outubro'
							name='answer'
							id='outubro'
						/>
						<label
							className='flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out'
							htmlFor='outubro'>
							Outubro
						</label>

						<div className='absolute bg-stone-200 left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100  peer-checked:visible peer-checked:translate-x-1'>
							<table className='text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 '>
								<thead className='text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400'>
									<tr>
										<th scope='col' className='px-6 text-center w-2/5 py-3'>
											OUTUBRO 2024
										</th>

										<th scope='col' className='px-6 w-1/5 py-3 text-right'>
											Valor
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AV
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AH
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className=' border-b bg-emerald-300 '>
										<th className='py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap '>
											Receita / Faturamento
										</th>
										<td className='py-2 px-6 text-slate-900 font-mono text-right'>
											{totalReceitas(recMes10).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes10) / totalReceitas(recMes10)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(totalReceitas(recMes10) - totalReceitas(recMes9)) /
													totalReceitas(recMes9)
											)}
										</td>
									</tr>
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Receitas com serviços
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{totalReceitas(recMes10).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes10) / totalReceitas(recMes10)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(totalReceitas(recMes10) - totalReceitas(recMes9)) /
													totalReceitas(recMes9)
											)}
										</td>
									</tr>
									{ReceitasCentro10?.map((rec: any, index) => (
										<tr key={index} className='bg-white border-b  '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{rec.centro}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{rec.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(rec.valor / totalReceitas(recMes10))}
											</td>
											<td></td>
										</tr>
									))}

									<tr className='bg-orange-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Custos Variáveis
										</th>
										<td className='py-2 px-6  text-black font-mono text-right'>
											{DespesasVariavelTotalf(despMes10)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasVariavelTotalf(despMes10) /
													totalReceitas(recMes10)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(DespesasVariavelTotalf(despMes10) -
													DespesasVariavelTotalf(despMes9)) /
													DespesasVariavelTotalf(despMes9)
											)}
										</td>
									</tr>

									{DespesasVariaveisf(despMes10)?.map((desp: any, index) => (
										<tr key={index} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{desp.conta}
											</th>
											<td className='py-2  px-6 font-mono text-right'>
												{desp.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(desp.valor / totalReceitas(recMes10))}
											</td>
										</tr>
									))}
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Margem de Contribuição
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{MargemDeContribuicaof(
												recMes10,
												despMes10
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												MargemDeContribuicaof(recMes10, despMes10) /
													totalReceitas(recMes9)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(MargemDeContribuicaof(recMes10, despMes10) -
													MargemDeContribuicaof(recMes9, despMes9)) /
													MargemDeContribuicaof(recMes9, despMes9)
											)}
										</td>
									</tr>
									<tr className='bg-amber-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Despesas Fixas
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{DespesasFixasTotal(despMes10, TotSal10)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasFixasTotal(despMes10, TotSal10) /
													totalReceitas(recMes10)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(DespesasFixasTotal(despMes10, TotSal10) -
													DespesasFixasTotal(despMes9, TotSal9)) /
													DespesasFixasTotal(despMes9, TotSal9)
											)}
										</td>
									</tr>
									{DespFixas10?.map((fixa, index: any) => (
										<tr className='bg-white border-b' key={index}>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{fixa.conta}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{fixa.valor?.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(fixa.valor / totalReceitas(recMes10))}
											</td>
											<td></td>
										</tr>
									))}
									<tr className='bg-amber-200 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Salários
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{TotSal10.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(TotSal10 / totalReceitas(recMes10))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format((TotSal10 - TotSal9) / TotSal9)}
										</td>
									</tr>
									{salAreas10?.map((sal: any) => (
										<tr key={sal.mod} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{capitalize(sal.mod)}
											</th>
											<td className='py-2 px-6  font-mono text-right'>
												{sal.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(sal.valor / totalReceitas(recMes10))}
											</td>
										</tr>
									))}
									<tr
										className={`${
											LucroOpf(recMes10, despMes10, TotSal10) > 0
												? "bg-teal-300"
												: "bg-red-300"
										} border-b`}>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Lucro Operacional
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{LucroOpf(recMes10, despMes10, TotSal10).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												LucroOpf(recMes10, despMes10, TotSal10) /
													totalReceitas(recMes10)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(LucroOpf(recMes10, despMes10, TotSal10) -
													LucroOpf(recMes9, despMes9, TotSal9)) /
													LucroOpf(recMes9, despMes9, TotSal9)
											)}
										</td>
									</tr>
									<tr className='bg-blue-400'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Ponto de Equilíbrio
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{PontoEquilibriof(
												DespesasFixasTotal(despMes10, TotSal10),
												DespesasVariavelTotalf(despMes10),
												recMes10
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												PontoEquilibriof(
													DespesasFixasTotal(despMes10, TotSal10),
													DespesasVariavelTotalf(despMes10),
													recMes10
												) / totalReceitas(recMes10)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(PontoEquilibriof(
													DespesasFixasTotal(despMes10, TotSal10),
													DespesasVariavelTotalf(despMes10),
													recMes10
												) -
													PontoEquilibriof(
														DespesasFixasTotal(despMes9, TotSal9),
														DespesasVariavelTotalf(despMes9),
														recMes9
													)) /
													PontoEquilibriof(
														DespesasFixasTotal(despMes9, TotSal9),
														DespesasVariavelTotalf(despMes9),
														recMes9
													)
											)}
										</td>
									</tr>
									<tr className='bg-slate-200'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Inicial
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{saldoInicial10.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(saldoInicial10 / totalReceitas(recMes10))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(saldoInicial10 - saldoInicial9) / saldoInicial9
											)}
										</td>
									</tr>
									<tr className='bg-green-300'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Final
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{SaldoFinal(
												saldoInicial10,
												recMes10,
												despMes10,
												TotSal10
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												(SaldoFinal(
													saldoInicial10,
													recMes10,
													despMes10,
													TotSal10
												) +
													LucroOpf(recMes10, despMes10, TotSal10)) /
													totalReceitas(recMes10)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(SaldoFinal(
													saldoInicial10,
													recMes10,
													despMes10,
													TotSal10
												) -
													SaldoFinal(
														saldoInicial9,
														recMes9,
														despMes9,
														TotSal9
													)) /
													SaldoFinal(saldoInicial9, recMes9, despMes9, TotSal9)
											)}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>
					<li className=''>
						<input
							className='peer sr-only'
							type='radio'
							value='novembro'
							name='answer'
							id='novembro'
						/>
						<label
							className='flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:bg-slate-300 peer-checked:ring-1 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out'
							htmlFor='novembro'>
							Novembro
						</label>

						<div className='absolute bg-stone-200 left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1'>
							<table className='text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 '>
								<thead className='text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400'>
									<tr>
										<th scope='col' className='px-6 text-center w-2/5 py-3'>
											NOVEMBRO 2024
										</th>

										<th scope='col' className='px-6 w-1/5 py-3 text-right'>
											Valor
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AV
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AH
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className=' border-b bg-emerald-300 '>
										<th className='py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap '>
											Receita / Faturamento
										</th>
										<td className='py-2 px-6 text-slate-900 font-mono text-right'>
											{totalReceitas(recMes11).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes11) / totalReceitas(recMes11)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(totalReceitas(recMes11) - totalReceitas(recMes10)) /
													totalReceitas(recMes10)
											)}
										</td>
									</tr>
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Receitas com serviços
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{totalReceitas(recMes11).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes11) / totalReceitas(recMes11)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(totalReceitas(recMes11) - totalReceitas(recMes10)) /
													totalReceitas(recMes10)
											)}
										</td>
									</tr>
									{ReceitasCentro11?.map((rec: any, index) => (
										<tr key={index} className='bg-white border-b  '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{rec.centro}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{rec.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(rec.valor / totalReceitas(recMes11))}
											</td>
											<td></td>
										</tr>
									))}

									<tr className='bg-orange-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Custos Variáveis
										</th>
										<td className='py-2 px-6  text-black font-mono text-right'>
											{DespesasVariavelTotalf(despMes11)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasVariavelTotalf(despMes11) /
													totalReceitas(recMes11)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(DespesasVariavelTotalf(despMes11) -
													DespesasVariavelTotalf(despMes10)) /
													DespesasVariavelTotalf(despMes10)
											)}
										</td>
									</tr>

									{DespesasVariaveisf(despMes11)?.map((desp: any) => (
										<tr key={desp.id} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{desp.conta}
											</th>
											<td className='py-2  px-6 font-mono text-right'>
												{desp.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(desp.valor / totalReceitas(recMes11))}
											</td>
										</tr>
									))}
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Margem de Contribuição
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{MargemDeContribuicaof(
												recMes11,
												despMes11
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												MargemDeContribuicaof(recMes11, despMes11) /
													totalReceitas(recMes11)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(MargemDeContribuicaof(recMes11, despMes11) -
													MargemDeContribuicaof(recMes10, despMes10)) /
													MargemDeContribuicaof(recMes10, despMes10)
											)}
										</td>
									</tr>
									<tr className='bg-amber-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Despesas Fixas
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{DespesasFixasTotal(despMes11, TotSal11)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasFixasTotal(despMes11, TotSal11) /
													totalReceitas(recMes11)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(DespesasFixasTotal(despMes11, TotSal11) -
													DespesasFixasTotal(despMes10, TotSal10)) /
													DespesasFixasTotal(despMes10, TotSal10)
											)}
										</td>
									</tr>
									{DespFixas11?.map((fixa, index: any) => (
										<tr className='bg-white border-b' key={index}>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{fixa.conta}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{fixa.valor?.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(fixa.valor / totalReceitas(recMes11))}
											</td>
											<td></td>
										</tr>
									))}
									<tr className='bg-amber-200 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Salários
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{TotSal11.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(TotSal11 / totalReceitas(recMes11))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format((TotSal11 - TotSal10) / TotSal10)}
										</td>
									</tr>
									{salAreas11?.map((sal: any) => (
										<tr key={sal.mod} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{capitalize(sal.mod)}
											</th>
											<td className='py-2 px-6  font-mono text-right'>
												{sal.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(sal.valor / totalReceitas(recMes11))}
											</td>
										</tr>
									))}
									<tr
										className={`${
											LucroOpf(recMes11, despMes11, TotSal11) > 0
												? "bg-teal-300"
												: "bg-red-300"
										} border-b`}>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Lucro Operacional
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{LucroOpf(recMes11, despMes11, TotSal11).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												LucroOpf(recMes11, despMes11, TotSal11) /
													totalReceitas(recMes11)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(LucroOpf(recMes11, despMes11, TotSal11) -
													LucroOpf(recMes10, despMes10, TotSal10)) /
													LucroOpf(recMes10, despMes10, TotSal10)
											)}
										</td>
									</tr>
									<tr className='bg-blue-400'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Ponto de Equilíbrio
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{PontoEquilibriof(
												DespesasFixasTotal(despMes11, TotSal11),
												DespesasVariavelTotalf(despMes11),
												recMes11
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												PontoEquilibriof(
													DespesasFixasTotal(despMes11, TotSal11),
													DespesasVariavelTotalf(despMes11),
													recMes11
												) / totalReceitas(recMes11)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(PontoEquilibriof(
													DespesasFixasTotal(despMes11, TotSal11),
													DespesasVariavelTotalf(despMes11),
													recMes11
												) -
													PontoEquilibriof(
														DespesasFixasTotal(despMes10, TotSal10),
														DespesasVariavelTotalf(despMes10),
														recMes10
													)) /
													PontoEquilibriof(
														DespesasFixasTotal(despMes10, TotSal10),
														DespesasVariavelTotalf(despMes10),
														recMes10
													)
											)}
										</td>
									</tr>
									<tr className='bg-slate-200'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Inicial
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{saldoInicial11.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(saldoInicial11 / totalReceitas(recMes11))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(saldoInicial11 - saldoInicial10) / saldoInicial10
											)}
										</td>
									</tr>
									<tr className='bg-green-300'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Final
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{SaldoFinal(
												saldoInicial11,
												recMes11,
												despMes11,
												TotSal11
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												(SaldoFinal(
													saldoInicial11,
													recMes11,
													despMes11,
													TotSal11
												) +
													LucroOpf(recMes11, despMes11, TotSal11)) /
													totalReceitas(recMes11)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(SaldoFinal(
													saldoInicial11,
													recMes11,
													despMes11,
													TotSal11
												) -
													SaldoFinal(
														saldoInicial10,
														recMes10,
														despMes10,
														TotSal10
													)) /
													SaldoFinal(
														saldoInicial10,
														recMes10,
														despMes10,
														TotSal10
													)
											)}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>

					<li className=''>
						<input
							className='peer sr-only'
							type='radio'
							value='dezembro'
							name='answer'
							id='dezembro'
						/>
						<label
							className='flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:ring-slate-400 peer-checked:bg-slate-300 transition-all duration-500 ease-in-out'
							htmlFor='dezembro'>
							Dezembro
						</label>

						<div className='absolute bg-stone-200 left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1'>
							<table className='text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 '>
								<thead className='text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400'>
									<tr>
										<th scope='col' className='px-6 text-center w-2/5 py-3'>
											DEZEMBRO 2024
										</th>

										<th scope='col' className='px-6 w-1/5 py-3 text-right'>
											Valor
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AV
										</th>
										<th scope='col' className='px-6 w-1/5 py-3 text-center'>
											AH
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className=' border-b bg-emerald-300 '>
										<th className='py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap '>
											Receita / Faturamento
										</th>
										<td className='py-2 px-6 text-slate-900 font-mono text-right'>
											{totalReceitas(recMes12).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes12) / totalReceitas(recMes12)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(totalReceitas(recMes12) - totalReceitas(recMes11)) /
													totalReceitas(recMes11)
											)}
										</td>
									</tr>
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Receitas com serviços
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{totalReceitas(recMes12).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												totalReceitas(recMes12) / totalReceitas(recMes12)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(totalReceitas(recMes12) - totalReceitas(recMes11)) /
													totalReceitas(recMes11)
											)}
										</td>
									</tr>
									{ReceitasCentro12?.map((rec: any, index) => (
										<tr key={index} className='bg-white border-b  '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{rec.centro}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{rec.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(rec.valor / totalReceitas(recMes12))}
											</td>
											<td></td>
										</tr>
									))}

									<tr className='bg-orange-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Custos Variáveis
										</th>
										<td className='py-2 px-6  text-black font-mono text-right'>
											{DespesasVariavelTotalf(despMes12)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasVariavelTotalf(despMes12) /
													totalReceitas(recMes12)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(DespesasVariavelTotalf(despMes12) -
													DespesasVariavelTotalf(despMes11)) /
													DespesasVariavelTotalf(despMes11)
											)}
										</td>
									</tr>

									{DespesasVariaveisf(despMes12)?.map((desp: any) => (
										<tr key={desp.id} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{desp.conta}
											</th>
											<td className='py-2  px-6 font-mono text-right'>
												{desp.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(desp.valor / totalReceitas(recMes12))}
											</td>
										</tr>
									))}
									<tr className='bg-white border-b '>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Margem de Contribuição
										</th>
										<td className='py-2 px-6 font-mono text-right'>
											{MargemDeContribuicaof(
												recMes12,
												despMes12
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												MargemDeContribuicaof(recMes12, despMes12) /
													totalReceitas(recMes12)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(MargemDeContribuicaof(recMes12, despMes12) -
													MargemDeContribuicaof(recMes11, despMes11)) /
													MargemDeContribuicaof(recMes11, despMes11)
											)}
										</td>
									</tr>
									<tr className='bg-amber-100 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Despesas Fixas
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{DespesasFixasTotal(despMes12, TotSal12)?.toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												DespesasFixasTotal(despMes12, TotSal12) /
													totalReceitas(recMes12)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(DespesasFixasTotal(despMes12, TotSal12) -
													DespesasFixasTotal(despMes11, TotSal11)) /
													DespesasFixasTotal(despMes11, TotSal11)
											)}
										</td>
									</tr>
									{DespFixas12?.map((fixa, index: any) => (
										<tr className='bg-white border-b' key={index}>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{fixa.conta}
											</th>
											<td className='py-2 px-6 font-mono text-right'>
												{fixa.valor?.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(fixa.valor / totalReceitas(recMes12))}
											</td>
											<td></td>
										</tr>
									))}
									<tr className='bg-amber-200 border-b '>
										<th className='py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap '>
											Salários
										</th>
										<td className='py-2 px-6 text-black font-mono text-right'>
											{TotSal12.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(TotSal12 / totalReceitas(recMes12))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format((TotSal12 - TotSal11) / TotSal11)}
										</td>
									</tr>
									{salAreas12?.map((sal: any) => (
										<tr key={sal.mod} className='bg-white border-b '>
											<th className='py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap '>
												{capitalize(sal.mod)}
											</th>
											<td className='py-2 px-6  font-mono text-right'>
												{sal.valor.toLocaleString("pt-br", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</td>
											<td className='py-2 px-6 text-slate-900 text-center'>
												{new Intl.NumberFormat("de-DE", {
													style: "percent",
												}).format(sal.valor / totalReceitas(recMes12))}
											</td>
										</tr>
									))}
									<tr
										className={`${
											LucroOpf(recMes12, despMes12, TotSal12) > 0
												? "bg-teal-300"
												: "bg-red-300"
										} border-b`}>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Lucro Operacional
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{LucroOpf(recMes12, despMes12, TotSal12).toLocaleString(
												"pt-br",
												{
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												LucroOpf(recMes12, despMes12, TotSal12) /
													totalReceitas(recMes12)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(LucroOpf(recMes12, despMes12, TotSal12) -
													LucroOpf(recMes11, despMes11, TotSal11)) /
													LucroOpf(recMes11, despMes11, TotSal11)
											)}
										</td>
									</tr>
									<tr className='bg-blue-400'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Ponto de Equilíbrio
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{PontoEquilibriof(
												DespesasFixasTotal(despMes12, TotSal12),
												DespesasVariavelTotalf(despMes12),
												recMes12
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												PontoEquilibriof(
													DespesasFixasTotal(despMes12, TotSal12),
													DespesasVariavelTotalf(despMes12),
													recMes12
												) / totalReceitas(recMes12)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(PontoEquilibriof(
													DespesasFixasTotal(despMes12, TotSal12),
													DespesasVariavelTotalf(despMes12),
													recMes12
												) -
													PontoEquilibriof(
														DespesasFixasTotal(despMes11, TotSal11),
														DespesasVariavelTotalf(despMes11),
														recMes11
													)) /
													PontoEquilibriof(
														DespesasFixasTotal(despMes11, TotSal11),
														DespesasVariavelTotalf(despMes11),
														recMes11
													)
											)}
										</td>
									</tr>
									<tr className='bg-slate-200'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Inicial
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{saldoInicial12.toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(saldoInicial12 / totalReceitas(recMes12))}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(saldoInicial12 - saldoInicial11) / saldoInicial11
											)}
										</td>
									</tr>
									<tr className='bg-green-300'>
										<th className='py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap '>
											Saldo Final
										</th>
										<td className='py-2 text-black px-6 font-mono text-right'>
											{SaldoFinal(
												saldoInicial12,
												recMes12,
												despMes12,
												TotSal12
											).toLocaleString("pt-br", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("de-DE", {
												style: "percent",
											}).format(
												(SaldoFinal(
													saldoInicial12,
													recMes12,
													despMes12,
													TotSal12
												) +
													LucroOpf(recMes12, despMes12, TotSal12)) /
													totalReceitas(recMes12)
											)}
										</td>
										<td className='py-2 px-6 text-slate-900 text-center'>
											{new Intl.NumberFormat("pt-BR", {
												style: "percent",
											}).format(
												(SaldoFinal(
													saldoInicial12,
													recMes12,
													despMes12,
													TotSal12
												) -
													SaldoFinal(
														saldoInicial11,
														recMes11,
														despMes11,
														TotSal11
													)) /
													SaldoFinal(
														saldoInicial11,
														recMes11,
														despMes11,
														TotSal11
													)
											)}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
}

export function ErrorBoundary() {
	const error = useRouteError();
	if (isRouteErrorResponse(error)) {
		return <div>ERRO</div>;
	}
	return <div />;
}
