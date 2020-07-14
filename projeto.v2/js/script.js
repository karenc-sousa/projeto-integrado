/* ação + Escola. Tela Cadastro aut */

function duplicarCampos(){
	var clone = document.getElementById('origem').cloneNode(true);
	var destino = document.getElementById('destino');
	destino.appendChild (clone);
	
	var camposClonados = clone.getElementsByClassName('campo');
	
	for(i=0; i<camposClonados.length;i++){
		camposClonados[i].value = '';
	}
	
	
	
}

function removerCampos(id){
	var node1 = document.getElementById('destino');
	node1.removeChild(node1.childNodes[0]);
}

// Aplicando mascara aos campos
$(".RG").mask("00.000.000-0")
$(".CPF").mask("000.000.000-00")
$(".CNPJ").mask("00. 000. 000/0000-00")
$(".telefone").mask("(00) 00000-0000")
$(".CEP").mask("00000-000")
$(".cartao").mask("0000.0000.0000.0000")
$(".cod-seg").mask("000")
$(".validade").mask("00/00")

// Aplicando validação de campo
$(".formulario").validate({
    rules: {
        nome: {
            required: true,
            minlength: 3
        },
        email: {
            required: true,
		},
		senha:	{
			required: true,
		},
        telefone:   {
            required: true,
        },
        cpf:    {
            required: true,
        },
        rg: {
            required: true,
        },
		cnpj:	{
			required: true,
		},
        nasc:   {
            required: true,
        },
        endereco:   {
            required: true,
        },
        cep:    {
            required: true,
		},
		escola: {
			required: true,
		},
        cidade: {
            required: true,
        },
        estado: {
            required: true,
        },
        titular: {
            required: true,
        },
        cartao: {
            required: true,
        },
        validade:   {
            required: true,
        },
        codseg:    {
            required: true,
        }
    },
    messages: {
        nome:   {
            required: "Campo obrigatório.",
            minlength: "Mínimo de 3 caracteres."
        },
        email:  {
            required: "Campo obrigatório.",
            email: "Por favor, informe e-mail válido."
        },
        senha:	{
			required: "Campo obrigatório.",
		},
        telefone:   {
            required: "Campo obrigatório.",
        },
        cpf:    {
            required: "Campo obrigatório.",
        },
        rg: {
            required: "Campo obrigatório.",
        },
		cnpj:	{
			required: "Campo obrigatório.",
		},
        nasc:   {
            required: "Campo obrigatório.",
        },
        endereco:   {
            required: "Campo obrigatório.",
        },
        cep:    {
            required: "Campo obrigatório.",
		},
		escola: {
			required: "Campo obrigatório.",
		},
        cidade: {
            required: "Campo obrigatório.",
        },
        estado: {
            required: "Campo obrigatório.",
        },
        titular:    {
            required: "Campo obrigatório.",
        },
        cartao: {
            required: "Campo obrigatório.",
        },
        validade:   {
            required: "Campo obrigatório.",
        },
        codseg:    {
            required: "Campo obrigatório.",
        }
    }
});