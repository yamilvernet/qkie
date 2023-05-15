<template>
  <form @submit="validate($event)">
    <div class="row" v-for="(row,r) in template" :key="r">
      <div class="mb-2" :class="get_template_cols(col)" v-for="(col,c) in row" :key="c">

        <!-- {{artifact.fields[get_template_name(col)].label}} -->
        
        <label :for="get_template_name(col)" class="form-label">{{artifact.fields[get_template_name(col)].label}}</label>

        <template v-if="artifact.fields[get_template_name(col)].type == 'select'"> 
          <select :name="get_template_name(col)" :id="get_template_name(col)" class="form-control">
            <option :value="option.value" v-for="(option,o) in artifact.fields[get_template_name(col)].options" :key="o">{{option.label}}</option>
          </select>
        </template>
        <template v-else> 
          <input type="text" class="form-control" :name="get_template_name(col)">  
          
        </template>


        <span v-if="error[get_template_name(col)]" class="text-danger">&otimes; {{error[get_template_name(col)]}}</span>


      </div>
    </div>


    <!-- <div class="form-row" v-for="(field,field_name) in artifact.fields" :key="field_name">
      <div class="col mb-2">
        <label :for="field_name" class="form-label">{{field.label}}</label>

        <template v-if="field.type == 'select'"> 
          <select :name="field_name" :id="field_name" class="form-control">
            <option :value="option.value" v-for="(option,o) in field.options" :key="o">{{option.label}}</option>
          </select>
        </template>
        <template v-else> 
          <input type="text" class="form-control" :name="field_name">  
          
        </template>


        <span v-if="error[field_name]" class="text-danger">&otimes; {{error[field_name]}}</span>
      </div>
    </div> -->


    <div class="form-row mt-3">
      <div class="col">
        <div class="alert bg-danger" v-if="trigger.invalid">
          Error en el formulario
        </div>
        <div class="alert bg-success" v-if="trigger.passed">
          Formulario válido
        </div>
      </div>
    </div>

    <div class="form-row mt-3">
      <div class="col text-end">
        <button class="btn btn-primary">Finalizar</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
    name:'AutoForm',
    props:{
        artifact:Object,
        template:Array
    },
    data(){
      return {
        error:{},
        trigger:{
          error:false,
          passed:false,
        }
      }
    },
    methods:{
      validate(e){
        e.preventDefault();

        this.trigger.error = false;
        this.trigger.passed = false;

        // console.log(e.target);
        let form = e.target;
        let valid = true;

        let data = {};
        Object.keys(this.artifact.fields).forEach(field_name => {
            let field = this.artifact.fields[field_name];
            delete this.error[field_name];

            if(field.validate){
              field.validate.forEach((validator)=>{
                if(validator.function(form[field_name].value)) {
                  data[field_name] = form[field_name].value;
                } else {
                    valid = false;
                    this.error[field_name] = validator.label;
                }
              })
            } else {
              data[field_name] = form[field_name].value;
            }


        });
        
        if(!valid){
          this.trigger.invalid=true;
          setTimeout(() => {
            this.trigger.invalid=false;
          }, 1500);
        } else {
          this.trigger.passed=true;
          setTimeout(() => {
            this.trigger.passed=false;
          }, 1500);
          this.$emit('hand',data);
        }
      },
      get_template_cols(col){
        if(!col.includes("|")) return "col";
        return col.split("|").splice(1).map((m)=>"col-"+m).join(" ");
      },
      get_template_name(col){
        return col.split("|")[0]
      }
    }
}
</script>

<style>

</style>