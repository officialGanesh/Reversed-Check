console.log("Palindrome in javascript 🔥");

class UI{

    static showAlert(msg){

        let cont = document.querySelector(".container");
        let title = document.querySelector("#title");
        let div = document.createElement("div");
        div.classList = `alert alert-info`;
        div.innerHTML = `<h5>Something Went Wrong: ${msg}</h5>`;
        cont.insertBefore(div,title);
        
        setTimeout(()=>{document.querySelector(".alert").remove()},1500);
    };

    static falseOutput(){

        let cont = document.querySelector(".container");  
        let div = document.createElement("div");
        div.classList = `alert-primary`;
        div.id = "false"
        div.innerHTML = `<h3>Not a Palindrome 😢</h3>`
        div.style.cssText = `width:43rem; height:20rem; padding-top:7rem; border-radius:10px;`;
        cont.append(div);
        setTimeout(()=>{document.querySelector("#false").remove()},1200);
    };

    static trueOutput(){

        let cont = document.querySelector(".container");  
        let div = document.createElement("div");
        div.classList = `alert-primary`;
        div.id = "true"
        div.innerHTML = `<h3> Palindrome ✔️</h3>`
        div.style.cssText = `width:43rem; height:20rem; padding-top:7rem; border-radius:10px;`;
        cont.append(div);
        setTimeout(()=>{document.querySelector("#true").remove();},1200);
        
    };

};

document.querySelector("#check").addEventListener('click',(e)=>{

    let userText = document.querySelector("#text");
    
    if(userText.value==='' || userText.value===null){
        UI.showAlert("No Input Given.")
    }else{

        let reversedUserText = userText.value.split("").reverse().join("");
        // Check for palindrome using ternary operator
        (userText.value===reversedUserText) ? UI.trueOutput() : UI.falseOutput()
    }
    
    userText.value = ""
});
