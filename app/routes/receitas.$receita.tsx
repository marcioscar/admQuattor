import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
	Link,
	useLoaderData,
	useNavigate,
	Form,
	useNavigation,
	useLocation,
} from "@remix-run/react";
import { cn } from "@/lib/utils";
import {
	getReceita,
	updateReceita,
	deleteReceita,
} from "~/utils/receitas.server";

import Modal from "~/components/Modal";

import { RiCloseCircleFill } from "react-icons/ri";
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
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export const loader: LoaderFunction = async ({ request, params }) => {
	const receita = await getReceita(params.receita as string);

	return json({ receita });
};

export const action: ActionFunction = async ({ request }) => {
	const form = await request.formData();
	let values = Object.fromEntries(form);
	console.log(values);
	const action = form.get("_action");

	if (action === "save") {
		// @ts-ignore
		await updateReceita(values);
	} else {
		// @ts-ignore
		await deleteReceita(values);
	}

	return redirect("/receitas");
};

export default function Receita() {
	const { receita } = useLoaderData<typeof loader>();
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
	const [date, setDate] = useState<Date | undefined>(
		receita?.data ? new Date(receita?.data) : new Date()
	);
	const [open, setOpen] = useState(false);
	const [openL, setOpenL] = useState(false);
	const [openF, setOpenF] = useState(false);
	const [valueL, setValueL] = useState(receita?.lancamento.toLowerCase());
	const [valueF, setValueF] = useState(receita?.forma.toLowerCase());
	const navigate = useNavigate();
	const transition = useNavigation();
	function closeHandler() {
		navigate("..");
	}

	return (
		<Modal onClose={closeHandler}>
			<div className='h-full w-[800px]  bg-opacity-10 justify-center items-center flex flex-col gap-y-4'>
				<div className='flex items-center space-x-4'>
					<h2 className='text-2xl font-extrabold text-slate-700'>
						Alterar de Receita
					</h2>
					<Link to='..' className=''>
						<RiCloseCircleFill className=' text-blue-500  w-8 h-8 ' />
					</Link>
				</div>

				<Form method='post' className='rounded-2xl bg-gray-200 p-6 w-96'>
					<input hidden type='text' name='id' defaultValue={receita?.id} />
					<input
						hidden
						readOnly
						value={valueL}
						name='referencia'
						id='referencia'
					/>
					<input hidden readOnly value={valueF} name='forma' id='forma' />
					<input
						type='text'
						hidden
						readOnly
						value={date}
						name='data'
						id='data'
					/>
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

					<label htmlFor='valor' className='text-blue-600 font-semibold'>
						Valor
					</label>
					<input
						className='w-full p-2 rounded-xl my-2'
						placeholder='Valor'
						name='valor'
						defaultValue={(receita?.valor).toLocaleString()}
					/>
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

					<div className='flex mt-1 place-content-center'>
						<Calendar
							className=' w-full rounded-md border bg-transparent bg-zinc-50  '
							mode='single'
							selected={date}
							onSelect={setDate}
							initialFocus
						/>
					</div>

					<div className='w-full text-center space-x-5'>
						<button
							type='submit'
							className='rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-1'
							name='_action'
							value='save'>
							{transition.state === "submitting"
								? "Cadastrando..."
								: "Cadastrar"}
						</button>
						<Dialog>
							<DialogTrigger asChild>
								<Button className='rounded-xl mt-2 bg-red-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-red-700 hover:-translate-y-1'>
									Apagar
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
												<div>{receita?.centro}</div>
												<Separator orientation='vertical' />
												<div>
													R$
													{receita?.valor.toLocaleString("pt-br", {
														minimumFractionDigits: 2,
														maximumFractionDigits: 2,
													})}
												</div>
											</div>
										</DialogDescription>
									</DialogHeader>
									<input
										hidden
										type='text'
										name='id'
										defaultValue={receita?.id}
									/>
									<DialogFooter>
										<DialogClose asChild>
											<button
												type='submit'
												className='rounded-xl mt-2 bg-red-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-red-700 hover:-translate-y-1'
												name='_action'
												value='delete'>
												{transition.state === "submitting"
													? "Apagando..."
													: "Apagar"}
											</button>
										</DialogClose>
									</DialogFooter>
								</Form>
							</DialogContent>
						</Dialog>
						{/* <button
							type='submit'
							className='rounded-xl mt-2 bg-red-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-red-700 hover:-translate-y-1'
							name='_action'
							value='delete'>
							{transition.state === "submitting" ? "Apagando..." : "Apagar"}
						</button> */}
					</div>
				</Form>
			</div>
		</Modal>
	);
}
