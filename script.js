(function() {
    emailjs.init("yYCN_rbcdrlEBbLfv"); // replace with your EmailJS public key
})();

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop form reload

    // Collect form values
    let para = {
        name: document.getElementById("inputEmail4").value,   // email / name field
        address: document.getElementById("inputAddress").value,
        address2: document.getElementById("inputAddress2").value,
        city: document.getElementById("inputCity").value,
        zip: document.getElementById("inputZip").value,
        subject: "Ridebe Form Submission from " + document.getElementById("inputEmail4").value,
        time: new Date().toLocaleString(), // add current time
        message: "New form submission received from Ridebe!" // custom message
    };

    // Send using EmailJS
    emailjs.send("service_oo4ix5l", "template_3119slp", para)
    .then(function(response) {
        alert("✅ Message sent successfully!");
    }, function(error) {
        alert("❌ Failed to send message. Error: " + JSON.stringify(error));
    });
});

