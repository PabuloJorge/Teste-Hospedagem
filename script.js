function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = window.document.querySelector('input#txtano')
    var resultado = window.document.querySelector('div#resultado')

    if (txtano.value.length == 0 || Number(txtano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(txtano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = "homem"
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/menino.png')
                resultado.innerHTML = `Foi detectado um menino com ${idade} ano(s)`
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem.png')
                resultado.innerHTML = `Foi detectado um jovem com ${idade} anos`
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/homem.png')
                resultado.innerHTML = `Foi detectado um adulto com ${idade} anos`
            } else {
                //velho
                img.setAttribute('src', 'imagens/velho.png')
                resultado.innerHTML = `Foi detectado um velho com ${idade} anos`
            }
        } else {
            genero = "mulher"
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/menina.png')
                resultado.innerHTML = `Foi detectado uma menina com ${idade} ano(s)`
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/moça.png')
                resultado.innerHTML = `Foi detectado uma jovem com ${idade} anos`
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/mulher.png')
                resultado.innerHTML = `Foi detectado uma mulher com ${idade} anos`
            } else {
                //velho
                img.setAttribute('src', 'imagens/velha.png')
                resultado.innerHTML = `Foi detectado uma velha com ${idade} anos`
            }

        }

        resultado.style.textAlign = 'center'
        resultado.appendChild(img)

    }
}