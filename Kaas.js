//Vraag 1:
document.write('<br>Is de kaas geel? : ' + prompt('Is de kaas geel?'));
var antwoord = ja;
var vraag;

if(antwoord == ja){

    vraag = true;
    document.write('<br>Zitten er gaten in? : ' + prompt('Zitten er gaten in?'));

}else{

    vraag = false;
    document.write('<br>Heeft de kaas blauwe schimmels? : ' + prompt('Heeft de kaas blauwe schimmels?'));
}
