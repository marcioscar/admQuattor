import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
	Link,
	useLoaderData,
	useNavigate,
	Form,
	useNavigation,
} from "@remix-run/react";

import {
	getDespesa,
	updateDespesa,
	deleteDespesa,
	getContas,
} from "~/utils/despesas.server";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
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

// import { deleteDespesa } from "../../utils/despesas.server";
import Modal from "~/components/Modal";
import { RiCloseCircleFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const loader: LoaderFunction = async ({ request, params }) => {
	const despesa = await getDespesa(params.despesa as string);
	const contas = await getContas();
	return json({ despesa, contas });
};

export const action: ActionFunction = async ({ request }) => {
	const form = await request.formData();
	let values = Object.fromEntries(form);
	const action = form.get("_action");

	if (action === "save") {
		// @ts-ignore
		await updateDespesa(values);
	} else {
		// @ts-ignore

		await deleteDespesa(values);
	}

	return redirect("/despesas");
};

export default function Despesa() {
	const navigate = useNavigate();
	const transition = useNavigation();
	function closeHandler() {
		navigate("..");
	}
	const { despesa, contas } = useLoaderData<typeof loader>();
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(despesa?.conta.toLowerCase());

	return (
		<Modal onClose={closeHandler}>
			<div className='h-full justify-center items-center flex flex-col gap-y-4'>
				<div className='flex items-center space-x-4'>
					<h2 className='text-2xl font-extrabold text-slate-700'>
						Alterar de Despesas
					</h2>
					<Link to='..' className=''>
						<RiCloseCircleFill className=' text-red-500  w-8 h-8 ' />
					</Link>
				</div>

				<Form
					reloadDocument
					method='post'
					className='rounded-2xl bg-gray-200 p-6 w-96'>
					<input hidden type='text' name='id' defaultValue={despesa?.id} />
					<input
						type='text'
						hidden
						id='conta'
						name='conta'
						value={value}
						readOnly
					/>
					<label htmlFor='conta' className='text-stone-600 font-semibold'>
						Conta
					</label>
					<div className='mb-3 w-full'>
						<Popover open={open} onOpenChange={setOpen}>
							<PopoverTrigger asChild>
								<Button
									variant='outline'
									role='combobox'
									aria-expanded={open}
									className='w-full justify-between'>
									{value
										? contas.find((contas: any) => contas.conta === value)
												?.etiqueta
										: "Selecione a Conta..."}
									<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
								</Button>
							</PopoverTrigger>
							<PopoverContent id='conta' className='w-full p-2 rounded-xl my-2'>
								<Command id='conta'>
									<CommandInput placeholder='Procurar conta...' />
									<CommandEmpty>Conta não encontrada</CommandEmpty>
									<CommandGroup>
										{contas.map((contas: any) => (
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
						className='bg-white mb-2'
						defaultValue={despesa?.descricao}></Input>

					<label htmlFor='valor' className='text-stone-600 font-semibold'>
						Valor
					</label>
					<Input
						className='w-full bg-white mb-2'
						placeholder='Valor'
						name='valor'
						defaultValue={(despesa?.valor).toLocaleString()}
					/>

					<label htmlFor='password' className='text-stone-600 font-semibold'>
						Data
					</label>
					<input
						type='date'
						id='data'
						name='data'
						className='w-full p-2 rounded-xl my-2'
						defaultValue={new Date(despesa?.data)
							.toISOString()
							.substring(0, 10)}
					/>
					<label htmlFor='tipo' className='text-stone-600 font-semibold'>
						Tipo
					</label>
					<select
						id='tipo'
						name='tipo'
						defaultValue={despesa?.tipo}
						className='bg-gray-50 border p-2 my-2 border-gray-300 text-gray-900 mb-6  rounded-lg focus:ring-stone-500 focus:border-stone-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-500 dark:focus:border-stone-500'>
						<option value='fixa'>Fixa</option>
						<option value='variavel'>Variável</option>
					</select>

					<div className='w-full text-center space-x-5'>
						<button
							type='submit'
							className='rounded-xl mt-2 bg-stone-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-stone-700 hover:-translate-y-1'
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
												<div>{despesa?.conta}</div>
												<Separator orientation='vertical' />
												<div>{despesa?.descricao}</div>
											</div>
										</DialogDescription>
									</DialogHeader>
									<input
										hidden
										type='text'
										name='id'
										defaultValue={despesa?.id}
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
