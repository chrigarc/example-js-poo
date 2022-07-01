class Shape {
    constructor(color, nodeHTML, index) {
        this._color = color;
        this._node = nodeHTML;
        this._index = index;
        this._node.querySelector('.shape').classList.add('shape_type-' + this.constructor.name.toString().toLowerCase());
        this._node.querySelector('.shape').classList.add('shape_color-'+this._color);
        this._node.setAttribute('shape-index', index);

        this._setEventlistener();
    }
    animate(){
        this._node.querySelector('.shape').classList.add('shape_animation-rotate');
        setTimeout(() => {
            this._node.querySelector('.shape').classList.remove('shape_animation-rotate');
        }, 5000);
    }

    _setEventlistener(){
        this._node.querySelector('.card__button-animate').addEventListener('click', () => {
            this.animate();
        });
        this._node.querySelector('.card__button-area').addEventListener('click', () => {
            alert('area2: ' + this.calculateArea());
        });
        this._node.querySelector('.card__button-perimeter').addEventListener('click', () => {
            alert('perimetro2: ' + this.calculatePerimeter());
        });
    }

    calculateArea(){}
    calculatePerimeter(){}
}

class Square extends Shape {
    constructor(color, side, nodeHTML, index) {
        super(color, nodeHTML, index);
        this._side = side;

    }

    calculateArea() {
        return this._side**2;
    }

    calculatePerimeter() {
        return this._side * 4;
    }
}

class Circle extends Shape {
    constructor(color, radio, nodeHTML, index) {
        super(color, nodeHTML, index);
        this._radio = radio;
        this._node.querySelector('.shape__content').textContent = 'circle'
    }

    calculateArea() {
        return this._radio**2 * Math.PI;
    }

    calculatePerimeter() {
        return this._radio * 2 * Math.PI;
    }
}

class Triangle extends Shape {
    constructor(color, base, height,nodeHTML, index) {
        super(color, nodeHTML, index);
        this._base = base;
        this._height = height;
    }

    calculateArea() {
        return (this._base * this._height) / 2;
    }

    calculatePerimeter() {
        return this._base * 3;
    }
}

const shapes = [];

let index = 0;

let newNode = document.querySelector('.template-card').content.querySelector('.card').cloneNode(true);
shapes.push(new Circle('green', 5, newNode, index++));
document.querySelector('.root').append(newNode);

newNode = document.querySelector('.template-card').content.querySelector('.card').cloneNode(true);
shapes.push(new Square('red', 50, newNode, index++));
document.querySelector('.root').append(newNode);

newNode = document.querySelector('.template-card').content.querySelector('.card').cloneNode(true);
shapes.push(new Triangle('blue', 50, 65, newNode, index++));
document.querySelector('.root').append(newNode);

/* propagacion de eventos */
/*
document.querySelector('.root').addEventListener('click', (event) => {
    const target = event.target;
    const parent = target.parentElement;
    const index = parent.getAttribute('shape-index');
    if(target.classList.contains('card__button-animate')){
        shapes[index].animate();
    }else if(target.classList.contains('card__button-area')){
        alert('area:' + shapes[index].calculateArea());
    }if(target.classList.contains('card__button-perimeter')){
        alert('area:' + shapes[index].calculatePerimeter());
    }
});
*/
