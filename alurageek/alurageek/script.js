const baseUrl = "http://localhost:3000/produtos";

const fetchProdutos = async () => {
  try {
    const response = await fetch(baseUrl);
    const produtos = await response.json();
    console.log(produtos);
    return produtos;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  }
};

const adicionarProduto = async (produto) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });
    const novoProduto = await response.json();
    console.log("Produto adicionado:", novoProduto);
  } catch (error) {
    console.error("Erro ao adicionar produto:", error);
  }
};

fetchProdutos();

adicionarProduto({
  nome: "Harry Potter Funko Pop",
  preco: "50",
  imagem:
    "https://http2.mlstatic.com/D_NQ_NP_986452-MLA46568090827_062021-O.webp",
});
