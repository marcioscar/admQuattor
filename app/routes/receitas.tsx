import type { LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, NavLink, Outlet, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { Navbar } from "~/components/Navbar";
import type { tipoRec } from "~/utils/types.server";
import { format } from "date-fns";
import _ from "lodash";
import { baixarReceita, getReceitas } from "~/utils/receitas.server";
import { requireUserSession } from "~/utils/auth.server";
import {
  RiMoneyDollarCircleLine,
  RiCalendarEventFill,
  RiSearch2Line,
} from "react-icons/ri";

import type { ActionArgs } from "@remix-run/node";
export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  await baixarReceita(formData.get("_id"));
  return redirect(``);
}

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserSession(request);
  // const receitas = await receitasPorCentro();
  const receitas = await getReceitas();
  // const receitas = rec.sort(function (a, b) {
  //   var titleA = a.data.split("/").reverse().join(""),
  //     titleB = b.data.split("/").reverse().join("");
  //   return titleA > titleB ? -1 : titleA < titleB ? 1 : 0;
  // });

  return json({ receitas });
};
export default function Receitas() {
  const { receitas } = useLoaderData();
  const dataAtual = format(new Date(), "dd/MM/yyyy");
  const [filtrar, setFiltrar] = useState("");
  const [filtrardt1, setFiltrardt1] = useState(dataAtual);
  const [filtrardt2, setFiltrardt2] = useState(dataAtual);

  const receitasdata = receitas?.filter(
    (receitas: any) =>
      receitas.data.includes(filtrardt1) || receitas.data.includes(filtrardt2)
  );

  const receitaFilter = receitasdata?.filter(
    (receitas: { centro: string; data: string; valor: any }) =>
      receitas.centro.toLowerCase().includes(filtrar.toLowerCase()) ||
      receitas.data.toLowerCase().includes(filtrar.toLowerCase()) ||
      receitas.valor.toString().includes(filtrar)
  );

  const total = _.sumBy(receitaFilter, "valor");

  return (
    <>
      <Navbar />
      <Outlet />
      <h1 className="flex  justify-center font-bold text-slate-500 text-xl">
        RECEITAS
      </h1>

      <div className="flex justify-around items-center">
        <div className="relative w-2/6 ml-3">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <RiSearch2Line className=" text-slate-500" />
          </div>
          <input
            type="search"
            id="search"
            value={filtrar}
            onChange={(e) => setFiltrar(e.target.value)}
            placeholder="Procurar"
            className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
          />
        </div>
        <div className="flex space-x-3">
          <div className="relative w-1/2">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <RiCalendarEventFill className=" text-slate-500" />
            </div>
            <input
              type="searchdt1"
              id="searchdt1"
              value={filtrardt1}
              onChange={(e) => setFiltrardt1(e.target.value)}
              placeholder="Data"
              className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
            />
          </div>
          <div className="relative w-1/2">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <RiCalendarEventFill className=" text-slate-500" />
            </div>
            <input
              type="searchdt1"
              id="searchdt1"
              value={filtrardt2}
              onChange={(e) => setFiltrardt2(e.target.value)}
              placeholder="Data"
              className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
            />
          </div>
        </div>

        <NavLink
          className=" flex mr-4  focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5  mb-2 dark:focus:ring-yellow-900"
          to="new">
          Nova
        </NavLink>
      </div>
      <Form method="post">
        <div className="text-center font-medium  text-lg mt-2 text-slate-600">
          Total:{" "}
          {total.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
        <div className="flex justify-center  ">
          <table className=" w-11/12 text-sm text-left mt-4 text-gray-500 border-l-2 border-r-2 border-slate-100">
            <thead className="text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Centro
                </th>

                <th scope="col" className="px-6 py-3 text-right">
                  Valor
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Data
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Forma pagamento
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Status
                </th>
                <th scope="col" className=" text-center">
                  Receber
                </th>

                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Editar</span>
                </th>
              </tr>
            </thead>

            <tbody>
              {receitaFilter.map((rec: tipoRec, index: number) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-2  font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {rec.centro}
                  </th>
                  <td className="px-6 font-mono  text-right ">
                    {rec.valor.toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="px-6 font-mono  text-center ">{rec.data}</td>
                  <td className="px-6 font-mono  text-right ">{rec.forma}</td>
                  <td className="px-6 font-mono  text-right ">{rec.status}</td>
                  <td className="text-right">
                    <button name="_id" value={rec.id} type="submit">
                      <RiMoneyDollarCircleLine className=" text-center text-green-500   w-6 h-6 " />
                    </button>
                  </td>
                  <td className="px-6  py-3 text-right">
                    <NavLink
                      to={`${rec.id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24">
                        <path d="M8.424 12.282l4.402 4.399-5.826 1.319 1.424-5.718zm15.576-6.748l-9.689 9.804-4.536-4.536 9.689-9.802 4.536 4.534zm-6 8.916v6.55h-16v-12h6.743l1.978-3h-10.721v16h20v-10.573l-2 2.023z" />
                      </svg>
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Form>
    </>
  );
}
