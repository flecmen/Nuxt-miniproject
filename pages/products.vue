<!-- Add a new page to the application (/products) that would display images, their titles, descriptions, 
  prices and images. Focus primarily on the layout, no need to worry about colors/backgrounds/etc. (You choose the design) -->
<script setup lang="ts">

const { data } = await useFetch('/api/products');
</script>


<template>
  <div class="wrapper">
    <div class="header">
      <h1>Products</h1>
    </div>
  </div>

  <div class="product-grid content">
    <Product 
    v-for="product in data" 
    :key="product.id" 
    :product="product" />
  </div>
</template>

<style scoped>

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
  }
}
</style>
