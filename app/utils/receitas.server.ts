import { prisma } from "./prisma.server";
import type { ReceitaForm } from "./types.server";
import { format } from "date-fns";
import { pt } from "date-fns/locale";

export const getReceitas = async () => {
  return prisma.receitas.findMany({
    orderBy: {
      valor: "asc",
    },
    // take: 2,
  });
};

// export const getReceitas = async () => {
//   return prisma.receitas.findMany({
//     orderBy: {
//       data: "desc",
//     },
//   });
// };

export const groupReceitasAgrupadas = async (ref: string) => {
  switch (ref) {
    case "abr-2023":
      ref = "04/2023";
      break;
    case "mai-2023":
      ref = "05/2023";
      break;
    case "jun-2023":
      ref = "06/2023";
      break;
    case "jul-2023":
      ref = "07/2023";
      break;
    case "ago-2023":
      ref = "08/2023";
      break;
    case "set-2023":
      ref = "09/2023";
      break;
    case "out-2023":
      ref = "10/2023";
      break;
    case "nov-2023":
      ref = "11/2023";
      break;
    case "dez-2023":
      ref = "12/2023";
      break;
  }
  return prisma.receitas.aggregate({
    _sum: {
      valor: true,
    },
    where: {
      data: {
        contains: ref,
      },
    },
  });
};
export const groupReceitasMes = async (ref: string) => {
  return prisma.receitas.aggregate({
    _sum: {
      valor: true,
    },
    where: {
      data: {
        contains: ref,
      },
    },
  });
};

export const receitasPorCentroData = async (ref: string) => {
  switch (ref) {
    case "abr-2023":
      ref = "04/2023";
      break;
    case "mai-2023":
      ref = "05/2023";
      break;
    case "jun-2023":
      ref = "06/2023";
      break;
    case "jul-2023":
      ref = "07/2023";
      break;
    case "ago-2023":
      ref = "08/2023";
      break;
    case "set-2023":
      ref = "09/2023";
      break;
    case "out-2023":
      ref = "10/2023";
      break;
    case "nov-2023":
      ref = "11/2023";
      break;
    case "dez-2023":
      ref = "12/2023";
      break;
  }
  return prisma.receitas.groupBy({
    by: ["centro"],

    where: {
      data: {
        contains: ref,
      },
    },

    _sum: {
      valor: true,
    },
    orderBy: {
      _sum: {
        valor: "desc",
      },
    },
  });
};
export const receitasPorCentroMes = async (ref: string) => {
  return prisma.receitas.groupBy({
    by: ["centro"],

    where: {
      data: {
        contains: ref,
      },
    },

    _sum: {
      valor: true,
    },
    orderBy: {
      _sum: {
        valor: "desc",
      },
    },
  });
};

export const receitasPorData = async () => {
  return prisma.receitas.groupBy({
    by: ["data"],
    _sum: {
      valor: true,
    },
  });
};
export const receitasPorCentro = async () => {
  return prisma.receitas.groupBy({
    by: ["centro", "data"],

    // where: {
    //   data: {
    //     contains: "maio",
    //   },
    // },

    _sum: {
      valor: true,
    },
    orderBy: {
      centro: "asc",
    },
  });
};

// export const groupReceitasAgrupadas = async (ref: string) => {
//   return prisma.receitas.aggregate({
//     _sum: {
//       valor: true,
//     },
//     where: {
//       referencia: {
//         contains: ref,
//       },
//     },
//   });
// };
export const ReceitasMes = async (ref: string) => {
  return prisma.receitas.findMany({
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

export const getReceita = async (receitaId: string) => {
  return prisma.receitas.findUnique({
    where: {
      id: receitaId,
    },
  });
};

export const createReceita = async (receita: ReceitaForm) => {
  const newReceita = await prisma.receitas.create({
    data: {
      forma: receita.forma,
      centro: receita.centro,
      data: receita.data,
      valor: parseFloat(receita.valor.replace(".", "").replace(",", ".")),
    },
  });
  return { newReceita };
};
// export const createReceita = async (receita: ReceitaForm) => {
//   const dt = new Date(receita.data);
//   const dataAtual = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
//   const referencia = format(dataAtual, "MMM-yyyy", { locale: pt });
//   const newReceita = await prisma.receitas.create({
//     data: {
//       referencia: referencia,
//       centro: receita.centro,
//       data: dataAtual,
//       valor: parseFloat(receita.valor.replace(".", "").replace(",", ".")),
//     },
//   });
//   return { newReceita };
// };
export const updateReceita = async (receita: ReceitaForm) => {
  // const dt = new Date(receita.data);
  // const dataAtual = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
  // const referencia = format(dataAtual, "MMM-yyyy", { locale: pt });

  const newReceita = await prisma.receitas.update({
    where: {
      id: receita.id,
    },
    data: {
      centro: receita.centro,
      data: receita.data,
      // referencia: referencia,
      valor: parseFloat(receita.valor.replace(".", "").replace(",", ".")),
      status: receita.status,
    },
  });
  return { newReceita };
};

export const deleteReceita = async (receita: ReceitaForm) => {
  await prisma.receitas.delete({
    where: {
      id: receita.id,
    },
  });
};

export const baixarReceita = async (id: any) => {
  console.log(id);
  return prisma.receitas.update({
    where: {
      id: id,
    },
    data: {
      status: "Recebida",
    },
  });
};
