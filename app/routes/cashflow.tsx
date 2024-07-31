import type { LoaderFunctionArgs } from "@remix-run/node";
import { Navbar } from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { getReceitas } from "@/utils/receitas.server";
import { getDespesas } from "@/utils/despesas.server";
import { useLoaderData } from "@remix-run/react";
import Fluxomes from "@/components/Fluxomes";
import { groupSalario, groupSalarioAreas } from "~/utils/folha.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const ano = new Date().getFullYear();
	const receitas = await getReceitas(String(ano));

	// const recebidos = await getRecebidos();
	const despesas = await getDespesas();
	const TotSalarios = await groupSalario();

	const salAreas1 = await groupSalarioAreas("jan-2024");
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

	const Salareas = [
		...salAreas1,
		...salAreas2,
		...salAreas3,
		...salAreas4,
		...salAreas5,
		...salAreas6,
		...salAreas7,
		...salAreas8,
		...salAreas9,
		...salAreas10,
		...salAreas11,
		...salAreas12,
	];

	return { despesas, TotSalarios, Salareas, receitas };
};

export default function Cashflow() {
	let mesAtual = format(new Date(), "MMM", { locale: ptBR });
	const { receitas, despesas, TotSalarios, Salareas } =
		useLoaderData<typeof loader>();

	return (
		<>
			<Navbar />
			<div className='flex w-full container  justify-center min-h-screen'>
				<Tabs defaultValue={mesAtual} className=''>
					<TabsList>
						<TabsTrigger value='jan'>Janeiro</TabsTrigger>
						<TabsTrigger value='fev'>Fevereiro</TabsTrigger>
						<TabsTrigger value='mar'>Março</TabsTrigger>
						<TabsTrigger value='abr'>Abril</TabsTrigger>
						<TabsTrigger value='mai'>Maio</TabsTrigger>
						<TabsTrigger value='jun'>Junho</TabsTrigger>
						<TabsTrigger value='jul'>Julho</TabsTrigger>
						<TabsTrigger value='ago'>Agosto</TabsTrigger>
						<TabsTrigger value='set'>Setembro</TabsTrigger>
						<TabsTrigger value='out'>Outubro</TabsTrigger>
						<TabsTrigger value='nov'>Novembro</TabsTrigger>
						<TabsTrigger value='dez'>Dezembro</TabsTrigger>
					</TabsList>
					<TabsContent value='jan'>
						{Fluxomes(receitas, despesas, "01", TotSalarios, Salareas, "2024")}
					</TabsContent>
					<TabsContent value='fev'>
						{Fluxomes(receitas, despesas, "02", TotSalarios, Salareas, "2024")}
					</TabsContent>
					<TabsContent value='mar'>
						{Fluxomes(receitas, despesas, "03", TotSalarios, Salareas, "2024")}
					</TabsContent>
					<TabsContent value='abr'>
						{Fluxomes(receitas, despesas, "04", TotSalarios, Salareas, "2024")}
					</TabsContent>
					<TabsContent value='mai'>
						{Fluxomes(receitas, despesas, "05", TotSalarios, Salareas, "2024")}
					</TabsContent>
					<TabsContent value='jun'>
						{Fluxomes(receitas, despesas, "06", TotSalarios, Salareas, "2024")}
					</TabsContent>
					<TabsContent value='jul'>
						{Fluxomes(receitas, despesas, "07", TotSalarios, Salareas, "2024")}
					</TabsContent>
					<TabsContent value='ago'>
						{Fluxomes(receitas, despesas, "08", TotSalarios, Salareas, "2024")}
					</TabsContent>
					<TabsContent value='set'>
						{Fluxomes(receitas, despesas, "09", TotSalarios, Salareas, "2024")}
					</TabsContent>
					<TabsContent value='out'>
						{Fluxomes(receitas, despesas, "10", TotSalarios, Salareas, "2024")}
					</TabsContent>
					<TabsContent value='nov'>
						{Fluxomes(receitas, despesas, "11", TotSalarios, Salareas, "2024")}
					</TabsContent>
					<TabsContent value='dez'>
						{Fluxomes(receitas, despesas, "12", TotSalarios, Salareas, "2024")}
					</TabsContent>
				</Tabs>
			</div>
		</>
	);
}
