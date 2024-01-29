<template>
    <router-link :to="to" class="btn_light">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    name: "BtnLight",
    props: {
        to: {
            type: String,
            default: '#'
        }
    }
}
</script>

<style lang="scss">
    .btn_light {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
        padding: 7px 18px 8px 15px;
        border-radius: 90px;
        background: 
            linear-gradient(#fff 0 0) padding-box, /*this is your grey background*/
            linear-gradient(to right, #6839EF, #B547DB) border-box;
        border: 2px solid transparent;
        color: #743CED;
        font-size: 14px;
        font-weight: 600;
        line-height: 142.5%;
    }

    @media only screen and (max-width: 768px) {
        .btn_light {
            height: 30px;
            padding-top: 0;
            padding-bottom: 0;
        }
    }
</style>