class Shape {
    constructor() {}
  }
  
  class Triangle extends Shape {
    constructor() {
      super();
    }
  
    returnShape(color, text) {
        return new Promise((resolve, reject) => {
          const svg = `<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,10 10,190 190,190" style="fill:${color}"/>
            <text x="100" y="150" text-anchor="middle" alignment-baseline="middle" fill="black">${text}</text>
          </svg>`;
          resolve(svg);
        });
      }
  }
  
  class Circle extends Shape {
    constructor() {
      super();
    }
  
    returnShape(color, text) {
      return new Promise((resolve, reject) => {
        const svg = `<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="40" stroke="black" stroke-width="3" fill="${color}" />
          <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="black">${text}</text>
        </svg>`;
        resolve(svg);
      });
    }
  }
  
  class Square extends Shape {
    constructor() {
      super();
    }
  
    returnShape(color, text) {
      
      return new Promise((resolve, reject) => {
        const svg = `<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="100" style="fill:${color}" />
          <text x="150" y="50" text-anchor="middle" alignment-baseline="middle" fill="black">${text}</text>
        </svg>`;
        resolve(svg);
      });
    }
  }
  
  module.exports = { Shape, Triangle, Circle, Square };