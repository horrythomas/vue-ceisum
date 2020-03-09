<template>
  <div id="cesiumContainer"></div>
</template>
<script>
export default {
  name: 'WebglView',
  data () {
    return {
      map: null
    }
  },
  methods: {
    init () {
      if (window.GIS) {
        this.map = new GIS('cesiumContainer').init()
        this.$store.dispatch('initMap', this.map)
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>
