const hostname = window.location.hostname;

document.body.innerHTML = '<button> Switch Off all </button>'

switch(hostname){
    case "www.youtube.com" : 
        alert("youtube")
        break;
    
    case "www.instagram.com" :
        alert("Insta")
        break;
}