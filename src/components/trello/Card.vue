<template>
    <li
        @click="cardIsPopped()"
        :class="{z20: isPopped}"
        class="list-group-item border border-1 my-2 position-relative shadow-sm rounded"
    >
        <CardImage :image="card.image"></CardImage>
        <CardLabels :labels="card.labels"></CardLabels>
        <p
            ref="cardText"
            @blur="saveText"
            @keydown.enter="saveText"
            :contenteditable="isEditing"
            :class="{'border border-dark': isEditing}"

        >
            {{ card.text }}
        </p>
        <CardTags :tags="card.tags"></CardTags>
        <transition name="pop">
            <CardPopup :card="card" :listId="listId" v-if="isPopped"
                @cardIsClosed="cardIsClosed"
                @startEditing="isEditing= true">
            </CardPopup>
        </transition>
    </li>
</template>

<script>
import store from '../../store'
import CardImage from '@/components/trello/CardImage.vue'
import CardLabels from '@/components/trello/CardLabels.vue'
import CardTags from '@/components/trello/CardTags.vue'
import CardPopup from '@/components/trello/CardPopup.vue'

export default {
    components: {
        CardImage,
        CardLabels,
        CardTags,
        CardPopup
    },
    
    props: {
        card: {
            type: Object
        },
        listId: {
            type: Number
        }
    },

    data () {
        return {
            isPopped: false,
            isEditing: false
        }
    },

    computed: {
        overlay: () => store.getters['overlay/getOverlay'],
        status: () => store.overlay.state
    },

    methods: {
        cardIsPopped () {
            this.isPopped = true
            store.commit('overlay/overlaySwitch', true)
        },

        cardIsClosed (data) {
            this.isPopped = data
            this.isEditing = data
        },

        saveText () {
            const editCardText = {
                listId: this.listId,
                cardId: this.card.id,
                newText: this.$refs.cardText.textContent
            }
            store.dispatch('list/editCardText', editCardText)
        }
    }
}
</script>

<style scoped>
    .pop-enter-active,
    .pop-leave-active {
        transition: all 0.25s ease-in;
    }

    .pop-enter-from,
    .pop-leave-to {
        opacity: 0;
        transform: translateX(25%);
    }
</style>
