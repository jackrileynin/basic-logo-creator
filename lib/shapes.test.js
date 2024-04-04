
const { Triangle, Circle, Square } = require('./shapes');

describe('Shape Classes', () => {
  test('Triangle render method should return SVG string with correct color', async () => {
    const triangle = new Triangle();
    const color = '#FF0000'; // Red color
    const text = 'Sample Text';
    const svg = await triangle.returnShape(color, text);
    
    expect(svg).toContain('<polygon points="50,10 10,190 190,190" style="fill:#FF0000"/>');
    expect(svg).toContain(`<text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="black">${text}</text>`);
  });

  test('Circle render method should return SVG string with correct color', async () => {
    const circle = new Circle();
    const color = '#00FF00'; // Green color
    const text = 'Sample Text';
    const svg = await circle.returnShape(color, text);
    
    expect(svg).toContain('<circle cx="50%" cy="50%" r="40" stroke="black" stroke-width="3" fill="#00FF00" />');
    expect(svg).toContain(`<text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="black">${text}</text>`);
  });

  test('Square render method should return SVG string with correct color', async () => {
    const square = new Square();
    const color = '#0000FF'; // Blue color
    const text = 'Sample Text';
    const svg = await square.returnShape(color, text);
    
    expect(svg).toContain('<rect width="300" height="100" style="fill:#0000FF" />');
    expect(svg).toContain(`<text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="black">${text}</text>`);
  });
});
