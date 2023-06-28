<!-- Add a new page to the application (/products) that would display images, their titles, descriptions, 
    prices and images. Focus primarily on the layout, no need to worry about colors/backgrounds/etc. (You choose the design) -->
    <script setup>
    const { data } = await useFetch('/api/products');
  </script>
  
  <template>
    <div class="product-grid">
      <Product v-for="product in data" :key="product.id" :product="product" />
    </div>
  </template>
  
  <style scoped>
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  @media (max-width: 768px) {
    .product-grid {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
  </style>
  