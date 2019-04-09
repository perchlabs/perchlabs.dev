
<template>
  <div class="component-launches-header">
    <div class="top-row">
      <div class="column column-refresh">
        <div @click="refresh" class="refresh">refresh</div>
      </div>
      <div class="column column-land-success">LAND SUCCESS</div>
      <div class="column column-reused">REUSD</div>
      <div class="column column-with-reddit">WITH REDDIT</div>
    </div>
    <div class="row">
      <div class="column badge">Badge</div>
      <div class="column rocket-name">Rocket Name</div>
      <div class="column rocket-type">Rocket Type</div>
      <div class="column launch-date">Launch Date</div>
      <div class="column details">Details</div>
      <div class="column id">ID</div>
      <div class="column article">Article</div>
    </div>
  </div>
</template>


<script>
  import {mapActions} from 'vuex'

  export default {
    data() {
      return {
      }
    },

    methods: Object.assign({},
      mapActions({
        refresh: 'getLaunches',
      }),
    )
  }
</script>


<style scoped>
  .component-launches-header {
  }

  .top-row {
    display: flex;
    flex-direction: row;
  }
  .column {
    flex: 1;
  }

  .refresh {
    color: blue;
    cursor: pointer;
  }


  .row {
    display: flex;
    flex-direction: row;
  }

  .column {
    flex: 1;
  }

</style>