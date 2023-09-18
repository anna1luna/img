<template>
  <div>
    <header class="header">
      <div class="header_container">
        <img src="/src/assets/img/sflogo.png" alt="San_Francisco_Art" class="header_logo" />
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
    <RandomImg v-if="!imagesLoaded"></RandomImg>
    <div class="results">
      <div class="results_container">
        <div v-for="image in images" :key="image.id">
          <img
            class="results_img"
            :src="image.urls.small"
            alt="Image"
            @click="navigateToImagePage"
          />
        </div>
      </div>
    </div>
    <button @click="scrollToTop" class="scroll-to-top">
      <img src="/src/assets/img/arrow.svg" alt="arrow" />
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import RandomImg from './RandomImg.vue'
export default {
  components: {
    RandomImg
  },

  data() {
    return {
      searchQuery: '',
      images: [],
      imagesLoaded: false,
      currentPage: 1,
      perPage: 30
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
            query: this.searchQuery,
            page: this.currentPage,
            per_page: this.perPage
          }
        })
        this.images = response.data.results
        this.imagesLoaded = true
        this.$emit('images-loaded', true)
      } catch (error) {
        console.error(error)
      }
    },
    scrollToTop() {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: Add smooth scrolling behavior
      })
    },
    navigateToImagePage() {
      // Navigate to the image page using Vue Router
      this.$router.push({ name: 'ImageView', params: { id: this.imageId } })
    }
  }
}
</script>
