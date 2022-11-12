<template>
    <div>
      <!-- dynamic arguments event.preventDefault() on the trigger event. No submit and logic in onSubmit is executed-->
      <a v-bind:[attributeName]="attributeValue" v-on:[eventName]="doSomething"> Click </a>

      <!-- modifier.  -->
      <form action="24h.com.vn" @submit.prevent="onSubmit">
          <input type="submit" />
      </form>

      <div>
          <p id="p-count">{{ count}} </p>  <button @click="increaseCount">add count </button>
      </div>

     <!-- v-for, not v-bind -->
    <!-- be careful, "in-place patch" strategy is executed with item.id. If need to use temporary state of dom, need to consider-->
    <!-- Vue will patch each element in-place and make sure it reflects what should be rendered at that particular index. -->
      <div v-for="item in itemsToBeDisplayed" :key="item.id">
          <a v-bind:href="item.imageUrl"> 
            <img v-bind:src="item.thumbnail" />
          </a>
      </div> 

      <!-- css class -->
      <div :class="{active: isActive}">Css & class</div>
      <br/>
      <div class="static" :class="{active:isActive}">many css classes</div>

      <!-- render if awesome is true. Can use v-if on <template> -->
       <div v-if="awesome">awesome</div>
       <div v-else-if="count == 0">stil awesome</div>
       <div v-else>oh no</div>
      <!-- v-show works the same as v-if, but always render, just set css to show or not-->

      <!-- Bind event. Can use modifier. Key modifiers can be used as well-->
      <button @click="accessDomNodeOnEvent('test', $event)" > Simple event binding</button>

       <!--
         Form input binding. Use the same to bind value for radio button, text area, select box..
        add lazy so that value is updated after change event instead of the event immediately.
        Can cast type, convert to int with .number ,trim
       -->
       <div>
          <input v-model="vmodelText" type="text"  /><button @click="changeText" > Change text</button>
      </div>

       <!--
        watch can be deeper level if config 
        watcher must be created synchronousl
       -->
      <div>
         <p>
          Ask a yes/no question:
          <input v-model="question" />
        </p>
         <p>{{ answer }}</p>
      </div>

     <!--
         ref allows us to obtain a direct reference to a specific DOM element
       -->
        <input ref="input" value="test ref" />
    </div>
    <!--
        emit event  
        fallthrough attribute: props from a component  (single node) is passed to its root node -> inheritAttrs: false to disable 
        slot
        provide/inject -> provide data from parents and child nodes can receive. Can set up global config
        defineAsyncComponent -> load async, only load a component when needed.
       -->
    <div>
      <button @click="makeHelloAppear">Toggle</button>
      <Transition name="slide-fade">
        <p v-if="showHello">hello</p>
      </Transition>
        <!--
     Transition, TransitionGroup, suspend, and Teleport (display a part of component at a different position)
       -->
    </div>
</template>
<style scoped>
.active{
  background-color: red;
}
.static{
  font-size: 18px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<script setup>
import {ref, nextTick, reactive, computed, onMounted, watch} from 'vue'
// dynamic arguments: expected to be evaluated to a string, except for null. 
const attributeName = "href";
const attributeValue = "http://24h.com.vn";
const eventName = "click";

//ref handles well primitive data type. convert .value with reactive(). Allow to create reference to any value
const count = ref(0);

// only handle object types, can go deep level. It creates a proxy. Carefully with reference  and work with params in function
const state = reactive({
  arr:['foo', 'bar'],
  //items: data
});

// css & class
const isActive = true;

// v-if
const awesome = false;

// bind from input
const vmodelText = ref('vmodeltext')

// watch
const answer = ref('');
const question = ref('');
const input = ref(null);
let showHello = ref(true);

function doSomething(){
  alert(1);
};

// modifier @submit.prevent
function onSubmit(event){
  console.log("hung phan");
};


// nextTick
function increaseCount(){
    count.value++;
    alert(document.getElementById("p-count").innerText); // still show old value;

    //to wait for the DOM update to complete after a state change
    nextTick(() => {
    // access updated DOM
    alert(document.getElementById("p-count").innerText);  // still show value after being increased by 1;
  })
};

//That's why for complex logic that includes reactive data, it is recommended to use a computed property
//don't make async requests or mutate the DOM inside a computed getter! -> should use watcher
  const itemsToBeDisplayed = computed(()=>{
    return data.value.slice(0,4);
  });

  function accessDomNodeOnEvent(msg, event){
     if (event){
      alert("msg " +event.target.tagName);
     }
  }

  function changeText(){
    vmodelText.value = vmodelText.value + "  1";
  }

// need to register callback synchronously. Do not put in things like setTimeOut
 onMounted(() => {
    vmodelText.value = vmodelText.value + " passing on mounted";
    input.value.focus();
    //alert(input.value);
 });

// watch works directly on a ref
// there are cases where we need to perform "side effects" in reaction to state changes - 
// for example, mutating the DOM, or changing another piece of state based on the result of an async operation.
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = "here is your answer" // simulate a rest api calling
      answer.value = "here is your answer"
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
  else {
     answer.value = 'Thinking...'
  }
});

