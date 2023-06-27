<!-- Add a new page to the application (/products) that would display images, their titles, descriptions, 
    prices and images. Focus primarily on the layout, no need to worry about colors/backgrounds/etc. (You choose the design) -->
<template>
    <div>
        <Product 
            v-for="product in data"
            :key="product.id"
            :product="product"
        />
    </div>
    {{ data }}
</template>

<script setup>
const {data} = await useFetch('/api/products')

</script>

<style scoped>

</style>