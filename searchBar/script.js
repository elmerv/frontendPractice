let userCollection = [
    {
        name: "Toby Flenderson", 
        location: "Cuba"
    }, 
    {
        name: "Angela Martin", 
        location: "Beet Farm"
    },
    {
        name: "Pam Beesley", 
        location: "Art Studio"
    },
    {
        name: "Meredith Palmer", 
        location: "Bar"
    },
    {
        name: "Ryan Howard", 
        location: "Business School"
    },
    {
        name: "Stanley Hudson", 
        location: "Miami"
    },
    {
        name: "Phyllis Margaret Vance", 
        location: "Vance Refrigerations"
    }
]

for(let i = 0; i < userCollection.length; i++ ){
    let element = document.createElement('div');
    element.innerHTML = userCollection[i].name;
    element.className = "person"
    document.getElementById('resultsContainer').appendChild(element);
}