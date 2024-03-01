function customRender(reactElement, container) {
    //  const domElement = document.createElement('p');

    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {

        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);

    }
    container.appendChild(domElement);

}


const mainContainer = document.querySelector('#root');
//now i have to render it
// supppose i have to render a tag in it

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


//method jo above element root mein daalde
// two pareamere - kya add krna h , kha krna hain
customRender(reactElement, mainContainer);