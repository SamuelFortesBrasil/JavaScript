var num = document.getElementById('NI')
var aN = []
let contador = 0
let tabela = document.getElementById('tabela')
let res = document.getElementById('resposta')



function verificarN(n){
        if(n < 1 || n > 100){
                alert('Os valores devem estar entre 1 e 100!')
                return false
        }else{
                return true
        }
}

function verificarL(n , aN){
        if(aN.indexOf(n) != -1){
                alert(`Valor já encontrado da lista!`)
                return false
        } else{
                return true
        }
}

function envio(){
        let n = Number(num.value)
        if(contador == 10){
                alert('O máximo de números que podem ser adicionados são 10.')
                num.value = ''
                return
        }
        if(verificarL(n, aN) && verificarN(n)){
                aN.push(n)
                let item = document.createElement('option')
                item.text = `Valor ${n} adicionado`
                tabela.appendChild(item)
                res.innerHTML = ''
        }
        contador ++
        num.value = ''
        num.focus()
} 

function finalizar(){
   if(aN.length == 0){
        alert('Adicione valores antes de finalizar!')
   } else{
        let total = aN.length
        let maior = Math.max(...aN)
        let menor = Math.min(...aN)
        let soma = 0
        let media = 0
        for(let i = 0; i < aN.length ; i++ ){
                soma += aN[i]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${total} números cadastrados`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media.toFixed(2)}</p>`
   }     
}

console.log(contador)
console.log(aN)
console.log(num)

/* Analisador de Números deve
 armazenar 10 números no select.- OK
 não ter números acima de 100 e menor que 1 - OK
 não ter números repetidos - OK
 Como resposta deve:
 ter uma soma
 a média de todos
 a quantidade do .length - OK
 qual é o maior número do array
 qual é o menor número do array
 DICA DO GUANABARA: Use mais de uma função para resolver o exercício */