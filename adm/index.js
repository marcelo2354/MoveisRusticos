  // Adiciona evento de validação de formulário
  document.getElementById("login-form").addEventListener("submit", function(event) {
    // Verifica se os campos estão preenchidos corretamente
    if (!event.target.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      // Adiciona a classe "is-invalid" aos elementos de input correspondentes
      document.getElementById("email").classList.add("is-invalid");
      document.getElementById("password").classList.add("is-invalid");
    }
  }, false);



const form = document.getElementById('login-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  login();
});

async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const newData = {email, password};
    console.log(newData);

await axios.post('http://localhost:3030/login', newData)
  .then(response => {
        if (response.data) {
           window.location.href = 'http://127.0.0.1:5500/adm/pages/index.html'; // redireciona para a página do painel

        } else {
          alert('Email ou senha incorretos 2'); // exibe um alerta de erro
        }
      })
      .catch(error => {
        console.error(error);
        alert('Ocorreu um erro ao fazer login');
      });
  }

    /*

    {
    	"email": "Adm@gmail.com",
    	"senha": "admin123"
    }

    */