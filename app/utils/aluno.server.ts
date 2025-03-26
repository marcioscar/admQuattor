 import { prisma } from "./prisma.server";
 const EVO_AUTH = process.env.NEXT_PUBLIC_EVO_AUTH;

 export const getSale = async (matricula: string) => {
  if (!matricula) {
    return null;
  }
  try {
    const sale = await fetch(
        // `https://evo-integracao.w12app.com.br/api/v1/receivables?take=50&skip=0&memberId=${matricula}`,
        // `https://evo-integracao.w12app.com.br/api/v1/membership?idMembership=67050&take=25&skip=0`,
        // `https://evo-integracao.w12app.com.br/api/v1/sales/${matricula}`,
    //   `https://evo-integracao.w12app.com.br/api/v1/membermembership/${matricula}`,
    // `https://evo-integracao.w12app.com.br/api/v1/sales?idMember=${matricula}&showReceivables=false&take=25&skip=0&onlyMembership=false&atLeastMonthly=false&showOnlyActiveMemberships=false`,

         `https://evo-integracao.w12app.com.br/api/v1/sales?idMember=${matricula}&showReceivables=false&take=25&skip=0&onlyMembership=false&atLeastMonthly=false&showOnlyActiveMemberships=false`,
    {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa(EVO_AUTH as string),
        },
      }
    );
   

    return sale.json();
  } catch (error) {
    throw error;
  }
};

export const getTurmas = async () => {
  
    return prisma.turmas.findMany();
};

export const getAluno = async (matricula: number) => {
  const aluno = await fetch(
    // `https://evo-integracao.w12app.com.br/api/v1/members/basic?idMember=${matricula}&take=1&skip=0`,
    `https://evo-integracao.w12app.com.br/api/v1/members/basic?idMember=${matricula}&take=50&skip=0`,

    {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(EVO_AUTH as string),
      },
    }
  );

  // return Object.assign({}, aluno.json());

  return aluno.json();
};

export const updateTurma = async (turma: any) => {
  
const venda = await getSale(turma.matricula)
console.log(venda.pop().saleItens[0].description)

//   const newTurma = await prisma.turmas.update({
    
    
    
//     where: {
//       id: turma.id,
//     },
//     data: {
//      forma: receita.forma,
//       centro: receita.centro,
//       data    : new Date(receita.data) ,
//       valor: parseFloat(receita.valor.replace(".", "").replace(",", ".")),
//       status: 'recebido',
//       lancamento: receita.referencia
//     },
//   });
  return null
};