<template>
  <div>
    <button @click="addObjects">
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          id: 'VOLUME',
          name: 'GEO管道容差',
          type: 'VOLUME',
          radius: 50000,
          malpha: 0.1,
          descp: '管道',
          pointList: [
            { longitude: 112.0, latitude: 19.0, altitude: 50000 },
            { longitude: 115.0, latitude: 20.0, altitude: 100000 },
            { longitude: 120, latitude: 20, altitude: 50000 }
          ]
        },
        {
          id: 'line_volume',
          name: '理论轨迹',
          type: 'LINE',
          color: '#f00',
          pointList: [
            { longitude: 112.0, latitude: 19.0, altitude: 100000 },
            { longitude: 115.0, latitude: 20.0, altitude: 150000 },
            { longitude: 120, latitude: 20, altitude: 100000 }
          ]
        },
        {
          id: 'point_volume_1',
          name: '',
          type: 'POINT',
          color: '#ff0',
          farValue: 2,
          pointList: [{ longitude: 112.0, latitude: 19.0, altitude: 100000 }]
        },
        {
          id: 'point_volume_2',
          name: '',
          type: 'POINT',
          color: '#ff0',
          farValue: 2,
          pointList: [{ longitude: 115.0, latitude: 20.0, altitude: 150000 }]
        },
        {
          id: 'point_volume_3',
          name: '',
          type: 'POINT',
          color: '#ff0',
          farValue: 2,
          pointList: [{ longitude: 120, latitude: 20, altitude: 100000 }]
        },
        {
          id: 'plane',
          name: '飞行器',
          type: 'PLANE',
          pointList: [{ longitude: 120, latitude: 20, altitude: 100000 }]
        },
        {
          id: 'HALF_SPHERE_1',
          name: '半球模型',
          type: 'HALF_SPHERE',
          radius: 10000,
          color: '#11ff66',
          pointList: [{ longitude: 120, latitude: 20, altitude: 0 }]
        },
        {
          id: 'HALF_SPHERE_2',
          name: '半球模型',
          type: 'HALF_SPHERE',
          radius: 10000,
          color: '#FFA93A',
          pointList: [{ longitude: 120, latitude: 20, altitude: 0 }]
        },
        {
          id: 'fac_1',
          name: '地面基站',
          type: 'FAC',
          pointList: [{ longitude: 120, latitude: 20, altitude: 0 }]
        }
      ]
    }
  },
  methods: {
    addObjects () {
      const map = this.$store.getters.getMap
      console.log(map)
      map &&
        map.init(m => {
          const port = m.getPort()
          port.addObjects(this.data)
        })
    }
  }
}
</script>
<style lang="less" scoped>
button {
  padding: 5px 10px;
}
</style>
