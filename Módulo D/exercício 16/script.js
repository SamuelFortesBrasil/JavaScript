function Calcular(){
    var nInicio = document.getElementById('nI')
    var nFinal = document.getElementById('nF')
    var pass = document.getElementById('pass')
    var nI = Number(nInicio.value)
    var nF = Number(nFinal.value)
    var passo = Number(pass.value)
    var resposta = document.getElementById('resp')
    resposta.innerHTML = ``
    var contagem = nI
    if(nI == 0 || passo == 0){
        resposta.innerHTML = `Impossível calcular`
    }  else if (nF < nI){
      while ( contagem >= nF){
       resposta.innerHTML += `👉 ${contagem}`
       contagem = contagem - passo
      }
    } else {
        while(contagem <= nF){
            resposta.innerHTML += `👉 ${contagem}`
            contagem = contagem + passo
        }
    }
    resposta.innerHTML += ` 🏁`

}