<template>
    <div>
        <card-comp>
            <template #cars>
                <table>
                    <thead>
                        <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="car in pageCarData()" :key="car.make">
                                <td>
                                    {{ car.make }}
                                </td>
                                <td>
                                    {{ car.model }}
                                </td>
                                <td>
                                    {{ car.year }}

                                </td>
                                <td>
                                    {{ car.color }}

                                </td>
                                <td>
                                    {{ car.price }}

                                </td>
                            
                        </tr>

                    </tbody>
                    </table>
            </template>
        </card-comp>
    </div>
</template>
<script>

import CardComp from '@/components/CardComp.vue';
export default {
    methods:{
        pageCarData(){
            return this.$store.state.cars
        }
       

    },
    computed:{
        getCars(){
            return this.$store.dispatch('getCars')
        }
       
    },
    mounted() {
        this.getCars
        
    },
    components: {
        CardComp
    }
}
</script>
<style>
    
</style>