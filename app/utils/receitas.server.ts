import { prisma } from "./prisma.server";
import type { ReceitaForm } from "./types.server";

// export const getReceitas = async (ano:string) => {
//   return prisma.receitas.findMany({
//     where: {
//       data: {
//         contains: ano,
//       },
//     },
//     orderBy: {
//       valor: "asc",
//     },
//     // take: 2,
//   });
// };

export const getReceitas = async () => {
  return prisma.receitas.findMany({
    
    orderBy: {
      data: "desc",
    },
    // take: 2,
  });
};
export const getRecebidos = async () => {
  return prisma.receitas.findMany({
    where: {
      status: "Recebida",
    },
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
    case "jan-2024":
      ref = "01/01/2024";
      break;
    case "fev-2023":
      ref = "01/02/2024";
      break;
    case "mar-2024":
      ref = "01/03/2024";
      break;
    case "abr-2024":
      ref = "01/04/2024";
      break;
    case "mai-2024":
      ref = "01/05/2024";
      break;
    case "jun-2024":
      ref = "01/06/2024";
      break;
    case "jul-2024":
      ref = "01/07/2024";
      break;
    case "ago-2024":
      ref = "01/08/2024";
      break;
    case "set-2024":
      ref = "01/09/2024";
      break;
    case "out-2024":
      ref = "01/10/2024";
      break;
    case "nov-2024":
      ref = "01/11/2024";
      break;
    case "dez-2024":
      ref = "01/12/2024";
      break;
  }
  return prisma.receitas.aggregate({
    _sum: {
      valor: true,
    },
    where: {
      data: {
        gte: new Date(ref)
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
        gte: new Date(ref)
      },
    },
  });
};

export const receitasPorCentroData = async (ref: string) => {
  switch (ref) {
    case "jan-2024":
      ref = "01/2024";
      break;
    case "fev-2023":
      ref = "02/2024";
      break;
    case "mar-2024":
      ref = "03/2024";
      break;
    case "abr-2024":
      ref = "04/2024";
      break;
    case "mai-2024":
      ref = "05/2024";
      break;
    case "jun-2024":
      ref = "06/2024";
      break;
    case "jul-2024":
      ref = "07/2024";
      break;
    case "ago-2024":
      ref = "08/2024";
      break;
    case "set-2024":
      ref = "09/2024";
      break;
    case "out-2024":
      ref = "10/2024";
      break;
    case "nov-2024":
      ref = "11/2024";
      break;
    case "dez-2024":
      ref = "12/2024";
      break;
  }
  return prisma.receitas.groupBy({
    by: ["centro"],

    // where: {
    //   data: {
    //     gte: new Date(ref)
    //   },
    // },

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

    // where: {
    //   data: {
    //     gte: new Date(ref),
    //   },
    // },

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

export const receitasCentro = async () => {
  return prisma.receitas.groupBy({
    by: ["centro", "data"],

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
    by: ["data"],

    // where: {
    //   data: {
    //     contains: "maio",
    //   },
    // },

    _sum: {
      valor: true,
    },
    orderBy: {
      data: "asc",
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
      data    : new Date(receita.data) ,
      valor: parseFloat(receita.valor.replace(".", "").replace(",", ".")),
      status: 'recebido',
      lancamento: receita.referencia
    },
  });
  return { newReceita };
};
// export const createReceita = async (receita: ReceitaForm) => {
    
//   const newReceita = await prisma.receitas.create({
//     data: {
//       forma: receita.forma,
//       centro: receita.centro,
//       data: receita.data,
//       valor: parseFloat(receita.valor.replace(".", "").replace(",", ".")),
//       status: 'recebido'
//     },
//   });
//   return { newReceita };
// };
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
     forma: receita.forma,
      centro: receita.centro,
      data    : new Date(receita.data) ,
      valor: parseFloat(receita.valor.replace(".", "").replace(",", ".")),
      status: 'recebido',
      lancamento: receita.referencia
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
