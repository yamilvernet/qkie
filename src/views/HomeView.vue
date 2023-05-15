<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->


    <div class="container pt-3">

      <!-- <div class="row">
        <div class="col">
        </div>
      </div> -->

      <div class="ps-1">
          <h1>Hola Flora 👋</h1>
          <!-- <p>{{greeting}}</p> -->
      </div>

      <!-- <div class="row mb-3">
        <div class="col">
          <home-bar></home-bar>
        </div>
      </div> -->





        <!-- <div class="heading">
          <h4 class="font-weight-bold">Nuevo item</h4>
          <button class="heading-action">Volver atras</button>
        </div> -->

        <div class="card mb-2">
          <div class="card-body">
            <h3 class="card-title">Nuevo item</h3>
            <p class="card-subtitle mb-3">Los items se usan para crear Productos</p>

            <get-data
              :artifact="item_artifact"
              :template="artifact_rows"
              @hand="add_item($event)"
            ></get-data>
          </div>
        </div>

        <div class="card" v-if="item">
          <div class="card-body">
            <div class="row mb-2">
              <div class="col">
                <h2 class="card-title mb-0">{{item.name}}</h2>
                <div>
                  Por kilo:
                  <div class="badge bg-light">
                    {{1000 * item.min_unit_cost}} ARS
                  </div>
                </div>

                <!-- <h3></h3> -->
              </div>
              <div class="col-4">
                <small>En stock</small>
                <h2 class="text-success">{{unit_converteR(item.min_unit_label,'max',item.min_unit).result}}kg</h2>
                <!-- <small>Actualizado el 12/08</small> -->
              </div>
            </div>
            <small class="text-muted">Adquirido en {{item.vendor}} el {{date_formateR(item.timestamp,false)}}</small>


          </div>
        </div>

    </div>
  </div>
</template>

<script>
import {Tooltip} from 'bootstrap'
import {unit_converter,date_format} from '@/utils'
import GetData from '@/components/GetData.vue';
// import HomeBar from './layout/HomeBar.vue';

export default {
  components: {
    GetData 
    // HomeBar 
  },
  name: 'HomeView',
  data(){
    return {
      item_artifact:{
          name:'Insumo',
          fields:{
            'name': {
              label:'Nombre',
              type:'text',
              validate:[
                {
                  label:'Minimo 3 letras',
                  function:function(value){return value.length >= 3}
                }
              ],
            },
            'cost':{
              label:'Precio',
              type:'number',
              validate:[
                {
                  label:'Debe ser mayor a 0',
                  function:function(value){return value>0}
                }
              ],
            },
            'quantity': {
              label:'Cantidad',
              type:'number',
              validate:[
                {
                  label:'Debe ser mayor a 0',
                  function:function(value){return value>0}
                },

              ],
            },
            'unit':{
              label:'Unidad',
              type:'select',
              options:[
                {
                  label:'Kilo (kg)',
                  value:'kg'
                },
                {
                  label:'Gramo (gr)',
                  value:'gr'
                },
                {
                  label:'Litro (lt)',
                  value:'lt'
                },
                {
                  label:'Mililitro (ml)',
                  value:'ml'
                },
                {
                  label:'Unidad (un)',
                  value:'un'
                },

              ],
            },
            'vendor': {
              label:'Proveedor',
              type:'text',
            },
          },
      },
      artifact_rows:[['name'],['cost'],['quantity|7|md-7','unit|5|md-5'],['vendor']],
      item:null,
    }
  },
  mounted(){
      this.$nextTick(()=>{
          document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el)=>new Tooltip(el))
      });

      console.log(unit_converter);
      
      // console.log(this.generate_pending_sales(4));
  },
  methods:{
    add_item(data){
      let item = data;
      console.log(data);
      fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales').then((r)=>r.json()).then((data)=>{
        // console.log(data[1].casa.compra)
        let usd_price = parseFloat(data[1].casa.compra);

        let min_unit_converted = unit_converter(item.unit,'min',item.quantity);

        this.item = {
          min_unit_label: min_unit_converted.to,
          min_unit: min_unit_converted.result,
          min_unit_cost: item.cost / min_unit_converted.result,
          usd_currency: usd_price,
          min_unit_usd_cost: (item.cost / min_unit_converted.result) / usd_price,
          name: item.name,
          vendor: item.vendor,
          timestamp: Date.now()
        }

        console.log(this.item)

      })




      // get_currency_prices().then((currency_prices)=>{
      //   // currency_prices.dolar_usa
      //   let item = data;
      //   let min_unit_converted = unit_converter(item.unit,'min',item.quantity);

      //   console.log({
      //     min_unit_label: min_unit_converted.to,
      //     min_unit: min_unit_converted.result,
      //     min_unit_cost: item.cost / min_unit_converted.result,
      //     usd_currency: currency_prices.dolar_usa.buy_price,
      //     min_unit_usd_cost: (item.cost / min_unit_converted.result) / currency_prices.dolar_usa.buy_price,
      //     name: item.name,
      //     vendor: item.vendor,
      //     timestamp: Date.now()
      //   })
        

      // })
    },
    min_length(min_value,value){
      if(value.length < min_value)
      return 
    },
    unit_converteR(unit,mode,quantity){
      return unit_converter(unit,mode,quantity);
    },
    date_formateR(d,y){
      return date_format(d,y)
    }
  }
}
</script>
