<template>
    <div v-if="labels">
        <span v-for="(label, index) in labels"
            :key="index"
            :label="label"
            :class="` badge rounded-pill bg-${label} d-inline-block m-1 text-left`"
        >
        </span>
    </div>
</template>

<script>
export default {
    props: {
        labels: {
            type: Array
        }
    }
}
</script>
