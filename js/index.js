window.onload = () => {

const buttons= document.querySelectorAll(".button");
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.classList.contains("active")) {
                button.classList.remove("active");
              }else {
                    buttons.forEach((button) => {
                      button.classList.remove("active");
                    });
              }
              button.classList.add("active");
            //  console.log(document.getElementsByClassName("button"));

        });
        
        const field=document.getElementById("bill").textContent;
            
        
        
       // console.log(`Hola Mundo ${field}`);
        


      });
       


}