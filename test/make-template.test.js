import images from '../data/images.js';

const test = QUnit.test;

function makeImageTemplate(image) {
    const html = /*html*/`
        <li>
            <h2>${image.title}</h2>
            <img src="${image.url}">
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}


QUnit.module('template creation test');

test('create a template to create image tiles', function(assert) {
    //arrange
    
    //act
    const result = makeImageTemplate(images[0]);
    const expected = ` 
        <li>
            <h2>UniWhal</h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        </li>`;

    //assert
    assert.htmlEqual(result, expected);
});