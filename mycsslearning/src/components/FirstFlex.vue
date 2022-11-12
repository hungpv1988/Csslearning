<template>
    <!-- flex is impacted by css in assets/main.css. Comment the file in main.js to see how flex really works -->
    <div>
        <ul class="flex-container">  
            <!-- how the size of flex-contaner is decide. flex-wrap impacts on the size length -->
            <li class="flex-item">1</li>
            <li class="flex-item">2</li>
            <li class="flex-item">3</li>
            <li class="flex-item">4</li>
            <li class="flex-item">5</li>
            <li class="flex-item">6</li>
        </ul>
    </div>
    
</template>
<style scoped>
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
  width: 200px;  /* without it, flex item's width is filled by its content */
  height: 150px; /* without it, flex item's height is filled by its content */
  margin-top: 10px;
  line-height: 150px;  /* https://viblo.asia/p/tim-hieu-ve-font-metrics-line-height-va-vertical-align-phan-1-Qbq5QLOJlD8 */
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
}
</style>