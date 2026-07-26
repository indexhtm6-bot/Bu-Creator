// ================================
// BU Creator - Premium Website
// script.js
// ================================
document.addEventListener("DOMContentLoaded", function () {

    // Yahan apna sara JavaScript code paste karo


// Smooth Scroll


document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
AOS.init({
    duration:900,
    once:true,
    easing:"ease-in-out",
    offset:100
});

// Navbar Background on Scroll
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 5) {

        navbar.style.background = "rgb(0, 0, 0)";
      navbar.style.boxShadow = "0 5px 20px #f1d015d5";

    } else {

        navbar.style.background = "rgb(0, 0, 0)";
        navbar.style.boxShadow = "none";

    }

});


// Product Slider
function goToSlide(index) {

    const slider = document.getElementById("slider");

    if (slider) {

        slider.scrollTo({

            left: slider.clientWidth * index,

            behavior: "smooth"

        });

    }

}


// Card Hover Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});


// Hero Floating Animation
const heroImage = document.querySelector(".hero-right img");

if (heroImage) {

    let direction = 1;

    setInterval(() => {

        heroImage.style.transform = `translateY(${direction * 10}px)`;

        direction *= -1;

    }, 1500);

}


// ================================
// Contact Form
// ================================

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;

        const email = document.getElementById("email").value;

        const subject = document.getElementById("subject").value;

        const message = document.getElementById("message").value;

        const text =
`*New Contact Inquiry*

👤 Name: ${name}

📧 Email: ${email}

📌 Subject: ${subject}

💬 Message:
${message}`;

        window.open(
            "https://wa.me/923044129971?text=" +
            encodeURIComponent(text),
            "_blank"
        );

    });

}



// ================================
// Buy Now WhatsApp Order
// ================================

    const phoneNumber = "923044129971";

document.querySelectorAll(".buy-btn").forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".card");

        const id = card.dataset.id;
        const name = card.dataset.name;
        const price = card.dataset.price;

        const message = `🛍️ *BU CREATOR*

📢 *New Order Request*

🆔 Product ID: ${id}

📦 Product Name: ${name}

💰 Price: Rs. ${price}

Assalam-o-Alaikum,
Main ye product order karna chahta hoon.
Please order confirm kar dein.`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

    });

});
// ================================
// Fade In Animation
// ================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".card,.about,.contact").forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(50px)";

    el.style.transition = "all .8s ease";

    observer.observe(el);

});
});