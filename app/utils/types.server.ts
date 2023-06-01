export type DespesaForm = {
  conta: string;
  data: Date;
  tipo: string;
  valor: string;
  id?: string;
};

export type tipoDesp = {
  _sum: any;
  id: string;
  conta: string;
  data: Date;
  tipo: string;
  valor: number;
  referencia: string;
};

export type ReceitaForm = {
  centro: string;
  forma: string;
  data: string;
  valor: string;
  id?: string;
  referencia: string;
};

export type tipoRec = {
  _sum: any;
  id: string;
  centro: string;
  data: string;
  valor: number;
  referencia: string;
  forma: string;
  status: string;
};

export type tipoFunc = {
  id: string;
  conta: string;
  funcao: string;
  modalidade: string;
  nome: string;
  salarios: FolhaSalarios[];
};
export type FolhaSalarios = {
  data: Date;
  decimo: number;
  ferias: number;
  fgts: number;
  pago: Boolean;
  sal_id: string;
  valor: number;
  referencia: string;
};
export type funcForm = {
  id: string;
  conta: string;
  funcao: string;
  modalidade: string;
  nome: string;
};

export type salFrom = {
  data: Date;
  decimo: number;
  ferias: number;
  fgts: number;
  pago: Boolean;
  sal_id: string;
  valor: number;
  referencia?: string;
  id: string;
};
