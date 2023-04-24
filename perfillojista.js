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
        { parcelas: 8, taxa: '8,74%' },
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
  
  const perfil = document.getElementById('perfil');
  const btnAtualizar = document.getElementById('btn-atualizar');
  const tabelaTaxas = document.getElementById('tabela-taxas');

  let beneficiosDiv = document.getElementById("beneficios");
  let cashbackP = document.getElementById("cashback");
  let isencaoP = document.getElementById("isencao");

  function exibirTaxas() {
    var perfil = document.getElementById("perfil").value;
    var faturamento = parseFloat(document.getElementById("faturamento").value);
  
    if (isNaN(faturamento)) {
      document.getElementById("resultado").innerHTML = "Faturamento inválido";
      return;
    }
  
    var taxas = obterTaxas(perfil);
    var tabela = document.getElementById("tabela-taxas").getElementsByTagName("tbody")[0];
    tabela.innerHTML = "";
  
    for (var i = 0; i < taxas.length; i++) {
      var row = tabela.insertRow(i);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
  
      cell1.innerHTML = i + 1;
      cell2.innerHTML = formatarTaxa(taxas[i].debito);
      cell3.innerHTML = formatarTaxa(taxas[i].credito);
    }
  
    exibirBeneficios(perfil);
  }

  function exibirTaxas() {
    var perfil = document.getElementById("perfil").value;
    var faturamento = parseFloat(document.getElementById("faturamento").value.replace(",", "."));
  
    if (faturamento > 10000 && perfil == "bronze") {
      alert("O faturamento é acima do perfil selecionado!");
      return;
    } else if (faturamento > 29000 && perfil == "prata") {
      alert("O faturamento é acima do perfil selecionado!");
      return;
    } else if (perfil == "prata" && faturamento < 10000) {
       alert("O valor está abaixo do perfil selecionado!");
       return;
    } else if (perfil == "ouro" && faturamento < 30000) {
      alert("O valor está abaixo do perfil selecionado!");
      return;
    }
  
  }
  
  function atualizarTabela() {
    const perfilSelecionado = perfil.value;
    const corpoTabela = tabelaTaxas.querySelector('tbody');
    const taxasDebito = taxas[perfilSelecionado].debito;
  
    corpoTabela.innerHTML = '';

    taxasDebito.forEach((taxa) => {
        const linha = corpoTabela.insertRow();
        linha.insertCell().innerText = taxa.descricao;
        linha.insertCell().innerText = taxa.taxa;
        linha.insertCell().innerText = '-';
      });
    
    taxas[perfilSelecionado].credito.forEach((taxa) => {
      const linha = corpoTabela.insertRow();
      const { parcelas, taxa: taxaParcela } = taxa;

      linha.insertCell().innerText = parcelas;
      linha.insertCell().innerText = '-';
      linha.insertCell().innerText = taxaParcela;
    });  

  }

  perfil.addEventListener('change', () => {
    atualizarTabela();
  });

  btnAtualizar.addEventListener('click', atualizarTabela);
  