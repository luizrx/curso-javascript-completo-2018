


    var $lis = ['li1', 'li2', 'li3', 'li4']

    var x = 0;

    while ($lis[x]) {
        
            console.log('Foi selecionada a ' + $lis[x]);
            x++
        }

    for(i = 0; i < $lis.length; i++) {

        console.log('Foi selecionada a li: ' + $lis[i])

    }

    $lis.forEach(function(numero) {
        console.log('Viu, eu sei fazer o reach ' + numero)
    })

    $lis.forEach(number => console.log('Agora ninguém me segura mais! Passagem: ' + number))
