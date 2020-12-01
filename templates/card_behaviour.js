
let greeting_array = [
    
    {
        greeting: "Hi",
        name: "Anam"
    },

    {
        greeting: "Hello",
        name: "Myra"
    },

    {
        greeting: "Hey",
        name: "Ashi"
    },

    {
        greeting: "Hi!How are you?",
        name: "Minakshi"
    },

    {
        greeting: "Hello",
        name: "Anamika"
    },

    {
        greeting: "Bonjour",
        name: "Jack"
    },

    {
        greeting: "Hello",
        name: "Jill"
    },

    {
        greeting: "Hi",
        name: "Humpty"
    },

    {
        greeting: "Good morning!",
        name: "Dumpty"
    }
]
var div_string= "", i;
for (i=0; i<9; i++){

    div_string += "<div class='card'> <div class='title'> <h4>" + greeting_array[i].greeting + "</h4><p> (Greeting)</p></div>"+"<div class='des'><h4> " + greeting_array[i].name + "</h4><p> (name)</p></div></div>";
}
document.getElementById("createcard").innerHTML = div_string;