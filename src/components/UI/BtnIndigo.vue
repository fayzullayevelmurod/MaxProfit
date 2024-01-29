<template>
    <button class="main_btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "BtnIndigo"
}
</script>

<style lang="scss">
.main_btn {
    color: var(--white);
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 0.32px;
    border-radius: 90px;
    padding: 15px 25px;
    background: linear-gradient(90deg, #6839EF 0%, #B547DB 109.09%), linear-gradient(115deg, #F76460 22.3%, #FFB308 96.05%), #2D6BF6;
}
</style>