<script setup lang="ts">
import { Product } from '@prisma/client';

defineProps<{
  product: Product;
}>()

</script>

<template>
  <div class="product">

    <img v-if="product.image" :src="product.image" alt="Product Image" class="image" />
    <div v-else class="image-placeholder"></div>

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

.image {
  margin-right: 20px;
  width: 50%;
}

.image-placeholder {
  margin-right: 20px;
  width: 50%;
  height: 0; /* Set initial height to 0 to create a square aspect ratio */
  padding-bottom: 35%;
  padding-right: 50%;
  background-color: #131313;
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

  .image {
    width: 100%;
    margin-right: 0;
  }

  .product-info{
    margin-top: 10px;
  }
}
</style>
