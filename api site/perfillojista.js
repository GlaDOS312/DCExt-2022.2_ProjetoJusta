
const taxas = {
  bronze: {
    debito: [{ descricao: 'Débito', taxa: '1,50%' }],
    credito: [
      { parcelas: 1, taxa: '3,10%' },
      { parcelas: 2, taxa: '4,30%' },
      { parcelas: 3, taxa: '5,99%' },
      { parcelas: 4, taxa: '7,10%' },
      { parcelas: 5, taxa: '9,80%' },
      { parcelas: 6, taxa: '11,33%' },
      { parcelas: 7, taxa: '13,99%' },
      { parcelas: 8, taxa: '15,20%' },
      { parcelas: 9, taxa: '17,40%' },
      { parcelas: 10, taxa: '19,99%' },
      { parcelas: 11, taxa: '20,99%' },
      { parcelas: 12, taxa: '21,99%' }
    ]
  },
  prata: {
    debito: [{ descricao: 'Débito', taxa: '1,19%' }],
    credito: [
      { parcelas: 1, taxa: '2,85%' },
      { parcelas: 2, taxa: '5,55%' },
      { parcelas: 3, taxa: '6,56%' },
      { parcelas: 4, taxa: '7,54%' },
      { parcelas: 5, taxa: '8,53%' },
      { parcelas: 6, taxa: '9,52%' },
      { parcelas: 7, taxa: '10,51%' },
      { parcelas: 8, taxa: '11,5%' },
      { parcelas: 9, taxa: '12,49%' },
      { parcelas: 10, taxa: '13,48%' },
      { parcelas: 11, taxa: '14,47%' },
      { parcelas: 12, taxa: '15,46%' }
    ],
    isencaoMaquina: true,
    cashback: [
      { valor: 50000, percentual: 0.1 },
      { valor: 10000, percentual: 0.2 },
      { valor: 180000, percentual: 0.25 }
    ],
    limiteCashback: 250
  },
  ouro: {
    debito: [{ descricao: 'Débito', taxa: '0,99%' }],
    credito: [
      { parcelas: 1, taxa: '2,25%' },
      { parcelas: 2, taxa: '4,33%' },
      { parcelas: 3, taxa: '5,03%' },
      { parcelas: 4, taxa: '5,72%' },
      { parcelas: 5, taxa: '6,42%' },
      { parcelas: 6, taxa: '7,11%' },
      { parcelas: 7, taxa: '8,05%' },
      { parcelas: 8, taxa: '8,74'  },
      { parcelas: 9, taxa: '9,44%' },
      { parcelas: 10, taxa: '10,13%' },
      { parcelas: 11, taxa: '10,83%' },
      { parcelas: 12, taxa: '11,52%' }
    ],
    isencaoMaquina: true,
    cashback: [
      { valor: 30000, percentual: 0.1 },
      { valor: 75000, percentual: 0.2 },
      { valor: 150000, percentual: 0.25 }
    ],
    limiteCashback: 500
  }
};
function formatarTaxa(taxa) {
  return (taxa * 100).toFixed(2) + "%";
}

function obterTaxas(perfil) {
  return taxas[perfil];
}

function exibirBeneficios(perfil, faturamento) {
  const beneficios = taxas[perfil];
  const isencao = beneficios.isencaoMaquina ? "Sim" : "Não";
  const cashback = beneficios.cashback.map(({ valor, percentual }) => `R$${valor.toFixed(2)}: ${percentual * 100}%`).join("<br>");
  
  console.log(`Benefícios para o perfil ${perfil} e faturamento de R$${faturamento.toFixed(2)}:`);
  console.log(`Isenção de máquina: ${isencao}`);
  console.log(`Cashback: ${cashback}`);
}

function exibirTaxas(perfil, faturamento) {
  if (isNaN(faturamento)) {
    console.log("Faturamento inválido");
    return;
  } else if (faturamento > 10000 && perfil == "bronze") {
    console.log("O faturamento é acima do perfil selecionado!");
    return;
  } else if (faturamento > 29000 && perfil == "prata") {
    console.log("O faturamento é acima do perfil selecionado!");
    return;
  } else if (perfil == "prata" && faturamento < 10000) {
    console.log("O valor está abaixo do perfil selecionado!");
     return;
  } else if (perfil == "ouro" && faturamento < 30000) {
    console.log("O valor está abaixo do perfil selecionado!");
    return;
  }
  const taxas = obterTaxas(perfil);

  console.log(`Taxas do perfil ${perfil}:`);
  for (let i = 0; i < taxas.length; i++) {
    const descricao = taxas[i].descricao;
    const taxaDebito = taxas[i].debito ? formatarTaxa(taxas[i].debito) : "-";
    const taxaCredito = taxas[i].credito ? formatarTaxa(taxa[i].credito): "-";
    console.log(`${i + 1}. ${descricao}: Débito ${taxaDebito} | Crédito ${taxaCredito}`);
  }
  function exibirBeneficios(perfil, faturamento) {
    const beneficios = taxas[perfil];
    const isencao = beneficios.isencaoMaquina ? "Sim" : "Não";
    const cashback = beneficios.cashback.map(({ valor, percentual }) => `R$${valor.toFixed(2)}: ${percentual * 100}%`).join("<br>");
    
    console.log(`Benefícios para o perfil ${perfil} e faturamento de R$${faturamento.toFixed(2)}:`);
    console.log(`Isenção de máquina: ${isencao}`);
    console.log(`Cashback: ${cashback}`);
  }
  exibirBeneficios(perfil, faturamento);
}
function atualizarTabela(perfilSelecionado) {
  const taxasDebito = taxas[perfilSelecionado].debito;
  const taxasCredito = taxas[perfilSelecionado].credito;

  const tabela = {
    debito: [],
    credito: []
  };

  taxasDebito.forEach((taxa) => {
    tabela.debito.push({
      descricao: taxa.descricao,
      taxa: taxa.taxa,
      parcelas: '-'
    });
  });

  taxasCredito.forEach((taxa) => {
    tabela.credito.push({
      descricao: taxa.descricao,
      taxa: '-',
      parcelas: taxa.parcelas,
      taxaParcela: taxa.taxa
    });
  });

  return tabela;
}