<template>
  <div class="nav-left">
    <article>
      <h1>实例列表</h1>
      <ul class="nav-ul">
        <li class="nav-list" :style="{'color': name == item.name ? 'red' : ''}" v-for="(item, index) in list"
          :key="item.title" @click="goPath(item, index)">
          {{item.title}}
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import json from '../assets/data/nav.json'
export default {
  name: 'navigation',
  props: [''],
  components: {},
  data () {
    return {
      list: [],
      name: 'interpolation'
    }
  },
  watch: {
    '$route': {
      handler: function (val, oldval) {
        this.name = val.name
      }
    }
  },
  created () {
  },
  mounted () {
    this.list = json.list
  },
  methods: {
    goPath (item, index) {
      if (item.name == 'interpolation') {
        this.$router.push('/')
      } else {
        this.$router.push('/' + item.name)
      }
    }
  }
}
</script>

<style lang="less">
.nav-left {
  .nav-ul {
    margin-top: 10px;
    .nav-list {
      padding: 5px 0 5px 10px;
      cursor: pointer;
    }
  }
}
</style>
