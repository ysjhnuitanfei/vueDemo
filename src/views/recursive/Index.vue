<template>
  <div class="page">
    <div>
      <h3>递归场景</h3>
      <div class="ins-text">主要应对多级菜单，多级分类，如以下场景：</div>
      <pre>
        <code>{{code1}}</code>
        </pre>
      <div class="ins-text">看到这个很多人会想到这个实现起来很简单啊，来个嵌套循环不就完事了。</div>
      <div class="text">对，你说的没错，事实就是这样简单。基于上面的数据格式，我们的实现方式如下：</div>
      <pre>
          <code>{{code2}}</code>
        </pre>
      <div class="ins-text">如果有一天我们数据多了一级分类，变成现在这样</div>
      <pre>
          <code>{{code3}}</code>
        </pre>
      <div class="ins-text">既然产品有需求数据有变化，那么我们就改代码吧，于是我们在原有的代码上继续加上一层嵌套循环，这次又总算完成了，但是可能没过两天我们的数据又增加了一级分类怎么办？还是继续嵌套下去？
      </div>
      <div class="text">我们不排除这种存在的可能，那如果我们遇到这种情况怎么办？这里就要用到我们说的 递归组件 了</div>
      <div class="text">什么是递归组件？简单来说就是在组件中内使用组件本身，下面我们就来看看如何在项目中使用递归组件去解决我们上面问题。</div>
      <pre>
        <code>{{code4}}</code>
      </pre>
      <div class="text" style="margin-bottom: 20px">我们来看一下两次数据渲染的结构及样式</div>
      <List :list='list'></List>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  props: [''],
  components: {
    List: () => import('./List')
  },
  data () {
    return {
      code1: `list: [{
    name: "普通",
    children: [{
        name: "现代"
    }, {
        name: "吉利"     
    }]
}, {
    name: "豪华",
    children: [{
        name: "奔驰"
    }, {
        name: "宝马"     
    }]
}]`,
      code2: `<div class="list-item" v-for="(item, index) in list" :key="index">
  <div class="item-name">
    <span>{{item.name}}</span>
  </div>
  <div v-if="item.children" class="children-item">
    <div v-for="(child, index) in item.children" :key="index">
      <div class="item-name">
        <span>{{child.name}}</span>
      </div>
    </div>
  </div>
</div>`,
      code3: `list: [
  {
      name: "普通",
      children: [{
          name: "现代",
          children: [{
              name: "现代Cs5-plus"
          }, {
              name: "北京现代"     
          }]
      }, {
          name: "吉利",
          children: [{
              name: "吉利ICON"
          }, {
              name: "吉利帝豪"     
          }]
      }]
  },
  {
      name: "豪华",
      children: [{
          name: "奔驰",
          children: [{
              name: "奔驰S级"
          }, {
              name: "奔驰A级"  
          }]   
      }]
  }
]`,
      code4: `<div class="list-item" v-for="(item, index) in list" :key="index">
    <div class="item-name">
        <span>{{item.name}}</span>
    </div>
    <div v-if="item.children" class="children-item">
        <list :list="item.children"></list>
    </div>
</div>`,
      list: [
        {
          name: "普通",
          children: [{
            name: "现代",
            children: [{
              name: "现代Cs5-plus"
            }, {
              name: "北京现代"
            }]
          }, {
            name: "吉利",
            children: [{
              name: "吉利ICON"
            }, {
              name: "吉利帝豪"
            }]
          }]
        },
        {
          name: "豪华",
          children: [{
            name: "奔驰",
            children: [{
              name: "奔驰S级"
            }, {
              name: "奔驰A级"
            }]
          }]
        }
      ]
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
