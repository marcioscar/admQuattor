import type { V2_MetaFunction } from "@remix-run/node";
import type { LoaderArgs, ActionArgs } from "@remix-run/node";
import {
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import { Navbar } from "~/components/Navbar";
import {
  groupReceitasMes,
  receitasPorCentroMes,
} from "~/utils/receitas.server";
import _, { capitalize } from "lodash";
import {
  DespesasMes,
  // totDespesas,
  totTipoDespesasFixa,
} from "~/utils/despesas.server";
import { groupSalario, groupSalarioAreas } from "~/utils/folha.server";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Quattor Adm" },
    { name: "Quattor Academia ADM", content: "Quattor Academia" },
  ];
};
export const loader = async ({ request }: LoaderArgs) => {
  const recMes5 = await groupReceitasMes("05/2023");
  const recMes6 = await groupReceitasMes("06/2023");
  const recMes7 = await groupReceitasMes("07/2023");
  const recMes8 = await groupReceitasMes("08/2023");
  const recMes9 = await groupReceitasMes("09/2023");
  const recMes10 = await groupReceitasMes("10/2023");
  const recMes11 = await groupReceitasMes("11/2023");
  const recMes12 = await groupReceitasMes("12/2023");

  const ReceitasCentro5 = await receitasPorCentroMes(String("05/2023"));
  const ReceitasCentro6 = await receitasPorCentroMes(String("06/2023"));
  const ReceitasCentro7 = await receitasPorCentroMes(String("07/2023"));
  const ReceitasCentro8 = await receitasPorCentroMes(String("08/2023"));
  const ReceitasCentro9 = await receitasPorCentroMes(String("09/2023"));
  const ReceitasCentro10 = await receitasPorCentroMes(String("10/2023"));
  const ReceitasCentro11 = await receitasPorCentroMes(String("11/2023"));
  const ReceitasCentro12 = await receitasPorCentroMes(String("12/2023"));

  const despMes5 = await DespesasMes("mai-2023");
  const despMes6 = await DespesasMes("jun-2023");
  const despMes7 = await DespesasMes("jul-2023");
  const despMes8 = await DespesasMes("ago-2023");
  const despMes9 = await DespesasMes("set-2023");
  const despMes10 = await DespesasMes("out-2023");
  const despMes11 = await DespesasMes("nov-2023");
  const despMes12 = await DespesasMes("dez-2023");

  // const TotDespesas5 = await totDespesas(String("mai-2023"));
  // const TotDespesas6 = await totDespesas(String("jun-2023"));
  // const TotDespesas7 = await totDespesas(String("jul-2023"));
  // const TotDespesas8 = await totDespesas(String("ago-2023"));
  // const TotDespesas9 = await totDespesas(String("set-2023"));
  // const TotDespesas10 = await totDespesas(String("out-2023"));
  // const TotDespesas11 = await totDespesas(String("nov-2023"));
  // const TotDespesas12 = await totDespesas(String("dez-2023"));

  const DespFixas5 = await totTipoDespesasFixa("mai-2023");
  const DespFixas6 = await totTipoDespesasFixa("jun-2023");
  const DespFixas7 = await totTipoDespesasFixa("jul-2023");
  const DespFixas8 = await totTipoDespesasFixa("ago-2023");
  const DespFixas9 = await totTipoDespesasFixa("set-2023");
  const DespFixas10 = await totTipoDespesasFixa("out-2023");
  const DespFixas11 = await totTipoDespesasFixa("nov-2023");
  const DespFixas12 = await totTipoDespesasFixa("dez-2023");

  const TotSalarios = await groupSalario();
  const TotSalMes5 = _.filter(TotSalarios, ["_id", "mai-2023"]);
  const TotSalMes6 = _.filter(TotSalarios, ["_id", "jun-2023"]);
  const TotSalMes7 = _.filter(TotSalarios, ["_id", "jul-2023"]);
  const TotSalMes8 = _.filter(TotSalarios, ["_id", "ago-2023"]);
  const TotSalMes9 = _.filter(TotSalarios, ["_id", "set-2023"]);
  const TotSalMes10 = _.filter(TotSalarios, ["_id", "out-2023"]);
  const TotSalMes11 = _.filter(TotSalarios, ["_id", "nov-2023"]);
  const TotSalMes12 = _.filter(TotSalarios, ["_id", "dez-2023"]);

  const salAreas5 = await groupSalarioAreas("mai-2023");
  const salAreas6 = await groupSalarioAreas("jun-2023");
  const salAreas7 = await groupSalarioAreas("jul-2023");
  const salAreas8 = await groupSalarioAreas("ago-2023");
  const salAreas9 = await groupSalarioAreas("set-2023");
  const salAreas10 = await groupSalarioAreas("out-2023");
  const salAreas11 = await groupSalarioAreas("nov-2023");
  const salAreas12 = await groupSalarioAreas("dez-2023");

  return {
    ReceitasCentro5,
    ReceitasCentro6,
    ReceitasCentro7,
    ReceitasCentro8,
    ReceitasCentro9,
    ReceitasCentro10,
    ReceitasCentro11,
    ReceitasCentro12,
    recMes5,
    recMes6,
    recMes7,
    recMes8,
    recMes9,
    recMes10,
    recMes11,
    recMes12,
    // TotDespesas5,
    // TotDespesas6,
    // TotDespesas7,
    // TotDespesas8,
    // TotDespesas9,
    // TotDespesas10,
    // TotDespesas11,
    // TotDespesas12,
    despMes5,
    despMes6,
    despMes7,
    despMes8,
    despMes9,
    despMes10,
    despMes11,
    despMes12,
    DespFixas5,
    DespFixas6,
    DespFixas7,
    DespFixas8,
    DespFixas9,
    DespFixas10,
    DespFixas11,
    DespFixas12,
    TotSalMes5,
    TotSalMes6,
    TotSalMes7,
    TotSalMes8,
    TotSalMes9,
    TotSalMes10,
    TotSalMes11,
    TotSalMes12,
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
    ReceitasCentro5,
    ReceitasCentro6,
    ReceitasCentro7,
    ReceitasCentro8,
    ReceitasCentro9,
    ReceitasCentro10,
    ReceitasCentro11,
    ReceitasCentro12,
    recMes5,
    recMes6,
    recMes7,
    recMes8,
    recMes9,
    recMes10,
    recMes11,
    recMes12,
    // TotDespesas5,
    // TotDespesas6,
    // TotDespesas7,
    // TotDespesas8,
    // TotDespesas9,
    // TotDespesas10,
    // TotDespesas11,
    // TotDespesas12,
    despMes5,
    despMes6,
    despMes7,
    despMes8,
    despMes9,
    despMes10,
    despMes11,
    despMes12,
    DespFixas5,
    DespFixas6,
    DespFixas7,
    DespFixas8,
    DespFixas9,
    DespFixas10,
    DespFixas11,
    DespFixas12,
    TotSalMes5,
    TotSalMes6,
    TotSalMes7,
    TotSalMes8,
    TotSalMes9,
    TotSalMes10,
    TotSalMes11,
    TotSalMes12,
    salAreas5,
    salAreas6,
    salAreas7,
    salAreas8,
    salAreas9,
    salAreas10,
    salAreas11,
    salAreas12,
  } = useLoaderData<typeof loader>();

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
    return DespesasFixasTotal / 1 - DespesasVariavelTotalf / recMes._sum.valor;
  }

  function MargemDeContribuicaof(recMes: any, DespesasVariavelTotal: any) {
    return recMes._sum.valor - DespesasVariavelTotalf(DespesasVariavelTotal);
  }

  function LucroOpf(recMes: any, despmes: any, totmes: any) {
    return (
      MargemDeContribuicaof(recMes, despmes) -
      DespesasFixasTotal(despmes, totmes)
    );
  }

  function totalReceitas(recMes: any) {
    return recMes._sum.valor;
  }

  const inicial = 62601.84;

  // const saldoInicial4 = 64339.85;
  const saldoInicial5 = inicial;
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
      <div className="flex  justify-center min-h-screen">
        <ul className="mx-auto grid w-full grid-cols-8 gap-x-1 px-8">
          <li className="">
            <input
              className="peer sr-only"
              type="radio"
              value="maio"
              name="answer"
              id="maio"
            />
            <label
              className="flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out"
              htmlFor="maio">
              Maio
            </label>

            <div className="absolute w-full  bg-stone-200   p-2 mt-2 rounded-lg transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
              <table className="text-sm w-3/4 border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 text-center w-2/5 py-3">
                      MAIO 2023
                    </th>

                    <th scope="col" className="px-6 w-1/5 py-3 text-right">
                      Valor
                    </th>
                    <th scope="col" className="px-6 w-1/5 py-3 text-center">
                      AV
                    </th>
                    <th scope="col" className="px-6 w-1/5 py-3 text-center">
                      AH
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-b bg-emerald-300 ">
                    <th className="py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap ">
                      Receita / Faturamento
                    </th>
                    <td className="py-2 px-6 text-slate-900 font-mono text-right">
                      {totalReceitas(recMes5).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        totalReceitas(recMes5) / totalReceitas(recMes5)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      100%
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Receitas com serviços
                    </th>
                    <td className="py-2 px-6 font-mono text-right">
                      {totalReceitas(recMes5).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        totalReceitas(recMes5) / totalReceitas(recMes5)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      100%
                    </td>
                  </tr>
                  {ReceitasCentro5?.map((rec: any, index) => (
                    <tr key={index} className="bg-white border-b  ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {rec.centro}
                      </th>
                      <td className="py-2 px-6 font-mono text-right">
                        {rec._sum.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(rec._sum.valor / totalReceitas(recMes5))}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center"></td>
                    </tr>
                  ))}

                  <tr className="bg-orange-100 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Custos Variáveis
                    </th>
                    <td className="py-2 px-6  text-black font-mono text-right">
                      {DespesasVariavelTotalf(despMes5)?.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        DespesasVariavelTotalf(despMes5) /
                          totalReceitas(recMes5)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center"></td>
                  </tr>

                  {DespesasVariaveisf(despMes5)?.map((desp: any) => (
                    <tr key={desp.id} className="bg-white border-b ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {desp.conta}
                      </th>
                      <td className="py-2  px-6 font-mono text-right">
                        {desp.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(desp.valor / totalReceitas(recMes5))}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center"></td>
                    </tr>
                  ))}
                  <tr className="bg-white border-b ">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Margem de Contribuição
                    </th>
                    <td className="py-2 px-6 font-mono text-right">
                      {MargemDeContribuicaof(recMes5, despMes5).toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        MargemDeContribuicaof(recMes5, despMes5) /
                          totalReceitas(recMes5)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center"></td>
                  </tr>
                  <tr className="bg-amber-100 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Despesas Fixas
                    </th>
                    <td className="py-2 px-6 text-black font-mono text-right">
                      {DespesasFixasTotal(despMes5, TotSal5)?.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        DespesasFixasTotal(despMes5, TotSal5) /
                          totalReceitas(recMes5)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center"></td>
                  </tr>
                  {DespFixas5?.map((fixa, index: any) => (
                    <tr className="border-b bg-white" key={index}>
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {fixa.conta}
                      </th>
                      <td className="py-2 px-6 font-mono text-right">
                        {fixa._sum.valor?.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(fixa._sum.valor / totalReceitas(recMes5))}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center"></td>
                    </tr>
                  ))}
                  <tr className="bg-amber-200 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Salários
                    </th>
                    <td className="py-2 px-6 text-black font-mono text-right">
                      {TotSal5.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(TotSal5 / totalReceitas(recMes5))}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center"></td>
                  </tr>
                  {salAreas5?.map((sal: any) => (
                    <tr key={sal.mod} className="bg-white border-b ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {capitalize(sal.mod)}
                      </th>
                      <td className="py-2 px-6  font-mono text-right">
                        {sal.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(sal.valor / totalReceitas(recMes5))}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center"></td>
                    </tr>
                  ))}
                  <tr
                    className={`${
                      LucroOpf(recMes5, despMes5, TotSal5) > 0
                        ? "bg-teal-300"
                        : "bg-red-300"
                    } border-b`}>
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Lucro Operacional
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {LucroOpf(recMes5, despMes5, TotSal5).toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        LucroOpf(recMes5, despMes5, TotSal5) /
                          totalReceitas(recMes5)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center"></td>
                  </tr>
                  <tr className="bg-blue-400">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Ponto de Equilíbrio
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {PontoEquilibriof(
                        DespesasFixasTotal(despMes5, TotSal5),
                        DespesasVariavelTotalf(despMes5),
                        recMes5
                      ).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <td className="py-2 px-6 text-slate-900 text-center"></td>
                  </tr>
                  <tr className="bg-slate-200">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Saldo Inicial
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {saldoInicial5.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(saldoInicial5 / totalReceitas(recMes5))}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center"></td>
                  </tr>
                  <tr className="bg-green-300">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Saldo Final
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        (saldoInicial5 + LucroOpf(recMes5, despMes5, TotSal5)) /
                          totalReceitas(recMes5)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li className="">
            <input
              className="peer sr-only"
              type="radio"
              value="junho"
              name="answer"
              id="junho"
              defaultChecked
            />
            <label
              className="flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out"
              htmlFor="junho">
              Junho
            </label>

            <div className="absolute w-full bg-stone-200 left-3 p-6  mt-2 rounded-lg mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
              <table className="text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 text-center w-2/5 py-3">
                      JUNHO 2023
                    </th>

                    <th scope="col" className="px-6 w-1/5 py-3 text-right">
                      Valor
                    </th>
                    <th scope="col" className="px-6 w-1/5 py-3 text-center">
                      AV
                    </th>
                    <th scope="col" className="px-6 w-1/5 py-3 text-center">
                      AH
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-b bg-emerald-300 ">
                    <th className="py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap ">
                      Receita / Faturamento
                    </th>
                    <td className="py-2 px-6 text-slate-900 font-mono text-right">
                      {totalReceitas(recMes6).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        totalReceitas(recMes6) / totalReceitas(recMes6)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (totalReceitas(recMes6) - totalReceitas(recMes5)) /
                          totalReceitas(recMes5)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Receitas com serviços
                    </th>
                    <td className="py-2 px-6 font-mono text-right">
                      {totalReceitas(recMes6).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        totalReceitas(recMes6) / totalReceitas(recMes6)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (totalReceitas(recMes6) - totalReceitas(recMes5)) /
                          totalReceitas(recMes5)
                      )}
                    </td>
                  </tr>
                  {ReceitasCentro6?.map((rec: any, index) => (
                    <tr key={index} className="bg-white border-b  ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {rec.centro}
                      </th>
                      <td className="py-2 px-6 font-mono text-right">
                        {rec._sum.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(rec._sum.valor / totalReceitas(recMes6))}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center"></td>
                    </tr>
                  ))}

                  <tr className="bg-orange-100 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Custos Variáveis
                    </th>
                    <td className="py-2 px-6  text-black font-mono text-right">
                      {DespesasVariavelTotalf(despMes6)?.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        DespesasVariavelTotalf(despMes6) /
                          totalReceitas(recMes6)
                      )}
                    </td>

                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <tr key={desp.id} className="bg-white border-b ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {desp.conta}
                      </th>
                      <td className="py-2  px-6 font-mono text-right">
                        {desp.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(desp.valor / totalReceitas(recMes6))}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-white border-b ">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Margem de Contribuição
                    </th>
                    <td className="py-2 px-6 font-mono text-right">
                      {MargemDeContribuicaof(recMes6, despMes6).toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        MargemDeContribuicaof(recMes6, despMes6) /
                          totalReceitas(recMes6)
                      )}
                    </td>

                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (MargemDeContribuicaof(recMes6, despMes6) -
                          MargemDeContribuicaof(recMes5, despMes5)) /
                          MargemDeContribuicaof(recMes5, despMes5)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-amber-100 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Despesas Fixas
                    </th>
                    <td className="py-2 px-6 text-black font-mono text-right">
                      {DespesasFixasTotal(despMes6, TotSal6)?.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        DespesasFixasTotal(despMes6, TotSal6) /
                          totalReceitas(recMes6)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <tr className="bg-white border-b" key={index}>
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {fixa.conta}
                      </th>
                      <td className="py-2 px-6 font-mono text-right">
                        {fixa._sum.valor?.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(fixa._sum.valor / totalReceitas(recMes6))}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center"></td>
                    </tr>
                  ))}
                  <tr className="bg-amber-200 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Salários
                    </th>
                    <td className="py-2 px-6 text-black font-mono text-right">
                      {TotSal6.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(TotSal6 / totalReceitas(recMes6))}
                    </td>

                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format((TotSal6 - TotSal5) / TotSal5)}
                    </td>
                  </tr>
                  {salAreas6?.map((sal: any) => (
                    <tr key={sal.mod} className="bg-white border-b ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {capitalize(sal.mod)}
                      </th>
                      <td className="py-2 px-6  font-mono text-right">
                        {sal.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(sal.valor / totalReceitas(recMes6))}
                      </td>
                    </tr>
                  ))}
                  <tr
                    className={`${
                      LucroOpf(recMes6, despMes6, TotSal6) > 0
                        ? "bg-teal-300"
                        : "bg-red-300"
                    } border-b`}>
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Lucro Operacional
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {LucroOpf(recMes6, despMes6, TotSal6).toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        LucroOpf(recMes6, despMes6, TotSal6) /
                          totalReceitas(recMes6)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (LucroOpf(recMes6, despMes6, TotSal6) -
                          LucroOpf(recMes5, despMes5, TotSal5)) /
                          LucroOpf(recMes5, despMes5, TotSal5)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-blue-400">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Ponto de Equilíbrio
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {PontoEquilibriof(
                        DespesasFixasTotal(despMes6, TotSal6),
                        DespesasVariavelTotalf(despMes6),
                        recMes6
                      ).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                  <tr className="bg-slate-200">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Saldo Inicial
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {saldoInicial6.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(saldoInicial6 / totalReceitas(recMes6))}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (saldoInicial6 - saldoInicial5) / saldoInicial5
                      )}
                    </td>
                  </tr>
                  <tr className="bg-green-300">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Saldo Final
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
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

                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        (SaldoFinal(saldoInicial6, recMes6, despMes6, TotSal6) +
                          LucroOpf(recMes6, despMes6, TotSal6)) /
                          totalReceitas(recMes6)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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

          <li className="">
            <input
              className="peer sr-only"
              type="radio"
              value="julho"
              name="answer"
              id="julho"
            />
            <label
              className="flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out"
              htmlFor="julho">
              Julho
            </label>

            <div className="absolute bg-stone-200 left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
              <table className="text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 text-center w-2/5 py-3">
                      JULHO 2023
                    </th>

                    <th scope="col" className="px-6 w-1/5 py-3 text-right">
                      Valor
                    </th>
                    <th scope="col" className="px-6 w-1/5 py-3 text-center">
                      AV
                    </th>
                    <th scope="col" className="px-6 w-1/5 py-3 text-center">
                      AH
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-b bg-emerald-300 ">
                    <th className="py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap ">
                      Receita / Faturamento
                    </th>
                    <td className="py-2 px-6 text-slate-900 font-mono text-right">
                      {totalReceitas(recMes7).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        totalReceitas(recMes7) / totalReceitas(recMes7)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (totalReceitas(recMes7) - totalReceitas(recMes6)) /
                          totalReceitas(recMes6)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Receitas com serviços
                    </th>
                    <td className="py-2 px-6 font-mono text-right">
                      {totalReceitas(recMes7).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        totalReceitas(recMes7) / totalReceitas(recMes7)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (totalReceitas(recMes7) - totalReceitas(recMes6)) /
                          totalReceitas(recMes6)
                      )}
                    </td>
                  </tr>
                  {ReceitasCentro7?.map((rec: any, index) => (
                    <tr key={index} className="bg-white border-b  ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {rec.centro}
                      </th>
                      <td className="py-2 px-6 font-mono text-right">
                        {rec._sum.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(rec._sum.valor / totalReceitas(recMes7))}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center"></td>
                    </tr>
                  ))}

                  <tr className="bg-orange-100 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Custos Variáveis
                    </th>
                    <td className="py-2 px-6  text-black font-mono text-right">
                      {DespesasVariavelTotalf(despMes7)?.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        DespesasVariavelTotalf(despMes7) /
                          totalReceitas(recMes7)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <tr key={desp.id} className="bg-white border-b ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {desp.conta}
                      </th>
                      <td className="py-2  px-6 font-mono text-right">
                        {desp.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(desp.valor / totalReceitas(recMes7))}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-white border-b ">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Margem de Contribuição
                    </th>
                    <td className="py-2 px-6 font-mono text-right">
                      {MargemDeContribuicaof(recMes7, despMes7).toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        MargemDeContribuicaof(recMes7, despMes7) /
                          totalReceitas(recMes7)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (MargemDeContribuicaof(recMes7, despMes7) -
                          MargemDeContribuicaof(recMes6, despMes6)) /
                          MargemDeContribuicaof(recMes6, despMes6)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-amber-100 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Despesas Fixas
                    </th>
                    <td className="py-2 px-6 text-black font-mono text-right">
                      {DespesasFixasTotal(despMes7, TotSal7)?.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        DespesasFixasTotal(despMes7, TotSal7) /
                          totalReceitas(recMes7)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <tr className="border-b bg-white" key={index}>
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {fixa.conta}
                      </th>
                      <td className="py-2 px-6 font-mono text-right">
                        {fixa._sum.valor?.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(fixa._sum.valor / totalReceitas(recMes7))}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center"></td>
                    </tr>
                  ))}
                  <tr className="bg-amber-200 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Salários
                    </th>
                    <td className="py-2 px-6 text-black font-mono text-right">
                      {TotSal7.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(TotSal7 / totalReceitas(recMes7))}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format((TotSal7 - TotSal6) / TotSal6)}
                    </td>
                  </tr>
                  {salAreas7?.map((sal: any) => (
                    <tr key={sal.mod} className="bg-white border-b ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {capitalize(sal.mod)}
                      </th>
                      <td className="py-2 px-6  font-mono text-right">
                        {sal.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
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
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Lucro Operacional
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {LucroOpf(recMes7, despMes7, TotSal7).toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        LucroOpf(recMes7, despMes7, TotSal7) /
                          totalReceitas(recMes7)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (LucroOpf(recMes7, despMes7, TotSal7) -
                          LucroOpf(recMes6, despMes6, TotSal6)) /
                          LucroOpf(recMes6, despMes6, TotSal6)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-blue-400">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Ponto de Equilíbrio
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {PontoEquilibriof(
                        DespesasFixasTotal(despMes7, TotSal7),
                        DespesasVariavelTotalf(despMes7),
                        recMes7
                      ).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                  <tr className="bg-slate-200">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Saldo Inicial
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {saldoInicial7.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(saldoInicial7 / totalReceitas(recMes7))}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (saldoInicial7 - saldoInicial6) / saldoInicial6
                      )}
                    </td>
                  </tr>
                  <tr className="bg-green-300">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Saldo Final
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        (SaldoFinal(saldoInicial7, recMes7, despMes7, TotSal7) +
                          LucroOpf(recMes7, despMes7, TotSal7)) /
                          totalReceitas(recMes7)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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

          <li className="">
            <input
              className="peer sr-only"
              type="radio"
              value="agosto"
              name="answer"
              id="agosto"
            />
            <label
              className="flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out"
              htmlFor="agosto">
              Agosto
            </label>

            <div className="absolute bg-stone-200  left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
              <table className="text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 text-center w-2/5 py-3">
                      AGOSTO 2023
                    </th>

                    <th scope="col" className="px-6 w-1/5 py-3 text-right">
                      Valor
                    </th>
                    <th scope="col" className="px-6 w-1/5 py-3 text-center">
                      AV
                    </th>
                    <th scope="col" className="px-6 w-1/5 py-3 text-center">
                      AH
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-b bg-emerald-300 ">
                    <th className="py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap ">
                      Receita / Faturamento
                    </th>
                    <td className="py-2 px-6 text-slate-900 font-mono text-right">
                      {totalReceitas(recMes8).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        totalReceitas(recMes8) / totalReceitas(recMes8)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (totalReceitas(recMes8) - totalReceitas(recMes7)) /
                          totalReceitas(recMes7)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Receitas com serviços
                    </th>
                    <td className="py-2 px-6 font-mono text-right">
                      {totalReceitas(recMes8).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        totalReceitas(recMes8) / totalReceitas(recMes8)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (totalReceitas(recMes8) - totalReceitas(recMes7)) /
                          totalReceitas(recMes7)
                      )}
                    </td>
                  </tr>
                  {ReceitasCentro8?.map((rec: any, index) => (
                    <tr key={index} className="bg-white border-b  ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {rec.centro}
                      </th>
                      <td className="py-2 px-6 font-mono text-right">
                        {rec._sum.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(rec._sum.valor / totalReceitas(recMes8))}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center"></td>
                    </tr>
                  ))}

                  <tr className="bg-orange-100 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Custos Variáveis
                    </th>
                    <td className="py-2 px-6  text-black font-mono text-right">
                      {DespesasVariavelTotalf(despMes8)?.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        DespesasVariavelTotalf(despMes8) /
                          totalReceitas(recMes8)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <tr key={desp.id} className="bg-white border-b ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {desp.conta}
                      </th>
                      <td className="py-2  px-6 font-mono text-right">
                        {desp.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(desp.valor / totalReceitas(recMes8))}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-white border-b ">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Margem de Contribuição
                    </th>
                    <td className="py-2 px-6 font-mono text-right">
                      {MargemDeContribuicaof(recMes8, despMes8).toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        MargemDeContribuicaof(recMes8, despMes8) /
                          totalReceitas(recMes8)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (MargemDeContribuicaof(recMes8, despMes8) -
                          MargemDeContribuicaof(recMes7, despMes7)) /
                          MargemDeContribuicaof(recMes7, despMes7)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-amber-100 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Despesas Fixas
                    </th>
                    <td className="py-2 px-6 text-black font-mono text-right">
                      {DespesasFixasTotal(despMes8, TotSal8)?.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        DespesasFixasTotal(despMes8, TotSal8) /
                          totalReceitas(recMes8)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <tr className="bg-white border-b" key={index}>
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {fixa.conta}
                      </th>
                      <td className="py-2 px-6 font-mono text-right">
                        {fixa._sum.valor?.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(fixa._sum.valor / totalReceitas(recMes8))}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center"></td>
                    </tr>
                  ))}
                  <tr className="bg-amber-200 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Salários
                    </th>
                    <td className="py-2 px-6 text-black font-mono text-right">
                      {TotSal8.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(TotSal8 / totalReceitas(recMes8))}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format((TotSal8 - TotSal7) / TotSal7)}
                    </td>
                  </tr>
                  {salAreas8?.map((sal: any) => (
                    <tr key={sal.mod} className="bg-white border-b ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {capitalize(sal.mod)}
                      </th>
                      <td className="py-2 px-6  font-mono text-right">
                        {sal.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
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
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Lucro Operacional
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {LucroOpf(recMes8, despMes8, TotSal8).toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        LucroOpf(recMes8, despMes8, TotSal8) /
                          totalReceitas(recMes8)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (LucroOpf(recMes8, despMes8, TotSal8) -
                          LucroOpf(recMes7, despMes7, TotSal7)) /
                          LucroOpf(recMes7, despMes7, TotSal7)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-blue-400">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Ponto de Equilíbrio
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {PontoEquilibriof(
                        DespesasFixasTotal(despMes8, TotSal8),
                        DespesasVariavelTotalf(despMes8),
                        recMes8
                      ).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                  <tr className="bg-slate-200">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Saldo Inicial
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {saldoInicial8.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(saldoInicial8 / totalReceitas(recMes8))}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (saldoInicial8 - saldoInicial7) / saldoInicial7
                      )}
                    </td>
                  </tr>
                  <tr className="bg-green-300">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Saldo Final
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        (SaldoFinal(saldoInicial8, recMes8, despMes8, TotSal8) +
                          LucroOpf(recMes8, despMes8, TotSal8)) /
                          totalReceitas(recMes8)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
          <li className="">
            <input
              className="peer sr-only"
              type="radio"
              value="setembro"
              name="answer"
              id="setembro"
            />
            <label
              className="flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:ring-slate-400 peer-checked:bg-slate-300 transition-all duration-500 ease-in-out"
              htmlFor="setembro">
              Setembro
            </label>

            <div className="absolute bg-stone-200 left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
              <table className="text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 text-center w-2/5 py-3">
                      SETEMBRO 2023
                    </th>

                    <th scope="col" className="px-6 w-1/5 py-3 text-right">
                      Valor
                    </th>
                    <th scope="col" className="px-6 w-1/5 py-3 text-center">
                      AV
                    </th>
                    <th scope="col" className="px-6 w-1/5 py-3 text-center">
                      AH
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-b bg-emerald-300 ">
                    <th className="py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap ">
                      Receita / Faturamento
                    </th>
                    <td className="py-2 px-6 text-slate-900 font-mono text-right">
                      {totalReceitas(recMes9).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        totalReceitas(recMes9) / totalReceitas(recMes9)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (totalReceitas(recMes9) - totalReceitas(recMes8)) /
                          totalReceitas(recMes8)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Receitas com serviços
                    </th>
                    <td className="py-2 px-6 font-mono text-right">
                      {totalReceitas(recMes9).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        totalReceitas(recMes9) / totalReceitas(recMes9)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (totalReceitas(recMes9) - totalReceitas(recMes8)) /
                          totalReceitas(recMes8)
                      )}
                    </td>
                  </tr>
                  {ReceitasCentro9?.map((rec: any, index) => (
                    <tr key={index} className="bg-white border-b  ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {rec.centro}
                      </th>
                      <td className="py-2 px-6 font-mono text-right">
                        {rec._sum.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(rec._sum.valor / totalReceitas(recMes9))}
                      </td>
                      <td></td>
                    </tr>
                  ))}

                  <tr className="bg-orange-100 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Custos Variáveis
                    </th>
                    <td className="py-2 px-6  text-black font-mono text-right">
                      {DespesasVariavelTotalf(despMes9)?.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        DespesasVariavelTotalf(despMes9) /
                          totalReceitas(recMes9)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <tr key={desp.id} className="bg-white border-b ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {desp.conta}
                      </th>
                      <td className="py-2  px-6 font-mono text-right">
                        {desp.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(desp.valor / totalReceitas(recMes9))}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-white border-b ">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Margem de Contribuição
                    </th>
                    <td className="py-2 px-6 font-mono text-right">
                      {MargemDeContribuicaof(recMes9, despMes9).toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        MargemDeContribuicaof(recMes9, despMes9) /
                          totalReceitas(recMes9)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (MargemDeContribuicaof(recMes9, despMes9) -
                          MargemDeContribuicaof(recMes8, despMes8)) /
                          MargemDeContribuicaof(recMes8, despMes8)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-amber-100 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Despesas Fixas
                    </th>
                    <td className="py-2 px-6 text-black font-mono text-right">
                      {DespesasFixasTotal(despMes9, TotSal9)?.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        DespesasFixasTotal(despMes9, TotSal9) /
                          totalReceitas(recMes9)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <tr className="bg-white border-b" key={index}>
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {fixa.conta}
                      </th>
                      <td className="py-2 px-6 font-mono text-right">
                        {fixa._sum.valor?.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(fixa._sum.valor / totalReceitas(recMes9))}
                      </td>
                      <td></td>
                    </tr>
                  ))}
                  <tr className="bg-amber-200 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Salários
                    </th>
                    <td className="py-2 px-6 text-black font-mono text-right">
                      {TotSal9.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(TotSal9 / totalReceitas(recMes9))}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format((TotSal9 - TotSal8) / TotSal8)}
                    </td>
                  </tr>
                  {salAreas9?.map((sal: any) => (
                    <tr key={sal.mod} className="bg-white border-b ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {capitalize(sal.mod)}
                      </th>
                      <td className="py-2 px-6  font-mono text-right">
                        {sal.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
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
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Lucro Operacional
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {LucroOpf(recMes9, despMes9, TotSal9).toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        LucroOpf(recMes9, despMes9, TotSal9) /
                          totalReceitas(recMes9)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (LucroOpf(recMes9, despMes9, TotSal9) -
                          LucroOpf(recMes8, despMes8, TotSal8)) /
                          LucroOpf(recMes8, despMes8, TotSal8)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-blue-400">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Ponto de Equilíbrio
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {PontoEquilibriof(
                        DespesasFixasTotal(despMes9, TotSal9),
                        DespesasVariavelTotalf(despMes9),
                        recMes9
                      ).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                  <tr className="bg-slate-200">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Saldo Inicial
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {saldoInicial9.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(saldoInicial9 / totalReceitas(recMes9))}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (saldoInicial9 - saldoInicial8) / saldoInicial8
                      )}
                    </td>
                  </tr>
                  <tr className="bg-green-300">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Saldo Final
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        (SaldoFinal(saldoInicial9, recMes9, despMes9, TotSal9) +
                          LucroOpf(recMes9, despMes9, TotSal9)) /
                          totalReceitas(recMes9)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
          <li className="">
            <input
              className="peer sr-only"
              type="radio"
              value="outubro"
              name="answer"
              id="outubro"
            />
            <label
              className="flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out"
              htmlFor="outubro">
              Outubro
            </label>

            <div className="absolute bg-stone-200 left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100  peer-checked:visible peer-checked:translate-x-1">
              <table className="text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 text-center w-2/5 py-3">
                      OUTUBRO 2023
                    </th>

                    <th scope="col" className="px-6 w-1/5 py-3 text-right">
                      Valor
                    </th>
                    <th scope="col" className="px-6 w-1/5 py-3 text-center">
                      AV
                    </th>
                    <th scope="col" className="px-6 w-1/5 py-3 text-center">
                      AH
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-b bg-emerald-300 ">
                    <th className="py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap ">
                      Receita / Faturamento
                    </th>
                    <td className="py-2 px-6 text-slate-900 font-mono text-right">
                      {totalReceitas(recMes10).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        totalReceitas(recMes10) / totalReceitas(recMes10)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (totalReceitas(recMes10) - totalReceitas(recMes9)) /
                          totalReceitas(recMes9)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Receitas com serviços
                    </th>
                    <td className="py-2 px-6 font-mono text-right">
                      {totalReceitas(recMes10).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        totalReceitas(recMes10) / totalReceitas(recMes10)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (totalReceitas(recMes10) - totalReceitas(recMes9)) /
                          totalReceitas(recMes9)
                      )}
                    </td>
                  </tr>
                  {ReceitasCentro10?.map((rec: any, index) => (
                    <tr key={index} className="bg-white border-b  ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {rec.centro}
                      </th>
                      <td className="py-2 px-6 font-mono text-right">
                        {rec._sum.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(rec._sum.valor / totalReceitas(recMes10))}
                      </td>
                      <td></td>
                    </tr>
                  ))}

                  <tr className="bg-orange-100 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Custos Variáveis
                    </th>
                    <td className="py-2 px-6  text-black font-mono text-right">
                      {DespesasVariavelTotalf(despMes10)?.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        DespesasVariavelTotalf(despMes10) /
                          totalReceitas(recMes10)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <tr key={index} className="bg-white border-b ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {desp.conta}
                      </th>
                      <td className="py-2  px-6 font-mono text-right">
                        {desp.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(desp.valor / totalReceitas(recMes10))}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-white border-b ">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Margem de Contribuição
                    </th>
                    <td className="py-2 px-6 font-mono text-right">
                      {MargemDeContribuicaof(
                        recMes10,
                        despMes10
                      ).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        MargemDeContribuicaof(recMes10, despMes10) /
                          totalReceitas(recMes9)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (MargemDeContribuicaof(recMes10, despMes10) -
                          MargemDeContribuicaof(recMes9, despMes9)) /
                          MargemDeContribuicaof(recMes9, despMes9)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-amber-100 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Despesas Fixas
                    </th>
                    <td className="py-2 px-6 text-black font-mono text-right">
                      {DespesasFixasTotal(despMes10, TotSal10)?.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        DespesasFixasTotal(despMes10, TotSal10) /
                          totalReceitas(recMes10)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <tr className="bg-white border-b" key={index}>
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {fixa.conta}
                      </th>
                      <td className="py-2 px-6 font-mono text-right">
                        {fixa._sum.valor?.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(fixa._sum.valor / totalReceitas(recMes10))}
                      </td>
                      <td></td>
                    </tr>
                  ))}
                  <tr className="bg-amber-200 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Salários
                    </th>
                    <td className="py-2 px-6 text-black font-mono text-right">
                      {TotSal10.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(TotSal10 / totalReceitas(recMes10))}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format((TotSal10 - TotSal9) / TotSal9)}
                    </td>
                  </tr>
                  {salAreas10?.map((sal: any) => (
                    <tr key={sal.mod} className="bg-white border-b ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {capitalize(sal.mod)}
                      </th>
                      <td className="py-2 px-6  font-mono text-right">
                        {sal.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
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
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Lucro Operacional
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {LucroOpf(recMes10, despMes10, TotSal10).toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        LucroOpf(recMes10, despMes10, TotSal10) /
                          totalReceitas(recMes10)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (LucroOpf(recMes10, despMes10, TotSal10) -
                          LucroOpf(recMes9, despMes9, TotSal9)) /
                          LucroOpf(recMes9, despMes9, TotSal9)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-blue-400">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Ponto de Equilíbrio
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {PontoEquilibriof(
                        DespesasFixasTotal(despMes10, TotSal10),
                        DespesasVariavelTotalf(despMes10),
                        recMes10
                      ).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                  <tr className="bg-slate-200">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Saldo Inicial
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {saldoInicial10.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(saldoInicial10 / totalReceitas(recMes10))}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (saldoInicial10 - saldoInicial9) / saldoInicial9
                      )}
                    </td>
                  </tr>
                  <tr className="bg-green-300">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Saldo Final
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
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
          <li className="">
            <input
              className="peer sr-only"
              type="radio"
              value="novembro"
              name="answer"
              id="novembro"
            />
            <label
              className="flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:bg-slate-300 peer-checked:ring-1 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out"
              htmlFor="novembro">
              Novembro
            </label>

            <div className="absolute bg-stone-200 left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
              <table className="text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 text-center w-2/5 py-3">
                      NOVEMBRO 2023
                    </th>

                    <th scope="col" className="px-6 w-1/5 py-3 text-right">
                      Valor
                    </th>
                    <th scope="col" className="px-6 w-1/5 py-3 text-center">
                      AV
                    </th>
                    <th scope="col" className="px-6 w-1/5 py-3 text-center">
                      AH
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-b bg-emerald-300 ">
                    <th className="py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap ">
                      Receita / Faturamento
                    </th>
                    <td className="py-2 px-6 text-slate-900 font-mono text-right">
                      {totalReceitas(recMes11).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        totalReceitas(recMes11) / totalReceitas(recMes11)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (totalReceitas(recMes11) - totalReceitas(recMes10)) /
                          totalReceitas(recMes10)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Receitas com serviços
                    </th>
                    <td className="py-2 px-6 font-mono text-right">
                      {totalReceitas(recMes11).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        totalReceitas(recMes11) / totalReceitas(recMes11)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (totalReceitas(recMes11) - totalReceitas(recMes10)) /
                          totalReceitas(recMes10)
                      )}
                    </td>
                  </tr>
                  {ReceitasCentro11?.map((rec: any, index) => (
                    <tr key={index} className="bg-white border-b  ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {rec.centro}
                      </th>
                      <td className="py-2 px-6 font-mono text-right">
                        {rec._sum.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(rec._sum.valor / totalReceitas(recMes11))}
                      </td>
                      <td></td>
                    </tr>
                  ))}

                  <tr className="bg-orange-100 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Custos Variáveis
                    </th>
                    <td className="py-2 px-6  text-black font-mono text-right">
                      {DespesasVariavelTotalf(despMes11)?.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        DespesasVariavelTotalf(despMes11) /
                          totalReceitas(recMes11)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <tr key={desp.id} className="bg-white border-b ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {desp.conta}
                      </th>
                      <td className="py-2  px-6 font-mono text-right">
                        {desp.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(desp.valor / totalReceitas(recMes11))}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-white border-b ">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Margem de Contribuição
                    </th>
                    <td className="py-2 px-6 font-mono text-right">
                      {MargemDeContribuicaof(
                        recMes11,
                        despMes11
                      ).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        MargemDeContribuicaof(recMes11, despMes11) /
                          totalReceitas(recMes11)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (MargemDeContribuicaof(recMes11, despMes11) -
                          MargemDeContribuicaof(recMes10, despMes10)) /
                          MargemDeContribuicaof(recMes10, despMes10)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-amber-100 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Despesas Fixas
                    </th>
                    <td className="py-2 px-6 text-black font-mono text-right">
                      {DespesasFixasTotal(despMes11, TotSal11)?.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        DespesasFixasTotal(despMes11, TotSal11) /
                          totalReceitas(recMes11)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <tr className="bg-white border-b" key={index}>
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {fixa.conta}
                      </th>
                      <td className="py-2 px-6 font-mono text-right">
                        {fixa._sum.valor?.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(fixa._sum.valor / totalReceitas(recMes11))}
                      </td>
                      <td></td>
                    </tr>
                  ))}
                  <tr className="bg-amber-200 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Salários
                    </th>
                    <td className="py-2 px-6 text-black font-mono text-right">
                      {TotSal11.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(TotSal11 / totalReceitas(recMes11))}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format((TotSal11 - TotSal10) / TotSal10)}
                    </td>
                  </tr>
                  {salAreas11?.map((sal: any) => (
                    <tr key={sal.mod} className="bg-white border-b ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {capitalize(sal.mod)}
                      </th>
                      <td className="py-2 px-6  font-mono text-right">
                        {sal.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
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
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Lucro Operacional
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {LucroOpf(recMes11, despMes11, TotSal11).toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        LucroOpf(recMes11, despMes11, TotSal11) /
                          totalReceitas(recMes11)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (LucroOpf(recMes11, despMes11, TotSal11) -
                          LucroOpf(recMes10, despMes10, TotSal10)) /
                          LucroOpf(recMes10, despMes10, TotSal10)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-blue-400">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Ponto de Equilíbrio
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {PontoEquilibriof(
                        DespesasFixasTotal(despMes11, TotSal11),
                        DespesasVariavelTotalf(despMes11),
                        recMes11
                      ).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                  <tr className="bg-slate-200">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Saldo Inicial
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {saldoInicial11.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(saldoInicial11 / totalReceitas(recMes11))}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (saldoInicial11 - saldoInicial10) / saldoInicial10
                      )}
                    </td>
                  </tr>
                  <tr className="bg-green-300">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Saldo Final
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
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

          <li className="">
            <input
              className="peer sr-only"
              type="radio"
              value="dezembro"
              name="answer"
              id="dezembro"
            />
            <label
              className="flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:ring-slate-400 peer-checked:bg-slate-300 transition-all duration-500 ease-in-out"
              htmlFor="dezembro">
              Dezembro
            </label>

            <div className="absolute bg-stone-200 left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
              <table className="text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 text-center w-2/5 py-3">
                      DEZEMBRO 2023
                    </th>

                    <th scope="col" className="px-6 w-1/5 py-3 text-right">
                      Valor
                    </th>
                    <th scope="col" className="px-6 w-1/5 py-3 text-center">
                      AV
                    </th>
                    <th scope="col" className="px-6 w-1/5 py-3 text-center">
                      AH
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-b bg-emerald-300 ">
                    <th className="py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap ">
                      Receita / Faturamento
                    </th>
                    <td className="py-2 px-6 text-slate-900 font-mono text-right">
                      {totalReceitas(recMes12).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        totalReceitas(recMes12) / totalReceitas(recMes12)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (totalReceitas(recMes12) - totalReceitas(recMes11)) /
                          totalReceitas(recMes11)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Receitas com serviços
                    </th>
                    <td className="py-2 px-6 font-mono text-right">
                      {totalReceitas(recMes12).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        totalReceitas(recMes12) / totalReceitas(recMes12)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (totalReceitas(recMes12) - totalReceitas(recMes11)) /
                          totalReceitas(recMes11)
                      )}
                    </td>
                  </tr>
                  {ReceitasCentro12?.map((rec: any, index) => (
                    <tr key={index} className="bg-white border-b  ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {rec.centro}
                      </th>
                      <td className="py-2 px-6 font-mono text-right">
                        {rec._sum.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(rec._sum.valor / totalReceitas(recMes12))}
                      </td>
                      <td></td>
                    </tr>
                  ))}

                  <tr className="bg-orange-100 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Custos Variáveis
                    </th>
                    <td className="py-2 px-6  text-black font-mono text-right">
                      {DespesasVariavelTotalf(despMes12)?.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        DespesasVariavelTotalf(despMes12) /
                          totalReceitas(recMes12)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <tr key={desp.id} className="bg-white border-b ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {desp.conta}
                      </th>
                      <td className="py-2  px-6 font-mono text-right">
                        {desp.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(desp.valor / totalReceitas(recMes12))}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-white border-b ">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Margem de Contribuição
                    </th>
                    <td className="py-2 px-6 font-mono text-right">
                      {MargemDeContribuicaof(
                        recMes12,
                        despMes12
                      ).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        MargemDeContribuicaof(recMes12, despMes12) /
                          totalReceitas(recMes12)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (MargemDeContribuicaof(recMes12, despMes12) -
                          MargemDeContribuicaof(recMes11, despMes11)) /
                          MargemDeContribuicaof(recMes11, despMes11)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-amber-100 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Despesas Fixas
                    </th>
                    <td className="py-2 px-6 text-black font-mono text-right">
                      {DespesasFixasTotal(despMes12, TotSal12)?.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        DespesasFixasTotal(despMes12, TotSal12) /
                          totalReceitas(recMes12)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <tr className="bg-white border-b" key={index}>
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {fixa.conta}
                      </th>
                      <td className="py-2 px-6 font-mono text-right">
                        {fixa._sum.valor?.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
                        {new Intl.NumberFormat("de-DE", {
                          style: "percent",
                        }).format(fixa._sum.valor / totalReceitas(recMes12))}
                      </td>
                      <td></td>
                    </tr>
                  ))}
                  <tr className="bg-amber-200 border-b ">
                    <th className="py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ">
                      Salários
                    </th>
                    <td className="py-2 px-6 text-black font-mono text-right">
                      {TotSal12.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(TotSal12 / totalReceitas(recMes12))}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format((TotSal12 - TotSal11) / TotSal11)}
                    </td>
                  </tr>
                  {salAreas12?.map((sal: any) => (
                    <tr key={sal.mod} className="bg-white border-b ">
                      <th className="py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ">
                        {capitalize(sal.mod)}
                      </th>
                      <td className="py-2 px-6  font-mono text-right">
                        {sal.valor.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2 px-6 text-slate-900 text-center">
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
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Lucro Operacional
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {LucroOpf(recMes12, despMes12, TotSal12).toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(
                        LucroOpf(recMes12, despMes12, TotSal12) /
                          totalReceitas(recMes12)
                      )}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (LucroOpf(recMes12, despMes12, TotSal12) -
                          LucroOpf(recMes11, despMes11, TotSal11)) /
                          LucroOpf(recMes11, despMes11, TotSal11)
                      )}
                    </td>
                  </tr>
                  <tr className="bg-blue-400">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Ponto de Equilíbrio
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {PontoEquilibriof(
                        DespesasFixasTotal(despMes12, TotSal12),
                        DespesasVariavelTotalf(despMes12),
                        recMes12
                      ).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                  <tr className="bg-slate-200">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Saldo Inicial
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
                      {saldoInicial12.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("de-DE", {
                        style: "percent",
                      }).format(saldoInicial12 / totalReceitas(recMes12))}
                    </td>
                    <td className="py-2 px-6 text-slate-900 text-center">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "percent",
                      }).format(
                        (saldoInicial12 - saldoInicial11) / saldoInicial11
                      )}
                    </td>
                  </tr>
                  <tr className="bg-green-300">
                    <th className="py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ">
                      Saldo Final
                    </th>
                    <td className="py-2 text-black px-6 font-mono text-right">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
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
                    <td className="py-2 px-6 text-slate-900 text-center">
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
