		
// Chamar todos os Voos do banco de dados 
 async function listaVoos() {
 // Seleciona o contêiner de cards
    var cardsContainer = document.querySelector(".cards-grid");

	
	var response = await axios.get("http://localhost:3030/product")
	response.data.forEach(product => {
	// Cria um novo elemento de card
	var card =  document.createElement("div");
	card.className = "card";
	
	  console.log(product.image);
			// Adiciona o imagem do card
			var image = document.createElement("img");
            image.className = "card-img";
			image.src = product.image;
			card.appendChild(image);

			// Adiciona a titulo do card
			var titulo = document.createElement("h2");
			titulo.textContent = product.title;
			card.appendChild(titulo);

			// Adiciona a descrição do card
			var descricao = document.createElement("p");
			descricao.textContent = product.description;
			card.appendChild(descricao);

            // Adiciona a descrição do card
			var price1 = document.createElement("h3");
			var price2 = document.createElement("img");
            var divNova = document.createElement("div");
			price1.textContent = product.price;
			price2.src = 'https://i.ibb.co/R3S3n3L/Carr-compras-icon.png';
            divNova.appendChild(price1);
            divNova.appendChild(price2);
            divNova.className = "card-price";

            card.appendChild(divNova);

			// Adiciona o card ao contêiner de cards
			cardsContainer.appendChild(card);
			 
})};
// let datas =
// {
//   image: product.image,
//   title:product.title,
//   description: product.description,
//   price1: product.price[0].value,
//   price2:product.price[0].incon
// }
// return datas

listaVoos();

		