class Billete {
  constructor(v, c, url) {
    this.valor = v
    this.cantidad = c
    this.imagen = new Image()
    this.imagen.src = url
  }
}

function entregarDinero () {
  var t = document.getElementById('dinero')
  dinero = parseInt(t.value)

  for(var bi of caja) {

    if(dinero > 0) {
      div = Math.floor(dinero / bi.valor)

      if(div > bi.cantidad) {
        papeles = bi.cantidad
      } else {
        papeles = div
      }

      entregado.push(new Billete(bi.valor, papeles, bi.imagen.src))
      dinero = dinero - (bi.valor * papeles)

    }

  }

  if(dinero > 0) {
    resultado.innerHTML = 'No puedo darte esa cantidad'
  } else {
    for (var e of entregado) {
      if(e.cantidad > 0) {
        resultado.innerHTML += e.cantidad + ' billetes de $' + e.valor + '<br>'
        document.body.appendChild(e.imagen)
      }
    }
  }

}

var caja = []
var entregado = []
caja.push(new Billete(100, 5, 'Billete_de_100.png'))
caja.push(new Billete(50, 5, 'Billete_de_50.png'))
caja.push(new Billete(20, 5, 'Billete_de_20.png'))
caja.push(new Billete(10, 5, 'Billete_de_10.png'))
caja.push(new Billete(5, 5, 'Billete_de_5.png'))
caja.push(new Billete(1, 5, 'Billete_de_1.png'))
var dinero
var div = 0
var papeles = 0

var resultado = document.getElementById('resultado')
var b = document.getElementById('extraer')
b.addEventListener("click", entregarDinero)
