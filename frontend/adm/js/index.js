async function checklogs() {
    const imageInput = document.getElementById('exampleFormControlFile1');
    const title = document.getElementById('exampleFormControlInput1').value;
    const description = document.getElementById('exampleFormControlTextarea1').value;
    const check1 = document.getElementById('defaultCheck1').checked;
    const check2 = document.getElementById('defaultCheck2').checked;
    const inputPrice = document.getElementById('price-input');
   
    const price = Number(inputPrice.value.replace(',', '.')).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
  
    const reader = new FileReader();
    reader.readAsDataURL(imageInput.files[0]);
    
    reader.onload = function () {
      const imageData = reader.result;
      axios.post('http://localhost:3030/product', { image: imageData, title, description, price, check1, check2 })
        .then(response => {
          console.log(response);
          alert(response)
        })
        .catch(error => {
          console.error(error.response.data);
          alert(error.response.data);
        });
    };
  }
