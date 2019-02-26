function makeImageTemplate(images) {
    const html = /*html*/`
        <li>
            <h2>${images[0].title}</h2>
            <img src="${images[0].url}">
        </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default makeImageTemplate;