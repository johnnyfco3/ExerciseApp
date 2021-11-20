<template>
    <div class="buttons">
        <a class="button is-info" @click="welcome">
            Log out
        </a>
    </div>
</template>

<script>
export default {
    methods: {
        welcome(){
            this.$router.push('/welcome');
        }
    }
}
</script>

<style>
a{
    font-size: 17px;
    margin-right: 10px;
}
</style>