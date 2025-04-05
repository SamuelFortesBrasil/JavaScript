var num = document.getElementById('NI')
var aN = []
var contador = 0
let tabela = document.getElementById('tabela')



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
        if(verificarL(false) && verificarN(false)){
                aN.push(n)
                contador ++
                let item = document.createElement('option')
                item.text = `Valor ${n} adicionado`
                tabela.appendChild(item)
                alert('Funcionou!')
        }
}
num.value = ''
num.focus()


console.log(contador)
console.log(aN)
console.log(num)




/* Analisador de Números deve
 armazenar 10 números no select.
 não ter números acima de 100 e menor que 1
 não ter números repetidos
 Como resposta deve:
 ter uma soma
 a média de todos
 a quantidade do .length
 qual é o maior número do array
 qual é o menor número do array
 DICA DO GUANABARA: Use mais de uma função para resolver o exercício */