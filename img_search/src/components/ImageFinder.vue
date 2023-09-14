<template>
  <div>
    <header class="header">
      <div class="header_container">
        <img src="/src/assets/img/sflogo.png" alt="San_Francisco_Art" class="header_logo" />
        <a class="header_fav" href="#">
          <img src="/src/assets/img/fav.svg" alt="favorites" />
          Избранное
        </a>
      </div>
    </header>
    <!-- end of header -->

    <div class="search">
      <form action="search" class="search_form">
        <input
          class="search_input"
          type="text"
          v-model="searchQuery"
          @input="searchImages"
          placeholder="Поиск"
        />
        <button type="submit">Search</button>
      </form>
    </div>
    <!-- end of search -->

    <div class="results">
      <div class="results_container" ref="myDiv">
        <div v-for="image in images" :key="image.id">
          <img class="results_img" :src="image.urls.small" alt="Image" />
        </div>
      </div>
    </div>
    <RandomImg></RandomImg>
  </div>
</template>

<script>
import axios from 'axios'
import RandomImg from './RandomImg.vue'

export default {
  components: {
    RandomImg
  },
  computed: {
    imageCount() {
      const myDiv = this.$refs.myDiv // Reference to your first div element
      const images = myDiv.querySelectorAll('img') // Select all img elements within the first div
      return images.length // Return the length of images
    }
  },
  data() {
    return {
      searchQuery: '',
      images: []
    }
  },
  methods: {
    async searchImages() {
      try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          headers: {
            Authorization: `Client-ID Mch8FeMjAilWxlPiILbzIZWH5hWWW_Umv8NmvjyyOck`
          },
          params: {
            query: this.searchQuery
          }
        })
        this.images = response.data.results
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
