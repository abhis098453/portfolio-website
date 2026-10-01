// ===============================
// SMOOTH SCROLL
// ===============================

const navLinks = document.querySelectorAll(".nevlist a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const targetId = link.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// HIRE ME BUTTON
// ===============================

const hireBtn = document.querySelector("#hireBtn");

hireBtn.addEventListener("click", function () {

    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });

});


// ===============================
// VIEW PROJECT BUTTON
// ===============================

const projectBtn = document.querySelector("#projectBtn");

projectBtn.addEventListener("click", function () {

    document.querySelector("#project").scrollIntoView({
        behavior: "smooth"
    });

});


// ===============================
// READ MORE BUTTONS
// ===============================

const readMoreButtons = document.querySelectorAll(
    ".about-content .btn, .services-box .btn"
);

readMoreButtons.forEach(function (button) {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ===============================
// PROJECT ICONS
// ===============================

const projectLinks = document.querySelectorAll(".portfolio-layer a");

projectLinks.forEach(function (link) {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ===============================
// CONTACT FORM
// ===============================

const form = document.querySelector("#contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();


    const name = document.querySelector("#name").value.trim();

    const email = document.querySelector("#email").value.trim();

    const mobile = document.querySelector("#mobile").value.trim();

    const subject = document.querySelector("#subject").value.trim();

    const message = document.querySelector("#message").value.trim();


    // Check empty fields

    if (
        name === "" ||
        email === "" ||
        mobile === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill all the fields.");

        return;

    }


    // Email validation

    if (!email.includes("@")) {

        alert("Please enter a valid email address.");

        return;

    }


    // Mobile validation

    if (mobile.length < 10) {

        alert("Please enter a valid mobile number.");

        return;

    }


    alert("Message sent successfully!");


    // Clear form

    form.reset();

});


// ===============================
// FOOTER HOME BUTTON
// ===============================

const homeBtn = document.querySelector("#homeBtn");

homeBtn.addEventListener("click", function (e) {

    e.preventDefault();

    document.querySelector("#home").scrollIntoView({
        behavior: "smooth"
    });

});


// ===============================
// SOCIAL ICONS
// ===============================

const socialIcons = document.querySelectorAll(".icons i");

socialIcons.forEach(function (icon) {

    icon.addEventListener("click", function () {

        alert("Social media link will be added soon!");

    });

});



