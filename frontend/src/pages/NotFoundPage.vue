<template>
    <div class="page-not-found-block">
        <span class="page-not-found-text">
            Sorry, page not found!😢
        </span>
    </div>
</template>

<script>
    export default{
        name: "NotFoundPage"
    }
</script>

<style scoped>
    .page-not-found-block{
        width: 100vh;
        height: 100vh;
        text-align: center;
    }
    .page-not-found-text{
        line-height: 100vh;
        display: inline-block;
        vertical-align: middle;
        font-size: 25px;
    }

</style>