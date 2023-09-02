function escopo() {
    const form = document.getElementById('formulario');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let p = document.getElementById('peso').value;
        let a = document.getElementById('altura').value;

        let peso = Number(p.replace(",", "."));
        let altura = Number(a.replace(",", "."));


        var imc = peso / (altura * altura);


        console.log(imc);

        if (imc >= 18.5 && imc <= 24.9) {


            resultado.innerHTML += `Peso normal - ${imc.toFixed(2)}`;

        } else if (imc >= 25 && imc <= 29.9) {

            console.log('Sobrespeso');
            resultado.classList.add("paragrafo-resultado");
            resultado.innerHTML += `Sobrepeso - ${imc.toFixed(2)}`;


        } else if (imc >= 30 && imc <= 34.9) {

            console.log('Obresidade 1');
            resultado.classList.add("paragrafo-resultado");
            resultado.innerHTML += `Obesidade 1 - ${imc.toFixed(2)}`;


        } else if (imc >= 35 && imc <= 39.9) {

            console.log('Obresidade 2');
            resultado.classList.add("paragrafo-resultado");
            resultado.innerHTML += `Obesidade 2 - ${imc.toFixed(2)}`;


        } else if (imc >= 40) {

            console.log('Obresidade 3');
            resultado.classList.add("paragrafo-resultado");
            resultado.innerHTML += `Obesidade 3 - ${imc.toFixed(2)}`;


        } else {
            console.log('valor inválido');
            resultado.classList.add("bad");
            resultado.innerHTML += `Valor invalido - ${imc.toFixed(2)}`;

        }


    });
}

escopo();