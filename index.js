
//essa eo uso de uma promisse pra checar se ela deu certo ou errado  

function enviarEmail(corpo,para){
     return new Promise((resolve,reject)=>{
         var deuErro = true;

         if(!deuErro){
             resolve()
         }else{
            reject()
         }
     }, 4000)

}

enviarEmail("Olá mundo","ivan@udemy.com.br").then(()=>{

    var a = 1+1;
    console.log("Opa voce conseguiu fazer oque prometeu");
    console.log(a);

}).catch(()=>{

    console.log("deu erro ")
})
