<template>
    <div class="popupbox flex-column position-absolute top-0 ">
        <button @click="startEdit" type="button" class="btn btn-dark btn-sm mb-2">Edit text</button>
        <button @click.stop="trashCard" type="button" class="btn btn-dark btn-sm mb-2">Trash</button>
        <button @click.stop="closePopup" type="button" class="btn btn-dark btn-sm" >Close</button>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, reactive, toRefs } from 'vue'

export default {
    props: {
        card: {
            type: Object
        },
        listId: {
            type: Number
        }
    },

    setup (props, { emit }) {
        const store = useStore()
        const overlay = computed(() => store.getters['overlay/getOverlay'])
        const state = reactive({
        })

        const closePopup = () => {
            store.commit('overlay/overlaySwitch', false)
            emit('cardIsClosed', false)
        }

        const trashCard = () => {
            const trashedCard = {
                listId: props.listId,
                cardId: props.card.id
            }
            store.dispatch('list/trashCardFromList', trashedCard)
            closePopup()
        }

        const startEdit = () => {
            emit('startEditing')
        }

        return {
            ...toRefs(state),
            closePopup,
            trashCard,
            startEdit,
            overlay
        }
    }
}
</script>

<style>
    .popupbox {
        display: none;
    }

   .z20 > .popupbox {
       display: inline-flex;
       right: -21%;
   }
</style>
