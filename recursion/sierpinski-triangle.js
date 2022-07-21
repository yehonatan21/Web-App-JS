`use strict`

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const createTriangle = (pos, sidelen) => {
    ctx.beginPath();
    ctx.moveTo(...pos);

    ctx.lineTo(pos[0] + sidelen / 2, pos[1] - sidelen * Math.sin(Math.PI / 3));
    ctx.lineTo(pos[0] + sidelen, pos[1]);
    ctx.lineTo(...pos);
    ctx.fillStyle = '#eee';

    ctx.closePath();
    ctx.fill();
};

const createSierpinskiTriangle = (pos, sidelen, depth) => {
    const innerTriangleSidelen = sidelen / 2;
    const innerTrianglesPositions = [pos, [pos[0] + innerTriangleSidelen, pos[1]], [pos[0] + innerTriangleSidelen / 2, pos[1] - Math.sin(Math.PI / 3) * innerTriangleSidelen]]; // these positions are the same as what was used in the createTriangle function
    if (depth == 0) {
        innerTrianglesPositions.forEach((trianglePosition) => {
            createTriangle(trianglePosition, innerTriangleSidelen);
        });
    } else {
        innerTrianglesPositions.forEach((trianglePosition) => {
            createSierpinskiTriangle(trianglePosition, innerTriangleSidelen, depth - 1);
        });
    }
}

let tr = document.getElementById('sierpinski-triangle');
tr.addEventListener('submit', function (event) {
    event.preventDefault();

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    let size = document.getElementById('size').value;
    let amonut = document.getElementById('amount').value;
    canvas.height = size;
    canvas.width = size;

    createSierpinskiTriangle([0, size], size, amonut);
});

