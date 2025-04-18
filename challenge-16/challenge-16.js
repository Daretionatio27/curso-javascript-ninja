(function(){
    'use strict';
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    /*
    Declare uma variável chamada `name` que receba seu primeiro nome.
    Mostre no console todas as letras do seu nome separadas, com a frase:
    - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
    Ex: no caso do nome ser "Fernando", deve mostrar as frases:
    - "F é a 1ª letra do meu nome."
    - "e é a 2ª letra do meu nome."
    E assim por diante, até a última.
    */
   var davi = 'Davi'
    console.log( 'As letras do seu nome:' );
    for(var i = 0; davi.length > i; i++ ){
        console.log(davi.charAt(i) + ' é a ' + (i + 1) +'ª letra do meu nome.')
    }

    /*
    - Declare uma variável chamada `fullName`, que receba seu nome completo,
    escrito no formato de slug (caixa baixa e palavras separadas por um traço).
    Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
    - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
    por um espaço.
    - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
    nome, então fique à vontade para usar as artimanhas que já viu até agora no
    curso para fazer isso funcionar corretamente :)
    - Mostre no console o nome no formato slug, e o resultado final. Use um
    console.log para cada formato.
    */
    var fullName = 'davi-maia'
    function noSlug(name){
        var result;
        result = name.charAt(0).toUpperCase() + name.slice(1)
        result = result.split('-').join(' ')
        return result
    }
    console.log( '\nNome convertido à partir de um slug:' );
    console.log(noSlug(fullName))

    /*
    - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
    cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
    ser um "e". No final, concatene com a frase: " são meus amigos.".
    O resultado final deve ficar mais ou menos assim:
    - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
    - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
    5 nomes foi somente uma sugestão ;)
    */
    var friends = ['Claudia', 'Cleber', 'Cleiton', 'Celine', 'Carlos']
    friends = friends.join(', ')
    var lastVirgle = friends.lastIndexOf(', ');
    friends = friends.slice(0, lastVirgle) + friends.slice(lastVirgle).replace(', ', ' e ')
    console.log( '\nMeus amigos:' );
    console.log('Meus amigos são: ' + friends)

    /*
    Usando o replace(), faça a string "Roberto" virar "Roberta".
    Mostre o resultado no console.
    */
    var robs = 'Roberto';
    var lastO = robs.lastIndexOf('o');
    console.log( '\nEra "Roberto", agora é:' );
    console.log(robs.slice(0, lastO) + robs.slice(lastO).replace('o', 'a'))
    

    /*
    Mostre no console a parte "nando" da string "Fernando". Use o método que
    faz a busca do final para o início da string.
    */
    console.log( '\nParte de uma string:' );
    console.log('fernando'.substring(8, 3))

    /*
    Declare uma variável chamada `myName`, que receba o seu primeiro nome,
    escrito de forma natural.
    Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
    e minúsculas.
    - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
    de qualquer tamanho, escrito de qualquer forma.
    Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
    */
    var myName = 'Heitor' 
    var mult = 1
    console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
    function strange(name){
    for(var i = 0; name.length > i; i++){
        mult % 2 === 1 ? name = name.substring(0, i) + name.slice(i).toUpperCase() : name = name.substring(0, i) + name.slice(i).toLowerCase()
        mult++
    }
        return name
    }
    console.log(strange(myName))
})();
