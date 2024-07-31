// app/routes/login.tsx

import Cleave from "cleave.js/react";
import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { createReceita } from "~/utils/receitas.server";
import { Form, Link, useNavigate, useNavigation } from "@remix-run/react";
import Modal from "~/components/Modal";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

export const action: ActionFunction = async ({ request }) => {
	const form = await request.formData();
	let values = Object.fromEntries(form);
	// @ts-ignore
	await createReceita(values);
	return redirect("/receitas");
};
export default function New() {
	const bancos = [
		{
			etiqueta: "MM",
			banco: "mm",
		},
		{
			etiqueta: "QUATTOR",
			banco: "quattor",
		},
	];
	const formas = [
		{
			etiqueta: "CARTÃO",
			forma: "cartão",
		},
		{
			etiqueta: "PIX",
			forma: "pix",
		},
		{
			etiqueta: "CHEQUE",
			forma: "cheque",
		},
		{
			etiqueta: "DINHEIRO",
			forma: "dinheiro",
		},
	];
	const [openL, setOpenL] = useState(false);
	const [openF, setOpenF] = useState(false);
	const [open, setOpen] = useState(false);
	const [valueL, setValueL] = useState();
	const [valueF, setValueF] = useState();
	const [date, setDate] = useState<Date | undefined>(new Date());
	const navigate = useNavigate();
	const transition = useNavigation();
	function closeHandler() {
		navigate("..");
	}
	return (
		<Modal onClose={closeHandler}>
			{/* <Navbar /> */}
			<div className='h-full w-[600px] justify-center items-center flex flex-col gap-y-4'>
				<h2 className='text-2xl font-extrabold text-slate-700'>
					Cadastro de Receitas
				</h2>

				<Form method='post' className='rounded-2xl bg-gray-200 p-6 w-3/4'>
					<input
						type='text'
						hidden
						readOnly
						value={date}
						name='data'
						id='data'
					/>
					<input
						hidden
						readOnly
						value={valueL}
						name='referencia'
						id='referencia'
					/>
					<input hidden readOnly value={valueF} name='forma' id='forma' />
					<FormItem className='mt-3'>
						<Label htmlFor='banco'>Banco</Label>
						<Popover open={openL} onOpenChange={setOpenL}>
							<PopoverTrigger asChild>
								<Button
									variant='outline'
									role='combobox'
									aria-expanded={open}
									className='w-full justify-between text-zinc-500'>
									{valueL
										? bancos.find((bancos: any) => bancos.banco === valueL)
												?.etiqueta
										: "Banco..."}
									<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
								</Button>
							</PopoverTrigger>
							<PopoverContent
								id='referencia'
								className='w-full p-2 rounded-xl my-2'>
								<Command id='referencia'>
									<CommandInput placeholder='Procurar banco...' />
									<CommandEmpty>Banco não encontrada</CommandEmpty>
									<CommandGroup>
										{bancos?.map((bancos: any) => (
											<CommandItem
												key={bancos.banco}
												value={bancos.banco}
												onSelect={(currentValueL) => {
													setValueL(
														currentValueL === valueL ? "" : currentValueL
													);
													setOpenL(false);
												}}>
												<Check
													className={cn(
														"mr-2 h-4 w-4",
														valueL === bancos.banco
															? "opacity-100"
															: "opacity-0"
													)}
												/>
												{bancos.etiqueta}
											</CommandItem>
										))}
									</CommandGroup>
								</Command>
							</PopoverContent>
						</Popover>
					</FormItem>
					{/* <label htmlFor='conta' className='text-blue-600 font-semibold'>
						Banco
					</label>
					<input
						type='text'
						id='referencia'
						name='referencia'
						className='w-full p-2 rounded-xl my-2'
					/> */}

					<FormItem className='mt-3'>
						<Label htmlFor='banco'>Forma de Recebimento</Label>
						<Popover open={openF} onOpenChange={setOpenF}>
							<PopoverTrigger asChild>
								<Button
									variant='outline'
									role='combobox'
									aria-expanded={open}
									className='w-full justify-between text-zinc-500'>
									{valueF
										? formas.find((formas: any) => formas.forma === valueF)
												?.etiqueta
										: "Forma..."}
									<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
								</Button>
							</PopoverTrigger>
							<PopoverContent id='forma' className='w-full p-2 rounded-xl my-2'>
								<Command id='forma'>
									<CommandInput placeholder='Procurar Forma...' />
									<CommandEmpty>Forma não encontrada</CommandEmpty>
									<CommandGroup>
										{formas?.map((formas: any) => (
											<CommandItem
												key={formas.forma}
												value={formas.forma}
												onSelect={(currentValueF) => {
													setValueF(
														currentValueF === valueF ? "" : currentValueF
													);
													setOpenF(false);
												}}>
												<Check
													className={cn(
														"mr-2 h-4 w-4",
														valueF === formas.forma
															? "opacity-100"
															: "opacity-0"
													)}
												/>
												{formas.etiqueta}
											</CommandItem>
										))}
									</CommandGroup>
								</Command>
							</PopoverContent>
						</Popover>
					</FormItem>
					{/* <label htmlFor='conta' className='text-blue-600 font-semibold'>
						Forma
					</label>
					<input
						type='text'
						id='forma'
						name='forma'
						className='w-full p-2 rounded-xl my-2'
					/> */}
					<label htmlFor='valor' className='text-blue-600 font-semibold'>
						Valor
					</label>
					<Cleave
						className='w-full p-2 rounded-xl my-2'
						placeholder='Valor'
						name='valor'
						options={{ numeral: true, numeralDecimalMark: ",", delimiter: "." }}
					/>

					{/* <label htmlFor='password' className='text-blue-600 font-semibold'>
						Data
					</label>
					<input
						type='text'
						id='data'
						name='data'
						className='w-full p-2 rounded-xl my-2'
					
					/> */}

					{/* <Label htmlFor='date'>Data</Label> */}
					<Calendar
						className='rounded-md border bg-white w-64 '
						mode='single'
						selected={date}
						onSelect={setDate}
						initialFocus
					/>

					<div className='w-full space-x-4 text-center'>
						<button
							type='submit'
							className='rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1'
							value='Cadastrar'>
							{transition.state === "submitting"
								? "Cadastrando..."
								: "Cadastrar"}
						</button>
						<Link to='..' className='rounded-xl mt-2 bg-yellow-500  px-3 py-2 '>
							Cancelar
						</Link>
					</div>
				</Form>
			</div>
		</Modal>
	);
}
