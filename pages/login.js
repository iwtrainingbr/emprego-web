function login() {
    return  `
        <section class="row mt-5">
            <div class="col-md-8">
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
            <div class="col-md-4">
                <div class="jumbotron bg-white">
                    <h3>Identifique-se</h3>
                    <hr>
                    <form>
                        <input type="email" placeholder="Email" class="form-control form-control-lg">
                        <input type="password" placeholder="Senha" class="form-control form-control-lg mt-3">
                        
                        <a href="?page=home" class="btn btn-primary btn-lg btn-block mt-3">ENTRAR</a>
                        
                        <div class="text-center mt-3">
                            <a href="?page=cadastro">Não tenho conta!</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    `;
}