<script setup lang="ts">
import { Product } from '@prisma/client';
import { reactive } from 'vue';


const product = reactive({
    title: '',
    description: '',
    price: null,
});

const submitForm = async () => {
    const response = await $fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(product),
    })
}

</script>

<template>
    <div>
        <div class="header">
            <h1>Create a product</h1>
        </div>

        <div class="content">
            <form>
                <label for="title">Title</label>
                <input type="text" id="title" name="title" placeholder="title" v-model="product.title" required>
                
                <label for="description">Description</label>
                <textarea id="description" name="description" placeholder="description" v-model="product.description" required></textarea>
                
                <label for="price">Price</label>
                <input type="number" step="0.01" id="price" name="price" placeholder="price" v-model="product.price" min="0" required>
                
                <label for="image">Image</label>
                
                <input type="submit" value="Create Product" @click="submitForm">
            </form>
        </div>
    </div>
</template>

<style scoped>
.content{
    /* center content */
    display: flex;
    flex-direction: column;
    align-items: center;
}
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 30%
}

label {
    display: block;
    font-weight: bold;
}

input,
textarea {
    width: 100%;
    padding: 5px;
}

input[type="submit"] {
    width: auto;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
}
</style>