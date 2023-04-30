function quadrado() {
    let lado = document.getElementById('lado-quadrado').value
    let areaQuadrado = 
    lado * lado
    document.getElementById('result').innerHTML = `A: ${lado}x ${lado} = ${areaQuadrado}` 
}
function circulo() {
    let r = document.getElementById('raio').value
    let areaCirculo = 
    Math.PI * r * r
    document.getElementById('result').innerHTML = `A:  π x ${r} x ${r} ≅ ${areaCirculo.toFixed(2)}`
}
function triangulo() {
    let base = document.getElementById('base').value
    let altura =document.getElementById('altura').value
    let areaTriangulo =
    (base*altura)/2
    document.getElementById('result').innerHTML = `A: (${base} x ${altura})÷2 = ${areaTriangulo}`
}
function circun() {
    let r = document.getElementById('raio').value
    let compCircun = 
    2*Math.PI*r
    document.getElementById('result').innerHTML = `C = 2 * 3.14 * ${r} = ${compCircun.toFixed(4)}`
}
function trapezio() {
    let B = Number(document.getElementById('Base').value)
    let b = Number(document.getElementById('base').value)
    let h = Number(document.getElementById('altura').value)
    if (B<=b ) {
        alert('A BASE MENOR NÃO PODE SER MAIOR/IGUAL A BASE MAIOR')
        return;
    }
    let areaTrapezio = 
    ((B+b)*h)/2
    
    document.getElementById('result').innerHTML = `A: (${B}+${b})*${h}÷2 = ${areaTrapezio} `

}