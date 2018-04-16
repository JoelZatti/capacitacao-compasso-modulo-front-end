$(function () {
    // var txt = document.getElementById('txt_nome');
    // var txt = $('#txt_nome');

    // txt.val();


    /*    setInterval(function () {
            txt.toggle();
            if (txt.is(":visible")) {
                txt.hide('slow');
            } else
                txt.show('slow');
        }, 2000);*/
    var $div_produtos = $('#produtos');
    var $div_frm_cadastro = $('#frm_cadastro');

    var $ar_produtos = [
        { "nome": "Produto 1", "valor": 10.5 },
        { "nome": "Produto 2", "valor": 19.5 },
        { "nome": "Produto 3", "valor": 21.5 }
    ];

    function renderizaProdutos() {
        //limpoos objetos dentro da div
        $div_produtos.empty();

        $.each($ar_produtos, function (key, obj) {
            console.log(obj.nome);
            //cria uma nova div
            var $div = $("<div>");
            var $h1 = $("<h1>");

            //adiciona o elemento html nessa div
            // $div.html(obj.nome);

            //adiciona o elemento h1 dentro da div
            $h1.html(obj.nome);

            //adiciona o elemento h1 dentro da div
            $div.append($h1);

            //adiciono o objeto na div no container #produto
            $div_produtos.append($div);
        });
    }
    renderizaProdutos();
});
