import _ from "lodash";
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

// type Salarios = {
// 	_id: string;
// 	salario: number;
// };

export default function Fluxomes(
	receitas: any,
	despesas: any,
	mes: string,
	TotSalarios: any,
	Salareas: any,
	ano: string
) {
	const recebidos = _.filter(receitas, ["status", "Recebida"]);

	function recMes(mes: string, ano: string) {
		const tot = recebidos.filter((o: { data: string }) =>
			o.data.includes(mes + "/" + ano)
		);
		return _.sumBy(tot, "valor");
	}
	function recMesEstimada(mes: string, ano: string) {
		const tot = receitas.filter((o: { data: string }) =>
			o.data.includes(mes + "/" + ano)
		);
		return _.sumBy(tot, "valor");
	}

	function recCentroMes(mes: any) {
		const tot = _.map(
			_.groupBy(
				recebidos.filter((o: { data: string }) => o.data.includes(mes)),
				"centro"
			),
			(centro, idx) => {
				return { centro: idx, valor: _.sumBy(centro, "valor") };
			}
		);
		return _.orderBy(tot, ["valor"], ["desc"]);
	}
	function recCentroMesEstimada(mes: any) {
		const tot = _.map(
			_.groupBy(
				receitas.filter((o: { data: string }) => o.data.includes(mes)),
				"centro"
			),
			(centro, id) => {
				return {
					centro: id,
					valor: _.sumBy(centro, "valor"),
				};
			}
		);
		return _.orderBy(tot, ["valor"], ["desc"]);
	}

	function despMes(mes: any) {
		const desp = despesas.filter((o: { referencia: string }) =>
			o.referencia.includes(mes)
		);
		return _.orderBy(desp, ["valor"], ["desc"]);
	}

	function despTipo(mes: any, tipo: any) {
		const tot = _.map(
			_.groupBy(
				despesas.filter(
					(o: { referencia: string; tipo: string }) =>
						o.referencia.includes(mes) && o.tipo.includes(tipo)
				),
				"conta"
			),
			(conta, idx) => {
				return { conta: idx, valor: _.sumBy(conta, "valor") };
			}
		);
		return _.orderBy(tot, ["valor"], ["desc"]);
	}

	//Saldos
	const inicial = 65962.3;

	const saldoInicial1 = inicial;

	const saldoInicial2 = SaldoFinal(
		saldoInicial1,
		recMesEstimada("01", "2024"),
		despMes("jan-2024"),
		TotSalSaldo("jan-2024")
	);
	const saldoInicial3 = SaldoFinal(
		saldoInicial2,
		recMesEstimada("02", "2024"),
		despMes("fev-2024"),
		TotSalSaldo("fev-2024")
	);
	const saldoInicial4 = SaldoFinal(
		saldoInicial3,
		recMesEstimada("03", "2024"),
		despMes("mar-2024"),
		TotSalSaldo("mar-2024")
	);
	const saldoInicial5 = SaldoFinal(
		saldoInicial4,
		recMesEstimada("04", "2024"),
		despMes("abr-2024"),
		TotSalSaldo("abr-2024")
	);
	const saldoInicial6 = SaldoFinal(
		saldoInicial5,
		recMesEstimada("05", "2024"),
		despMes("mai-2024"),
		TotSalSaldo("mai-2024")
	);
	const saldoInicial7 = SaldoFinal(
		saldoInicial6,
		recMesEstimada("06", "2024"),
		despMes("jun-2024"),
		TotSalSaldo("jun-2024")
	);
	const saldoInicial8 = SaldoFinal(
		saldoInicial7,
		recMesEstimada("07", "2024"),
		despMes("jul-2024"),
		TotSalSaldo("jul-2024")
	);
	const saldoInicial9 = SaldoFinal(
		saldoInicial8,
		recMesEstimada("08", "2024"),
		despMes("ago-2024"),
		TotSalSaldo("ago-2024")
	);
	const saldoInicial10 = SaldoFinal(
		saldoInicial9,
		recMesEstimada("09", "2024"),
		despMes("set-2024"),
		TotSalSaldo("set-2024")
	);
	const saldoInicial11 = SaldoFinal(
		saldoInicial10,
		recMesEstimada("10", "2024"),
		despMes("out-2024"),
		TotSalSaldo("out-2024")
	);

	const saldoInicial12 = SaldoFinal(
		saldoInicial11,
		recMesEstimada("11", "2024"),
		despMes("nov-2024"),
		TotSalSaldo("nov-2024")
	);
	//Fim Saldos

	let mesNome = "";
	let saldoInic = 0;

	switch (mes) {
		case "01":
			mesNome = "jan";
			saldoInic = saldoInicial1;
			break;
		case "02":
			mesNome = "fev";
			saldoInic = saldoInicial2;
			break;
		case "03":
			mesNome = "mar";
			saldoInic = saldoInicial3;
			break;
		case "04":
			mesNome = "abr";
			saldoInic = saldoInicial4;
			break;
		case "05":
			mesNome = "mai";
			saldoInic = saldoInicial5;
			break;
		case "06":
			mesNome = "jun";
			saldoInic = saldoInicial6;
			break;
		case "07":
			mesNome = "jul";
			saldoInic = saldoInicial7;
			break;
		case "08":
			mesNome = "ago";
			saldoInic = saldoInicial8;
			break;
		case "09":
			mesNome = "set";
			saldoInic = saldoInicial9;
			break;
		case "10":
			mesNome = "out";
			saldoInic = saldoInicial10;
			break;
		case "11":
			mesNome = "nov";
			saldoInic = saldoInicial11;
			break;
		case "12":
			mesNome = "dez";
			saldoInic = saldoInicial12;
			break;
	}

	//constantes
	const mesAnoNumero = mes + "/2024";
	const mesAnoNome = mesNome + "-2024";
	const receitaMes = recMes(mes, ano);
	const receitaMesEstimada = recMesEstimada(mes, ano);
	const ReceitasCentro = recCentroMes(mesAnoNumero);
	const ReceitasCentroEstimada = recCentroMesEstimada(mesAnoNumero);
	const despesasMes = despMes(mesAnoNome); //ok

	const DespFixasMes = despTipo(mesAnoNome, "fixa"); //ok

	const TotSal = parseFloat(
		_.filter(TotSalarios, ["_id", mesAnoNome])
			.map((t) => t.salario)
			.join("")
	);
	let TotSalMes = 0; //ok
	Number.isNaN(TotSal) ? (TotSalMes = 55000) : (TotSalMes = TotSal);

	const salarioAeas = _.filter(Salareas, ["mes", mesAnoNome]);

	function TotSalSaldo(mesAnoNome: String) {
		let TotSalMes = 0;
		Number.isNaN(
			parseFloat(
				_.filter(TotSalarios, ["_id", mesAnoNome])
					.map((t) => t.salario)
					.join("")
			)
		)
			? (TotSalMes = 55000)
			: (TotSalMes = parseFloat(
					_.filter(TotSalarios, ["_id", mesAnoNome])
						.map((t) => t.salario)
						.join("")
			  ));
		return TotSalMes;
	}

	//funções
	function DespesasVariavelTotal(despesasMes: any) {
		return _.sumBy(_.filter(despesasMes, ["tipo", "variavel"]), "valor");
	}

	function DespesasFixasTotal(despesasMes: any, TotSal: any) {
		return (
			_.sumBy(_.filter(despesasMes, ["tipo", "fixa"]), "valor") + Number(TotSal)
		);
	}

	function DespesasVariaveis(despesasMes: any) {
		return _.filter(despesasMes, ["tipo", "variavel"]);
	}

	function PontoEquilibriof(
		DespesasFixasTotal: any,
		DespesasVariavelTotal: any,
		receitaMes: any
	) {
		return DespesasFixasTotal / 1 - DespesasVariavelTotal / receitaMes;
	}

	function MargemDeContribuicaof(receitaMes: any, despesasMes: any) {
		return receitaMes - DespesasVariavelTotal(despesasMes);
	}

	function LucroOpf(receitaMes: any, despesasMes: any, TotSal: any) {
		return (
			MargemDeContribuicaof(receitaMes, despesasMes) -
			DespesasFixasTotal(despesasMes, TotSal)
		);
	}
	function SaldoFinal(
		inicial: any,
		receitaMes: any,
		despesasMes: any,
		TotSal: any
	) {
		return inicial + LucroOpf(receitaMes, despesasMes, TotSal);
	}
	//fim funções

	return (
		<div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className='font-medium text-center'>Conta</TableHead>
						<TableHead className='font-medium text-right'>
							Valor | Estimado
						</TableHead>
						<TableHead className='font-medium text-center'>AV</TableHead>
						<TableHead className='font-medium text-right'>Real</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className='font-medium'>Receita | Faturamento</TableCell>
						<TableCell className='font-medium text-right font-mono'>
							{receitaMesEstimada.toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
						<TableCell></TableCell>
						<TableCell className='font-medium text-right font-mono'>
							{receitaMes.toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Receitas com serviços</TableCell>
						<TableCell className='font-medium text-right font-mono'>
							{receitaMesEstimada.toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>

						<TableCell className='font-medium text-center font-mono'>
							{new Intl.NumberFormat("de-DE", {
								style: "percent",
							}).format(receitaMesEstimada / receitaMesEstimada)}
						</TableCell>
						<TableCell className='font-medium text-right font-mono'>
							{receitaMes.toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
					</TableRow>

					{ReceitasCentroEstimada?.map((rec: any, index: number) => (
						<TableRow key={index}>
							<TableCell className=' font-thin text-sm pl-6'>
								{rec.centro}
							</TableCell>
							<TableCell className='font-medium text-right font-mono'>
								{rec.valor.toLocaleString("pt-br", {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</TableCell>
							<TableCell className='font-medium text-center font-mono'>
								{new Intl.NumberFormat("de-DE", {
									style: "percent",
								}).format(rec.valor / receitaMesEstimada)}
							</TableCell>
							<TableCell className='font-medium text-right font-mono'>
								{_.filter(ReceitasCentro, ["centro", rec.centro]).map((v) =>
									v.valor.toLocaleString("pt-br", {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})
								)}
							</TableCell>
						</TableRow>
					))}

					<TableRow>
						<TableCell className='font-medium'>Custos Variáveis</TableCell>
						<TableCell className='font-medium font-mono  text-right'>
							{DespesasVariavelTotal(despesasMes).toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
						<TableCell className='font-mono text-center'>
							{new Intl.NumberFormat("de-DE", {
								style: "percent",
							}).format(DespesasVariavelTotal(despesasMes) / receitaMes)}
						</TableCell>
						<TableCell></TableCell>
					</TableRow>
					{DespesasVariaveis(despesasMes).map((d: any) => (
						<TableRow key={d.id}>
							<TableCell>{d.conta}</TableCell>
							<TableCell>
								{d.valor.toLocaleString("pt-br", {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</TableCell>
							<TableCell>
								{new Intl.NumberFormat("de-DE", {
									style: "percent",
								}).format(d.valor / receitaMes)}
							</TableCell>
						</TableRow>
					))}
					<TableRow>
						<TableCell className='font-medium'>
							Margem de Contribuição
						</TableCell>
						<TableCell className='font-mono text-right'>
							{MargemDeContribuicaof(
								receitaMesEstimada,
								despesasMes
							).toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
						<TableCell className='font-mono text-center'>
							{new Intl.NumberFormat("de-DE", {
								style: "percent",
							}).format(
								MargemDeContribuicaof(receitaMes, despesasMes) / receitaMes
							)}
						</TableCell>
						<TableCell className='font-mono text-right'>
							{MargemDeContribuicaof(receitaMes, despesasMes).toLocaleString(
								"pt-br",
								{
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								}
							)}
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Despesas Fixas</TableCell>
						<TableCell className='font-mono text-right'>
							{DespesasFixasTotal(despesasMes, TotSalMes).toLocaleString(
								"pt-br",
								{
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								}
							)}
						</TableCell>
						<TableCell className='font-mono text-center'>
							{new Intl.NumberFormat("de-DE", {
								style: "percent",
							}).format(
								DespesasFixasTotal(despesasMes, TotSalMes) / receitaMes
							)}
						</TableCell>
						<TableCell></TableCell>
					</TableRow>
					{DespFixasMes.map((f: any, index) => (
						<TableRow key={index}>
							<TableCell className='font-thin text-sm pl-6'>
								{f.conta}
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
								}).format(f.valor / receitaMes)}
							</TableCell>
						</TableRow>
					))}
					<TableRow>
						<TableCell className='font-medium'>Salários</TableCell>
						<TableCell className='font-mono text-right'>
							{TotSalMes.toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
						<TableCell className='font-mono text-center'>
							{new Intl.NumberFormat("de-DE", {
								style: "percent",
							}).format(TotSalMes / receitaMes)}
						</TableCell>
					</TableRow>
					{salarioAeas.map((s: any) => (
						<TableRow key={s.mod}>
							<TableCell className='font-thin text-sm pl-6'>{s.mod}</TableCell>
							<TableCell className='font-mono text-right'>
								{s.valor.toLocaleString("pt-br", {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</TableCell>
							<TableCell className='font-mono text-center'>
								{new Intl.NumberFormat("de-DE", {
									style: "percent",
								}).format(s.valor / receitaMes)}
							</TableCell>
						</TableRow>
					))}
					<TableRow>
						<TableCell className='font-medium'>Lucro Operacional</TableCell>
						<TableCell className='font-mono text-right'>
							{LucroOpf(
								receitaMesEstimada,
								despesasMes,
								TotSalMes
							).toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
						<TableCell className='font-mono text-center'>
							{new Intl.NumberFormat("de-DE", {
								style: "percent",
							}).format(
								LucroOpf(receitaMes, despesasMes, TotSalMes) / receitaMes
							)}
						</TableCell>

						<TableCell className='font-mono text-right'>
							{LucroOpf(receitaMes, despesasMes, TotSalMes).toLocaleString(
								"pt-br",
								{
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								}
							)}
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Ponto de Equilíbrio</TableCell>
						<TableCell className='font-mono text-right'>
							{PontoEquilibriof(
								DespesasFixasTotal(despesasMes, TotSalMes),
								DespesasVariavelTotal(despesasMes),
								receitaMesEstimada
							).toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
						<TableCell className='font-mono text-center'>
							{new Intl.NumberFormat("de-DE", {
								style: "percent",
							}).format(
								PontoEquilibriof(
									DespesasFixasTotal(despesasMes, TotSalMes),
									DespesasVariavelTotal(despesasMes),
									receitaMes
								) / receitaMes
							)}
						</TableCell>
						<TableCell className='font-mono text-right'>
							{PontoEquilibriof(
								DespesasFixasTotal(despesasMes, TotSalMes),
								DespesasVariavelTotal(despesasMes),
								receitaMes
							).toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Saldo Inicial</TableCell>
						<TableCell className='font-mono text-right'>
							{saldoInic.toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
					</TableRow>
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell>Saldo Final</TableCell>
						<TableCell className='text-right font-mono'>
							{SaldoFinal(
								inicial,
								receitaMesEstimada,
								despesasMes,
								TotSalMes
							).toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
						<TableCell></TableCell>
						<TableCell className='text-right font-mono'>
							{SaldoFinal(
								inicial,
								receitaMes,
								despesasMes,
								TotSalMes
							).toLocaleString("pt-br", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</div>
	);
}
