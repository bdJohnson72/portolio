const app = Vue.createApp({
    data(){
        return {
            paraOne: ` I ask myself that same question. In the summer of 2016 I retired from the Army after 21 years of active duty and
            26 years of total service. I was not sure what I was going to do next and was unprepared for how difficult a complete 
            midlife career tranistion would be. five years later I think I am still plugging away at it.`,

            paraTwo: `That first job out of the Army involved working on the Salesforce platform. Nothing too serious but enough to learn what
            it was. I had never heard of Salesforce in 44 years. At some point I discovered Trailhead and Vetforce, the Salesforce 
            training program for veterans. And I taught myself to code. This website is really for the self taught programmer and the 
            career changer.            
            `,

            paraThree: `I think that most develper blogs present a shiny finished package and not the messy never ending process that software development 
            is. I wanted a place where I could continue to push myself and share the journey. You can find me a lot on Youtube talking about object oriented
            programing and the Apex language. But I am also very interested in JavaScript and its frameworks, full stack web development, Heroku,
            Python..... `,
        }
    }
});
app.mount('#intro')