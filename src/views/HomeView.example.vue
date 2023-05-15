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
          <p>{{greeting}}</p>
      </div>

      <div class="row mb-3">
        <div class="col">
          <div class="card card-action">
            <div class="card-body">
              <button class="card-button">
                <div class="card-button-icon">
                  <svg viewBox="0 0 384 512"><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"/></svg>
                </div>
                <span>Pendientes</span>
              </button>
              <button class="card-button">
                <div class="card-button-icon">
                  <svg viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                </div>
                <span>Editar</span>
              </button>
              <button class="card-button">
                <div class="card-button-icon">
                  <svg viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                </div>
                <span>Stockear</span>
              </button>
              <button class="card-button">
                <div class="card-button-icon">
                  <svg viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </div>
                <span>Buscar</span>
              </button>
            </div>
          </div>
        </div>
      </div>


          <div class="heading">
            <h4 class="font-weight-bold">Reporte rápido</h4>
            <button class="heading-action">Configurar</button>
          </div>

          <div class="row-sm mb-3">
            <div class="col">
              <div class="card-sm">
                <div class="card-body">
                  <h3 class="card-title text-danger">$23.600</h3>
                  <h6 class="card-subtitle mb-2 text-muted">Entrada</h6>
                  <p class="card-text">Un 18% inferior al esperado</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card-sm">
                <div class="card-body">
                  <h3 class="card-title text-success">$12.233</h3>
                  <h6 class="card-subtitle mb-2 text-muted">Salida</h6>
                  <p class="card-text">Un 2% inferior al esperado</p>
                </div>
              </div>
            </div>
          </div>


          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Ventas pendientes</h3>
              <p class="card-subtitle">Estas son las ventas pendientes de entrega</p>

              <div class="table-responsive mt-3">
                <table class="table table-sm table-borderless">
                   <thead>
                      <tr>
                        <th scope="col">Entrega</th>
                        <th scope="col">Total</th>
                        <th scope="col">Estado</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr class="align-middle" v-for="(sale,s) in generate_pending_sales(15)" :key="s">
                        <th>
                          <div class="badge bg-light">{{sale.date}}</div>
                        </th>
                        <td>
                          ${{sale.total}}</td>
                        <td>
                          <div class="badge" :class="(sale.payment_status=='Pagado')?'bg-success':'bg-warning'">{{sale.payment_status}}</div>
                        </td>
                        <td>
                          <button class="btn btn-link">Entregar</button>
                        </td>
                      </tr>
                    </tbody>


                </table>
              </div>

            </div>
          </div>

          


      <!-- <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Contacto</h5>
              <p class="card-subtitle mb-3 text-muted">Tu feedback es importantísimo, intentaremos responderte lo antes posible</p>
              
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email address
                      <svg style="vertical-align: sub;" data-bs-toggle="tooltip" data-bs-title="Solo aceptamos Gmail y Outlook" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                    </label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    <div class="form-text">Nos comunicaremos a este correo</div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form-check form-switch form-check mb-3">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button class="btn btn-primary float-end">Guardar</button>
            </div>
          </div>
        </div>
      </div> -->



    </div>
  </div>
</template>

<script>
import {Tooltip} from 'bootstrap'
import {date_format,get_random, financial_format} from '@/utils'

export default {
  name: 'HomeView',
  mounted(){
      this.$nextTick(()=>{
          document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el)=>new Tooltip(el))
      });
      console.log(date_format);
      // console.log(this.generate_pending_sales(4));
  },
  computed:{
    greeting(){
      let time = new Date().getHours()
      if(time>=20) return '¿Seguís acá? Buenas noches'
      if(time<=12) return 'Buenos días, ¿Como estas hoy?'
      return "Buenas tardes, ¡Dale que ya falta poco!";
    }
  },
  methods:{
    generate_pending_sales(n){
      let sales = []

      let current_date = new Date();
      let plus_days = 0;

      for(let i = 0; i < n; i++){
        if(i>0 && i%2==0) plus_days++;
        current_date.setDate(current_date.getDate()+plus_days);
        
        sales.push({
          date:date_format(current_date,false),
          total: financial_format(get_random(1000,15000)),
          payment_status: (get_random(0,1)) ? 'Pagado' : 'Pendiente',
        })
      }

      return sales;
    }
  }
}
</script>
