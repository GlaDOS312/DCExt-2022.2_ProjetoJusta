const data = require("date-fns");

async function main() {
    let vendas = [
        { data: "20-04-2023", metodoPagamento: "credit", quantia: 500.0, marca: "Visa" },
        { data: "20-04-2023", metodoPagamento: "credit", quantia: 1000.0, marca: "Mastercard" },
        { data: "19-04-2023", metodoPagamento: "debit", quantia: 300.0, marca: "Visa" },
        { data: "19-04-2023", metodoPagamento: "credit", quantia: 800.0, marca: "American Express" },
        { data: "18-04-2023", metodoPagamento: "debit", quantia: 250.0, marca: "Mastercard" },
        { data: "17-04-2023", metodoPagamento: "credit", quantia: 600.0, marca: "Visa" },
        { data: "16-04-2023", metodoPagamento: "debit", quantia: 700.0, marca: "Mastercard" },
        { data: "15-04-2023", metodoPagamento: "credit", quantia: 900.0, marca: "American Express" },
        { data: "14-04-2023", metodoPagamento: "debit", quantia: 1500.0, marca: "Visa" },
        { data: "13-04-2023", metodoPagamento: "credit", quantia: 200.0, marca: "Mastercard" },
        { data: "12-04-2023", metodoPagamento: "debit", quantia: 1000.0, marca: "Visa" },
        { data: "11-04-2023", metodoPagamento: "credit", quantia: 750.0, marca: "American Express" },
        { data: "10-04-2023", metodoPagamento: "debit", quantia: 350.0, marca: "Mastercard" },
        { data: "09-04-2023", metodoPagamento: "credit", quantia: 1200.0, marca: "Visa" },
        { data: "08-04-2023", metodoPagamento: "debit", quantia: 900.0, marca: "Mastercard" },
        { data: "07-04-2023", metodoPagamento: "credit", quantia: 100.0, marca: "American Express" },
        { data: "06-04-2023", metodoPagamento: "debit", quantia: 2000.0, marca: "Visa" },
        { data: "05-04-2023", metodoPagamento: "credit", quantia: 300.0, marca: "Mastercard" },
        { data: "04-04-2023", metodoPagamento: "debit", quantia: 150.0, marca: "Visa" },
        { data: "03-04-2023", metodoPagamento: "credit", quantia: 1800.0, marca: "American Express" },
        { data: "02-04-2023", metodoPagamento: "debit", quantia: 250.0, marca: "Mastercard" },
        { data: "01-04-2023", metodoPagamento: "credit", quantia: 700.0, marca: "Visa" },
        { data: "31-03-2023", metodoPagamento: "debit", quantia: 950.0, marca: "Mastercard" },
    ];

  const filtroDataInicial = "2022-01-02";
  const filtroDataFinal = "2022-01-05";

  let vendasFiltradas = vendas;
  if (filtroDataInicial !== "" && filtroDataFinal !== "") {
    vendasFiltradas = await filtrarVendas(vendas, filtroDataInicial, filtroDataFinal);
  }
  if (vendasFiltradas.length === 0) {
    console.log("Não foram encontradas vendas para o período selecionado.");
  } else {
    exibirVendas(vendasFiltradas);
    gerarRelatorio(vendasFiltradas);
  }
}

async function filtrarVendas(vendas, filtroDataInicial, filtroDataFinal) {
  const comecodata = new Date(filtroDataInicial).getTime();
  const fimdata = new Date(filtroDataFinal).getTime();

  const faturadasVendas = [...vendas];
  const filtradoPordata = faturadasVendas.filter((venda) => {
    const datavendas = new Date(venda.data).getTime();
    return datavendas >= comecodata && datavendas <= fimdata;
  });

  exibirVendas(filtradoPordata);
  return filtradoPordata;
}

function gerarRelatorio(vendas) {
    const creditCardFlag = "Visa";
    const debitCardFlag = "Mastercard";
    const periodo = "7";
  
    let faturadasVendas = vendas;
    if (periodo !== "customizado") {
      const periodInMilliseconds = parseInt(periodo) * 24 * 60 * 60 * 1000;
      const today = new Date().getTime();
      const periodStartdata = today - periodInMilliseconds;
      const startDate = new Date(periodStartdata);
      const endDate = new Date();
      faturadasVendas = vendas.filter((venda) => {
        const datavendas = new Date(venda.data).getTime();
        return datavendas >= startDate && datavendas <= endDate;
      });
    }
  
    faturadasVendas.forEach((venda) => {
      const diasRestantes = calculaDiasRestantes(new Date(), new Date(venda.data));
      const status = diasRestantes >= 0 ? "Pendente" : "Atrasada";
      console.log(`${venda.quantia} ${venda.marca} ${status}`);
    });
  }
  
  function calculaDiasRestantes(startdate, endDate) {
    const inicioData = startdate.getTime();
    const fimdata = endDate;
  
    const diferencaTempo = Math.abs(fimdata - inicioData);
    const diasRestantes = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));
  
    return diasRestantes;
  }
  main();
  module.exports = gerarRelatorio;
  