import { Navbar } from "@/components/Navbar";
import Resultados from "@/components/Resultados";
import { getReceitas } from "@/utils/receitas.server";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { IoMdArrowDropright } from "react-icons/io";
import { format, getMonth, getYear } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { requireUserSession } from "@/utils/auth.server";
import { useFetcher, useLoaderData } from "@remix-run/react";
import _ from "lodash";
import { getDespesasNova } from "@/utils/despesas.server";
import { Chart as ChartJS } from "chart.js/auto";
import {
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	PieController,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

import {
	groupSalario,
	groupSalarioAreas,
	SalarioAreasNovo,
} from "@/utils/folha.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	await requireUserSession(request);
	const url = new URL(request.url);
	const dataAtual = format(new Date(), "MMM-yyyy", { locale: ptBR });

	const par = url.searchParams.get("rec");
	const ano = getYear(new Date());

	const mesnome =
		new Date(`2024/${par}`)
			.toLocaleString("pt-BR", {
				month: "short",
			})
			.slice(-4, -1) +
		"-" +
		ano;
	let parametro = par ? mesnome : dataAtual;

	const receitas = await getReceitas();
	const despesas = await getDespesasNova();
	const TotSalarios = await groupSalario();
	const salAreas = await groupSalarioAreas(parametro);
	const areas = await SalarioAreasNovo();

	return { receitas, despesas, TotSalarios, salAreas, areas };
};

