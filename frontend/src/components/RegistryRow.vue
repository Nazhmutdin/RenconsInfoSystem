<template>
    <tr class="registry_row">
        <slot></slot>
    </tr>
</template>

<script>
    export default{
        name: "RegistryRow"
    }
</script>

<style scoped>
    ::v-slotted(.row_cell){
        padding: 0;
        text-align: center;
        min-width: 2vw;
        color: rgb(7, 80, 175);
    }
    ::v-slotted(.row_cell .welder_link){
        width: 100%;
    }
    tr{
        box-sizing: border-box;
        border-bottom: 1px solid blue;
        min-width: 75%;
    }
    tr:hover{
        background: rgb(202, 230, 250);
    }
</style>