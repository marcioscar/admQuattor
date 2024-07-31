// app/routes/login.tsx

import Cleave from "cleave.js/react";
import type { ActionFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { createConta, createDespesa, getContas } from "~/utils/despesas.server";
import {
	Form,
	Link,
	useLoaderData,
	useNavigate,
	useNavigation,
} from "@remix-run/react";
import Modal from "~/components/Modal";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const contas = await getContas();

	return json({ contas });
};

export const action: ActionFunction = async ({ request }) => {
	const form = await request.formData();
	let values = Object.fromEntries(form);
	// @ts-ignore

	if (values._action === "cadastrar") {
		await createDespesa(values);
		return redirect("/despesas");
	}
	if (values._action === "sairconta") {
		return null;
	}

	if (values._action === "conta") {
		await createConta(values);
		redirect("/despesas/new");
	}
	return null;
};
export default function New() {
	const navigate = useNavigate();
	const transition = useNavigation();
	function closeHandler() {
		navigate("..");
	}
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	const { contas } = useLoaderData<typeof loader>();

	return (
		<Modal onClose={closeHandler}>
			{/* <Navbar /> */}
			<div className='h-full rounded-2xl bg-gray-200 p-6 w-96 justify-center items-center flex flex-col gap-y-4'>
				<h2 className='text-2xl font-extrabold text-slate-700'>
					Cadastro de Despesas
				</h2>
				<div className='flex  justify-center font-bold text-slate-500 text-xl'>
					<Drawer>
						<DrawerTrigger>
							<Button variant='outline'>Nova Conta</Button>
						</DrawerTrigger>
						<DrawerContent className=' h-3/4'>
							<div className='mx-auto w-full max-w-md'>
								<Form method='post'>
									<DrawerHeader className=' mx-auto w-full  place-content-center'>
										<DrawerTitle>Cadastro de Conta de despesa</DrawerTitle>
									</DrawerHeader>
									<div>
										<label
											htmlFor='conta'
											className='text-blue-600 font-semibold'>
											Conta
										</label>
										<input
											id='conta'
											name='conta'
											type='text'
											className='bg-gray-50 border p-2 my-2 border-gray-300 text-gray-900 mb-6  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></input>
									</div>
									<DrawerFooter>
										<DrawerClose className=' flex place-content-center  space-x-6'>
											<Button
												className=' w-1/6'
												type='submit'
												name='_action'
												value='conta'
												variant='default'>
												Salvar
											</Button>
											<Button
												name='_action'
												value='sairconta'
												variant='destructive'>
												Cancelar
											</Button>
										</DrawerClose>
									</DrawerFooter>
								</Form>
							</div>
						</DrawerContent>
					</Drawer>
				</div>

				<Form
					method='post'
					className='rounded-2xl bg-gray-200 pl-6 pr-6 pb-6  w-96'>
					<input
						type='text'
						hidden
						id='conta'
						name='conta'
						value={value}
						readOnly
					/>

					<div className='mb-3 w-full'>
						<Popover open={open} onOpenChange={setOpen}>
							<PopoverTrigger asChild>
								<Button
									variant='outline'
									role='combobox'
									aria-expanded={open}
									className='w-full justify-between'>
									{value
										? contas.find((contas) => contas.conta === value)?.etiqueta
										: "Selecione a Conta..."}
									<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
								</Button>
							</PopoverTrigger>
							<PopoverContent id='conta' className='w-full p-2 rounded-xl my-2'>
								<Command id='conta'>
									<CommandInput placeholder='Procurar conta...' />
									<CommandEmpty>Conta não encontrada</CommandEmpty>
									<CommandGroup>
										{contas.map((contas) => (
											<CommandItem
												key={contas.conta}
												value={contas.conta}
												onSelect={(currentValue) => {
													setValue(currentValue === value ? "" : currentValue);
													setOpen(false);
												}}>
												<Check
													className={cn(
														"mr-2 h-4 w-4",
														value === contas.conta ? "opacity-100" : "opacity-0"
													)}
												/>
												{contas.etiqueta}
											</CommandItem>
										))}
									</CommandGroup>
								</Command>
							</PopoverContent>
						</Popover>
					</div>
					<label htmlFor='descricao' className='text-stone-600 font-semibold'>
						Descrição
					</label>
					<Input
						type='text'
						name='descricao'
						id='descricao'
						className='bg-white'></Input>
					<label htmlFor='valor' className='text-stone-600 font-semibold'>
						Valor
					</label>
					<Cleave
						className='w-full p-2 rounded my-1'
						placeholder='Valor'
						name='valor'
						options={{ numeral: true, numeralDecimalMark: ",", delimiter: "." }}
					/>

					<label htmlFor='password' className='text-stone-600 font-semibold'>
						Data
					</label>
					<Input
						type='date'
						id='data'
						name='data'
						className='w-full bg-white '
						defaultValue={new Date().toISOString().substring(0, 10)}
					/>
					<label htmlFor='tipo' className='text-stone-600 font-semibold'>
						Tipo
					</label>
					<select
						id='tipo'
						name='tipo'
						className='bg-gray-50 border p-2 my-2 border-gray-300 text-gray-900 mb-6  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
						<option value='fixa'>Fixa</option>
						<option value='variavel'>Variável</option>
					</select>

					<div className='w-full text-center space-x-5'>
						<Button
							type='submit'
							name='_action'
							className='rounded-xl mt-2 bg-orange-500 text-white px-3 py-2   '
							value='cadastrar'>
							{transition.state === "submitting"
								? "Cadastrando..."
								: "Cadastrar"}
						</Button>
						<Link to='..' className='rounded-xl mt-2 bg-stone-400   px-3 py-2 '>
							Cancelar
						</Link>
					</div>
				</Form>
			</div>
		</Modal>
	);
}
