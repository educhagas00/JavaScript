//var respeita o escopo de função (ou global)
var nome = "eduardo"

// let e const respeitam o escopo de bloco ({})

function teste(){
    var sobrenome = "sobrenome"
    if (sobrenome === 'sobrenome') {
        const valor = 10 // visibilidade apenas dentro deste if e seus blocos internos
    }
    console.log(valor)
}

