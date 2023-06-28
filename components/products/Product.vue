<script setup lang="ts">
import { Product } from '@prisma/client';

defineProps<{
  product: Product;
}>()

</script>

<template>
  <div class="product">

    <img v-if="product.image" :src="product.image" alt="Product Image" class="product-image" />

    <div class="product-info">
      <h1>{{ product.title }}</h1>
      <p class="price">${{ product.price }}</p>
      <p class="description">{{ product.description }}</p>
    </div>
    
  </div>
</template>

<style scoped>
.product {
  display: flex;
  padding-bottom: 10px;
  width: 100%;
}

.product-image {
  margin-right: 20px;
  width: 50%;
}

.product-info {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.price {
  font-weight: bold;
  margin: 10px 0;
}

.description {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .product {
    flex-direction: column;
  }

  .product-image {
    width: 100%;
    margin-right: 0;
  }

  .product-info{
    margin-top: 10px;
  }
}
</style>
