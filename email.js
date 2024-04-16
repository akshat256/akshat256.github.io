function SendMail(){      
var params = {
    from_name : document.getElementById("fullName").value,
    email_id : document.getElementById("email_id").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
};
emailjs.send('service_515r4tt', 'template_91i95eg', params).then(alert("email sent!!!"));
}
