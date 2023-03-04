		// Array com dados de exemplo para os cards
		var cardsData = [
			{ imagem: "https://i.ibb.co/6HYGRxM/fc60cbd5e7f19ca9d4537e3ef8175d9d.png", titulo: "Mesa", descricao: 'Pequena descrição', price:[{valor:'R$ 1500,00', imagem:"https://i.ibb.co/nkGbWNM/8666616-shopping-cart-icon.png"}] },
			{ imagem: "https://i.ibb.co/6HYGRxM/fc60cbd5e7f19ca9d4537e3ef8175d9d.png", titulo: "Mesa", descricao: 'Pequena descrição', price:[{valor:'R$ 1500,00', imagem:"https://i.ibb.co/nkGbWNM/8666616-shopping-cart-icon.png"}] },
			{ imagem: "https://i.ibb.co/6HYGRxM/fc60cbd5e7f19ca9d4537e3ef8175d9d.png", titulo: "Mesa", descricao: 'Pequena descrição', price:[{valor:'R$ 1500,00', imagem:"https://i.ibb.co/nkGbWNM/8666616-shopping-cart-icon.png"}] },
			{ imagem: "https://i.ibb.co/6HYGRxM/fc60cbd5e7f19ca9d4537e3ef8175d9d.png", titulo: "Mesa", descricao: 'Pequena descrição', price:[{valor:'R$ 1500,00', imagem:"https://i.ibb.co/nkGbWNM/8666616-shopping-cart-icon.png"}] },
			{ imagem: "https://i.ibb.co/6HYGRxM/fc60cbd5e7f19ca9d4537e3ef8175d9d.png", titulo: "Mesa", descricao: 'Pequena descrição', price:[{valor:'R$ 1500,00', imagem:"https://i.ibb.co/nkGbWNM/8666616-shopping-cart-icon.png"}] },
			{ imagem: "https://i.ibb.co/6HYGRxM/fc60cbd5e7f19ca9d4537e3ef8175d9d.png", titulo: "Mesa", descricao: 'Pequena descrição', price:[{valor:'R$ 1500,00', imagem:"https://i.ibb.co/nkGbWNM/8666616-shopping-cart-icon.png"}] }
		];


		// Seleciona o contêiner de cards
		var cardsContainer = document.querySelector(".cards-grid");


		// Loop pelos dados do card e cria um card para cada um
		for (var i = 0; i < cardsData.length; i++) {
			// Cria um novo elemento de card
			var card = document.createElement("div");
			card.className = "card";

			// Adiciona o imagem do card
			var image = document.createElement("img");
            image.className = "card-img";
			image.src = cardsData[i].imagem;
			card.appendChild(image);

			// Adiciona a titulo do card
			var titulo = document.createElement("h2");
			titulo.textContent = cardsData[i].titulo;
			card.appendChild(titulo);

			// Adiciona a descrição do card
			var descricao = document.createElement("p");
			descricao.textContent = cardsData[i].descricao;
			card.appendChild(descricao);

            // Adiciona a descrição do card
			var price1 = document.createElement("h3");
			var price2 = document.createElement("img");
            var divNova = document.createElement("div");
			price1.textContent = cardsData[i].price[0].valor;
			price2.src = cardsData[i].price[0].imagem;
		
            divNova.appendChild(price1);
            divNova.appendChild(price2);
            divNova.className = "card-price";

            card.appendChild(divNova);

			// Adiciona o card ao contêiner de cards
			cardsContainer.appendChild(card);
		}