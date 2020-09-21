var antwoord;

antwoord=prompt("Is de kaas geel?");

if(antwoord=="ja"){
    antwoord=prompt("Zitten er gaten in?");
    if(antwoord=="ja"){
        antwoord=prompt("Is de kaas belachelijk duur?");
        if(antwoord=="ja"){
            document.write("Emmenthaler");
        }
        else{
            document.write("Leerdammer");
        }
    }
    else{
        antwoord=prompt("Is de kaas hard als steen?");
        if(antwoord=="ja"){
            document.write("Pannigiano Reggiano");
        } 
        else{
        document.write("Goudse kaas");
        
}
}
}else{
    antwoord=prompt("Heeft de kaas blauwe schimmels?");
    if(antwoord=="ja"){
        antwoord=prompt("Heeft de kaas een korst?");
        if(antwoord=="ja"){
            document.write("Bleu de Rochbaron");
        }
        else{
            document.write("Founne d'Ambert");

        }
    }
    else{
        antwoord=prompt("Heeft de kaas een korst?");
        if(antwoord=="ja"){
            document.write("Camembert");
        }
        else{
            document.write("Mozzarella");
        }
        }
    }