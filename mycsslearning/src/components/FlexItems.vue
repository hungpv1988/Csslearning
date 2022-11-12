<template>
    <!-- flex is impacted by css in assets/main.css. Comment the file in main.js to see how flex really works -->
    <div>
          <div class="flex-container">
                <div style="flex-grow: 1">1</div>
                <div style="flex-grow: 1">2</div>
                <div style="flex-grow: 1">3</div>
                <div style="flex-grow: 6">4</div>
          </div>

  
        <div class="flex-container-simple">  
            <!-- flex:shrink: how item's size is impacted. Zero means it mostly should not. Change window's size to see how it works-->
            <div>1</div>
            <div>2</div>
            <div style="flex-shrink: 0">3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
        </div>
     
        <div class="flex-container-simple">  
            <!-- flex-basic: set initial value for the box item-->
            <div>1</div>
            <div>2</div>
            <div style="flex-basis:500px">3</div>
            <div>4</div>
            <div>5</div>
        </div>
    </div>
</template>
<style scoped>
.flex-container { 
    display: flex;
    flex-direction: row; 
    flex-wrap: wrap; /* by default, all items fit in one line. If wrapped -> mutiple lines. In this sample, default is two and why */
    /* flex-flow: row wrap  shortcut for flow-wrap & flex-flow */
    justify-content: space-around;
    align-items: stretch;
}

.flex-container-simple { 
    display: flex;
    align-items: stretch;
    flex-direction: row; 
}
.flex-container-simple > div   {
  background-color: DodgerBlue;
  color: white;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

.flex-container  > div   {
  background-color: DodgerBlue;
  color: white;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
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
<script setup>
let  msg = "Hung Phan";
console.log('Welcome ${msg}');
</script>
