var divList = document.createElement('div');

var colCounter = 0; 
for(var i = 1; i <= 36; i++){
    var element = document.createElement('div');
    element.className = "numDiv";
    element.innerHTML = "" + i; 
    divList.appendChild(element);

    if(i%4 == 0 ){
        colCounter +=1; 

        if(colCounter%3 == 0){
            divList.className = "divListReverse"   
        }
        else{
            divList.className = "divList";
        }
        document.getElementById('flexContainer').appendChild(divList);

        divList = document.createElement('div');
    }
}
