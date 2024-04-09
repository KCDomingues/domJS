function converterreal(){
    var real= parseInt(document.getElementById("real").value);
    var dolar = document.getElementById("dolar")
    dolar.textContent= real * 5
}

function converterdolar(){
    var dolar= parseInt(document.getElementsByClassName("dolar")[0].value)
    var real = document.getElementsByClassName("real")[0];
    real.textContent = dolar / 5
    console.log(real)
}

function gerarnumero(){
    var number = Math.random()
    var elementos = document.getElementsByTagName("span")
    
    for (var i = 0; i < elementos.length; i++){
        if(elementos[i].className === "randomnumber"){
            elementos[i].textContent = Math.floor(Math.random() * 100) + 1 
        }
    }

}

function adicionarproduto(){
    var produto = document.getElementById("produto").value;
    var listaitem= document.createElement("li");
    listaitem.textContent= produto
    var lista= document.getElementById("lista").appendChild(listaitem);
    document.getElementById("produto").value=""
}

function atributovalor(){
    var conteudoInnerHTML = document.getElementById("conteudo").innerHTML;
    document.getElementById("campo-input").value=conteudoInnerHTML;
}