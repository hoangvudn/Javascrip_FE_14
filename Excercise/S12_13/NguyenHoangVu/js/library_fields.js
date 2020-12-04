var fields = {
    email: {
        message: "Must be a valid email address",
        required: "Email is required",
        isEmail: "Email is invalid"
    },
    password: {
        required: "Password is required"
    },
    verify: {
        required: "Please retype Password.",
        noMatch: ["Password do not match.", "password"]
    },
    firstname: {
        required: "First name is required"
    },
    lastname: {
        required: "Last name is required"
    },
    zip: {
        message: "Use 5 or 9 digit ZIP code",
        required: "ZIP code is required",
    },  
    card_number: {
        message: "Use 1111-2222-3333 format",
        required: "Card Number is required",
    }, 
    exp_date: {
        message: "Use mm/yyyy format",
        required: "Expiration date is required",
        isDate: "Expiration date is invalid ",
        expired: "Card has expired."
    }, 
};
