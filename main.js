let can = document.getElementById('can');
let ctx = can.getContext('2d');

const cart = {
    O: {
        x: can.width/2,
        y: can.height/2
    },

    transX: x => cart.O.x + x,
    transY: y => cart.O.y - y,
    transXtoA: (a,x) => cart.transX(a) + x,
    transYtoA: (a,y) => cart.transY(a) - y,
}

// x_n+1 = 1 - a*(x_n)**2 + y_n
// y_n+1 = b*x_n

const a = 1.4; 
const b = 0.3;

const nextx = (xn, yn) => 1 - a*(xn**2) + yn;
const nexty = (xn) => b*xn;

let x = [0];
let y = [0];

const scale = 200;

// fill
for(let i = 1; i < 10**5; i++) {
    x.push(nextx(x[i-1], y[i-1]));
    y.push(nexty(x[i-1]));
}

// draw 
for(let i = 0; i < x.length; i++) {
    ctx.beginPath();
    ctx.arc(cart.transX(x[i]*scale), cart.transY(y[i]*scale), 0.7, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
}