function makeHelloAppear(){
  showHello.value = !showHello.value;
  alert(showHello);
};

  const data = ref([
    {
      id: 1,
      "thumbnail" : "https://cdn.img.bibpix.net/photos/thumb/6355cb92c293394eb36d4622/2a415bc0a2d3770763b87de2eb76153e.jpg?v=10",
      "imageUrl": "https://img.bibpix.net/photos/sample/6355cb92c293394eb36d4622/2a415bc0a2d3770763b87de2eb76153e.jpg?v=10"
    },
    {
      id: 2,
      "thumbnail" : "https://cdn.img.bibpix.net/photos/thumb/6355cb92c293394eb36d4622/4d7f590f9e792075b9c05dffdb8af5f7.jpg?v=10",
      "imageUrl": "https://img.bibpix.net/photos/sample/6355cb92c293394eb36d4622/4d7f590f9e792075b9c05dffdb8af5f7.jpg?v=10"
    },
    {
      id: 3,
      "thumbnail" : "https://cdn.img.bibpix.net/photos/thumb/6355cb92c293394eb36d4622/54d92cf9254c3a0a302cd5156921c289.jpg?v=10",
      "imageUrl": "https://img.bibpix.net/photos/sample/6355cb92c293394eb36d4622/54d92cf9254c3a0a302cd5156921c289.jpg?v=10"
    },
    {
      id: 4,
      "thumbnail" : "https://cdn.img.bibpix.net/photos/thumb/6355cb92c293394eb36d4622/cddb6a91c39e24f392e07ed2b3c62d16.jpg?v=10",
      "imageUrl": "https://img.bibpix.net/photos/sample/6355cb92c293394eb36d4622/cddb6a91c39e24f392e07ed2b3c62d16.jpg?v=10"
    },
    {
      id: 5,
      "thumbnail" : "https://cdn.img.bibpix.net/photos/thumb/6355cb92c293394eb36d4622/6fc3505469e467e108dee4d5ec98ab1b.jpg?v=10",
      "imageUrl": "https://img.bibpix.net/photos/sample/6355cb92c293394eb36d4622/6fc3505469e467e108dee4d5ec98ab1b.jpg?v=10"
    },
    {
      id: 6,
      "thumbnail" : "https://cdn.img.bibpix.net/photos/thumb/6355cb92c293394eb36d4622/977ca74cad0bc8ba68f504ff3af35b32.jpg?v=10",
      "imageUrl": "https://img.bibpix.net/photos/sample/6355cb92c293394eb36d4622/977ca74cad0bc8ba68f504ff3af35b32.jpg?v=10"
    },
    {
      id: 7,
      "thumbnail" : "https://cdn.img.bibpix.net/photos/thumb/6355cb92c293394eb36d4622/d8e2a30d5280c7a791173c0d93355415.jpg?v=10",
      "imageUrl": "https://lbmpix.race.vn/photo?race_id=lbm2022&result=0&bib_type=all&bib=*&page=62#cl-group-33"
    },
    {
      id: 8,
      "thumbnail" : "https://cdn.img.bibpix.net/photos/thumb/6355cb92c293394eb36d4622/711e0a11e6bfb5c647559b214f3120aa.jpg?v=10",
      "imageUrl": "https://img.bibpix.net/photos/sample/6355cb92c293394eb36d4622/711e0a11e6bfb5c647559b214f3120aa.jpg?v=10"
    },
  ])
</script>
