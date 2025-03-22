function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var Fano = document.getElementById('nas')
  var resultado = document.getElementById('resultado')
  if (Fano.value.length == 0 || Fano > ano ){
    alert('ERR01 Verifique os dados e tente novamente')
  } else{
    var Fsex = document.getElementsByName('radisex')
    var idade = ano - Number(Fano.value)
    var genero = ''
    var imagem = document.getElementById('foto')
     if(Fsex[0].checked){
      genero = 'Homem'
     if (idade >= 0 && idade < 11){
      //criança
      imagem.setAttribute('src', 'GokuCriancaP.png')
     } else if (idade < 21){
      imagem.setAttribute('src', 'Goku P.png')
      //jovem
     } else if (idade < 50){
      //adulto
      imagem.setAttribute('src' , 'vegetaP.png')
     } else{
      imagem.setAttribute('src', 'MestreKameP.png')
      //idoso
     }


    } else if (Fsex [1].checked){
      genero = 'Mulher'
      if (idade >= 0 && idade < 11){
        //criança
        imagem.setAttribute('src', 'ChichiCriancaP.png')
       } else if (idade < 21){
        imagem.setAttribute('src', 'videlP.png')
        //jovem
       } else if (idade < 50){
        //adulto
        imagem.setAttribute('src', 'Bulma P.png')
       } else{
        imagem.setAttribute('src', 'VovoUranaiP.png')
        //idoso
       }
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos. `
    resultado.appendChild(imagem)
  }

}