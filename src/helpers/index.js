const nodo = document.body;

const fixedComponent = () => {
    
    const screenY = window.scrollY;
    const scroll = Math.floor(screenY);

    if(scroll < 500) return

    if (scroll > 605) {
        const nav = document.querySelector('.navegacion');
        nodo.classList.add('body--top');
        nav.classList.add('navegacion__fixed')
    }
    if (scroll < 605) {
        const nav = document.querySelector('.navegacion');
        nav.classList.contains('navegacion__fixed')
            ? (nav.classList.remove('navegacion__fixed'), nodo.classList.remove('body--top'))
            : null
    }
}

const getApi = async (url) => {

    const resp = await fetch(url);
    const json = await resp.json();

    if (!resp.ok) throw Error('error al acceder');

    return json;
}

const generatorId = () => {
    const date = Date.now();
    return String(date).slice(-5);
}

export {
    fixedComponent,
    getApi,
    generatorId
}