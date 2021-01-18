function createJob() {
    event.preventDefault();

    document.getElementById('btn-confirm').setAttribute("disabled", "disabled");
    document.getElementById('btn-confirm').innerHTML = 'Pronto, aguarde...';

    let data = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        contract_type: document.getElementById('contract_type').value,
        salary_min: document.getElementById('salary_min').value,
        salary_max: document.getElementById('salary_max').value,
        requirements: document.getElementById('requirements').value,
        journey: document.getElementById('journey').value,
        address: document.getElementById('address').value,
        remote: document.getElementById('remote').checked,
        presential: document.getElementById('presential').checked,
    };

    fetch(API_URL+'/jobs.json', {
        method: "POST",
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(() => {
            location.href="?page=vagas";
        })
    ;
}


function newJob() {
    return  `
        ${navbar()}
        <section class="row mt-5">
            <div class="col-md-12">
                <h1>Nova Vaga</h1>
            </div>
            
            <div class="col-md-12">
                <div class="card card-body">
                    <form method="post" action="" onsubmit="createJob()">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="title">Titulo</label>
                                <input 
                                    type="text" 
                                    id="title" 
                                    class="form-control"
                                    placeholder="Ex: Desenvolvedora Backend Plena"
                                    required
                                >
                                <br>
                                
                                <label for="description">Descrição da Vaga</label>
                                <textarea id="description" class="form-control"></textarea>
                                <br>
                                
                                <label for="contract_type">Tipo de Contratação</label>
                                <select id="contract_type" class="form-control" required>
                                    <option selected> -- Selecione -- </option>
                                    <option>CLT</option>
                                    <option>PJ</option>
                                    <option>Estágio</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <p>Tipo de Vaga</p>
                                <label for="remote">
                                    Remoto
                                    <input type="checkbox" id="remote">
                                </label>
                                <label class="ml-4" for="presential">
                                    Presencial
                                    <input type="checkbox" id="presential">
                                </label>
                                <br><br>
                                
                                <label for="salary">Faixa Salarial (minimo e maximo)</label>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" id="salary_min" placeholder="Minimo" class="form-control">
                                    </div>
                                    <div class="col">
                                        <input type="text" id="salary_max" placeholder="Maximo" class="form-control">    
                                    </div>
                                </div>
                                <br>
                                
                                <label for="requirements">Requisitos</label>
                                <input type="text" class="form-control" id="requirements" placeholder="Ex: PHP, HTML, CSS" required>
                                <br>
                                
                                <label for="journey">Jornada</label>
                                <select id="journey" class="form-control">
                                    <option> -- Selecione -- </option>
                                    <option>20 horas/semana</option>
                                    <option>30 horas/semana</option>
                                    <option>40 horas/semana</option>
                                </select>
                                <br>
                                
                                <label for="address">Localização da Empresa</label>
                                <textarea id="address" class="form-control"></textarea>
                                <br>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <button id="btn-confirm" class="btn btn-primary btn-lg">Criar Vaga</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    `;
}