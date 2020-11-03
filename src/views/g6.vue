<!--
 * @Date: 2020-11-02 16:21:31
 * @LastEditTime: 2020-11-03 10:38:14
 * @FilePath: /myVue3/src/views/g6.vue
 * @Author: twy
 * @LastEditors: twy
-->
<template>
  <div>G6</div>
  <div id="container"></div>
</template>

<script>
import G6 from "@antv/g6";
const data = {
  nodes: [
    {
      id: "node1",
      label: "Circle1",
      x: 150,
      y: 150
    },
    {
      id: "node2",
      label: "Circle2",
      x: 400,
      y: 150
    }
  ],
  edges: [
    {
      source: "node1",
      target: "node2"
    }
  ]
};
export default {
  name: 'G6',
  mounted () {
    this.initGraph()
  },
  methods: {
    initGraph () {
      const graph = new G6.Graph({
        container: 'container',
        width: 800,
        height: 500
      })
      graph.data(data)
      graph.render()
    }
  }
}
</script>

<style>

</style>