<template>
    <div>
        <footer v-if="tags">
            <span v-for="(tag, index) in tags"
                :key="index"
                :tag="tag"
                :class="`badge bg-secondary m-1 text-left`"
            >
            {{ tag }}
            </span>
        </footer>
    </div>
</template>

<script>
export default {
    props: {
        tags: {
            type: Array
        }
    }
}
</script>
