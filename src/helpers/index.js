const fixedComponent = (nodo, screenY) => {

    const scroll = Math.floor(screenY);
    const nav = document.querySelector('.navegacion');

    if (scroll > 605) {
        nodo.classList.add('body--top');
        nav.classList.add('navegacion__fixed')
    }
    if (scroll < 605) {
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

export {
    fixedComponent,
    getApi
}