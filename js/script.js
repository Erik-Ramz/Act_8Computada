new Vue({
    el: '#main',
    data:{
        frutas:[
            {nombre:'Manzana',cantidad:15,precioUnitario:5,total:0},
        ],
        newFruta:'',
        newCantidad:0,
        newPrecio:0,
        total:0,
        subtotal:0,
        iva:0,
    },
    methods: {
        agregar:function(){
            this.frutas.push({
                nombre:this.newFruta,
                cantidad:this.newCantidad,
                precioUnitario:this.newPrecio,
                total:0,
            })
        },
        montoFruta(i){
            this.frutas[i].total=this.frutas[i].cantidad*this.frutas[i].precioUnitario;
            return this.frutas[i].total;
        },
    },
    computed:{
        calculoSubtotal(){
            this.subtotal=0;
            for(fruta of this.frutas){
                this.subtotal += fruta.total;
            }
            return this.subtotal;
        },
        calculoIva(){
            this.iva=0;
            this.iva=this.subtotal*0.16;
            return this.iva.toFixed(2);
        },
        calculoTotal(){
            return (this.subtotal+this.iva).toFixed(2);
        }
    }
})