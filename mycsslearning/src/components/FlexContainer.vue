<template>
    <div>
        <div v-for="item in items" :key="item.id" > 
            <a v-bind:href="item.imageUrl">
                <img v-bind:src="item.thumbnail" />
            </a>
        </div>
    </div>
</template>

<script setup>

const items = [
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
  ]
</script>