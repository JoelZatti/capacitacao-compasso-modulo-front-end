$(function () {
    // var txt = document.getElementById('txt-nome');
    //var txt = $('#txt-nome');
    //txt.val('Novo valor do campo');

    /*setInterval(function () {
        txt.toggle();
        if (txt.is(':visible')) {
            txt.hide('slow');    
        } else {
            txt.show('slow');
        }
    }, 2000);*/

    var divProdutos = $('#produtos');
    var divFrmCadastro = $('#div-frm-cadastro');
    var frmCadastro = $('#frm-cadastro');
    var inputNome = $('#txt-nome');
    var inputPreco = $('#txt-preco');
    var btnCadastrar = $('#btn-cadastrar');
    var msgSucesso = $('.msg-sucesso');
    var arrayProdutos = [
        { "nome": "Produto 1", "valor": 10.5 },
        { "nome": "Produto 2", "valor": 20.5 },
        { "nome": "Produto 3", "valor": 30.5 }
    ];

    function renderizaProdutos() {
        // limpa os objetos dentro da div
        divProdutos.empty();

        $.each(arrayProdutos, function (key, obj) {
            // cria uma nova div
            var div = $("<div>");
            var h1 = $("<h1>");
            var p = $("<p>");

            // adiciona o nome no h1
            h1.html(obj.nome);

            // adiciona o nome no h1
            p.html(obj.valor);

            // adiciona h1 e p dentro da div
            div.append(h1, p);

            // adiciona o objeto div no container #produtos
            divProdutos.append(div);
        });
    }

    divFrmCadastro.find(".js-frm-cadastro").submit(function (e) {
        e.preventDefault();

        inputNome.val();
        inputPreco.val();

        arrayProdutos.push({
            "nome": inputNome.val(),
            "preco": inputPreco.val()
        });

        renderizaProdutos();
        // reseta o form
        $(this)[0].reset();

        msgSucesso.removeClass('hide');
        setTimeout(function () {
            msgSucesso.addClass('hide');
        }, 2000);

        window.scrollTo(0, document.body.scrollHeight);
    });

    renderizaProdutos();
});