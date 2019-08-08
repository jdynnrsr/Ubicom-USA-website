$(document).ready(function () {
    $('.submit').click(function (event) {
        console.log('CLicked')

        var fname = $('.fname').val()
        var lname = $('.lname').val()
        var organization = $('.organization').val()
        var email = $('.email').val()
        var contactno = $('.contactno').val()
        var message = $('.message').val()
        var e_name = $('.error_name')
        var e_org = $('.error_org')
        var e_email = $('.error_email')
        var e_contactno = $('.error_contactno')
        var e_message = $('.error_msg')
        e_name.empty()
        e_email.empty()
        e_contactno.empty()
        e_message.empty()

        // Validators
        if (fname.length < 1 || lname.length < 1) {
            event.preventDefault()
            e_name.append('<p>Complete name is required.<p>')
        }

        if(!(email.includes('@') && email.includes('.'))) {
            event.preventDefault()
            e_email.append('<p>Email is not valid.<p>')
        }

        if (contactno.length > 1 && isNaN(contactno)) {
            event.preventDefault()
            e_contactno.append('<p>Contact number is not valid.<p>')

        } else if (contactno.length < 1) {
            event.preventDefault()
            e_contactno.append('<p>Contact number is required.<p>')
        }

        if(message.length < 10) {
            event.preventDefault()
            e_message.append('<p>Message must be atleast 10 characters.<p>')
        }
        
    })
})