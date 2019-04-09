
<template>
  <div class="component-launches-item">
    <div class="row">
      <div class="column badge"><img :src="item.links.mission_patch_small" class="badge"/></div>
      <div class="column rocket-name">{{ item.rocket.rocket_name }}</div>
      <div class="column rocket-type">{{ item.rocket.rocket_type }}</div>
      <div class="column launch-date">{{ item.launch_date_local }}</div>
      <div class="column details">{{ item.details }}</div>
      <div class="column id">{{ item.flight_number }}</div>
      <div class="column article"><a :href="item.links.article_link">link</a></div>
    </div>
  </div>
</template>


<script>
  export default {
    props: [
      'item'
    ],

    data() {
      return {
      }
    }
  }
</script>


<style scoped>
  .component-launches-item {
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .column {
    flex: 1;
  }

  img.badge {
    height: 25px;
    width: 25px;
  }

</style>