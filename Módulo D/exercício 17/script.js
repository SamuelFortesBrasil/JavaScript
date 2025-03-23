function Tabuada(){
 let num = document.getElementById('fatorP')
 let tabela = document.getElementById('tabuada')
 let n = Number(num.value)
    if(n == 0){
        alert('Por Favor digite um número maior que 0')
    } else {
        let c = 1
        tabela.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            tabela.appendChild(item)
            c++
        }
    }
}