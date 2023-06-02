

function pegarId(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(5)
        },1500)
    })
}

function buscarEmailNoBanco(id){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{

            resolve('pedro@teste.com.br');

         },2000)
     })
}



function enviarEmail(corpo,para){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var deuErro = true;
            if(!deuErro){
                resolve({time: 6, to:"victor@udemy.com"})
            }else{
                reject("Fila cheia !")
            }
        },4000)
    })
}

/*

VERSÃO ANTIGA 

pegarId().then((id) =>{ //pegando o id

    buscarEmailNoBanco(id).then((email)=>{  //buscando emial do ususario com base no id 

        enviarEmail("Ola como vai ?",email).then(()=>{  //enviado email

            console.log("email enviado para o usuario com o id: "+ id);

        }).catch(err =>{
            console.log(err)
        })
    })
     
})
*/

//Apos a conevr~sao o codigor eduz consideravelmente como podemos ver abaixo 


async function principal(){

    var userId = await pegarId();

    var email = await buscarEmailNoBanco(userId);
    
    try {
        
        await enviarEmail('Olá como vai ?', email);
        console.log('e-mail enviado')

    } catch (error) {

        console.log(error)
    }

   


}

principal();


 


