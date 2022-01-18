function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) { // Se o usuário não digitar nada, ira aparecer uma msg
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // Para limpar a tabuada a cada vez que digitar um número novo
        while (c <= 10) {
            let item = document.createElement('option') // Cria os options dentro do select
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item) // Mostra o calculo :)
            c++
        }
    }
}