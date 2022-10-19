<script>
import BaseInput from '@/components/BaseInput.vue';

export default {
    name: 'ContactView',
    components: {
        BaseInput,
    },
    data: () => ({
        title: 'Contact',
        //input
        input: {
            name: '',
            email: '',
            message: '',
        },
    }),
    methods: {
        submit() {
            console.log(this.input);
        }
    },
};
</script>

<template>
    <div class="contact">
        <h1>Contact Me</h1>
        <br>
        <form @submit.prevent="submit">
            <BaseInput v-model="input.name" name="name" label="Name" type="text" />
            <BaseInput v-model="input.email" name="email" label="Email" type="email" />
            <BaseInput v-model="input.message" name="message" label="Message" type="text" />
            <br><br>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .contact {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
</style>