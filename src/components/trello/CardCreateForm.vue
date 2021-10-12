<template>
    <footer class="card-body">
        <a v-if="linkVisible" @click="showFrom" href="#" >Add a card ... </a>
        <form @submit.prevent="submitForm" v-if="formVisible"  action="/" >
            <div class="my-3">
                <input v-model="text" class="form-control" placeholder="Leave a text cardhere">
            </div>
                <a href="#" @click="submitForm" class="m-2 btn btn-primary">Submit</a>
                <a @click="hideFrom" href="#" class="m-2 btn btn-danger" >Remove</a>
        </form>
    </footer>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export default {
    props: {
        listId: {
            type: Number
        }
    },

    setup (props) {
        const store = useStore()
        const state = reactive({
            text: '',
            linkVisible: true,
            formVisible: false
        })

        const showFrom = () => {
            state.linkVisible = false
            state.formVisible = true
        }

        const hideFrom = () => {
            state.linkVisible = true
            state.formVisible = false
        }

        const submitForm = () => {
            if (!state.text) return
            const addCard = {
                listId: props.listId,
                text: state.text
            }
            store.dispatch('list/AddNewCard', addCard)
            state.text = ''
        }

        return {
            ...toRefs(state),
            showFrom,
            hideFrom,
            submitForm
        }
    }
}
</script>
