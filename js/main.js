let url = new URL(window.location.href);
const page = url.searchParams.get('page');

/*
 * url: funcao a ser chamada com o conteudo
 */
const routes = {
    'login': login,
    'vagas': jobs,
    'nova-vaga': newJob,
    'detalhes-vaga': jobDetails,
    'dashboard': dashboard,
    'home': dashboard,
    'cadastro': register,
}

let content = notFound();

if (page === null) {
    content = login();
} else if (routes[page]) {
    content = routes[page]();
}

document.getElementById('root').innerHTML = content;









