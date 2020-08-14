<template>
  <div class="page">
    <h3>文本</h3>
    <pre>
      <code>{{code}}</code>
    </pre>
    <div class="code-show">{{messages}}</div>
  </div>
</template>

<script>

export default {
  name: '',
  props: [''],
  components: {},
  data () {
    return {
      code: `<div>{{message}}</div>
data () {
  return {
    message: '我是一段文本'
  }
}
`,
      messages: '我是一段文本'
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="less">
</style>
