function carregar(){
    var mensagem = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var musica = document.getElementById('musica')
    var data = new Date()
     var hora = 19
     var minutos = 23 
    //var hora = data.getHours()
    //var minutos = data.getMinutes()
    //Operador ternário para quando tiver 0 à esquerda dos minutos 17:08 por exemplo
    minutos = minutos < 10 ? '0' + minutos : minutos

    mensagem.innerHTML = `Agora são ${hora}:${minutos}`
    if (hora > 5 && hora < 12){
        //Bom dia
        document.body.style.background = 'gba(206, 172, 62, 0.904)'
        musica.src = 'imagens e aúdios/Dia.mp3'
        img.src = 'imagens e aúdios/Dia-P.jpeg'
    } else if(hora > 11 && hora < 19){
        //Boa Tarde
        img.src = 'imagens e aúdios/Roof-P.jpeg'
        document.body.style.background = 'rgb(150, 108, 52)'
        musica.src = 'imagens e aúdios/Roof.mp3'
    } else{
        //boa noite
        img.src = 'imagens e aúdios/Noite-P.jpeg'
        document.body.style.background = 'rgb(53, 52, 52)'
        musica.src = 'imagens e aúdios/Neblina.mp3'

    }
}



    