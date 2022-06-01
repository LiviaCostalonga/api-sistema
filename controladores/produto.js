//Importando dependencias internas
const produtoModelo = require('../modelos/produto');

//Controller para criar produto
const criar = async (req,res) => {
    //Obtendo dados vindos do formulário ou via REST POST
    const { nome, preco, descricao } = req.body;

    const resultadoCreate = await produtoModelo.create({
        nome,
        preco,
        descricao
    });
    console.log('Criou Produto >>>', resultadoCreate);
    res.json({ status: true});
};

//Controller para alterar produto
const alterar = async (req,res) => {
    //Obtendo dados vindos do formulário ou via REST POST
    const { id, nome, preco, descricao } = req.body;

    //Buscar o produto no banco para alteração
    const produto = await Produto.findByPk(id);
    produto.nome = nome;
    produto.preco = preco;
    produto.descricao = descricao;
    produto.save();
    console.log('Alterou Produto >>>',{ id });
    res.json({ status: true});
};

//Controller para excluir produto
const excluir = async (req,res) => {
    //Obtendo id do produto para ser excluido
  const { id } = req.params; 

  //Buscar o produto no banco para excluir
    const produto = await produtoModelo.findByPk(id)
    produto.destroy();
    console.log('Excluindo Produto >>>', { id });
    res.json({ status: true});
};

//Controller para detalhar/buscar um produto
const detalhar = async (req,res) => {
    //Obtendo id do produto para ser buscado
  const { id } = req.params; 

  //Buscar o produto no bancor
    const produto = await produtoModelo.findByPk(id)
    console.log('Obteve o Produto >>>', { id });
    res.json({ produto });
};

//Controller para listar produto
const listar = async (req,res) => {
    //listando todos os produtos
    const produtos = await produtoModelo.findAll();
    console.log('Listando todos os Produtos >>>', { produtos });
    res.json({ produtos});
};

module.exports = {criar, alterar, excluir, detalhar, listar};