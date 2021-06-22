const regApp = Vue.createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            userName: '',
            password: '',
            longText: '',
            email2: '',
            invalidFirstName: false,
            invalidLastName: false,
            invalidEmail: false,
            emailsMatch: false,
            nameMessage: 'Please enter two or more letters',
            emailMessage: 'Email must include an @ symbol',
            emailMatch: 'Emails do not match',
        }
    },
    methods:{

        isValidName(event){
            !/\w{2,}/.test(event.target.value) ? this.invalidFirstName = true :
                this.invalidFirstName = false;
        },

        isValidLastName(event){
            !/\w{2,}/.test(event.target.value) ? this.invalidLastName = true :
                this.invalidLastName = false;
        },

        isValidEmail(){
            !/@/.test(this.email) ? this.invalidEmail = true : this.invalidEmail = false;
        },
        isValidPhone(){
            return /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(this.phone);
        },

        resetForm(){
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.longText = '';
        },
        emailConfirmed(){
           this.email !== this.email2 ? this.emailsMatch = true : this.emailsMatch = false;
           console.log(this.email);
           console.log(this.email2);
           console.log( this.email !== this.email2 ? this.emailsMatch = true : this.emailsMatch = false);
           console.log(this.emailsMatch);
        }
    }
})
    

regApp.mount('#signup');