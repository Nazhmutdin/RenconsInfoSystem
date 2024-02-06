<template>
    <div v-if="amountPages > 1" class="pagination">
        <div class="pagination_buttons">
            <div class="pagination_button previous_page_button">
                <button @click="$emit('previousPage')">Previous</button>
            </div>
            <div class="current-page">{{ currentPage }}/{{ amountPages }}</div>
            <div class="pagination_button next_page_button">
                <button @click="$emit('nextPage')">Next</button>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name: "registryPagination",
        props: {
            currentPage: {
                type: Number
            },
            amountPages: {
                type: Number
            }
        }
    }
</script>


<style scoped>
    .pagination{
        margin-left: 0;
    }
    .pagination_buttons{
        display: inline-flex;
    }
    .pagination_button{
        padding: 0 25px;
    }
    .pagination_button button{
        color: darkblue;
        background-color: lightblue;
        border: 1px, solid, darkblue;
        border-radius: 5px;
    }
    .previous_page_button{
        padding-left: 0;
    }
</style>