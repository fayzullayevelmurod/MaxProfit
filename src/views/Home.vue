<template>
  <div class="wrapper">
    <!-- Home -->
    <section class="home">
      <div class="main_container">
        <img src="@/assets/images/home_bg.png" alt="" class="bg">
        <h1>{{ $t('home-title') }}</h1>
        <div class="media_deskription">{{ $t('home description') }}</div>
        <img src="@/assets/images/home_card.png" height="450" class="card" alt="">
        <ul>
          <li>
            <img src="@/assets/images/icons/check_messange.svg" alt="">
            <p>{{ $t('home description 2') }}</p>
          </li>
          <li>
            <img src="@/assets/images/icons/check_messange.svg" alt="">
            <p>{{ $t('home description 3') }}</p>
          </li>
        </ul>
        <a href="https://panel.maxprofit.cc/auth/register" class="main_btn">{{ $t('home button') }}</a>
      </div>
    </section>
    <!-- Home end -->

    <!-- Scanner -->
    <section class="scanner">
      <div class="main_container">
        <img src="@/assets/images/iPhone14.png" alt="" class="iphone mobile">
        <div class="left_block">
          <img src="@/assets/images/iPhone14.png" alt="" class="iphone">
          <ul>
            <li v-for="(item, i) in $t('scanner left block texts')" :key="i">
              <img :src="require(`@/assets/images/icons/scanner_${i + 1}.svg`)" alt="">
              <span>{{ item }}</span>
            </li>
          </ul>
          <a href="https://panel.maxprofit.cc/auth/register" class="main_btn mobile">{{ $t('start using') }}</a>
        </div>
        <div class="statistic">
          <img src="@/assets/images/statistic.png" alt="">
          <span>{{ $t('statistic text') }}</span>
        </div>
        <div class="right_block">
          <h2 class="gradient_text">{{ $t('scanner title') }}</h2>
          <ul>
            <li v-for="(item, i) in $t('scanner right block texts')" :key="i">
              <div class="number gradient_text">{{ '0' + (i + 1) }}</div>
              <div class="text">{{ item }}</div>
            </li>
          </ul>
          <a href="https://panel.maxprofit.cc/auth/register" class="main_btn desktop">{{ $t('start using') }}</a>
        </div>
      </div>
    </section>
    <!-- Scanner end -->

    <!-- Screener -->
    <div class="screener">
      <div class="main_container">
        <img src="@/assets/images/screener_bg.png" alt="" class="bg">
        <div class="left_block">
          <h2>{{ $t('screener title') }}</h2>
          <div class="description">{{ $t('screener description') }}</div>
          <img src="@/assets/images/screener_card.png" width="431" class="img_card" alt="">
        </div>
        <div class="right_block">
          <ul>
            <li v-for="(item, i) in $t('screener descriptions')" :key="i">
              <img :src="require(`@/assets/images/icons/screener_${i + 1}.svg`)" alt="">
              <span>{{ item }}</span>
            </li>
          </ul>
          <div class="description">
            <p>{{ $t('screener description 2') }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Screener end -->

    <!-- wallets -->
    <section class="wallets">
      <div class="main_container">
        <h4 class="gradient_text">{{ $t('wallet title') }}</h4>

        <div class="swiper_wrap">
          <button class="prev_btn" @click="wallet_slider.slidePrev()">
            <img src="@/assets/images/icons/slide_btn.svg" alt="">
          </button>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, i) in $t('wallet slider')" :key="i">
                <div class="wallets_card">
                  <h5>{{ item.title }}</h5>
                  <p v-for="(description, idx) in item.description" :key="idx">{{ description }}</p>
                  <div class="wallets_card_in">
                    <ul>
                      <li v-for="(description, idx) in item['description list']" :key="idx">
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        {{ description }}
                      </li>
                    </ul>
                    <img class="wallets_img" :src="require(`@/assets/images/wallets${i+1}.png`)" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="next_btn" @click="wallet_slider.slideNext()">
            <img src="@/assets/images/icons/slide_btn.svg" alt="">
          </button>
        </div>
        <div class="link_wrap">
          <a href="https://panel.maxprofit.cc/auth/register" class="main_btn">{{ $t('start using') }}</a>
        </div>
      </div>
    </section>
    <!-- wallets -->

    <!-- message -->
    <section class="message">
      <div class="main_container">
        <h4 class="gradient_text">{{ $t('message title') }}</h4>
        <div class="message_in">
          <div class="message_left">
            <p v-for="(item, i) in $t('message left description')" :key="i">{{ item }}</p>
          </div>
          <div class="message_center">
            <img src="@/assets/images/messenger_img.png" width="373" alt="">
          </div>
          <ul class="message_right">
            <li v-for="(item, i) in $t('message right description')" :key="i">
              <img src="@/assets/images/icons/check_messange.svg" alt="">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="message_btns">
          <a href="https://panel.maxprofit.cc/auth/register" class="main_btn">{{ $t('start using') }}</a>
        </div>
      </div>
    </section>
    <!-- message -->

    <!-- Message history -->
    <section class="history">
      <div class="main_container">
        <img src="@/assets/images/history_bg.png" alt="" class="history_bg">
        <div class="left_block">
          <h2 class="gradient_text">{{ $t('history title') }}</h2>
          <p>{{ $t('history description') }}</p>
          <ul>
            <li v-for="(item, i) in $t('history description list')" :key="i">
              <img :src="require(`@/assets/images/icons/history_icon_${i+1}.svg`)" alt="">
              <span>{{ item }}</span>
            </li>
          </ul>
          <div class="right_block">
            <img src="@/assets/images/history_right_card.png" width="300" alt="" class="card_img">
            <p>{{ $t('history description 2') }}</p>
          </div>
          <a href="https://panel.maxprofit.cc/auth/register" class="main_btn">{{ $t('start using') }}</a>
        </div>
      </div>
    </section>
    <!-- Message history end -->

    <!-- products -->
    <section class="products">
      <div class="products_bg"></div>
      <div class="main_container">
        <h3 class="gradient_text">{{ $t('product title') }}</h3>
        <p v-for="(item, i) in $t('product top description list')" :key="i">{{ item }}</p>
        <h6>{{ $t('product description 2') }}</h6>
        <div class="products_imgs">
          <img src="@/assets/images/products_img.png" width="678" alt="">
        </div>
        <div class="products_bottom_text">
          <img src="@/assets/images/products_mini_img.png" width="155" alt="">
          <div class="products_bottom_right">
            <p v-for="(item, i) in $t('product bottom description list')" :key="i">{{ item }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- products -->

    <!-- works -->
    <section class="works">
      <div class="main_container top_card">
        <img src="@/assets/images/work_bg.png" alt="" class="bg">
        <div class="left_block">
          <h2 class="gradient_text">{{ $t('work title') }}</h2>
          <p v-html="$t('work description')"></p>
        </div>
        <img src="@/assets/images/work_iphone.png" class="right_block" alt="">
      </div>
      <div class="main_container bottom_card">
        <h3 class="gradient_text" v-html="$t('work title 2')"></h3>
        <div class="card_block">
          <img src="@/assets/images/work_bottom_card.png" alt="" class="left_block">
          <div class="right_block">
            <p v-for="(item, i) in $t('work description 2')" :key="i">{{ item }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- works -->

    <!-- tarif -->
    <section class="tarif">
      <div class="tarif_bg"></div>
      <div class="main_container">
        <div class="tarif_title">
          <h3>{{ $t('tarif title') }}</h3>
        </div>
        <div class="slider_wrap">
          <button class="prev_btn slider_btn" @click="tarif_slider.slidePrev()">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect width="44" height="44" rx="22" transform="matrix(-1 0 0 1 44 0)" fill="#B547DB"/>
              <path d="M24.5757 13.4717C25.0333 13.0717 25.7282 13.1184 26.1282 13.5756C26.5278 14.0332 26.4811 14.7281 26.0239 15.1281L18.1703 21.9996L26.0243 28.8715C26.4819 29.2716 26.5282 29.9664 26.1286 30.4237C25.7286 30.8813 25.0337 30.928 24.5761 30.528L15.7762 22.8279C15.5374 22.6192 15.4004 22.3171 15.4004 21.9996C15.4004 21.6822 15.5374 21.3805 15.7762 21.1714L24.5757 13.4717Z" fill="white"/>
            </svg>
          </button>
          <button class="next_btn slider_btn" @click="tarif_slider.slideNext()">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect width="44" height="44" rx="22" fill="#B547DB"/>
              <path d="M19.4243 13.4717C18.9667 13.0717 18.2718 13.1184 17.8718 13.5756C17.4722 14.0332 17.5189 14.7281 17.9761 15.1281L25.8297 21.9996L17.9757 28.8715C17.5181 29.2716 17.4718 29.9664 17.8714 30.4237C18.2714 30.8813 18.9663 30.928 19.4239 30.528L28.2238 22.8279C28.4626 22.6192 28.5996 22.3171 28.5996 21.9996C28.5996 21.6822 28.4626 21.3805 28.2238 21.1714L19.4243 13.4717Z" fill="white"/>
            </svg>
          </button>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, i) in $t('tarif slide')" :key="i">
                <div class="tarif_card" :class="`tarif_card_${i+1}`">
                  <div class="tarif_card_head">
                    <h5 v-html="item.title"></h5>
                    <del>{{ item.price }}</del>
                    <h4>{{ item.discout }}</h4>
                  </div>
                  <ul>
                    <li v-for="(text, idx) in item.descriptions" :key="idx">
                      <img v-if="i != 3" src="@/assets/images/icons/check_blue.svg" alt="">
                      <img v-else src="@/assets/images/icons/check_green.svg" alt="">
                      <span v-html="text"></span>
                    </li>
                  </ul>
                  <button class="main_btn">{{ item['btn title'] }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- tarif -->

    <!-- program -->
    <section class="program">
      <div class="main_container">
        <div class="program_left">
          <h4 class="gradient_text">{{ $t('program title') }}</h4>
          <h6>{{ $t('program description') }}</h6>
          <p v-html="$t('program description 2')"></p>
        </div>
        <div class="program_right">
          <div class="program_img_bg">
            <img src="@/assets/images/program_img.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <!-- program -->
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import BtnIndigo from '@/components/UI/BtnIndigo.vue'
export default {
  name: "Home",
  components: {
    Swiper,
  },
  data() {
    BtnIndigo
    return {
      activeIndex: 0,
      wallet_slider: null,
      tarif_slider: null,
    }
  },
  mounted() {
    this.wallet_slider = new Swiper('.wallets .swiper', {
      speed: 1000,
    });
    this.tarif_slider = new Swiper('.tarif .swiper', {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 10,
      breakpoints: {
        1050: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        }
      }
    });
  },
}
</script>

<style></style>