<template>
    <div>
        <h2>List</h2>
        <slot name="cars">
            <div v-for="car in pageCarData()" :key="car.make">
                {{ car.make }}
                {{ car.model }}
                {{ car.year }}
                {{ car.color }}
                {{ car.price }}
            </div>
        </slot>
        <slot name="default">
             <div v-for="console in pageConsolesData()" :key="console.name">
                {{ console.name }}
            </div>
        </slot>
    </div>
</template>
<script>
export default {
    methods:{
        pageCarData(){
            return this.$store.state.cars
        },
        pageConsolesData(){
            return this.$store.state.gaming_consoles
        }

    },
    computed:{
        getCars(){
            return this.$store.dispatch('getCars')
        },
        getGaming_consoles(){
            return this.$store.dispatch('getGaming_consoles')
        }
    },
    mounted() {
        this.getCars,
        this.getGaming_consoles
    }
}
</script>
<style>
    
</style>