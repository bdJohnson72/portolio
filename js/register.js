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
        isValidName(){
            console.log('connected');
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