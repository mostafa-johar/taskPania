export const usetaskStore = defineStore('taskStore',{
    state : ()=>({
        tasks : [],
        name : 'mostafa'
    }),

    getters : {
        getFav(){
            return this.tasks.filter((t)=> t.isfav)
        },
        CountFav : (state) =>{
            return state.tasks.reduce((p,c)=>{
                return c.isfav ? p+1 : p
            },0)
        },
        total : (state)=> state.tasks.length 
    },
    actions :{
        addtask(task){
            this.tasks.push(task)
        },
        deletetask(id){
            this.tasks = this.tasks.filter((t)=> {
                return t.id !== id
            })

        },
        togglefav(id){
           const task = this.tasks.find(t => t.id == id)
           task.isfav = !task.isfav
        }

    }



    // end Store
})


