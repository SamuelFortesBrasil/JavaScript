var agora = new Date()
var hora = agora.getHours()
if( hora >= 5 && hora < 13){
 console.log(`Bom dia Mundo! Agora são ${hora} horas.`)
} else if (hora > 12 && hora < 19){
    console.log(`Boa Tarde Mundo! Agora são ${hora} horas`)
} else if (hora > 18 && hora < 25) {
    console.log(`Boa Noite Mundo! Agora são ${hora} horas`)
} else if (hora > 24){
    console.log('Horário Inexistente.')
} else{
    console.log(`Boa Madrugada! Agora são ${hora} horas`)
}