// os tipos primitivos são valores que não são objetos e não têm métodos.

// Para esses tipos, JavaScript oferece objetos "construtores" correspondentes
//, que podem ser usados para criar instâncias de objetos a partir desses valores primitivos.


console.log(typeof true) // boolean
console.log(typeof Boolean(true)) // boolean

console.log(typeof new Boolean(true)) // Object
//wrapper object: instância criada usando o construtor, o que resulta em um objeto, não em um valor primitivo.

// para usar métodos de construtores em primitivos:
console.log('Eduardo'.length) // o JS cria uma cópia do valor em OBJETO utilizando o contrutor e chama o metodo e retorna o valor 
// ja jogando fora da memoria

