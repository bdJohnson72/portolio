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
        }
    },
    methods:{
        setFirstName(event){
            this.firstName = event.target.value;
            
        },
        isValidName(event){
            return  /\w{2,}/.test(event.target.value);
        },
        isValidEmail(){
            return /@/.test(this.email);
        },
        isValidPhone(){
            return /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(this.phone);
        },
        setLastName(event){
            this.lastName = event.target.value;
        },
        setEmail(event){
            this.email = event.target.value;
        },
        setPhone(event){
            this.phone = event.target.phone;
        },
        resetForm(){
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.longText = '';
        }
    }
})
    

regApp.mount('#signup');