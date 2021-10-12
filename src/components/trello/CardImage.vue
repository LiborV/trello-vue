<template>
    <figure v-if="image">
        <img :src="`${image.filename}`" :alt="`${image.alt}`" height="100" class="card-img-top">
    </figure>
</template>

<script>
export default {
    props: {
        image: {
            type: String
        }
    }
}
</script>
