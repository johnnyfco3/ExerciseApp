<template>
    <div class="buttons">
        <a class="button is-primary" @click="signup">
            <strong>Sign up</strong>
        </a>
        <a class="button is-info" @click="login">
            <strong>Log in</strong>
        </a>
    </div>
</template>

<script>
import Session from '../services/session'

export default {
    data () {
        return ({
            Session
        })
    },
    methods: {
        login (){
            this.$router.push('/login');
        },
        signup (){
            this.$router.push('/signup')
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