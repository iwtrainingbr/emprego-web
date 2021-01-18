function removeJob(id) {
    if (!confirm("Você tem certeza que deseja excluir essa vaga?")) {
        return;
    }

    document.getElementById('table-jobs').innerHTML = '';

    fetch(`${API_URL}/jobs/${id}.json`, {method: 'DELETE'})
        .then(response => response.json())
        .then(() => jobs());
}

function jobs() {
    let data = [];

    fetch(API_URL+'/jobs.json')
        .then(response => response.json())
        .then(response => {
            for (let id in response) {
                response[id].id = id;
                data.push(response[id]);
            }

            let tableData = data.map(job => {
                return `
                    <tr>
                        <td>${job.title}</td>
                        <td><span class="badge badge-success">Ativa</span></td>
                        <td>99</td>
                        <td>01/01/2021 09:45</td>
                        <td>
                            <a class="btn btn-light" href="?page=detalhes-vaga&id=${job.id}">Detalhes</a>
                            <button class="btn btn-warning">Editar</button>
                            <button class="btn btn-danger" onclick="removeJob('${job.id}')">Excluir</button>
                        </td>
                    </tr>
                `;
            });

            document.getElementById('table-jobs').innerHTML = tableData.join('');
        });


    return  `
        ${navbar()}
        
        <section class="row mt-5">
            <div class="col-md-12">
                <h1>Minhas Vagas</h1>
            </div>
        
            <div class="col-md-12">
                <div class="card card-body">
                    <div class="table-responsive">
                        <table class="table table-hover table-striped">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Titulo</th>
                                    <th>Status</th>
                                    <th>Perfis interessados</th>
                                    <th>Data</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody id="table-jobs">${data}</tbody>
                        </table>
                    </div>
                </div>    
            </div>
        </section>
    `;
}