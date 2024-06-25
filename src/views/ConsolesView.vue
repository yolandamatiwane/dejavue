<template>
    <div>
        <card-comp>
            <template #default>
                <div v-for="console in pageConsolesData()" :key="console.name">
                <label>Name: </label>{{ console.name }}
                <br>
                <label>Manufacturer:</label>{{ console.manufacturer }}
                <br>
                <label>Release Year: </label>{{ console.release_year }}
                <br>
                <label>storage: </label>{{ console.storage }}
                <br>
                <label>Price: </label>{{ console.price }}
                <br>
                <label>Best Selling Game: </label>{{ console.best_selling_game }}
            </div>
            </template>
        </card-comp>
    </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue';

export default {
    methods:{
        pageConsolesData(){
            return this.$store.state.gaming_consoles
        }
    },
    computed:{
        getGaming_consoles(){
            return this.$store.dispatch('getGaming_consoles')
        }
    },
    mounted(){
        this.getGaming_consoles
    },
    components:{
        
        CardComp
    }
}
</script>
<style>
    
</style>