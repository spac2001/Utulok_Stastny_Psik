/* Adoption Showcase foto information aboud dogs on click*/

var textAboutDog = document.getElementsByClassName("dog-photo");

var previousTextAboutDog;

for (var i = 0; i < textAboutDog.length; i++) {
    textAboutDog[i].onclick = function() {
        var classes = this.classList;
        if (classes.contains("show")) {
            classes.remove("show");
        } else {
            if (previousTextAboutDog != null)
                previousTextAboutDog.classList.remove("show");
            previousTextAboutDog = this;
            classes.add("show");
        }
    }
}

function stopPropagarion(event){
    event.stopPropagation();
}


/*

Risom upravene doplnene o togglr

var textAboutDog = document.getElementsByClassName("dog-photo");

var previousTextAboutDog;

for (var i = 0; i < textAboutDog.length; i++) {
    textAboutDog[i].onclick = function() {
        const added = this.classList.toggle('show');
            if (previousTextAboutDog != null)
                previousTextAboutDog.classList.remove("show");
                if(added) {
                    previousTextAboutDog = this;
                }
        
    }
}

function stopPropagarion(event){
    event.stopPropagation(); 
} */ 