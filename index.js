
//essa função tem uma promisse que se ela der certo vai trazer uma lista de ususarios em um array de objetos
/*
function pegarUsuarios(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(
                    [
                        {nome:'Victor',lang:'JS'},
                        {nome:'Lima',lang:'C#'},
                        {nome:'Daniel',lang:'Java'},
                    ]
                )
        }, 4000);
    });
}
*/

//No caso de um promisse nã da pra pegar os dados dela diretamente
//temos que usar função then que vai jogar os dado dentro de uma função 
//que vai pegar esses dados como parametro e quanto mais funções a aplicação tiver mais ela vai aninhando
//um then() após o outro

/*
pegarUsuarios().then((usuarios)=>{
    console.log(usuarios);
})*/


//usando async e await e resolvendo o problema do aninhamento 

function pegarUsuarios(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(
                    [
                        {nome:'Victor',lang:'JS'},
                        {nome:'Lima',lang:'C#'},
                        {nome:'Daniel',lang:'Java'},
                    ]
                )
        }, 4000);
    });
}

//para usar o await tem, que usar o operador async para avisar ao node  que essa função é assincrona 
//se não avisar ele vai dar erro porque o awai vai perder o sentido dentro do escopó da função

async  function principal(){
    //isso substitui o then 
    //basicamente o operador await espera a função executar depois pega tudo oque ela retorna e 
    //joga na variavel usuarios sem que eu precise escrever uma função anonima pra fazer isso 

    var usuarios = await pegarUsuarios();
    console.log(usuarios);

}

principal();







