import { Button } from "@/components/ui/button";
import { VisibilityState, type ColumnDef } from "@tanstack/react-table";
import { FcCheckmark, FcFullTrash, FcEditImage } from "react-icons/fc";
import { ArrowUpDown } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Form, NavLink } from "@remix-run/react";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@radix-ui/react-dropdown-menu";

export const columns: ColumnDef<any>[] = [
	{
		accessorKey: "matricula",
		header: "Matrícula",
	},

	{
		accessorKey: "nome",
		header: "Nome",
		cell: ({ row }) => row.getValue("nome") + " " + row.getValue("sobrenome"),
	},
	{
		accessorKey: "sobrenome",
		header: "",
		cell: ({ row }) => "",
	},
	{
		accessorKey: "turma",
		header: "Turma",
	},
	{
		accessorKey: "plano",
		header: "Plano",
	},
	{
		accessorKey: "valor",
		header: "Valor",
	},
	{
		accessorKey: "desconto",
		header: "Desconto",
	},

	{
		accessorKey: "id",
		header: "",
		cell: ({ row }) => (
			<Dialog>
				<DialogTrigger asChild>
					<Button
						size='xs'
						variant='outline'
						className=' border border-none shadow-none'>
						<FcFullTrash className='w-4 h-4' />
					</Button>
				</DialogTrigger>
				<DialogContent>
					<Form method='post'>
						<DialogHeader>
							<DialogTitle className=' text-stone-600'>
								Tem Certeza que quer apagar
							</DialogTitle>
							<Separator className='my-4' />
							<DialogDescription className='mt-8'>
								<div className='flex h-5 items-center space-x-4 text-sm'>
									<div>{row.getValue("nome")}</div>

									<div>{row.getValue("matricula")}</div>
								</div>
							</DialogDescription>
						</DialogHeader>
						<input
							hidden
							type='text'
							name='matricula'
							defaultValue={row.getValue("matricula")}
						/>
						<input
							hidden
							type='text'
							name='id'
							defaultValue={row.getValue("id")}
						/>
						<DialogFooter>
							<DialogClose asChild>
								<button
									type='submit'
									className='rounded-xl mt-2 bg-red-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-red-700 hover:-translate-y-1'
									name='_action'
									value='delete'>
									Apagar
								</button>
							</DialogClose>
						</DialogFooter>
					</Form>
				</DialogContent>
			</Dialog>
		),
	},
];
