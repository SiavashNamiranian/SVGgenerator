class Shape {
    constructor(color, text, text_color) {
        this.color = color;
        this.text = text;
        this.fill = text_color
    }
}

class Triangle extends Shape {
    constructor(color, text, text_color) {
        super(color, text, text_color)
    }

    render(){
        return `<svg version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/><text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.fill}">${this.text}</text>`
    }
}

class Square extends Shape {
    constructor(color, text, text_color) {
        super(color, text, text_color)
    }

    render(){
        return `<svg version="1.1" width="300" height="200"><rect x="100" y="50" fill="${this.color}" width="100" height="100"/><text x="150" y="120" font-size="50" text-anchor="middle" fill="${this.fill}">${this.text}</text>`
    }
}

class Circle extends Shape {
    constructor(color, text, text_color) {
        super(color, text, text_color)
    }

    render(){
        return `<svg version="1.1" width="300" height="200"><circle Cx="150" Cy="120" r="75" fill="${this.color}"/><text x="150" y="135" font-size="50" text-anchor="middle" fill="${this.fill}">${this.text}</text>`
    }
}

module.exports = {Triangle, Square, Circle}