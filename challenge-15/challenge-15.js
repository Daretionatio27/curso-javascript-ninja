(function(){;
    /*
    Envolva todo o código desse desafio em uma IIFE.
    Crie um arquivo chamado index.html e adicione esse script ao HTML.
    */

    /*
    Crie uma função construtora chamada "Person". Esse construtor deve ter
    as seguintes características:
    - Deve receber 3 parâmetros: `name`, `lastName` e `age`;
    - Deverá ter 3 propriedades:
    - `name` - que receberá o valor do parâmetro `name`;
    - `lastName` - que receberá o valor do parâmetro `lastName`;
    - `age` - que receberá o valor do parâmetro `age`;
    - Deverá ter 3 métodos:
    - `getFullName` - que deve retornar o nome completo do objeto criado,
    no formato:
        - "[NAME] [LASTNAME]"
    - `getAge` - que deverá retornar a idade (age);
    - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
    iremos passar um único argumento, que é a quantidade de anos que devem ser
    adicionados à idade original (age). Esse método deverá retornar o objeto
    que será instanciado.
    */
    function Person(name, lastName, age){
        var name = name
        var lastName = lastName
        var age = age

        this.getFullName = function (){
           return name + ' ' + lastName;
        } 
        this.getAge = function (){
            return age
        }
        this.addAge = function (add){
            age += add
        }
    }

    /*
    Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
    pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
    parâmetros corretamente para o construtor para criar as novas pessoas.
    Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
    */
    var rafael = new Person('Rafael', 'Maia', 6)
    var regina = new Person('Regina', 'Maia', 18)
    var davi = new Person('Davi', 'Maia', 14)
    console.log( 'Novas pessoas criadas à partir de Person:' );
    console.log(regina, davi, rafael)

    /*
    Mostre no console o nome completo de cada pessoa.
    */
    console.log( '\nNomes das pessoas:' );
    rafael.getFullName()
    regina.getFullName()
    davi.getFullName()

    /*
    Mostre no console as idades de cada pessoa, com a frase:
    - "[NOME COMPLETO] tem [IDADE] anos."
    */
    console.log( '\nIdade das pessoas:' );
    console.log(davi.getFullName() + ' tem ' + davi.getAge() + ' anos.')
    console.log(rafael.getFullName() + ' tem ' + rafael.getAge() + ' anos.')
    console.log(regina.getFullName() + ' tem ' + regina.getAge() + ' anos.')
    /*
    Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
    cada um. A frase deverá ser no formato:
    - "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
    */
    davi.addAge(4)
    rafael.addAge(22)
    regina.addAge(-10)
    console.log( '\nNova idade das pessoas:' );
    console.log(davi.getFullName() + ' agora tem ' + davi.getAge() + ' anos.')
    console.log(rafael.getFullName() + ' agora tem ' + rafael.getAge() + ' anos.')
    console.log(regina.getFullName() + ' agora tem ' + regina.getAge() + ' anos.')
}())
