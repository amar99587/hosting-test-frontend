<template>
  <div class="home">
    <img alt="Vue logo" :src='image.url || "../assets/logo.png"'>
    <input type="file" @change="handleImageUpload" accept="image/*" alt="enter the Image">
    <HelloWorld :msg="text" />
  </div>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { http } from "../plugins/axios";
import { ref } from 'vue'

const text = "Welcome to Your VueJs App";
const image = ref({
  file: "",
  url: ""
});

const create = async () => {
  
  const formData = new FormData();
  formData.append("image", image.value.file);
  for (var value of formData.values()) {
  console.log(value); // logs "value1" and "value2"
}
  try {
    const res = await http.post("/storage/image", formData
      , {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
        }
      }
    );
    console.log(res);
    image.value.url = res.data;
  } catch (err) {
    console.log(err);
  }
}

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  // image.value.display = URL.createObjectURL(file);
  image.value.file = file;
  create();
};
</script>
