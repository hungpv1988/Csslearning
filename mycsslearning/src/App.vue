<template>
    <div>
    
        <button @click="moveToPage">access</button>
       <router-link to="/">Home</router-link> |
         <router-link to="/hello">hello</router-link>|
         <router-link to="/homepage">homepage</router-link>
         <router-view/>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

  const router = useRouter();
  const route = useRoute();
  function moveToPage(){
      router.replace({name: 'homepage', query:{id:1}});
  }
</script>

