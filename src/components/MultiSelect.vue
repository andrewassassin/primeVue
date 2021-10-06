<template>
    <div>
      
        <h5>Chips</h5>
        <button @click="goSearch()" class="mr-5">搜尋</button>
        <MultiSelect v-model="selectedCities2" :options="cities" @change="onChange($event)" optionLabel="name" placeholder="Select Brand" display="chip" />
    </div>
</template>

<script>
import axios from 'axios'
import MultiSelect from 'primevue/multiselect';
export default {
    components:{
        MultiSelect
    },
    data() {
        return {
            selectedCities2: null,
            cities: [
                {name: 'Edifier', code: '11'},
                {name: 'Kef', code: '22'},
                {name: 'Dali', code: '33'},
                {name: 'Klipsch', code: ''}
            ],
            productList:[]
        }
    },
    methods: {
        onSelectAllChange(event) {
            console.log('event.target.value',event.target.value)
            // this.selectedItems = event.checked ? this.items.map((item) => item.value) : [];
            // this.selectAll = event.checked;
        },
        onChange(event) {
            event.value.forEach(item=>{
                if(this.productList.indexOf(item)==-1){
                    this.productList.push(item)
                }
            })
            // needToDel = productList比event.value多出來的品項
             const needToDel = this.productList.filter(value =>{
                        return  event.value.indexOf(value) === -1
                    });
                    console.log('product多出來的',needToDel)
                    // index = 找出productList比event.value多出來的品項"索引"
                    needToDel.forEach(item=>{
                        const index =  this.productList.map(el=>el.name).indexOf(item.name)
                        //  console.log('index',index)
                         this.productList.splice(index,1)
                    })
                 console.log( ' this.productList',this.productList)
        },
        goSearch(){
            this.productList.forEach(item=>{
                axios.post(`https://x-home.pcpogo.com/homex/search.php?RDEBUG=andrewc`,item.name)
                    .then(response => {      
                
                            console.log(response.data)
                            
                        })      
            })
           
        }
    }
}
</script>

<style lang="scss" scoped>
.p-multiselect {
    width: 18rem;
}

::v-deep(.multiselect-custom) {
    .p-multiselect-label:not(.p-placeholder) {
        padding-top: .25rem;
        padding-bottom: .25rem;
    }

    .country-item-value {
        padding: .25rem .5rem;
        border-radius: 3px;
        display: inline-flex;
        margin-right: .5rem;
        background-color: var(--primary-color);
        color: var(--primary-color-text);

        img.flag {
            width: 17px;
        }
    }
}

@media screen and (max-width: 640px) {
    .p-multiselect {
        width: 100%;
    }
}
</style>