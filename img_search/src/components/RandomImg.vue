<template>
  <div class="random">
    <h1 class="random_header">Для вашего вдохновения</h1>
    <div class="random_container">
      <div v-for="image in images" :key="image.id">
        <img class="random_img" :src="image.urls.regular" :alt="image.description" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      images: []
    }
  },
  mounted() {
    this.getRandomImages()
  },
  methods: {
    async getRandomImages() {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          headers: {
            Authorization: `Client-ID Mch8FeMjAilWxlPiILbzIZWH5hWWW_Umv8NmvjyyOck`
          },
          params: {
            count: 9 // Number of random images to fetch
          }
        })
        this.images = response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
