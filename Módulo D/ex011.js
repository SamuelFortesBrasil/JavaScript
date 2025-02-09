var idade = 17
if( idade < 16){
    console.log('Não pode votar')
} else if (idade < 18 || idade >= 65){
    console.log('Voto Opicional')
} else if (idade >= 18 ){
    console.log('Apto a Votar')
}