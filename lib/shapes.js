// Class constructor for Circle
class Circle {
    constructor(answers){
        this.answers = answers
    } 
    toString(){
        return`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.answers.shapeColor}" />
            <text x="150" y="110" font-size="40" text-anchor="middle" fill="${this.answers.textColor}">${this.answers.logoText}</text>
        </svg>
        `;
    }
    setColor(color){
        this.answers.shapeColor = color;
    }
    render(){
        return`<circle cx="150" cy="100" r="80" fill="${this.answers.shapeColor}"/>`;
    }
}

// Class constructor for Triangle
class Triangle {
    constructor(answers){
        this.answers = answers
    } 
    toString(){
        return`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.answers.shapeColor}" />
            <text x="150" y="125" font-size="30" text-anchor="middle" fill="${this.answers.textColor}">${this.answers.logoText}</text>
        </svg>
        `;
    }
    setColor(color){
        this.answers.shapeColor = color;
    }
    render(){
        return`<polygon points="150, 18 244, 182 56, 182" fill="${this.answers.shapeColor}"/>`;
    }
}

// Class constructor for Square
class Square {
    constructor(answers){
        this.answers = answers
    } 
    toString(){
        return`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="225" height="125"  fill="${this.answers.shapeColor}" />
            <text x="160" y="125" font-size="40" text-anchor="middle" fill="${this.answers.textColor}">${this.answers.logoText}</text>
        </svg>
        `;
    }
    setColor(color){
        this.answers.shapeColor = color;
    }
    render(){
        return`<rect x="50" y="50" width="225" height="125" fill="${this.answers.shapeColor}"/>`;
    }
}
module.exports = {Circle, Triangle, Square};