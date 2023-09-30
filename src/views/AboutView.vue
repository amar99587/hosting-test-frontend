<template>
  <div class="about">
    <h1>{{ hello }} This is an about page</h1>
    <button @click="getdata">get data</button>
    <h1>{{ data }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { http } from "../plugins/axios";

let data = ref();
let hello  = ref();

(async () => {
  const result = await http.get("/");
  hello.value = result.data;
})();

const getdata = async () => {
  const result = await http.get("/data");
  data.value = result.data;
}
</script>