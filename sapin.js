var logo = require("./images/neige.gif")

function sapinConsole(number){
    var txt = "";
    number += 1 // ajoute 1 au parametre
        for(i=1;i<=number;i++){ // Nombre de ligne vertical
            txt = "";

            txt+=" ".repeat(number-i)  //Ajoute des espaces devant

            txt = txt +"/" // Ajoute un slash devant à chaque tour de boucle

            for(k=0;k<(i*2)-1;k++){
                txt += "*"; // Concatenation des étoile  
            }

            txt = txt +"\\"; //Ajoute un anti slash a la fin à chaque tour de boucle
        console.log(txt)
    }
}

function sapinHtml(number){
    var el = document.querySelector('.sapin-wrapper');
    
    number += 1
    for(i=1;i<=number;i++){
        //el.innerHTML+="&ensp;".repeat(number-i)
        el.innerHTML+="<span class='slash'>/</span>"
  
        for(k=0;k<(i*2)-1;k++){
            var span = document.createElement('span');
            span.innerHTML = "*"
            span.className = "etoile"
            el.appendChild(span)
        }

        el.innerHTML+="<span class='antislash'>\\</span>"
        el.append(document.createElement("br"))
    }
}

  
sapinConsole(4)
sapinHtml(40)
