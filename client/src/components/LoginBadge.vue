<template>
    <div class="buttons" v-if="!Session.user">
        <a class="button is-primary" @click="signup">
            <strong>Sign up</strong>
        </a>
        <a class="button is-info" @click="login">
            <strong>Log in</strong>
        </a>
    </div>
    <div v-else>
        {{name}}
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
    },
    computed: {
        name(){
            return this.Session.user.handle;
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