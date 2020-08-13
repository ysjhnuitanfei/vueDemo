<template>
  <div class="page">
    <h3>文本</h3>
    <pre>
      <code>{{message}}</code>
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
      message: `<div>{{message}}</div>
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
    var aaa = `
    <div></div>
  `

  },
  methods: {

  }
}
</script>

<style lang="less">
</style>
