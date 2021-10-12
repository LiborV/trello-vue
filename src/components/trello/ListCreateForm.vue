<template>
    <article class="col-md-12 col-lg-4">
        <form @submit.prevent="submitForm" action="/" >
            <input v-model="title" type="text" class="form-control" placeholder="Add another list">
        </form>
    </article>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup () {
        const store = useStore()

        const title = ref('')
        const submitForm = () => {
            if (!title.value) return
            store.commit('list/AddNewList', title)
            title.value = ''
        }

        return {
            title,
            submitForm
        }
    }
}
</script>
