const useLink = (ref = './', text = '') => {

    const LinkComponent = () => (
        <li>
            <a href={ref} className="nav__link"> {text} </a>
        </li>
    );

    const Title = () => (
        <h1>
            <a href={ref} className='title'> {text} </a>
        </h1>
    )

    return [ LinkComponent, Title ];

}
export default useLink