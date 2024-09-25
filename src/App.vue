<script setup>
import { RouterView } from 'vue-router'
import json from './data.json'
import { reactive, provide } from "vue"

let json_data = reactive({
  data: json,
  modifyData(newData) {
    this.data = newData;
  }
});

provide("json", json_data)

</script>
<template>
  <RouterView />
</template>