const $visor = document.querySelector('#visor');

let calculado = false;

function inserir(numero){
    if(calculado){
        limpar();
        calculado = false;
    }

    if(!isNaN(numero) || numero === '.'){
        $visor.value += numero;
    }else{
        $visor.value += ' ' + numero + ' ';
    }
}

function limpar(numero){
    $visor.value = '';
}

function calcular(){
    $visor.value = Calculadora.calcular($visor.value);

    calculado = true;
}

class Calculadora{
    static calcular(equacao){
        if(Calculadora._validarEquacao(equacao)){
            let equacaoAjustada = equacao.replace('x', '*');
            return eval(equacaoAjustada);
        }else{
            return 'ERRO';
        }
    }

    static _validarEquacao(equacao){
        return true;
    }
}
