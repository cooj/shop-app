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

<style>
page {
    background-color: #f6f7fb;

}

/* H5 兼容 pc 所需 */

/* #ifdef H5 */
uni-page {

    --window-bottom: 50px;
    padding-bottom: var(--window-bottom);

}

uni-page-wrapper {
    overflow: auto;
}

.uni-tabbar-bottom {
    display: block !important;
}

/* #endif */
</style>
