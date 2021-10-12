import { createStore } from 'vuex'
import { data } from '@/data.js'

const list = {
    namespaced: true,
    state: {
        lists: data
    },
    mutations: {
        AddNewList (state, title) {
            const listMaxId = state.lists.length
                ? Math.max(...state.lists.map(list => list.id))
                : 0

            state.lists.push({
                id: listMaxId + 1,
                title: title.value,
                cards: []
            })
        },

        AddNewCard (state, { listNewCard, NewCardText }) {
            const cardMaxId = listNewCard.cards.length
                ? Math.max(...listNewCard.cards.map(card => card.id))
                : 0

            listNewCard.cards.push({
                id: cardMaxId + 1,
                text: NewCardText
            })
        },

        editListTitle (state, { listNewTitle, newLisText }) {
            listNewTitle.title = newLisText
        },

        trashCardFromList (state, { selectList, trashedCard }) {
            selectList.cards = selectList.cards.filter(
                card => card.id !== trashedCard.cardId
            )
        },

        editCardText (state, { editedCard, editCard }) {
            editedCard.text = editCard.newText
        }
    },
    actions: {
        AddNewCard ({ commit, state }, NewCard) {
            const listNewCard = state.lists.find(list => list.id === NewCard.listId)
            const NewCardText = NewCard.text
            commit('AddNewCard', { listNewCard, NewCardText })
        },

        editListTitle ({ commit, state }, newTitle) {
            const listNewTitle = state.lists.find(list => list.id === newTitle.listId)
            const newLisText = newTitle.title
            commit('editListTitle', { listNewTitle, newLisText })
        },

        trashCardFromList ({ commit, state }, trashedCard) {
            if (!trashedCard?.listId || !trashedCard?.cardId) return
            const selectList = state.lists.find(list => list.id === trashedCard.listId)
            commit('trashCardFromList', { selectList, trashedCard })
        },

        editCardText ({ commit, state }, editCard) {
            const listForEditedCard = state.lists.find(list => list.id === editCard.listId)
            const editedCard = listForEditedCard.cards.find(card => card.id === editCard.cardId)
            commit('editCardText', { editedCard, editCard })
        }
    },
    getters: {
        getLists (state) {
            return state.lists
        }
    }
}

const overlay = {
    namespaced: true,
    state: {
        overlay: false
    },
    mutations: {
        overlaySwitch (state, event) {
            state.overlay = event
        }
    },
    getters: {
        getOverlay (state) {
            return state.overlay
        }
    }
}

export default createStore({
    modules: {
        list,
        overlay
    }
})
