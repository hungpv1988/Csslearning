<template>
    <!-- flex is impacted by css in assets/main.css. Comment the file in main.js to see how flex really works -->
    <div>
        <div>The flex container organized by row and wrap, justify around</div>
        <div class="flex-container direction-row wrap-item justify-around">
                <div class="flex-item">1</div>
                <div class="flex-item">2</div>
                <div class="flex-item">3</div>
                <div class="flex-item">4</div>
                <div class="flex-item">5</div>
                <div class="flex-item">6</div>
                <div class="flex-item">7</div>
                <div class="flex-item">8</div>
                <div class="flex-item">9</div>
        </div>
        <hr/>

        <div>The flex container organized by row and wrap, justify center</div>
        <div class="flex-container direction-row wrap-item justify-center">
                <div class="flex-item">1</div>
                <div class="flex-item">2</div>
                <div class="flex-item">3</div>
                <div class="flex-item">4</div>
                <div class="flex-item">5</div>
                <div class="flex-item">6</div>
                <div class="flex-item">7</div>
                <div class="flex-item">8</div>
                <div class="flex-item">9</div>
        </div>
        <hr/>

       <div>The flex container organized by row and wrap, align start</div>
        <div class="flex-container direction-row wrap-item align-start" style="height:300px; border-style: solid">
                <div class="flex-item">1</div>
                <div class="flex-item">2</div>
                <div class="flex-item">3</div>
                <div class="flex-item">4</div>
                <div class="flex-item">5</div>
                <div class="flex-item">6</div>
                <div class="flex-item">7</div>
                <div class="flex-item">8</div>
                <div class="flex-item">9</div>
        </div>
        <hr/>
         <div>The flex container organized by row and wrap, and width is limited</div>
        <div class="flex-container direction-row wrap-item justify-around" style="width: 450px">
                <div class="flex-item">1</div>
                <div class="flex-item">2</div>
                <div class="flex-item">3</div>
                <div class="flex-item">4</div>
                <div class="flex-item">5</div>
                <div class="flex-item">6</div>
                <div class="flex-item">7</div>
                <div class="flex-item">8</div>
                <div class="flex-item">9</div>
        </div>
        <hr/>

        <div>The flex container organized by row and unwrap</div>
        <div class="flex-container direction-row unwrap-item">
                <div class="flex-item">1</div>
                <div class="flex-item">2</div>
                <div class="flex-item">3</div>
                <div class="flex-item">4</div>
                <div class="flex-item">5</div>
                <div class="flex-item">6</div>
                <div class="flex-item">7</div>
                <div class="flex-item">8</div>
                <div class="flex-item">9</div>
        </div>
        <div>The flex container organized by column</div>
        <div class="flex-container direction-column">
                <div class="flex-item">1</div>
                <div class="flex-item">2</div>
                <div class="flex-item">3</div>
                <div class="flex-item">4</div>
                <div class="flex-item">5</div>
                <div class="flex-item">6</div>
                <div class="flex-item">7</div>
                <div class="flex-item">8</div>
                <div class="flex-item">9</div>
        </div>

        <div>The flex container - stretch</div>
        <div class="flex-container direction-column">
                <div class="flex-item">1</div>
                <div class="flex-item">2</div>
                <div class="flex-item">3</div>
                <div class="flex-item">4</div>
                <div class="flex-item">5</div>
                <div class="flex-item">6</div>
                <div class="flex-item">7</div>
                <div class="flex-item">8</div>
                <div class="flex-item">9</div>
        </div>
    </div>
    
</template>
<style scoped>
.flex-container { 
    display: flex;
}

.justify-center {
     justify-content: center;
}

.justify-around {
     justify-content: space-around;
}
.direction-row{
        flex-direction: row; 
}

.direction-column{
        flex-direction: column; 
}

.wrap-item{
        flex-wrap: wrap; 
}

.unwrap-item{
        flex-wrap: nowrap; 
}

.align-center{
    align-content: center
}

.align-start{
    align-content: flex-start
}

.align-end {
    align-items: flex-end;
}

.align-stretch {
    align-content: stretch; 
    /* default value, stretch box line to the rest of space */
}


.flex-item {
  background: tomato;
  padding: 5px;   /* generate space around an element's content within the pre-defined area */
  width: 100px;  /* without it, flex item's width is filled by its content */
  height: 75px; /* without it, flex item's height is filled by its content */
  margin-top: 10px;
  line-height: 75px;  /* https://viblo.asia/p/tim-hieu-ve-font-metrics-line-height-va-vertical-align-phan-1-Qbq5QLOJlD8 */
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
}
</style>