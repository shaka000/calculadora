function mostrarNaTela(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num

    if(num === '÷' || num === '×' || num === 'R' || num === '-' || num === '+' || num === ',') {
        document.getElementById('dividir').setAttribute('disabled', true)
        document.getElementById('multiplicar').setAttribute('disabled', true)
        document.getElementById('RestanteDivisao').setAttribute('disabled', true)
        document.getElementById('subtrair').setAttribute('disabled', true)
        document.getElementById('virgula').setAttribute('disabled', true)
        document.getElementById('soma').setAttribute('disabled', true)
    } else {
        document.getElementById('dividir').removeAttribute('disabled')
        document.getElementById('multiplicar').removeAttribute('disabled')
        document.getElementById('RestanteDivisao').removeAttribute('disabled')
        document.getElementById('subtrair').removeAttribute('disabled')
        document.getElementById('virgula').removeAttribute('disabled')
        document.getElementById('soma').removeAttribute('disabled')
    }
}

function limparResultado(){
    document.getElementById('resultado').innerHTML = ''
}

function limparNumero(){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero.substring(0, numero.length -1)
}

function resultadoDaConta(){
    var numero = document.getElementById('resultado').innerHTML
    var conta = numero.replace(/÷/g, '/');
    conta = conta.replace(/×/g, '*')
    conta = conta.replace(/R/g, '%')
    conta = conta.replace(/,/g, '.')
    console.log(conta)
    console.log(eval(conta))
    document.getElementById('resultado').innerHTML = eval(conta)
}