import _ from "lodash";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
export default function Resultados(
	recMesTotal: number,
	despMesVariavel: any,
	despMesTotalVariavel: number,
	despMesFixa: any,
	despMesTotalFixa: number,
	TotSalMes: number
) {
	function grupodespesasVariavel(conta: any) {
		const desp = _.groupBy(
			despMesVariavel.filter((o: { tipo: string; conta: string }) =>
				o.conta.includes(conta)
			),
			"conta"
		);

		return _.flatten(_.values(desp));
	}

	return (
		<div>
			<Table className='border border-stone-100  '>
				<TableHeader className='bg-stone-300'>
					<TableRow>
						<TableHead className=' font-medium text-center'>
							Descrição
						</TableHead>
						<TableHead className='font-medium text-right'>Valor</TableHead>
						<TableHead className='font-medium text-center'>AV</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow className='bg-stone-100'>
						<TableCell className='font-medium '>Faturamento</TableCell>
						<TableCell className='font-mono text-right'>
							{recMesTotal.toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
						<TableCell className='font-mono text-center'>
							{new Intl.NumberFormat("de-DE", {
								style: "percent",
							}).format(recMesTotal / recMesTotal)}
						</TableCell>
					</TableRow>
					<TableRow className='bg-stone-100'>
						<TableCell className='font-medium '>
							Margem de Contribuição
						</TableCell>
						<TableCell className='font-mono text-right'>
							{(recMesTotal - despMesTotalVariavel).toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
						<TableCell className='font-mono text-center'>
							{new Intl.NumberFormat("de-DE", {
								style: "percent",
							}).format(recMesTotal / recMesTotal)}
						</TableCell>
					</TableRow>
					<TableRow
						className={` ${
							recMesTotal - despMesTotalVariavel - despMesTotalFixa > 0
								? "bg-emerald-500"
								: "bg-red-300"
						}`}>
						<TableCell className='font-medium '>Resultado</TableCell>
						<TableCell className='font-mono text-right'>
							{(
								recMesTotal -
								despMesTotalVariavel -
								despMesTotalFixa
							).toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
						<TableCell className='font-mono text-center'>
							{new Intl.NumberFormat("de-DE", {
								style: "percent",
							}).format(recMesTotal / recMesTotal)}
						</TableCell>
					</TableRow>
					<TableRow className='bg-stone-50'>
						<TableCell className='font-medium '>Custos Variáveis</TableCell>
						<TableCell className='font-mono text-right'>
							{despMesTotalVariavel.toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
						<TableCell className='font-mono text-center'>
							{new Intl.NumberFormat("de-DE", {
								style: "percent",
							}).format(despMesTotalVariavel / recMesTotal)}
						</TableCell>
					</TableRow>
					{despMesVariavel.map((f: any, index: any) => (
						<TableRow className='bg-stone-50' key={index}>
							<TableCell className='font-thin text-sm pl-6'>
								<Accordion className='p-0' type='single' collapsible>
									<AccordionItem value='desp'>
										{grupodespesasVariavel(f.conta).length >= 1 &&
										grupodespesasVariavel(f.conta)
											.map((g) => g.descricao)
											.toString() !== "" ? (
											<AccordionTrigger className='font-light  '>
												{f.conta}
											</AccordionTrigger>
										) : (
											f.conta
										)}

										{grupodespesasVariavel(f.conta).map((g) => (
											<AccordionContent key={f.conta}>
												{grupodespesasVariavel(f.conta).length >= 1 &&
													g.descricao !== null && (
														<div className=' grid grid-cols-2'>
															<div>
																{format(g.data, "dd  MMM  yyyy", {
																	locale: ptBR,
																})}
															</div>
															<div className='  text-end'>
																{g.valor.toLocaleString("pt-br", {
																	minimumFractionDigits: 2,
																	maximumFractionDigits: 2,
																})}
															</div>
														</div>
													)}
											</AccordionContent>
										))}
									</AccordionItem>
								</Accordion>
								{/* {f.conta} */}
							</TableCell>
							<TableCell className='font-mono text-right'>
								{f.valor.toLocaleString("pt-br", {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</TableCell>
							<TableCell className='font-mono text-center'>
								{new Intl.NumberFormat("de-DE", {
									style: "percent",
								}).format(f.valor / despMesTotalVariavel)}
							</TableCell>
						</TableRow>
					))}

					<TableRow className='bg-stone-50'>
						<TableCell className='font-medium '>Custos Fixos</TableCell>
						<TableCell className='font-mono text-right'>
							{despMesTotalFixa.toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>

						<TableCell className='font-mono text-center'>
							{new Intl.NumberFormat("de-DE", {
								style: "percent",
							}).format(despMesTotalFixa / recMesTotal)}
						</TableCell>
					</TableRow>
					<TableRow className='bg-stone-50'>
						<TableCell className='font-thin text-sm pl-6'>Salários</TableCell>
						<TableCell className='font-mono text-right'>
							{TotSalMes.toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
						<TableCell className='font-mono text-center'>
							{new Intl.NumberFormat("de-DE", {
								style: "percent",
							}).format(TotSalMes / recMesTotal)}
						</TableCell>
					</TableRow>

					{despMesFixa.map((f: any, index: any) => (
						<TableRow className='bg-stone-50' key={index}>
							<TableCell className='font-thin text-sm pl-6'>
								<Accordion className='p-0' type='single' collapsible>
									<AccordionItem value='desp'>
										{grupodespesasVariavel(f.conta).length >= 1 &&
										grupodespesasVariavel(f.conta)
											.map((g) => g.descricao)
											.toString() !== "" ? (
											<AccordionTrigger className='font-light  '>
												{f.conta}
											</AccordionTrigger>
										) : (
											f.conta
										)}

										{grupodespesasVariavel(f.conta).map((g) => (
											<AccordionContent key={f.conta}>
												{grupodespesasVariavel(f.conta).length >= 1 &&
													g.descricao !== null && (
														<div className=' grid grid-cols-2'>
															<div>
																{format(g.data, "dd  MMM  yyyy", {
																	locale: ptBR,
																})}
															</div>
															<div className='  text-end'>
																{g.valor.toLocaleString("pt-br", {
																	minimumFractionDigits: 2,
																	maximumFractionDigits: 2,
																})}
															</div>
														</div>
													)}
											</AccordionContent>
										))}
									</AccordionItem>
								</Accordion>
								{/* {f.conta} */}
							</TableCell>
							<TableCell className='font-mono text-right'>
								{f.valor.toLocaleString("pt-br", {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</TableCell>
							<TableCell className='font-mono text-center'>
								{new Intl.NumberFormat("de-DE", {
									style: "percent",
								}).format(f.valor / despMesTotalVariavel)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
