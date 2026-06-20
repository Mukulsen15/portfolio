// const cards = document.querySelectorAll(".feature-card");

// window.addEventListener("scroll",()=>{

// cards.forEach(card=>{

// const cardTop = card.getBoundingClientRect().top;

// if(cardTop < window.innerHeight - 100){

// card.classList.add("show");

// }

// });

// });



// const cards = document.querySelectorAll(".service-card");

// cards.forEach(card => {

//     card.addEventListener("click", () => {

//         cards.forEach(item => {
//             item.classList.remove("active");
//         });

//         card.classList.add("active");

//         setTimeout(() => {
//             card.classList.remove("active");
//         }, 500);

//     });

// });

// // section-2

// const buttons = document.querySelectorAll(".plan-btn");
// const cards = document.querySelectorAll(".pricing-card");

// buttons.forEach((button,index)=>{

//     button.addEventListener("click",()=>{

//         cards.forEach(card=>{
//             card.classList.remove("selected");
//         });

//         cards[index].classList.add("selected");

//         button.innerText = "Selected ✓";

//         setTimeout(()=>{
//             button.innerText = "Choose Plan";
//             cards[index].classList.remove("selected");
//         },2000);

//     });

// });

// // popup detail

// const modal = document.getElementById("quoteModal");
// const closeBtn = document.querySelector(".close-btn");
// const planInput = document.getElementById("selectedPlan");

// document.querySelectorAll(".plan-btn").forEach(btn => {

//     btn.addEventListener("click", () => {

//         const plan =
//             btn.parentElement.querySelector("h3").innerText;

//         planInput.value = plan + " Plan";

//         modal.style.display = "flex";
//     });

// });

// closeBtn.addEventListener("click", () => {
//     modal.style.display = "none";
// });

// window.addEventListener("click", (e) => {

//     if(e.target === modal){
//         modal.style.display = "none";
//     }

// });

// Feature Cards Animation

const featureCards = document.querySelectorAll(".feature-card");

window.addEventListener("scroll", () => {

    featureCards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 100) {
            card.classList.add("show");
        }

    });

});


// Service Cards Click Effect

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener("click", () => {

        serviceCards.forEach(item => {
            item.classList.remove("active");
        });

        card.classList.add("active");

        setTimeout(() => {
            card.classList.remove("active");
        }, 500);

    });

});


// Pricing Cards

const buttons = document.querySelectorAll(".plan-btn");
const pricingCards = document.querySelectorAll(".pricing-card");

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        pricingCards.forEach(card => {
            card.classList.remove("selected");
        });

        pricingCards[index].classList.add("selected");

    });

});


// Popup Modal

const modal = document.getElementById("quoteModal");
const closeBtn = document.querySelector(".close-btn");
const planInput = document.getElementById("selectedPlan");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const plan = button
            .closest(".pricing-card")
            .querySelector("h3")
            .innerText;

        planInput.value = plan + " Plan";

        modal.style.display = "flex";

    });

});


// Close Button

if (closeBtn) {

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

}


// Outside Click Close

window.addEventListener("click", (e) => {

    if (e.target === modal) {
        modal.style.display = "none";
    }

});


// contect section

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const whatsappNumber = "917851821536"; // apna number

        const text =
`Hello ByteForge,

Name: ${name}
Email: ${email}

Message:
${message}`;

        const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");

    });

}


const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

    quoteForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("clientName").value;
        const email = document.getElementById("clientEmail").value;
        const phone = document.getElementById("clientPhone").value;
        const plan = document.getElementById("selectedPlan").value;
        const details = document.getElementById("projectDetails").value;

        const whatsappNumber = "917851821536"; // Apna WhatsApp number

        const text =
`Hello ByteForge,

Name: ${name}
Email: ${email}
Phone: ${phone}

Selected Plan: ${plan}

Project Details:
${details}`;

        const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");

        quoteForm.reset();

        modal.style.display = "none";

    });

}