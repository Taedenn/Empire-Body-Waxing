$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('nav ul').toggleClass('nav-list-open'); // Add or remove class to trigger animation
    });
});

// Function to show the custom pop-up
function showPopupSent() {
    document.getElementById('sent-popup').style.display = 'block';
    setTimeout(hidePopupSent, 3000); // Hide popup after 3 seconds (3000 milliseconds)
}

// Function to hide the custom pop-up
function hidePopupSent() {
    document.getElementById('sent-popup').style.display = 'none';
}

function showPopupNotSent() {
    document.getElementById('not-sent-popup').style.display = 'block';
    setTimeout(hidePopupNotSent, 3000); // Hide popup after 3 seconds (3000 milliseconds)
}

// Function to hide the custom pop-up
function hidePopupNotSent() {
    document.getElementById('not-sent-popup').style.display = 'none';
}

// Ensure DOM is ready before accessing elements
$(document).ready(function() {
    $('#contact-form').submit(function(event) {
        event.preventDefault(); // Prevent form submission
        sendEmail();
    });
});

function sendEmail() {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var question = $('#question').val();

    // Check if all fields are filled
    if (name && email && phone && question) {
        var body = 'Name: ' + name + '<br>Email: ' + email + '<br>Phone: ' + phone + '<br>Question: ' + question;

        Email.send({
            SecureToken: "3cf829c1-0393-4d90-89ad-d4b5520beee5",
            To: 'shreeyamaskey.1@gmail.com',
            From: "shreeyamaskey.1@gmail.com",
            Subject: "New Inquiry Contact Form From " + name,
            Body: body
        }).then(
            message => {
                if (message === 'OK' || message === 'Sent') {
                    // Show success message
                    showPopupSent();
                    $('#contact-form')[0].reset(); // Reset form after successful submission
                } else {
                    // Show error message
                    showPopupNotSent();
                }
            }
        );
    }
}
