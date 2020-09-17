var antwoord;

antwoord = prompt("is de kaas geel?");
// Antwoord is ja
if (antwoord == "ja"){
    document.write("De kleur is geel.<br>");
    antwoord = prompt("Heeft de gaten?");

    if(antwoord == "ja"){
        document.write("De kaas heeft gaten.<br>");
        antwoord= prompt("Is de kaas belachelijk duur?");
    }
        if(antwoord == "ja"){
            document.write("De kaas is belachelijk duur.<br>");
            document.write("Emmenthaler<br>.");
          
//Antwoord is nee
}else{ 
    document.write("De kaas is niet belachelijk duur.<br>");
    document.write("Leerdammer.<br>");
    }
        
    }else{
        document.write("De kaas is hard als steen.<br>");
        document.write("Pannigiano Reggiano?");    
    }
