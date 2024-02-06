<template>
    <SideBar></SideBar>
</template>
  
  
<!--
<=====================================================================>
-->


<script>
import SideBar from "@/components/SideBar.vue"

export default{
    name: "MainPage",
    components: { SideBar }
}
</script>


<!--
<=====================================================================>
-->


<style scoped>

    body {
        background: rgb(237, 246, 252); 
    }
    *{
        margin: auto;
    }
</style>