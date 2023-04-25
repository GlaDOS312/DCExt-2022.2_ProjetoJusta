function pagarBoleto(numeroBoleto, valorBoleto, numeroCartao, validadeCartao, codigoSeguranca) {
    if (numeroBoleto.value && valorBoleto.value && numeroCartao && validadeCartao.value && codigoSeguranca.value){
      console.log("Transação Aprovada");
      return true;  
    } else{
      console.log("Não foi possível realizar a transação!")
      return false;
    }
}
module.exports = {pagarBoleto};