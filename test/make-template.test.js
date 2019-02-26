import images from '../data/images.js';
import makeImageTemplate from '../make-image-template.js';

const test = QUnit.test;

QUnit.module('template creation test');

test('create a template to create image tiles', function(assert) {
    //arrange
    const result = makeImageTemplate(images);

    //act
    const expected = /*html*/ `
        <li>
            <h2>UniWhal</h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        </li>
    `;

    //assert
    assert.htmlEqual(result, expected);
});