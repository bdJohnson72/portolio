const regApp = Vue.createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            userName: '',
            password: '',
        }
    },
    methods:{
        setFirstName(event){
            this.firstName = event.target.value;
            console.log(this.firstName);
        },
        isValidName(){
            console.log('connected');
        },
        setLastName(event){
            this.lastName = event.target.value;
        },
        setEmail(event){
            this.email = event.target.value;
        }
        setPhone(event){
            this.phone = event.target.phone;
        }
    }
})
    

regApp.mount('#signup');