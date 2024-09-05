function funcao1() {
    funcao2()
    console.log("Executando função 1.")
}

function funcao2() {
    funcao3()
    console.log("Executando função 2.")
}

function funcao3() {
    console.log("Executando função 3.")
}

funcao1()

/*
JS funciona com sistema de pilha de chamadas 

Executando função 3.
Executando função 2.
Executando função 1.

*/