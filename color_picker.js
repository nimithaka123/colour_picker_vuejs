const app =Vue.createApp({
    data(){
        return{
            selectedcolour:" ",
            selectedshape: " ",
            colours:[
                {id:'1',text:'red'},
                {id:'2',text:'green'},
                {id:'3',text:'blue'},
                {id:'4',text:'yellow'}
            ],
            shapes:[
                {id:'1',text:'rectangle'},
                {id:'2',text:'circle'},
                {id:'3',text:'square'},
                // {id:'4',text:'triangle'}
            ]

        }
    },
    methods: {
        getColour(e){
            this.selectedcolour = e.target.value
        },
        getShape(e){
            this.selectedshape = e.target.value
        }
    }
});
app.mount("#app")