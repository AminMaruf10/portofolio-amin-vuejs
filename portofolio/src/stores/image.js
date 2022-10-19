import { defineStore } from 'pinia';

const imageStore = defineStore({
    id: 'image',
    state: () => ({
        list: {
            {
                slug: 'calculator',
                title: 'Calculator',
                img: ''
            }
        }
    }),
    actions: {},
    getters: {},
});

export default imageStore;