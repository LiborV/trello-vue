<template>
    <article class="col-md-12 col-lg-4 mb-4">
        <div class="card p-2">
            <h5
                ref="titleElement"
                @click="startEditing"
                @blur="saveTitle"
                @keydown.enter="saveTitle"
                :contenteditable="isEditing"
                class="card-title my-3"
            >
                {{ title }}
            </h5>
            <transition-group name="card" tag="ul" class="list-group list-group-flush text-start border-none">
                <Card v-for="card in cards" :card="card" :key="card.id" :listId="id"></Card>
            </transition-group>
            <CardCreateForm :listId="id" ></CardCreateForm>
        </div>
    </article>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import Card from '@/components/trello/Card.vue'
import CardCreateForm from '@/components/trello/CardCreateForm.vue'

export default {
    components: {
        Card,
        CardCreateForm
    },

    props: {
        id: {
            type: Number
        },
        title: {
            type: String
        },
        cards: {
            type: Array
        }
    },

    setup (props) {
        const store = useStore()
        const titleElement = ref(null)
        const state = reactive({
            isEditing: false
        })

        const startEditing = () => {
            state.isEditing = true
        }

        const saveTitle = () => {
            state.isEditing = false
            store.dispatch('list/editListTitle', {
                listId: props.id,
                title: titleElement.value.textContent
            })
        }

        return {
            ...toRefs(state),
            titleElement,
            startEditing,
            saveTitle
        }
    }

}
</script>

<style lang="scss" scoped>
    .card-enter-active,
    .card-leave-active {
        transition: all 0.15s;
    }

    .card-enter-from,
    .card-leave-to {
        opacity: 0;
        transform: scale(0.75);
    }
    h3:hover {
        cursor: pointer;
    }
</style>
