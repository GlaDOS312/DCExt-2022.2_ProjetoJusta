document.addEventListener("DOMContentLoaded", function(event) {
    // Seu código JavaScript aqui
  
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
  
    const btnRelatorio = document.getElementById("btnRelatorio");
    btnRelatorio.addEventListener('click', async function() {
        const filtroDataInicial = document.getElementById('comecodata').value;
        const filtroDataFinal = document.getElementById('fimdata').value;
  
        let vendasFiltradas = vendas;
        if (filtroDataInicial !== "" && filtroDataFinal !== "") {
            vendasFiltradas = await filtrarVendas(vendas, filtroDataInicial, filtroDataFinal);
        }
        if (vendasFiltradas.length === 0) {
          const relatorioElement = document.getElementById("relatorio");
          const relatorio = document.createElement("p");
          relatorio.textContent = "Não foram encontradas vendas para o período selecionado.";
          relatorioElement.innerHTML = "";
          relatorioElement.appendChild(relatorio);
  
      } else {
          exibirVendas(vendasFiltradas);
          gerarRelatorio(vendasFiltradas);
      }
  });
    
    async function filtrarVendas(vendas, filtroDataInicial, filtroDataFinal) {
      const comecodata = new data(filtroDataInicial).getTime();
      const fimdata = new data(filtroDataFinal).getTime();
  
      const faturadasVendas = [...vendas];
      const filtradoPordata = faturadasVendas.filter(venda => {
        const datavendas = new data(venda.data).getTime();
        return datavendas >= comecodata && datavendas <= fimdata;
    });
  
    exibirVendas(filtradoPordata);
    return filtradoPordata;
  }
  
    function gerarRelatorio(vendas) {
        const relatorioElement = document.getElementById("relatorio");
        const relatorio = document.createElement("p");
    
        const creditCardFlag = document.getElementById("creditCardFlag").value;
        const debitCardFlag = document.getElementById("debitCardFlag").value;
        const periodo = document.getElementById("periodo").value;
    
        let faturadasVendas = vendas;
        if (periodo !== "customizado") {
            const periodInMilliseconds = parseInt(periodo) * 24 * 60 * 60 * 1000;
            const today = new data().getTime();
            const periodStartdata = today - periodInMilliseconds;
            faturadasVendas = faturadasVendas.filter(venda => {
                const datavendas = new data(venda.data).getTime();
                return datavendas >= periodStartdata && datavendas <= today;
            });
        }
    
        let creditCardvendas = faturadasVendas.filter(venda => {
            return venda.metodoPagamento === "credit" && venda.marca === creditCardFlag;
        });
    
        let debitCardvendas = faturadasVendas.filter(venda => {
            return venda.metodoPagamento === "debit" && venda.marca === debitCardFlag;
        });
    
        let creditCardTotal = 0;
        let debitCardTotal = 0;
        let transacaoCartaoCredito = creditCardvendas.length;
        let transacaoCartaoDebito = debitCardvendas.length;
    
        creditCardvendas.forEach(venda => {
            creditCardTotal += venda.quantia;
        });
    
        debitCardvendas.forEach(venda => {
            debitCardTotal += venda.quantia;
        });
    
        relatorio.textContent = `Relatório de vendas:
        Vendas no crédito (bandeira ${creditCardFlag}): ${transacaoCartaoCredito} transações, totalizando R$ ${creditCardTotal.toFixed(2)}
        Vendas no débito (bandeira ${debitCardFlag}): ${transacaoCartaoDebito} transações, totalizando R$ ${debitCardTotal.toFixed(2)}
        `;
        
        relatorioElement.innerHTML = "";
        relatorioElement.appendChild(relatorio);
    }
  
    function exibirVendas(vendas) {
      const vendasTableBody = document.getElementById("vendasTableBody");
      vendasTableBody.innerHTML = "";
    
      vendas.forEach(venda => {
        const row = document.createElement("tr");
    
        const dataCell = document.createElement("td");
        dataCell.textContent = venda.data;
        row.appendChild(dataCell);
    
        const paymentMethodCell = document.createElement("td");
        paymentMethodCell.textContent = venda.metodoPagamento;
        row.appendChild(paymentMethodCell);
    
        const amountCell = document.createElement("td");
        amountCell.textContent = venda.quantia.toFixed(2);
        row.appendChild(amountCell);
    
        const brandCell = document.createElement("td");
        brandCell.textContent = venda.marca;
        row.appendChild(brandCell);
    
        vendasTableBody.appendChild(row);
      });
    }
    
  });