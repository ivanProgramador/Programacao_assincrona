// Processos assincronos no codigo abaixo eu vou simulkar um sistema de envio de e-mail,
//a afunção abaixo recebe 2 parametros o destianatario do email eo corpo do e-mail dentro dela
// estou usando O setTimeout para defginir que ela vai ser executada em 3 segundos so que junto com essa 
//funcção eu vou colocar mais 3 processos que vão ser executados de forma assincrona o console vai mostrar claramente 
// que o node executa as funções mais rapidas en quanto a função de enviar email espera os 3 segundos 
//emabora exsita uma sequecia de execução ela é ignorada pelo porcessamento assincrono 

console.log('enviando e-mail')

function enviarEmail(corpo,para){

     setTimeout(()=>{
        console.log(
            `Para: ${para}
             --------------------------------
             ${corpo}
             --------------------------------------
             De> Victor Lima
            `
        );
     },3000)
}

enviarEmail('seja bem vindo ','Pedro')

console.log('e-mail enviado');
console.log('seu e-mail chegou');