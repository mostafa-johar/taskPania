
export default defineNuxtConfig({
  devtools: { enabled: true },
  css : ["~/assets/main.css"],
  modules: ['@pinia/nuxt'],
  app:{
    head :{
      link :[
        {
          rel : 'stylesheet',
          href  :"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" 
        },
        {
          rel : 'stylesheet',
          href  :"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"  
        },
      ]
    }
  }
  // end config
})
