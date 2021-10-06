<template>
    <div>
        <h5>Prime Vue for dropDown</h5>
        <Dropdown v-model="selectedCountry" @click="clickS($event)" class="drop-down" :options="countries" optionLabel="name" :filter="true" placeholder="Select your Audio" :showClear="true">
            <template #value="slotProps">
                <div class="country-item country-item-value" v-if="slotProps.value">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" />
                    <div >{{slotProps.value.name}}</div>
                </div>
                <span v-else>
                    {{slotProps.placeholder}}
                </span>
            </template>
            <template  #option="slotProps">
                <div class="country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" />
                    <div>{{slotProps.option.name}}</div>
                </div>
            </template>
        </Dropdown>
    </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import axios from 'axios'
export default {
    data() {
        return {
            selectedCountry: null,
            countries: [
                {name: 'Edifier', code: '11'},
                {name: 'Kef', code: '22'},
                {name: 'Dali', code: '33'},
                {name: 'Klipsch', code: ''}
            ]
        }
    },
    components:{
        Dropdown
    },
    methods: {
        dropDown(){
            console.log('55')
        },
        async search(){
            await axios.post(`https://x-home.pcpogo.com/homex/search.php?RDEBUG=andrewc`,this.selectedCountry.name)
                .then(
                    response => {      
                        console.log('res',response)
                    }      
                )   
        },
        input(){
            // console.log('input change',event.target.value)
        },
        clickS(event){
            console.log('input change',event.target.value)
             console.log('input CLICK')
        }
    },
    watch:{
      selectedCountry:{
          handler:function(){
                // console.log('value',this.value)
                this.search()
          }
      },
      slotProps:{
          handler:function(){
                console.log('value',this.value)
            
          },
          deep:true
      }
    },
    mounted(){
        console.log('selectedCountry ',this.selectedCountry)
        
    }
}
</script>

<style lang="scss" scoped>
.p-dropdown {
    width: 16rem;
}

.country-item {
   display: flex;
    img {
        width: 17px;
        margin-right: 0.5rem;
    }
}
</style>