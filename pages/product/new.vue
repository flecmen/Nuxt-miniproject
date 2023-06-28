<script setup lang="ts">

const product = reactive({
    title: '',
    description: '',
    price: null,
    image: '',
});

const source_image = ref('');

const submitForm = async () => {
    const response = await $fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(product),
    })
}

// Function to handle file selection and convert image to BASE64
async function handleImageSelect(event: InputEvent): Promise<void> {
    const file = (event.target as HTMLInputElement).files?.[0];
        
    if (file) {
        const base64  = await convertToBase64(file);

        // za boha nemůžu ten VueUse tady rozchodit, použil jsem normální reader a ten fungoval hned
        //const { base64 } = useBase64(file)
        //console.log(base64)

        product.image = base64
    }else product.image = ''
    

    function convertToBase64(file: File): Promise<string> {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
            resolve(reader.result as string);
            };
            reader.readAsDataURL(file);
        });
}
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
                <input type="file" id="image" name="image" accept="image/png, image/jpeg, image/jpg" @change="handleImageSelect">

                <img v-if="product.image" :src="product.image" alt="Product Image" class="image" />
                
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