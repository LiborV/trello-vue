<template>
    <section class="mt-4">
        <aside v-if="overlay" class="overlay position-absolute bg-dark top-0"></aside>
        <div class="container">
            <transition-group name="list" tag="div" class="row">
                <div class="col-lg-12 mb-3 d-flex justify-content-center">
                    <ListCreateForm></ListCreateForm>
                </div>
                <List v-for="list in lists"
                    :title="list.title"
                    :cards="list.cards"
                    :id="list.id"
                    :key="list.id">
                </List>
            </transition-group>
        </div>
    </section>
</template>

<script>
import { computed, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import List from '@/components/trello/List.vue'
import ListCreateForm from '@/components/trello/ListCreateForm.vue'

export default {
    components: {
        List,
        ListCreateForm
    },

    setup () {
        const store = useStore()
        const state = reactive({
        })

        return {
            ...toRefs(state),
            lists: computed(() => store.getters['list/getLists']),
            overlay: computed(() => store.getters['overlay/getOverlay'])
        }
    }
}
</script>

<style lang="scss" scoped>
    .list-enter-active,
    .list-leave-active {
        transition: all 0.15s;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: scale(0.75);
    }

    aside.overlay {
        width: 100vw;
        height: 100vh;
        z-index: 10;
        opacity: 0.75;
    }
</style>
