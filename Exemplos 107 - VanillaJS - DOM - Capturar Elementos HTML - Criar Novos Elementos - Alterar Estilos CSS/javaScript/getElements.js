/********* Web Technology Development Training **************************************************
 * Instructor  : Ivan J. Borchardt - linkedin.com/in/ivan-borchardt/
 *                                 - github.com/Ivan-J-Borchardt
 * Description : DOM Manipulation - Gettin Elements from the Window
 * Date        : 01.2021 
 ************************************************************************************************/

//Metodos para pegar elemento pelo ID
console.log("--  ID  ----------------------------------------");
var userId = document.getElementById("tdIdInfoUserId1");
console.log(userId);

var userId2 = document.querySelector("#tdIdInfoUserId1");
console.log(userId2);

//Métodos para pegar elemento Html pela clase

console.log("--CLASS NAME----------------------------------------");
var tabela = document.getElementsByClassName("tbClUsuarios");
console.log(tabela);

var tabela2 = document.querySelectorAll(".tbClUsuarios");
console.log(tabela2);

var userId3 = document.querySelectorAll(".tdClInfoUserId");
console.log(userId3);

//Métodos para pegar elemento Html pela clase
console.log("--TAG NAME----------------------------------------");
var elementoHtml = document.getElementsByTagName("th");
console.log(elementoHtml);

var elementoHtml2 = document.querySelectorAll("th");
console.log(elementoHtml2);

//Pegando o Radio Button que está selecionado
console.log("--RADIO ----------------------------------------");
var tipoUser = document.querySelector('input[name=inNmTipoUser]:checked').id;
console.log(tipoUser);

switch (tipoUser) {
    case "inIdTpDes":
        console.log("Desenvolvedor Selecionado");
        break;

    case "inIdTpAna":
        console.log("Analista Selecionado");
        break;

    case "inIdTpAdm":
        console.log("Administrador Selecionado");
        break;

    default:
        break;
}

