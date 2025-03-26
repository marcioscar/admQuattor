import { prisma } from "./prisma.server";
import type { DespesaForm } from "./types.server";
import { format } from "date-fns";
import { pt } from "date-fns/locale";

export const getDespesas = async (ano:string) => {
  return prisma.despesas.findMany({
    where: {
      referencia: {
        contains: ano,
      },
    },
    orderBy: {
      data: "desc",
    },
  });
};

export const getDespesasNova = async () => {
  return prisma.despesas.findMany({
   
    
    orderBy: {
      data: "asc",
    },
  });
};
export const getContas = async () => {
  return prisma.contas.findMany({
    orderBy: {
      conta: "asc",
    },
  });
};
export const despesasPorData = async () => {
  return prisma.despesas.groupBy({
    by: ["data"],
    _sum: {
      valor: true,
    },
    orderBy: {
      data: "desc",
    },
  });
};

export const getDespesa = async (despesaId: string) => {
  return prisma.despesas.findUnique({
    where: {
      id: despesaId,
    },
  });
};

export const totDespesas = async (ref: string) => {
  return prisma.despesas.aggregate({
    _sum: {
      valor: true,
    },
    where: {
      referencia: {
        equals: ref,
      },
    },
  });
};
export const DespesasMes = async (ref: string) => {
  return prisma.despesas.findMany({
    where: {
      referencia: {
        equals: ref,
      },
    },
    orderBy: {
      valor: "desc",
    },
  });
};
export const DespesasFixas = async (ref: string) => {
  return prisma.despesas.findMany({
    where: {
      referencia: {
        equals: ref,
      },
      tipo: {
        equals: "fixa",
      },
    },
    orderBy: {
      valor: "desc",
    },
  });
};

export const totTipoDespesas = async (ref: string) => {
  const despesasTipo = await prisma.despesas.groupBy({
    by: ["conta"],
    _sum: {
      valor: true,
    },
    orderBy: {
      _sum: {
        valor: "desc",
      },
    },
    where: {
      referencia: {
        equals: ref,
      },
    },
  });
  return despesasTipo;
};
export const totTipoDespesasFixa = async (ref: string) => {
  const despesasTipo = await prisma.despesas.groupBy({
    by: ["conta"],
    _sum: {
      valor: true,
    },
    orderBy: {
      _sum: {
        valor: "desc",
      },
    },
    where: {
      AND: [
        {
          referencia: {
            equals: ref,
          },
        },
        {
          tipo: {
            equals: "fixa",
          },
        },
      ],
    },
  });
  return despesasTipo;
};

export const createConta = async (conta:any)=>{
const contal = conta.conta.toLowerCase()

const newConta = await prisma.contas.create({
    data:{
        conta: contal,
        etiqueta: contal.charAt(0).toUpperCase() + contal.slice(1)
    }
})
return newConta
}

export const createDespesa = async (despesa: any) => {
  const dt = new Date(despesa.data);
  const dataAtual = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
  const referencia = format(dataAtual, "MMM-yyyy", { locale: pt });
  const newDespesa = await prisma.despesas.create({
    data: {
      conta: despesa.conta.charAt(0).toUpperCase() + despesa.conta.slice(1),
      descricao: despesa.descricao,
      data: dataAtual,
      referencia: referencia,
      tipo: despesa.tipo,
      valor: parseFloat(despesa.valor.replace(".", "").replace(",", ".")),
      pago: false
    },
  });
  return { newDespesa };
};
export const updateDespesa = async (despesa: DespesaForm) => {
  const dt = new Date(despesa.data);
  const dataAtual = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
  const referencia = format(dataAtual, "MMM-yyyy", { locale: pt });
  const newDespesa = await prisma.despesas.update({
    where: {
      id: despesa.id,
    },
    data: {
      conta: despesa.conta.charAt(0).toUpperCase() + despesa.conta.slice(1),
      data: dataAtual,
      descricao: despesa.descricao,
      referencia: referencia,
      tipo: despesa.tipo,
      valor: parseFloat(despesa.valor.replace(".", "").replace(",", ".")),
      pago: false
    },
  });
  return { newDespesa };
};

export const deleteDespesa = async (despesa: DespesaForm) => {
  await prisma.despesas.delete({
    where: {
      id: despesa.id,
    },
  });
};
