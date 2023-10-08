<script setup lang="ts">
onLaunch(() => {
    console.log('App Launch')
})
onShow(() => {
    console.log('App Show')
})
onHide(() => {
    console.log('App Hide')
})
</script>

<style lang="scss">
page {
    background-color: #f6f7fb;

}

/* H5 兼容 pc 所需 */
</style>
