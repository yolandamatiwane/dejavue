<template>
    <div >
        <section v-for="friend in pageFriendsData()" :key="friend.id" :style="{borderColor:friend.gender === 'Male' ? 'gold': 'green',borderWidth:'4px',borderStyle:'solid'}">
            <div v-if="friend.gender === 'Female'">
                <img src="https://www.clker.com//cliparts/J/Y/3/g/Q/g/pink-female-symbol-hi.png">
            </div>
            <div v-else>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEsvBcHMwMG6cOaEjM44CLbg0nSJ4MHV9yOPMugtn2TmL_jvjmo5I1rlDF983THzrepAA&usqp=CAU" alt="">
            </div>
            <h5>
                <label>id:</label>
                {{ friend.id }}
            </h5>
            <h3>
                <label>First Name: </label>
                {{ friend.firstName }}
            </h3>
            <h5>
                <label>Last Name: </label>
                {{ friend.lastName }}
            </h5>
            <h5>
                <label>Gender: </label>
                {{ friend.gender }}
            </h5>
            <h5>
                <label>Profile: </label>
                {{ friend.profile}}
            </h5>
            <h5>
                <label>Contact Details: </label>
                {{ friend.contactDetails }}
            </h5>

            
        </section>
        
    </div>
</template>
<script>
export default {
    methods:{
        pageFriendsData(){
            return this.$store.state.friends
        },
        
    },
    computed:{
        getFriends(){
            return this.$store.dispatch('getFriends')
        }
    },
    mounted(){
        this.getFriends
    }
}
</script>
<style scoped>
img{
    margin-left: 90px;
    width: 60px;
    height: 50px;
}
div{
    display: flex;

}
section{ 
    height: 300px;
    border-radius: 10%;
    width: 300px;

}
</style>