let opcao = ""

do {
    opcao = prompt(
        "Escolha o tipo de area de deseja calcular: "+ 
        "\n 1. Área do Triângulo" +
        "\n 2. Área do Retângulo " +
        "\n 3. Área do Quadrado" +
        "\n 4. Área do Trapézio" +
        "\n 5. Área do Círculo" +
        "\n 6. Sair"
    )

    switch (opcao) {
        case "1":
            const baseT = prompt("Qual a base do Triângulo?")
            const alturaT = prompt("Qual a altura do Triângulo?")

            areaTriangulo(baseT, alturaT)
                
            
            break;
        case "2":
            const baseR = prompt ("Qual a base do Retângulo?")
            const alturaR = prompt ("Qual a altura do Retângulo?")

            areaRetangulo(baseR,alturaR)
            break;
        case "3":
            const ladoQ = prompt ("Qual o lado do Quadrado?")
            
            areaQuadrado(ladoQ)
            break;
        case "4":
            const ladoMa = prompt ("Qual o lado maior do Trapézio?")
            const ladoMe = prompt ("Qual o lado menor do Trapézio?")
            const alturatr = prompt ("Qual a altura do Trapézio?")

            areaTrapezio(ladoMa, ladoMe, alturatr)
            break;
        case "5":
            const raioC = prompt("Qual é o raio do Circulo?")
            areaCirculo(raioC)
            break;
        case "6":
            alert('Encerrando...')
            break;
        default:
            alert('Invalido!')
    }
} while (opcao !=="6")


function areaTriangulo (base, altura){
    const resultado = (base * altura / 2)
    alert("A área do triângulo é: " + resultado)

}

function areaRetangulo (base, altura){
    const resultado = (base*altura)
    alert ("A área do retãngulo é: " + resultado)
}

function areaQuadrado (lado){
    const resultado = (lado*lado)
    alert ("A área do Quadrado é: " + resultado)
}

function areaTrapezio (ladoMaior, ladoMenor, altura){
    const resultado = ((ladoMaior + ladoMenor) * altura/2)
    alert ("A área do Trapézio é: " + resultado)
}

function areaCirculo (raio, pi =3.14){
    const resultado = (pi*raio*raio)
    alert ("A área do circulo é: " + resultado)
}