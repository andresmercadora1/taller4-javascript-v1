// 16.	Del siguiente arreglo [2,4,6,8,10,12,14,16,18,20,22] mostrar en html los elementos ordenados aleatoriamente.

var aleatorio =  [2,4,6,8,10,12,14,16,18,20,22];

document.write('Arreglo original: ')
for(var arr of aleatorio) {
    document.write(arr + '  ')
}

document.write('<br/>Arreglo aleatoriamente: ')
for(var i = 0; i < aleatorio.length; i++) {
    var random = Math.floor(Math.random() * aleatorio.length);
    document.write(aleatorio[random] + '  ')
}