document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetID = this.getAttribute ("href").split(".html")[0];
        const targetElement = document.getElementById(targetID);
        if (targetElement) {
            window.scrollTo ({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
        else {
            window.location.href = this.getAttribute("href");
        }
    });
});
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const existingMessage = document.querySelector("#contactForm p.response-message");
        if(existingMessage) existingMessage.remove();
        const responseMessage = document.createElement("p");
        responseMessage.className = "response-message";
        if(name && email && message){
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailPattern.test(email)){
                responseMessage.textContent = "Please enter a valid email address!";
                responseMessage.classList.add("error");
            } 
            else {
                responseMessage.textContent = `Thank you, ${name}! We will respond to your message soon.`;
                responseMessage.classList.add("success");
            }
        }
        else {
            responseMessage.textContent = "Please fill in all the fields!";
            responseMessage.classList.add("error");
        }
        contactForm.appendChild(responseMessage);
    });
};