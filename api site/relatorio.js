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
        const filtroDataInicial = document.getElementById('startdata').value;
        const filtroDataFinal = document.getElementById('enddata').value;
  
        let vendasFiltered = vendas;
        if (filtroDataInicial !== "" && filtroDataFinal !== "") {
            vendasFiltered = await filtrarVendas(vendas, filtroDataInicial, filtroDataFinal);
        }
        if (vendasFiltered.length === 0) {
          const relatorioElement = document.getElementById("relatorio");
          const relatorio = document.createElement("p");
          relatorio.textContent = "Não foram encontradas vendas para o período selecionado.";
          relatorioElement.innerHTML = "";
          relatorioElement.appendChild(relatorio);
  
      } else {
          exibirVendas(vendasFiltered);
          gerarRelatorio(vendasFiltered);
      }
  });
    
    async function filtrarVendas(vendas, filtroDataInicial, filtroDataFinal) {
      const startdata = new data(filtroDataInicial).getTime();
      const enddata = new data(filtroDataFinal).getTime();
  
      const filteredvendas = [...vendas];
      const filteredBydata = filteredvendas.filter(sale => {
        const saledata = new data(sale.data).getTime();
        return saledata >= startdata && saledata <= enddata;
    });
  
    exibirVendas(filteredBydata);
    return filteredBydata;
  }
  
    function gerarRelatorio(vendas) {
        const relatorioElement = document.getElementById("relatorio");
        const relatorio = document.createElement("p");
    
        const creditCardFlag = document.getElementById("creditCardFlag").value;
        const debitCardFlag = document.getElementById("debitCardFlag").value;
        const period = document.getElementById("period").value;
    
        let filteredvendas = vendas;
        if (period !== "custom") {
            const periodInMilliseconds = parseInt(period) * 24 * 60 * 60 * 1000;
            const today = new data().getTime();
            const periodStartdata = today - periodInMilliseconds;
            filteredvendas = filteredvendas.filter(sale => {
                const saledata = new data(sale.data).getTime();
                return saledata >= periodStartdata && saledata <= today;
            });
        }
    
        let creditCardvendas = filteredvendas.filter(sale => {
            return sale.metodoPagamento === "credit" && sale.marca === creditCardFlag;
        });
    
        let debitCardvendas = filteredvendas.filter(sale => {
            return sale.metodoPagamento === "debit" && sale.marca === debitCardFlag;
        });
    
        let creditCardTotal = 0;
        let debitCardTotal = 0;
        let creditCardTransactions = creditCardvendas.length;
        let debitCardTransactions = debitCardvendas.length;
    
        creditCardvendas.forEach(sale => {
            creditCardTotal += sale.quantia;
        });
    
        debitCardvendas.forEach(sale => {
            debitCardTotal += sale.quantia;
        });
    
        relatorio.textContent = `Relatório de vendas:
        Vendas no crédito (bandeira ${creditCardFlag}): ${creditCardTransactions} transações, totalizando R$ ${creditCardTotal.toFixed(2)}
        Vendas no débito (bandeira ${debitCardFlag}): ${debitCardTransactions} transações, totalizando R$ ${debitCardTotal.toFixed(2)}
        `;
        
        relatorioElement.innerHTML = "";
        relatorioElement.appendChild(relatorio);
    }
  
    function exibirVendas(vendas) {
      const vendasTableBody = document.getElementById("vendasTableBody");
      vendasTableBody.innerHTML = "";
    
      vendas.forEach(sale => {
        const row = document.createElement("tr");
    
        const dataCell = document.createElement("td");
        dataCell.textContent = sale.data;
        row.appendChild(dataCell);
    
        const paymentMethodCell = document.createElement("td");
        paymentMethodCell.textContent = sale.metodoPagamento;
        row.appendChild(paymentMethodCell);
    
        const amountCell = document.createElement("td");
        amountCell.textContent = sale.quantia.toFixed(2);
        row.appendChild(amountCell);
    
        const brandCell = document.createElement("td");
        brandCell.textContent = sale.marca;
        row.appendChild(brandCell);
    
        vendasTableBody.appendChild(row);
      });
    }
    
  });