const url = 'info.json';
const container = document.getElementById('container__empleos');

    const xhr = new XMLHttpRequest();
    xhr.open('get', url);
    
    xhr.addEventListener('load', e => {
        if (e.target.status === 200) {
            let response = e.target.responseText;

            try {
                const posts = JSON.parse(response);
                const empleos = posts.empleos;
                empleos.forEach(empleo => {
                    container.innerHTML += `
                        <article class="article-post">
                            <div class="article-post__img">
                            <img src="../media/empresas/${empleo.img}" alt="${empleo.name}">
                            </div>
                            <div class="article-post__content">
                            <h2 class="article-post__title">${empleo.name}</h2>
                            <p class="article-post__body">${empleo.description}</p>
                            </div>
                        </article>`;
                });
            } catch (error) {
                console.log('Error en la conversión:', error.message);
            }
        }
    });

    xhr.send();