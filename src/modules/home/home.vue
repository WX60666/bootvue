<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="./imgs/img1.jpg" alt="image slot">
      </b-carousel-slide>

      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="./imgs/img2.jpg" alt="image slot">
      </b-carousel-slide>

      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="./imgs/img3.jpg" alt="image slot">
      </b-carousel-slide>

      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="./imgs/img6.jpg" alt="image slot">
      </b-carousel-slide>


    </b-carousel>

    <b-jumbotron>
      <template slot="header">
        <div style="font-size: 24px">全面而稳定的智能产品解决方案</div>

      </template>
      <template slot="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </template>

    </b-jumbotron>
  </div>

</template>

<script>
    export default {
        name: "home",
        props: {},

        data() {
            return {
              slide: 0,
              sliding: null
            }
        },

        components: {},

        mounted() {

        },

        methods: {
          onSlideStart (slide) {
            this.sliding = true
          },
          onSlideEnd (slide) {
            this.sliding = false
          }
        },

        filters: {},

        computed: {},

        watch: {}
    }
</script>

<style lang='scss' scoped>

</style>
