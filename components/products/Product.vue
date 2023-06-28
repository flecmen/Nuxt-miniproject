<script setup lang="ts">
import { Product } from '@prisma/client';

defineProps<{
  product: Product;
}>()

</script>

<template>
  <div class="product">
    <div class="image-container">
      <img v-if="product.image" :src="product.image" alt="Product Image" class="product-image" />
      <div v-else class="placeholder-image"></div>
    </div>

    <div class="product-info">
      <h1>{{ product.title }}</h1>
      <p class="price">{{ product.price }}</p>
      <p class="description">{{ product.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  padding-bottom: 10px;
}

.image-container {
  margin-right: 20px;
  object-fit: cover;
}

.product-image {
  height: 200px; /* Adjust the height as desired */
  object-fit: cover; /* Maintain aspect ratio and cover the container */
}

.placeholder-image {
  width: 100%;
  height: 200px;
  background-color: #f3f3f3;
}

.product-info {
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 24px;
  margin-top: 0;
}

.price {
  font-weight: bold;
  margin: 10px 0;
}

.description {
  margin-bottom: 0;
}
</style>
