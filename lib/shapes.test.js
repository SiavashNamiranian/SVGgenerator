// const { describe } = require('node:test');
const {Triangle, Square, Circle} = require('./shapes');

describe('Triangle', () => {

    it('should return right code for Triangle', () => {
        const shape = new Triangle("blue","SVG", "white" );

         

        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="150" y="150" font-size="50" text-anchor="middle" fill="white">SVG</text>`);
    });
});

describe('Square', () => {

    it('should return right code for Triangle', () => {
        const shape = new Square("blue","SVG","white" );

         

        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200"><rect x="50" y="50" fill="blue" width="100" height="100"/><text x="150" y="150" font-size="50" text-anchor="middle" fill="white">SVG</text>`);
    });
});


describe('Circle', () => {

    it('should return right code for Triangle', () => {
        const shape = new Circle("blue","SVG", "white" );

         

        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200"><circle Cx="150" Cy="120" r="20" fill="blue"/><text x="150" y="135" font-size="50" text-anchor="middle" fill="white">SVG</text>`);
    });
});
