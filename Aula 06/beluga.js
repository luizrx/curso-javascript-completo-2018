// function calcularMedia() {

//     var total = 0
//     var qtd = arguments.length;
//     var x = 0;
//     while(typeof arguments[x] === 'number') {
//         total += arguments[x];
//         x++
//     } 
//     return total / qtd
// }

function calcularMedia() {

    var x = 0;
    var total = 0;
    var qtd = arguments.length;
    var media = 0;

    while(!isNaN(arguments[x])) {

        total += arguments[x]

        x++
        
    } 

    return media = (total / qtd)

}

// console.log(calcularMedia(50, 0, 60))