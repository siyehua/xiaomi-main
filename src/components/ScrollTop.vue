<template>
    <div>
        <img alt="001" src="../assets/10012.png" @click="scrollTop">
    </div>
</template>

<script>
    export default {
        name: "ScrollTop",
        setup() {
            function scrollTop(event) {
                window.scrollTo({top: 0, behavior: 'smooth'})
            }

            return {
                scrollTop,
            }
        },
    }
</script>

<style scoped>
    img {
        position: fixed;
        bottom: 10em;
        right: 10em;
        width: 42px;
        height: 62px;
    }

</style>