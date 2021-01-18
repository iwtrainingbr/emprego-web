function jobDetails() {
    let url = new URL(window.location.href);
    const id = url.searchParams.get('id');

    fetch(`${API_URL}/jobs/${id}.json`)
        .then(response => response.json())
        .then(response => {
            document.getElementById('title').innerHTML = response.title;
            document.getElementById('description').innerHTML = response.description;
            document.getElementById('salary').innerHTML = `R$ ${response.salary_min} ~ R$ ${response.salary_max}`;
            document.getElementById('contract_type').innerHTML = response.contract_type;
            document.getElementById('requirements').innerHTML = response.requirements.split(', ').map(item => {
                return `<span class="badge badge-secondary">${item}</span> `
            }).join('');
            document.getElementById('journey').innerHTML = response.journey;
        });

    return  `
        ${navbar()}
        <h1>Detalhes da Vaga</h1>
        
        <section class="row mt-5">
            <div class="col-md-6">
                <p>
                    <strong>Titulo</strong> 
                    <span id="title"></span>
                </p>
                <hr>
                <p>
                    <strong>Descrição</strong> 
                    <span id="description"></span>
                </p>
                <hr>
                <p>
                    <strong>Salário</strong> 
                    <span id="salary"></span>
                </p>
                <hr>
                <p>
                    <strong>Jornada</strong> 
                    <span id="journey"></span>
                </p>
                <hr>
                <p>
                    <strong>Requisitos</strong> 
                    <span id="requirements"></span>
                </p>
                <hr>
                <p>
                    <strong>Tipo de Contrato</strong> 
                    <span id="contract_type"></span>
                </p>
                <hr>
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