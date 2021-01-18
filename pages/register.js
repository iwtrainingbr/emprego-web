function createAccount() {
    event.preventDefault();

    let company = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        password: document.getElementById('password').value,
    };

    fetch(API_URL+'/companies.json', {
        method: 'POST',
        body: JSON.stringify(company),
    });

    location.href="?page=dashboard";
}

function register() {
    return  `
        <section class="row mt-5">
            <div class="col-md-6">
                <div class="jumbotron bg-white">
                    <h3>Cadastre-se</h3>
                    <hr>
                    <form method="post" onsubmit="createAccount()">
                        <input id="name" type="text" placeholder="Nome da Empresa" class="form-control form-control-lg mt-3">
                        <input id="phone" type="text" placeholder="Telefone" class="form-control form-control-lg mt-3">
                        <input id="city" type="text" placeholder="Cidade" class="form-control form-control-lg mt-3">
                        <input id="email" type="email" placeholder="Email" class="form-control form-control-lg mt-3">
                        <input id="password" type="password" placeholder="Senha" class="form-control form-control-lg mt-3">
                        
                        <button class="btn btn-primary btn-lg btn-block mt-3">CRIAR MINHA CONTA</button>
                        
                        <div class="text-center mt-3">
                            <a href="?page=login">Já tenho conta!</a>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-6">
                <div class="jumbotron bg-dark text-white">
                    <h1 class="display-4">Empregô!</h1>
                    <h3>Conecte-se com quem precisa trabalhar.</h3>
                    
                    <hr>
                    
                    <br>
                    <ul>
                        <li>Crie e compartilhe vagas</li>    
                        <li>Receba os melhores perfis</li>    
                        <li>Análise inteligente para combinar a vaga com o profissional</li>    
                    </ul>
                </div>
            </div>
        </section>
    `;
}