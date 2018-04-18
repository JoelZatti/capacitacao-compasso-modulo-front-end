$(document).ready(function(){

    
    var form = $("#form");    
    var cep = $("#cep");
    var logradouro = $("#logradouro");
    var bairro = $("#bairro");
    var localidade = $("#localidade");
    var uf = $("#uf");
    var resultado = $("#resultado");
    var btnEnviar = $("#enviar");

    //aplica máscara
    cep.mask("99999-999");

    //bloqueia o enter
    cep.bind('keydown', function(){
        if(event.keyCode == 13) return false;
    });

    //pesquisa cep
    cep.blur(function(e){

        cep.val().replace('-','');

        if(cep.val().length != 9){
            form[0].reset();
            cep.focus();
            resultado.html("Cep inválido");
            return false;
        }else{
            resultado.html("Pesquisando");
        }

        var options = {
            url: "viacep.com.br/ws/01001000/json/"
        }


        $.ajax({
            method: "POST",
            url: "https://viacep.com.br/ws/"+ cep.val() +"/json/"
        })
        .done(function( msg ) {
            logradouro.val(msg.logradouro);
            bairro.val(msg.bairro);
            localidade.val(msg.localidade);
            uf.val(msg.uf);
        }).always(function(){
            resultado.html("");
        });
        

        e.preventDefault();
    });

})