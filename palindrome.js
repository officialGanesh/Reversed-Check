console.log("Palindrome in javascript 🔥");

class UI{

    static showAlert(msg){

        let cont = document.querySelector(".container");
        let title = document.querySelector("#title");
        let div = document.createElement("div");
        div.classList = `alert alert-info`;
        div.innerHTML = `<h5>${msg}</h5>`;
        cont.insertBefore(div,title);
        
        setTimeout(()=>{document.querySelector(".alert").remove()},1500);
    };

    static falseOutput(){

        let cont = document.querySelector(".container");  
        let div = document.createElement("div");
        div.classList = `alert-primary`;
        div.innerHTML = `<h3>Not a Palindrome 😢</h3>`
        div.style.cssText = `width:43rem; height:20rem; padding-top:7rem; border-radius:10px;`;
        console.log(div);
        cont.append(div);
    };

    static trueOutput(){

        let cont = document.querySelector(".container");  
        let div = document.createElement("div");
        div.classList = `alert-primary`;
        div.innerHTML = `<h3> Palindrome ✔️</h3>`
        div.style.cssText = `width:43rem; height:20rem; padding-top:7rem; border-radius:10px;`;
        console.log(div);
        cont.append(div);
    };

};


