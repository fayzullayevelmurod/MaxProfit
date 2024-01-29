<template>
    <div>
        <header>
            <div class="main_container">
                <router-link to="#" class="logo">
                    <img src="@/assets/images/header_logo.svg" alt="">
                </router-link>
                <div class="navs">
                    <div class="auth_link">
                        <router-link to="#" class="register_link">Регистрация</router-link>
                        <btn-light to="home">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M6.00016 2.66663H12.6668V12C12.6668 12.3536 12.5264 12.6927 12.2763 12.9428C12.0263 13.1928 11.6871 13.3333 11.3335 13.3333H6.00016M8.00016 9.99996L10.0002 7.99996M10.0002 7.99996L8.00016 5.99996M10.0002 7.99996H3.3335"
                                    stroke="#743CED" stroke-width="1.3913" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Вход</span>
                        </btn-light>
                    </div>
                    <ul class="navs_links">
                        <li v-for="(item, i) in navs_links" :key="i">
                            <router-link to="#">{{ item }}</router-link>
                        </li>
                    </ul>
                    <div class="select" :data-value="value" :data-list="list">
                        <div class="selector" @click="toggle()">
                            <div class="label">
                                <img :src="`https://flagsapi.com/${value.flag}/flat/64.png`" width="18" alt="">
                                <span>{{ value.name }}</span>
                                <div class="arrow" :class="{ expanded: visible }">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="#DC78FF" />
                                    </svg>
                                </div>
                            </div>
                            <div :class="{ hidden: !visible, visible }">
                                <ul>
                                    <li :class="{ current: item.name === value.name }" v-for="(item, i) in list" :key="i"
                                        @click="select(item)">{{ item.name }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
                    <button class="bars" @click="mobileMenuToggle()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M3.75 5.41669H16.25M3.75 10H16.25M3.75 14.5834H16.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
        <div class="mobile_menu" :class="mobile_menu">
            <div class="mobile_menu__bg"></div>
            <div class="mobile_menu__content">
                <div class="head">
                    <router-link to="#" class="logo">
                        <img src="@/assets/images/header_logo.svg" alt="">
                    </router-link>
                    <button class="mobile_menu__close" @click="mobileMenuToggle()">
                        <span>&times;</span>
                    </button>
                </div>
                <ul>
                    <li v-for="(item, i) in navs_links" :key="i">
                        <router-link to="#" class="link">{{ item }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Header",
    data() {
        return {
            navs_links: ['Scanner', 'Screener', 'Message Live', 'Message History', 'Парнерам'],
            list: [
                {name: "Eng", flag: 'GB'},
                {name: "Ru", flag: 'RU'}
            ],
            value: {name: "Eng", flag: 'GB'},
            visible: false,
            mobile_menu: ''
        }
    },
    methods: {
        toggle() {
            this.visible = !this.visible;
        },
        select(option) {
            this.value = option;
        },
        async getFlag(countr) {
            let img = await axios.get('https://www.countryflagicons.com/FLAT/64/DE.png')
            console.log(img);
            return "salom"
        },
        mobileMenuToggle () {
            if (this.mobile_menu == 'active') {
                this.mobile_menu = 'end_active';
            } else if (this.mobile_menu == 'end_active') {
                this.mobile_menu = 'active';
            } else if (this.mobile_menu == '') {
                this.mobile_menu = 'active'
            }
        }
    }
}
</script>

<style></style>