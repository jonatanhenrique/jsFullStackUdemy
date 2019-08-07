function tratarErroELancar(erro){
    throw 'Erro';
}

function imprimeNomeGritado(obj){
   try{
    console.log(obj.name.toUpperCase() + '!!!!');
   }catch (e){
       tratarErroELancar(e);
   } finally{
       console.log('final');
   }
}

const obj = { nome: 'Roberto'}
imprimeNomeGritado(obj);