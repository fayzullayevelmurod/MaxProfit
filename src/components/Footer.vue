<template>
    <footer class="footer">
        <div class="footer__bg"></div>
        <div class="main_container">
            <h6>{{ $t('footer')['description'][0] }}</h6>
            <div class="footer__btn">
                <a href="https://t.me/maxprofit_support" target="_blank" class="main_btn">{{ $t('start using') }}</a>
            </div>
            <h6 v-html="$t('footer')['description'][1]"></h6>
            <ul class="footer__social">
                <li>
                    <a href="#">
                        <img src="@/assets/images/icons/footer_icon1.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="@/assets/images/icons/footer_icon2.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="@/assets/images/icons/footer_icon3.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="@/assets/images/icons/footer_icon4.svg" alt="">
                    </a>
                </li>
            </ul>
            <h6>{{ $t('footer')['description'][2] }}</h6>
            <h5>{{ $t('footer')['description'][3] }}</h5>
            <div class="footer__text">
                <p>{{ $t('footer')['description'][4] }}</p>
            </div>
            <div class="footer__line"></div>
            <h6>
                <img src="@/assets/images/header_logo.svg" alt="">
            </h6>
            <span>{{ $t('footer')['copy_text'] }}</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style lang="scss">
.footer {
  font-family: $font-raleway;
}
</style>