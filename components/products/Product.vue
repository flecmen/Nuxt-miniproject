<script setup lang="ts">
import { Product } from '@prisma/client';

defineProps<{
    product: Product;
}>()

</script>

<template>
    <div class="product">
        <div class="image_container">
            <div v-if="product.image">
                <img :src="product.image" alt="">
            </div>
            <div v-else>
                <!--  -->
            </div>
        </div>
    
        <div class="product_info">
            <h1>{{product.title}}</h1>
            <p>{{ product.price }}</p>
            <p>{{ product.description }}</p>
        </div>
    </div>
</template>



<style scoped>
.product_info{
display: flex;
  align-items: flex-start;
}

.image_container{
  margin-right: 20px;
}

.product{
    display: flex;
    padding-bottom: 10px;
}
</style>