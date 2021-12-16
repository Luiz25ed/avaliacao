// Micro desafio - Passo 1
// Crie um array de objetos consertos que tenha como atributos: aparelho (string),
// itens consertados (array de strings), valores (array de números) e pronto (booleano). Deve
// ter ao menos 15 itens dentro de consertos salve o arquivo como consertos.js e exporte
// este módulo. Módelo de exemplo do array de consertos:


let consertos = [{
      aparelho : 'Apple iPhone 11',
    itensConcertados : ["tela","bateria","carregador"],
    valoresItens : [ 380 , 120 , 90],
    pronto : false},

    {aparelho : 'Samsung Galaxy S20 FE',
    itensConcertados : ["tela","bateria","carregador"],
    valoresItens: [ 280 , 80 , 90],
    pronto: true},

    {aparelho : ' Samsung Galaxy M51',
    itensConcertados : ["tela","bateria","carregador"],
    valoresItens : [ 280 , 80 , 90],
    pronto : true},

    {aparelho: 'Xiaomi Redmi Note 8',
    itensConcertados : ["tela","bateria","carregador"],
    valoresItens : [ 180 , 100 , 70],
    pronto : false},


    {aparelho : 'Samsung Galaxy A11',
    itensConcertados : ["tela","bateria","carregador"],
    valoresItens: [ 480 , 80 , 50],
    pronto : false},


    {aparelho : 'Samsung Galaxy A13',
    itensConcertados : ["tela","bateria","carregador"],
    valoresItens : [ 280 , 80 , 90],
    pronto : true},


    {aparelho : 'Samsung Galaxy S20 Plus',
    itensConcertados : ["tela","bateria","carregador"],
    valoresItens : [ 280 , 80 , 90],
    pronto : false},

    {aparelho : 'Samsung Galaxy A01 Core',
    itensConcertados : ["tela","bateria","carregador"],
    valoresItens : [ 280 , 80 , 90],
    pronto : true},


    {aparelho : 'Xiaomi Poco X3 NFC',
    itensConcertados : ["tela","bateria","carregador"],
    valoresItens : [ 280 , 80 , 90],
    pronto : true},

    {aparelho : 'Xiaomi Redmi Note 9',
    itensConcertados : ["tela","bateria","carregador"],
    valoresItens : [ 280 , 80 , 90],
    pronto : true},

    {aparelho: 'Apple iPhone XR',
    itensConcertados : ["tela","bateria","carregador"],
    valoresItens : [ 280 , 80 , 90],
    pronto : true},

    {aparelho : 'Apple iPhone 10',
    itensConcertados : ["tela","bateria","carregador"],
    valoresItens : [ 280 , 80 , 90],
    pronto : true},

    {aparelho : 'Apple iPhone 12 plus',
    itensConcertados : ["tela","bateria","carregador"],
    valoresItens : [ 280 , 80 , 90],
    pronto : true},

    {aparelho : 'Motorola E 5 plus',
    itensConcertados : ["tela","bateria","carregador"],
    valoresItens : [ 280 , 80 , 90],
    pronto : true},

    {aparelho : ' Motorola X',
    itensConcertados : ["tela","bateria","carregador"],
    valoresItens : [ 380 , 95 , 100],
    pronto : false}

    ];

    // for( let consertos = 0; consertos <=15; consertos ++){
   
    //     console.log(`${consertos+1}. ${consertos[index]}`)
    //     if (consertos[index] == 'false');



 const listaConserto = (consertos)=>{
     console.log(`imprimir lista conserto !!!`);
};

consertos.forEach((index,array) =>{
    
     //  console.log(`${index }. ${consertos}`);
       console.log(index,array);
     });


//  console.log(consertos);


const somaValores = consertos.reduce((sum,consertos) => {
    // console.log('soma total valores dos itens consertados !!!');
    return sum +=  consertos.aparelho  +=  consertos.valoresItens
} ,0)

console.log(somaValores);


// consertos.valoresItens.forEach(consertos => {
//   total += valoresItens;
// });





    















module.export = consertos;










    




