const alerta = function(){ // funcção anonima, sem nome. esta sendo atribuida a uma variavel
    console.log("ola mundo")
}

alerta()

!function teste(){ // IIFE - funcao imediatamente invocada. irá executar uma vez e apenas novamente quando o codigo for rodado dnv
    console.log("ola mundo 2")
}()

//pode se escrever tambem assim;

(function() {
    console.log('dosjao')
}())

//IIFE foram inicialmente usados para namespaces