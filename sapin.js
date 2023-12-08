function sapinConsole(number){
    var txt = "";
    number += 1 // ajoute 1 au parametre
        for(i=1;i<=number;i++){ // Nombre de ligne vertical
            txt = "";

            for(j=i;j<number;j++){ //Ajoute des espaces devant
                txt += " ";
            }

            txt = txt +"/" // Ajoute un slash devant à chaque tour de boucle

            for(k=0;k<(i*2)-1;k++){
                txt += "*"; // Concatenation des étoile  
            }

            txt = txt +"\\"; //Ajoute un anti slash a la fin à chaque tour de boucle
        console.log(txt)
    }
}

function sapinHtml(number){
    var txt = "";
    var el = document.querySelector('.sapin-wrapper');
    
    number += 1
    for(i=1;i<=number;i++){
        for(j=i;j<number;j++){  el.innerHTML+="&ensp;" }

        el.innerHTML+="/"

        for(k=0;k<(i*2)-1;k++){
            var span = document.createElement('span');
            span.innerHTML = "*"
            el.appendChild(span)
        }

        el.innerHTML+="\\"
        el.append(document.createElement("br"))
    }
}


sapinConsole(4)
sapinHtml(40)