<template>
    <table v-if="amountRows > 0" class="registry_table">
        <slot></slot>
    </table>
</template>

<script>
    export default{
        name: "RegistryTable",
        props: {
            amountRows: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style scoped>
    .registry_table{
        width: 100%;
        border-collapse: collapse;
    }
    ::v-slotted(.registry_table thead tr){
        border-bottom: 3px double rgb(24, 114, 217);
    }
    ::v-slotted(.header_cell){
        /* border-bottom: 4px double rgb(32, 78, 186); */
        font-size: min(2.5vh, 18px);
        font-weight: bold;
        padding: 0 15px;
        color: rgb(24, 114, 217);
    }
</style>