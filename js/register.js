const regApp = Vue.createApp({
    data() {
        return {
            firstName: ''
        }
    },
    methods:{
        setFirstName(event){
            this.firstName = event.target.value;
            console.log(this.firstName);
        },
        isValidName(){
            console.log('connected');
        }
    }
})
    

regApp.mount('#signup');