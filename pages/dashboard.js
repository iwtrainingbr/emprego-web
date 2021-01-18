function dashboard() {
    return  `
        ${navbar()}
        <h1>Dashboard</h1>
        
        <section class="row mt-5">
            <div class="col-md-3">
                <div class="card bg-success text-white card-body card-dashboard">
                    <div class="h1">
                        89
                        <i class="material-icons">grading</i>
                    </div>
                    Vagas cadastradas
                </div>   
                
                <div class="mt-3 card bg-dark text-white card-body card-dashboard">
                    <div class="h1">
                        89
                        <i class="material-icons">forum</i>
                    </div>
                    Propostas em Andamento
                </div>   
            </div>
            
            <div class="col-md-3">
                <div class="card bg-primary text-white card-body card-dashboard">
                    <div class="h1">
                        89
                        <i class="material-icons">group</i>
                    </div>
                    Propostas de Contato
                </div>  
                
                <div class="mt-3 card bg-danger text-white card-body card-dashboard">
                    <div class="h1">
                        89
                        <i class="material-icons">block</i>
                    </div>
                    Perfis Bloqueados
                </div>  
            </div>
            
            <div class="col-md-6">
                <div class="card card-body card-dashboard">
                    <div class="h1">
                        Perfis em alta
                        <i class="material-icons">reduce_capacity</i>
                    </div>
                    <hr>
                    
                    <div>
                        <p class="h3 text-muted">Designer Gráfico</p>
                        <span class="badge badge-info">3 anos XP</span>
                        <span class="badge badge-success">PhotoShop/Illustrator</span>
                        <span class="badge badge-primary">Redes Computadores</span>
                        <span class="badge badge-dark">CLT</span>
                        <span class="badge badge-warning">Apenas Remoto</span>
                    </div>
                    <hr>
                    
                    <div>
                        <p class="h3 text-muted">Desenvolvedor Web</p>
                        <span class="badge badge-info">10 anos XP</span>
                        <span class="badge badge-success">PHP/Javascript</span>
                        <span class="badge badge-primary">Sistemas de Informação</span>
                        <span class="badge badge-dark">CLT/PJ</span>
                        <span class="badge badge-warning">Remoto/Hibrido</span>
                    </div>
                    <hr>
                    
                    <div>
                        <p class="h3 text-muted">Severino Fullcicle</p>
                        <span class="badge badge-info">30 anos XP</span>
                        <span class="badge badge-success">Construção Civil</span>
                        <span class="badge badge-primary">FAVICE</span>
                        <span class="badge badge-dark">PJ/Estágio</span>
                        <span class="badge badge-warning">Presencial</span>
                    </div>
                    <hr>
                    
                    <div class="text-right">
                        <a href="#" class="h5">
                            Ver mais 
                            <i style="margin-left: 10px; font-size: 28px;" class="material-icons">east</i>
                        </a>
                    </div>
                </div>  
            </div>
        </section>
    `;
}