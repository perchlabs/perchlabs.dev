
<template>
  <div class="component-launches">
    <LaunchesHeader/>

    <LaunchesItem v-for="item in launchItems" :key="item.flight_number" :item="item"/>

  </div>
</template>


<script>
  import {mapActions, mapGetters} from 'vuex'
  import LaunchesHeader from 'components/Launches/LaunchesHeader'
  import LaunchesItem from 'components/Launches/LaunchesItem'


  export default {
    components: {
      LaunchesHeader,
      LaunchesItem,
    },

    data() {
      return {
      }
    },

    async created() {
      this.getLaunches()
    },

    computed: Object.assign({},
      mapGetters([
        'launchItems',
      ]),
    ),

    methods: Object.assign({},
      mapActions([
        'getLaunches',
      ]),
    )
  }
</script>


<style scoped>
  .component-launches {
  }

  .row {
    display: flex;
    flex-direction: column;
  }
</style>