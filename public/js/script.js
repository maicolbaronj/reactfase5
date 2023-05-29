function procesarcuestionario2() {
    let total = 5;
    let puntos = 0;

    let myForm = document.forms["formulario"];
    let respuestasCorrectas = ["c", "a", "b","c","b"];

    for (let i = 1; i <= total; i++) {
        if (myForm["r" + i].value == null ||
            myForm["r" + i].value == "") {
            alert("Favor responder todas las preguntas antes de enviar el formulario.");
            return false;
        } else {
            if (myForm["r" + i].value === respuestasCorrectas[i - 1])
                puntos++
        }
    }
    let resultado = document.getElementById("resultado");
    alert("Obtuviste " + puntos + " puntos de " + total + " posibles.");

}

function procesarcuestionario1() {
    let total = 5;
    let puntos = 0;

    let myForm = document.forms["formulario"];
    let respuestasCorrectas = ["a", "b", "a","c","a"];

    for (let i = 1; i <= total; i++) {
        if (myForm["r" + i].value == null ||
            myForm["r" + i].value == "") {
            alert("Favor responder todas las preguntas antes de enviar el formulario.");
            return false;
        } else {
            if (myForm["r" + i].value === respuestasCorrectas[i - 1])
                puntos++
        }
    }
    let resultado = document.getElementById("resultado");
    alert("Obtuviste " + puntos + " puntos de " + total + " posibles.");

}