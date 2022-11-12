<template>
     <!-- flex is impacted by css in assets/main.css. Comment the file in main.js to see how flex really works -->
    <ul class="flex-container">  
        <!-- how the size of flex-contaner is decide. flex-wrap impacts on the size length -->
        <li class="flex-item">123</li>
        <li class="flex-item">234</li>
        <li class="flex-item">345</li>
        <li class="flex-item">4 Test 4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test
            4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test
            4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test
            4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test
        </li>
        <li class="flex-item">567</li>
        <li class="flex-item">678</li>
    </ul>
</template>
<style scoped>
.parent {
    display: flex;
    height: 300px;
}

.child {
    width: 100px;
    height: 100px;
    margin: auto;
}

.flex-container { 
    display: flex;
    flex-direction: row; 
    flex-wrap: wrap; /* by default, all items fit in one line. If wrapped -> mutiple lines. In this sample, default is two and why */
    /* flex-flow: row wrap  shortcut for flow-wrap & flex-flow */
    justify-content: space-around;
}

.flex-item {
  background: tomato;
  padding: 5px;   /* generate space around an element's content within the pre-defined area */
  margin-top: 10px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
  
}
</style>