export default function Results() {
	const { receitas, despesas, TotSalarios, salAreas, areas } =
		useLoaderData<typeof loader>();

	const rec = useFetcher();

	const TotSalAreas = rec.data?.salAreas ? rec.data.salAreas : salAreas;

	const [numberMounth, setMumberMounth] = useState(
		format(new Date(), "MM", { locale: ptBR })
	);

	const handleSelectChange = (event: any) => {
		rec.submit(event.target.form);
		setMumberMounth(event.target.value);
	};

	const ano = getYear(new Date());
	// const mes = getMonth(new Date(`2024/${numberMounth}`)) + 1;
	const mes = +numberMounth;

	const mesnome =
		new Date(`2024/${numberMounth}`)
			.toLocaleString("pt-BR", {
				month: "short",
			})
			.slice(-4, -1) +
		"-" +
		ano;

	//receitas
	const recMes = _.filter(receitas, (item: any) => {
		const itemDate = new Date(item.data);
		return getYear(itemDate) === ano && getMonth(itemDate) + 1 === mes;
	});

	const recMesTotal = _.sumBy(recMes, "valor");

	function recForma() {
		const tot = _.map(_.groupBy(recMes, "forma"), (forma, idx) => {
			return { forma: idx, valor: _.sumBy(forma, "valor") };
		});

		return _.orderBy(tot, ["valor"], ["desc"]);
	}
	function recDiaf() {
		const tot = _.map(
			_.groupBy(recMes, (item) => item.data.slice(8, 10)),
			(dia, idx) => {
				return { dia: idx, valor: _.sumBy(dia, "valor") };
			}
		);

		return _.orderBy(tot, ["valor"], ["desc"]);
	}
	const recDia = recDiaf();

	//fim receitas

	//despesas
	const TotSalMesString = _.filter(TotSalarios, ["_id", mesnome]);

	const TotSalMes = parseFloat(TotSalMesString.map((s) => s?.salario));
	console.log(TotSalMes);
	const despMes = _.filter(despesas, (item) => {
		const itemDate = new Date(item.data);
		return getYear(itemDate) === ano && getMonth(itemDate) + 1 === mes;
	});

	//variavel
	const despMesVariavel = _.filter(despesas, (item) => {
		const itemDate = new Date(item.data);
		return (
			getYear(itemDate) === ano &&
			getMonth(itemDate) + 1 === mes &&
			item.tipo === "variavel"
		);
	});
	const despMesTotalVariavel = _.sumBy(despMesVariavel, "valor");
	//fim variavel

	//fixa
	const despMesFixa = _.filter(despesas, (item) => {
		const itemDate = new Date(item.data);
		return (
			getYear(itemDate) === ano &&
			getMonth(itemDate) + 1 === mes &&
			item.tipo === "fixa"
		);
	});
	const despMesTotalFixa = _.sumBy(despMesFixa, "valor");

	//fim fixa

	const despMesTotal = _.sumBy(despMes, "valor");

	function despConta() {
		const tot = _.map(_.groupBy(despMes, "conta"), (conta, idx) => {
			return { conta: idx, valor: _.sumBy(conta, "valor") };
		});

		return _.orderBy(tot, ["valor"], ["desc"]).slice(0, 4);
	}

	function despDiaf() {
		const tot = _.map(
			_.groupBy(despMes, (item) => item.data.slice(8, 10)),
			(dia, idx) => {
				return { dia: idx, valor: _.sumBy(dia, "valor") };
			}
		);

		return _.orderBy(tot, ["valor"], ["desc"]);
	}
	const despDia = despDiaf();

	//fim despesas

	//salarios
	const areas2024 = _.filter(areas, (item) => {
		return item.ano === 2024;
	});

	//graficos
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		BarElement,
		LineElement,
		Title,
		Tooltip,
		Legend,
		PieController,
		Tooltip,
		Legend
	);
	const optionsLine = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text:
					"Total de Salários - " +
					TotSalMes.toLocaleString("pt-BR", {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					}),
			},
		},
	};
	const optionsLineRec = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,

				text:
					"Receitas + " +
					recMesTotal.toLocaleString("pt-BR", {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					}) +
					" | Despesas - " +
					despMesTotal.toLocaleString("pt-BR", {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					}),
			},
		},
	};
	const optionsPie = {
		responsive: true,
		aspectRatio: 2,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				color: "#b6224f",
				text:
					"Salários Áreas - " +
					TotSalMes.toLocaleString("pt-BR", {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					}),
			},
		},
	};
	const labels = [
		"jan-2024",
		"fev-2024",
		"mar-2024",
		"abr-2024",
		"mai-2024",
		"jun-2024",
		"jul-2024",
		"ago-2024",
		"set-2024",
		"out-2024",
		"nov-2024",
		"dez-2024",
	].slice(0, mes);

	const labelMes = [
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08",
		"09",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
		"21",
		"22",
		"23",
		"24",
		"25",
		"26",
		"27",
		"28",
		"29",
		"30",
		"31",
	];

	const datachart = _.flatMap(
		labels
			.map((l) => _.filter(TotSalarios, ["_id", l]))
			.map((d) => d.map((c) => c?.salario))
	);

	//mapa receitas
	const dataRec = _.map(
		labelMes
			.map((l) => _.filter(recDia, ["dia", l]))
			.map((d) => d.map((c) => c?.valor))
	);

	let dataChartRec = dataRec.flatMap((element) =>
		Array.isArray(element) && element.length === 0 ? 0 : element
	);

	let sum = 0;
	let accumulated = dataChartRec.map((value) => (sum += value));
	//fim mapa receitas

	//mapa despesas
	const dataDesp = _.map(
		labelMes
			.map((l) => _.filter(despDia, ["dia", l]))
			.map((d) => d.map((c) => c?.valor))
	);
	let dataChartDesp = dataDesp.flatMap((element) =>
		Array.isArray(element) && element.length === 0 ? 0 : element
	);
	let sumDesp = 0;
	let accumulatedDesp = dataChartDesp.map((value) => (sumDesp += value));

	//fim mapa despesas

	const dataRecChart = {
		labels: labelMes,
		datasets: [
			{
				label: "Receitas",
				data: accumulated,
				borderColor: "#008282",
				backgroundColor: "#008282",
			},
			{
				label: "Despesas",
				data: accumulatedDesp,
				borderColor: "#ed254e",
				backgroundColor: "#ed254e",
			},
		],
	};

	const data = {
		labels,
		datasets: [
			{
				label: "Total de salários",
				data: datachart,
				borderColor: "black",
				backgroundColor: "black",
			},
			{
				type: "bar",
				label: "Musculação",
				data: _.filter(areas2024, ["_id[1]", "musculacao"]).map(
					(m: any) => m.salario
				),
				backgroundColor: "#005682",
				borderColor: "#005682",
				stack: "Stack 0",
			},
			{
				label: "Aulas",
				type: "bar",
				data: _.filter(areas2024, ["_id[1]", "aulas"]).map(
					(m: any) => m.salario
				),
				backgroundColor: "#c29fff",
				borderColor: "#c29fff",
				stack: "Stack 0",
			},
			{
				label: "Prime",
				type: "bar",
				data: _.filter(areas2024, ["_id[1]", "prime"]).map(
					(m: any) => m.salario
				),
				backgroundColor: "#008282",
				borderColor: "#008282",
				stack: "Stack 0",
			},
			{
				label: "Judo",
				type: "bar",
				data: _.filter(areas2024, ["_id[1]", "judo"]).map(
					(m: any) => m.salario
				),
				backgroundColor: "#4575f3",
				borderColor: "#4575f3",
				stack: "Stack 0",
			},
			{
				label: "Pilates",
				type: "bar",
				data: _.filter(areas2024, ["_id[1]", "pilates"]).map(
					(m: any) => m.salario
				),
				backgroundColor: "#450a80",
				borderColor: "#450a80",
				stack: "Stack 0",
			},
			{
				label: "Geral",
				type: "bar",
				data: _.filter(areas2024, ["_id[1]", "geral"]).map(
					(m: any) => m.salario
				),
				backgroundColor: "#e7cd8c",
				borderColor: "#e7cd8c",
				stack: "Stack 0",
			},
			{
				label: "Natação",
				type: "bar",
				data: _.filter(areas2024, ["_id[1]", "natacao"]).map(
					(m: any) => m.salario
				),
				backgroundColor: "#8c0101",
				borderColor: "#8c0101",
				stack: "Stack 0",
			},
			{
				label: "ballet",
				data: _.filter(areas2024, ["_id[1]", "ballet"]).map(
					(m: any) => m.salario
				),
				type: "bar",
				backgroundColor: "#ffb296",
				borderColor: "#ffb296",
				stack: "Stack 0",
			},
			{
				label: "Muaithay",
				data: _.filter(areas2024, ["_id[1]", "muaithay"]).map(
					(m: any) => m.salario
				),
				backgroundColor: "#a8e4a0",
				borderColor: "#a8e4a0",
				type: "bar",
				stack: "Stack 0",
			},
		],
	};
	const labelsPizza = _.orderBy(TotSalAreas, "mod").map((lb: any) => lb.mod);

	const dataPizza = _.orderBy(TotSalAreas, "mod").map((s) => s.valor);

	const pizza = {
		labels: labelsPizza,
		datasets: [
			{
				label: "Total",
				data: dataPizza,
				backgroundColor: [
					"#c29fff",
					"#ffb296",
					"#e7cd8c",
					"#4575f3",
					"#a8e4a0",
					"#005682",
					"#8c0101",
					"#450a80",
					"#008282",
				],
				hoverOffset: 4,
			},
		],
	};

	//fim graficos

	return (
		<>
			<Navbar />
			<div className='flex mt-10 justify-center  mb-4 items-center'>
				<label
					className=' hidden md:block mr-4 font-light   text-sm '
					htmlFor='rec'>
					MÊS E ANO DE REFERÊNCIA
				</label>

				<IoMdArrowDropright className='hidden md:block' />

				<rec.Form method='get' action='.'>
					<select
						className=' rounded text-zinc-600 h-8  pl-5 pr-10 hover:border-gray-400 focus:outline-none '
						name='rec'
						defaultValue={format(new Date(), "MMM-yyyy", { locale: ptBR })}
						value={numberMounth}
						// onChange={}
						onChange={handleSelectChange}>
						<option hidden={true} value=''>
							Selecione mês e ano referencia
						</option>
						<option value='01'>Janeiro - 2024</option>
						<option value='02'>Fevereiro - 2024</option>
						<option value='03'>Março - 2024</option>
						<option value='04'>Abril - 2024</option>
						<option value='05'>Maio - 2024</option>
						<option value='06'>Junho - 2024</option>
						<option value='07'>Julho - 2024</option>
						<option value='08'>Agosto - 2024</option>
						<option value='09'>Setembro - 2024</option>
						<option value='10'>Outubro - 2024</option>
						<option value='11'>Novembro - 2024</option>
						<option value='12'>Dezembro - 2024</option>
					</select>
				</rec.Form>
			</div>
			<div className='grid gap-4 mt-2 container px-2 mx-auto  md:grid-cols-2  '>
				<Card>
					<CardHeader className='flex flex-row items-center  bg-stone-300 justify-between rounded-t-lg   space-y-0 pb-2 pt-2'>
						<CardTitle className=' text-xl font-medium'>Receitas</CardTitle>
						<Badge
							variant='secondary'
							className=' font-normal  text-sm  font-mono'>
							{recMesTotal.toLocaleString("pt-BR", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</Badge>
					</CardHeader>
					<CardContent className='grid grid-cols-4 place-items-center  mt-4  '>
						{recForma().map((l) => (
							<div key={l.forma} className=' grid  place-items-center text-sm'>
								{l.valor.toLocaleString("pt-BR", {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
								<Badge
									variant='secondary'
									className=' w-full   place-content-center text-center  mt-1 font-light text-blue-800  text-xs '>
									{l.forma}
								</Badge>
							</div>
						))}
					</CardContent>
				</Card>
				<Card>
					<CardHeader
						key={despMesTotal}
						className=' flex flex-row items-center bg-stone-300 justify-between  space-y-0 pb-2 pt-2 rounded-t-lg '>
						<CardTitle className=' text-xl  font-medium'>Despesas</CardTitle>
						<Badge
							variant='secondary'
							className='font-normal  text-sm  font-mono'>
							{despMesTotal.toLocaleString("pt-BR", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</Badge>
					</CardHeader>
					<CardContent className='grid grid-cols-4 place-items-center  mt-4  '>
						{despConta().map((l) => (
							<div key={l.conta} className=' grid  place-items-center text-sm'>
								{l.valor.toLocaleString("pt-BR", {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
								<Badge
									variant='secondary'
									className=' w-full   place-content-center text-center  mt-1 font-light text-red-500  text-xs '>
									{l.conta}
								</Badge>
							</div>
						))}
					</CardContent>
				</Card>
				<Card className='col-span-2'>
					<CardHeader className='flex flex-row items-center bg-stone-300 justify-between rounded-t-lg  space-y-0 pb-2 pt-2'>
						<CardTitle className=' text-xl font-medium'>Salarios</CardTitle>
						<Badge
							variant='secondary'
							className=' font-normal  text-sm  font-mono'>
							{TotSalMes.toLocaleString("pt-BR", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</Badge>
					</CardHeader>

					<CardContent className='grid grid-cols-9 place-items-center  mt-2 mb-2  '>
						{TotSalAreas.map((s: any) => (
							<div key={s.mod} className=' grid  place-items-center text-sm'>
								{s.valor.toLocaleString("pt-BR", {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
								<Badge
									variant='secondary'
									className=' w-full   place-content-center text-center  mt-1 font-light text-fuchsia-600  text-xs '>
									{s.mod}
								</Badge>
							</div>
						))}
					</CardContent>
				</Card>
				<Card>
					<Line options={optionsLine} data={data} />
				</Card>
				<Card>
					<Doughnut options={optionsPie} data={pizza} />
				</Card>
				<div className='col-span-2 place-content-center flex'>
					<Card className=' w-1/2'>
						<Line options={optionsLineRec} data={dataRecChart} />
					</Card>
				</div>

				<div className='col-span-2 rounded-none'>
					<div className='text-center font-bold  text-lg text-stone-600 mb-1'>
						Demonstrativos dos Resultados
					</div>
					{Resultados(
						recMesTotal,
						despMesVariavel,
						despMesTotalVariavel,
						despMesFixa,
						despMesTotalFixa,
						TotSalMes
					)}
				</div>
			</div>
		</>
	);
}
