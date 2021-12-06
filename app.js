// referencia al canvas y al context
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// resize del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// font size y columnas en las que dividimos la pantalla
const fontSize = 16;
const columns = canvas.width / fontSize;

// crear alfabeto con las letras
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

// crear array con las posiciones en x y
let positions = [];

for(let i=0; i < columns; i++) {
    positions[i] = 1;
}

// funcion draw que dibuja las letras en pantalla
const draw = () => {

    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.font = fontSize + 'px Monospace';
    ctx.fillStyle = '#0F0';

    for(let i=0; i < positions.length; i++) {

        ctx.fillText(alphabet.charAt( Math.floor(Math.random() * alphabet.length) ), i * fontSize, positions[i] * fontSize);
        positions[i]++;

        if(positions[i] * fontSize > canvas.height && Math.random() > 0.975){
            positions[i] = 0;
        }
    }
}

setInterval(draw,30);