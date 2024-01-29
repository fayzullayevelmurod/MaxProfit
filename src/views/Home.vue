<template>
  <div class="wrapper">
    <!-- Home -->
    <section class="home">
      <div class="main_container">
        <img src="@/assets/images/home_bg.png" alt="" class="bg">
        <h1>Экосистема для заработка на криптовалютах</h1>
        <div class="media_deskription">осуществляйте выгодный арбитраж криптовалют между биржами</div>
        <img src="@/assets/images/home_card.png" class="card" alt="">
        <ul>
          <li>
            <img src="@/assets/images/icons/check_messange.svg" alt="">
            <p>Находите и анализируйте криптовалютные кошельки. С помощью искусственного интелекта находите кошельки
              инсайдеров, повторяйте за ними сделки и зарабатывайте!</p>
          </li>
          <li>
            <img src="@/assets/images/icons/check_messange.svg" alt="">
            <p>С помощью него вы можете детально анализировать транзакции любого криптовалютного кошелька с разъяснением
              его прибыльности, частоты успешных сделок и общей прибыли и убытков. Вы можете находить легко кошельки
              инсайдеров и китов, повторять за ними сделки и зарабатывать на этом деньги.</p>
          </li>
        </ul>
        <btn-indigo>Получить доступ</btn-indigo>
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
            <li v-for="(item, i) in scanner_list" :key="i">
              <img :src="require(`@/assets/images/icons/scanner_${i + 1}.svg`)" alt="">
              <span>{{ item }}</span>
            </li>
          </ul>
          <btn-indigo class="mobile">Начать пользоваться</btn-indigo>
        </div>
        <div class="statistic">
          <img src="@/assets/images/statistic.png" alt="">
          <span>Доходность клиентов до 795% в месяц на арбитраже между биржами</span>
        </div>
        <div class="right_block">
          <h2 class="gradient_text">MaxProfit Scanner</h2>
          <ul>
            <li v-for="(item, i) in scanner_right_texts" :key="i">
              <div class="number gradient_text">{{ '0' + (i + 1) }}</div>
              <div class="text">{{ item }}</div>
            </li>
          </ul>
          <btn-indigo class="desktop">Начать пользоваться</btn-indigo>
        </div>
      </div>
    </section>
    <!-- Scanner end -->

    <!-- Screener -->
    <div class="screener">
      <div class="main_container">
        <img src="@/assets/images/screener_bg.png" alt="" class="bg">
        <div class="left_block">
          <h2>MaxProfit Screener</h2>
          <div class="description">Наш скринер— ваш личный бот по поиску выгодных возможностей на криптовалютных рынках.
            Мы автоматически отслеживаем связки между биржами согласно вашим настройкам, включая заданный объем,
            конкретные биржи, и требуемый процент дохода. Поддерживая 15 CEX бирж и более 200 DEX на 12 блокчейнах, мы
            обеспечиваем самый широкий охват рынка.</div>
          <img src="@/assets/images/screener_card.png" class="img_card" alt="">
        </div>
        <div class="right_block">
          <ul>
            <li v-for="(item, i) in screener_list" :key="i">
              <img :src="require(`@/assets/images/icons/screener_${i + 1}.svg`)" alt="">
              <span>{{ item }}</span>
            </li>
          </ul>
          <div class="description">
            <p>Пример с CRV демонстрирует, как наш сканер оперативно реагирует на события. Получив уведомление о взломе
              CRV, вы мгновенно узнали бы о разнице в ценах между CEX биржами, позволяя вам совершить выгодную сделку в
              течение всего 15 минут. Не нужно заранее держать токены - наш сканер обеспечивает мгновенный доступ к
              информации, чтобы вы могли максимально эффективно реагировать на изменения рынка.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Screener end -->

    <!-- wallets -->
    <section class="wallets">
      <div class="main_container">
        <h4 class="gradient_text">
          Анализ кошельков MaxProfit
        </h4>

        <div class="swiper_wrap">
          <button class="prev_btn" @click="wallet_slider.slidePrev()">
            <img src="@/assets/images/icons/slide_btn.svg" alt="">
          </button>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="wallets_card">
                  <h5>
                    Анализ кошелька MaxProfit
                  </h5>
                  <p>
                    Наш продукт — это инструмент для глубокого исследования данных в блокчейне и отслеживания активности
                    множества кошельков в различных сетях.
                  </p>
                  <p>
                    С помощью него вы можете детально анализировать транзакции любого криптовалютного кошелька с
                    разъяснением его прибыльности, частоты успешных сделок и общей прибыли и убытков.
                  </p>
                  <div class="wallets_card_in">
                    <ul>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Анализ любого on-chain кошелька
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Удобная и подробная аналитика кошелька
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Больше 50 разных пунктов по которым происходит анализ
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Полная история покупок и продаж монет
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Сохранение анализируемого кошелька в подборку
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Уведомления о действиях сохранённых кошельков
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Исключение из отслеживания не интересующих транзакций кошелька
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Интеграция  с другим нашим продуктом AI поиск похожих кошельков
                      </li>
                    </ul>
                    <img class="wallets_img" src="@/assets/images/wallets1.png" alt="">
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="wallets_card">
                  <h5>
                    Анализ кошелька MaxProfit
                  </h5>
                  <p>
                    Наш продукт — это инструмент для глубокого исследования данных в блокчейне и отслеживания активности
                    множества кошельков в различных сетях.
                  </p>
                  <p>
                    С помощью него вы можете детально анализировать транзакции любого криптовалютного кошелька с
                    разъяснением его прибыльности, частоты успешных сделок и общей прибыли и убытков.
                  </p>
                  <div class="wallets_card_in">
                    <ul>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Анализ любого on-chain кошелька
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Удобная и подробная аналитика кошелька
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Больше 50 разных пунктов по которым происходит анализ
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Полная история покупок и продаж монет
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Сохранение анализируемого кошелька в подборку
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Уведомления о действиях сохранённых кошельков
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Исключение из отслеживания не интересующих транзакций кошелька
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Интеграция  с другим нашим продуктом AI поиск похожих кошельков
                      </li>
                    </ul>
                    <img class="wallets_img" src="@/assets/images/wallets1.png" alt="">
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="wallets_card">
                  <h5>
                    Анализ кошелька MaxProfit
                  </h5>
                  <p>
                    Наш продукт — это инструмент для глубокого исследования данных в блокчейне и отслеживания активности
                    множества кошельков в различных сетях.
                  </p>
                  <p>
                    С помощью него вы можете детально анализировать транзакции любого криптовалютного кошелька с
                    разъяснением его прибыльности, частоты успешных сделок и общей прибыли и убытков.
                  </p>
                  <div class="wallets_card_in">
                    <ul>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Анализ любого on-chain кошелька
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Удобная и подробная аналитика кошелька
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Больше 50 разных пунктов по которым происходит анализ
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Полная история покупок и продаж монет
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Сохранение анализируемого кошелька в подборку
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Уведомления о действиях сохранённых кошельков
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Исключение из отслеживания не интересующих транзакций кошелька
                      </li>
                      <li>
                        <img src="@/assets/images/icons/check_messange.svg" alt="">
                        Интеграция  с другим нашим продуктом AI поиск похожих кошельков
                      </li>
                    </ul>
                    <img class="wallets_img" src="@/assets/images/wallets1.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="next_btn" @click="wallet_slider.slideNext()">
            <img src="@/assets/images/icons/slide_btn.svg" alt="">
          </button>
        </div>

      </div>
    </section>
    <!-- wallets -->

    <!-- message -->
    <section class="message">
      <div class="main_container">
        <h4 class="gradient_text">
          MaxProfit Message Live
        </h4>
        <div class="message_in">
          <div class="message_left">
            <p>
              Этот инструмент — идеальное решение для отслеживания ключевых запросов в реальном времени.
            </p>
            <p>
              Представьте, что вы являетесь держателем монеты, о которой скоро появятся новости. Решение о покупке или
              продаже ваших активов может зависеть от того, будут ли новости положительными или отрицательными. Наш Live
              Scanner позволяет вам легко настраивать отслеживание ключевых слов и чатов, предоставляя вам информацию ещё
              до официальных публикаций в СМИ.
            </p>
            <p>
              Получайте доступ к новостям  и принимайте решения оперативно, чтобы максимизировать свою прибыль,
              основываясь на инсайдах рынка.
            </p>
          </div>
          <div class="message_center">
            <img src="@/assets/images/messenger_img.png" alt="">
          </div>
          <ul class="message_right">
            <li>
              <img src="@/assets/images/icons/check_messange.svg" alt="">
              Настройка бота занимает меньше минуты
            </li>
            <li>
              <img src="@/assets/images/icons/check_messange.svg" alt="">
              Бот работает в реальном времени
            </li>
            <li>
              <img src="@/assets/images/icons/check_messange.svg" alt="">
              Настройка по ключевым словам
            </li>
            <li>
              <img src="@/assets/images/icons/check_messange.svg" alt="">
              Использование бота не только для криптовалютной сферы 
            </li>
            <li>
              <img src="@/assets/images/icons/check_messange.svg" alt="">
              Предоставление клиентам списка проверенных крипто-чатов
            </li>
            <li>
              <img src="@/assets/images/icons/check_messange.svg" alt="">
              Получение инсайдерской информации
            </li>
            <li>
              <img src="@/assets/images/icons/check_messange.svg" alt="">
              Персональные уведомления которые присылаются клиентам в отдельный чат
            </li>
          </ul>
        </div>
        <div class="message_btns">
          <button class="main_btn">
            Начать пользоваться
          </button>
        </div>
      </div>
    </section>
    <!-- message -->

    <!-- Message history -->
    <section class="history">
      <div class="main_container">
        <img src="@/assets/images/history_bg.png" alt="" class="history_bg">
        <div class="left_block">
          <h2 class="gradient_text">MaxProfit Message History</h2>
          <p>Сканер взаимодействует с историей чатов, способен проанализировать более миллиона сообщений за несколько минут и предоставить вам всю необходимую информацию. Результаты анализа выдаются в удобном формате Excel-таблицы, обеспечивая вам легкость обработки данных в удобной для вас среде. Таким образом, вы получаете мощный инструмент для выявления тенденций, прогнозирования рыночных движений и принятия обоснованных решений для максимизации вашей прибыли.</p>
          <ul>
            <li v-for="(item, i) in history_lists" :key="i">
              <img :src="require(`@/assets/images/icons/history_icon_${i+1}.svg`)" alt="">
              <span>{{ item }}</span>
            </li>
          </ul>
          <div class="right_block">
            <img src="@/assets/images/history_right_card.png" alt="" class="card_img">
            <p>Сканер обеспечивает качественно анализировать реальное мнение пользователей о любом криптопроекте. Мы предоставляем возможность выявления потенциальных клиентов, поиск различных схем заработка, упоминаемых в чатах или каналах, и монетизацию этой ценной информации.</p>
          </div>
          <btn-indigo>Начать пользоваться</btn-indigo>
        </div>
      </div>
    </section>
    <!-- Message history end -->

    <!-- products -->
    <section class="products">
      <div class="products_bg"></div>
      <div class="main_container">
        <h3 class="gradient_text">
          Как использовать продукты MaxProfit
        </h3>
        <p>
          Это всесторонняя экосистема для арбитража криптовалют вы знаете, что в условиях волатильности рынка и при быстро
          меняющихся курсах токенов на различных биржах, разница может достигать 50% в круг. Отслеживать это вручную –
          задача трудная и трудоемкая.
        </p>
        <p>
          MaxProfit был разработан для экономии вашего времени. Бот автоматически мониторит курсы токенов на разных
          биржах. С его помощью вы можете быстро определить разницу в ценах между биржами  и совершить прибыльные
          арбитражные сделки. 
        </p>
        <p>
          MaxProfit Message поможет вам в связке с арбитражным ботом находить самые прибыльные арбитражные возможности на
          данный момент. 
        </p>
        <h6>
          А Анализ кошельков от MaxProfit - это лучшая аналитика on-chain данных на рынке с помощью искусственного
          интеллекта. А также специальные инструменты, для поиска наиболее профитных кошельков и их сделок на рынке.
        </h6>
        <div class="products_imgs">
          <img src="@/assets/images/products_img.png" alt="">
        </div>
        <div class="products_bottom_text">
          <img src="@/assets/images/products_mini_img.png" alt="">
          <div class="products_bottom_right">
            <p>
              MaxProfit - это абсолютно безопасный инструмент для вашего капитала. Мы стремимся обеспечить максимальную
              защиту ваших средств, поэтому наш бот полностью ручной и не требует подключения к балансам ваших бирж по
              API. Никаких дополнительных рисков – вы абсолютно уверены в сохранности своих денег.
            </p>
            <p>
              Бот работает в облаке, обеспечивая вам доступ к актуальной информации в режиме реального времени. Без
              необходимости предоставлять доступ к вашим кошелькам, вы с уверенностью можете использовать MaxProfit для
              выявления и осуществления прибыльных арбитражных возможностей на рынке. Надежность и безопасность вашего
              капитала – наш приоритет.
            </p>
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
          <h2 class="gradient_text">Как это работает?</h2>
          <p>
            Представьте, что вы приобрели токен ETH по цене 1800$. Наблюдая за его ростом, вы желаете удерживать его до достижения уровня 2500$. В нашем боте для отслеживания арбитражных возможностей вы можете легко добавить этот токен, следя за разницей в ценах между биржами. Наш подход к управлению портфелем предоставляет вам полный контроль: вы можете добавлять и удалять токены по вашему усмотрению. <br> <br>
            Далее, вы настраиваете уведомления, выбирая процентный рост и объем, при достижении которых вы хотите получать оповещения. Ваш выбранный телеграм-канал становится местом, куда будут направляться уведомления о разнице в ценах. Таким образом, вы легко и эффективно управляете вашим портфелем, всегда в курсе текущей ситуации и готовым реагировать на изменения рынка.
          </p>
        </div>
        <img src="@/assets/images/work_iphone.png" class="right_block" alt="">
      </div>
      <div class="main_container bottom_card">
        <h3 class="gradient_text">
          Наша платформа предоставляет уникальную <br> возможность для арбитража между <br> блокчейнами на DEX биржах
        </h3>
        <div class="card_block">
          <img src="@/assets/images/work_bottom_card.png" alt="" class="left_block">
          <div class="right_block">
            <p>Мы предоставляем инструменты для арбитража между основными сетями, такими как Ethereum, Optimism, Arbitrum, BNB chain, Phantom, Gnosis,Polygon, Avalanche, Klaytn, Aurora, ZK Sync, что позволяет вам эффективно мониторить различные блокчейны и ловить высокие спреды.</p>
            <p>В данный момент это — место, где находятся все деньги, и наши клиенты уже сейчас успешно используют эти возможности. Наш бот активно мониторит данные блокчейны, что позволяет извлекать максимальную прибыль из волатильности рынка.</p>
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
          <h3>
            Тарифы
          </h3>
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
              <div class="swiper-slide">
                <div class="tarif_card">
                  <div class="tarif_card_head">
                    <h5>
                      MaxProfit<br>
                      Silver
                    </h5>
                    <del>
                      100 $
                    </del>
                    <h4>
                      0$
                    </h4>
                  </div>
                  <ul>
                    <li>
                      <img src="@/assets/images/icons/check_blue.svg" alt="">
                      Access to the exclusive event
                    </li>
                    <li>
                      <img src="@/assets/images/icons/check_blue.svg" alt="">
                      Welcome cocktails
                    </li>
                    <li>
                      <img src="@/assets/images/icons/check_blue.svg" alt="">
                      DJ<br> zone
                    </li>
                    <li>
                      <img src="@/assets/images/icons/check_blue.svg" alt="">
                      Opportunity to join the advertiser's table, where food, drinks, and alcohol will be complimentary for you
                    </li>
                  </ul>
                  <button class="main_btn">
                    Купить тариф
                  </button>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="tarif_card gold_card">
                  <div class="tarif_card_head">
                    <h5>
                      MaxProfit<br>
                      Gold
                    </h5>
                    <del>
                      100 $
                    </del>
                    <h4>
                      100$
                    </h4>
                  </div>
                  <ul>
                    <li>
                      <img src="@/assets/images/icons/check_blue.svg" alt="">
                      Access to the exclusive event
                    </li>
                    <li>
                      <img src="@/assets/images/icons/check_blue.svg" alt="">
                      Welcome cocktails
                    </li>
                    <li>
                      <img src="@/assets/images/icons/check_blue.svg" alt="">
                      DJ<br> zone
                    </li>
                    <li>
                      <img src="@/assets/images/icons/check_blue.svg" alt="">
                      Opportunity to join the advertiser's table, where food, drinks, and alcohol will be complimentary for you
                    </li>
                  </ul>
                  <button class="main_btn">
                    Купить тариф
                  </button>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="tarif_card">
                  <div class="tarif_card_head">
                    <h5>
                      MaxProfit<br>
                      Platinum
                    </h5>
                    <del>
                      100 $
                    </del>
                    <h4>
                      100$
                    </h4>
                  </div>
                  <ul>
                    <li>
                      <img src="@/assets/images/icons/check_blue.svg" alt="">
                      Access to the exclusive event
                    </li>
                    <li>
                      <img src="@/assets/images/icons/check_blue.svg" alt="">
                      Welcome cocktails
                    </li>
                    <li>
                      <img src="@/assets/images/icons/check_blue.svg" alt="">
                      DJ<br> zone
                    </li>
                    <li>
                      <img src="@/assets/images/icons/check_blue.svg" alt="">
                      Opportunity to join the advertiser's table, where food, drinks, and alcohol will be complimentary for you
                    </li>
                  </ul>
                  <button class="main_btn">
                    Купить тариф
                  </button>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="tarif_card blue_card">
                  <div class="tarif_card_head">
                    <h5>
                      MaxProfit<br>
                      VIP
                    </h5>
                    <del>
                      100 $
                    </del>
                    <h4>
                      100$
                    </h4>
                  </div>
                  <ul>
                    <li>
                      <img src="@/assets/images/icons/check_green.svg" alt="">
                      Access to the exclusive event
                    </li>
                    <li>
                      <img src="@/assets/images/icons/check_green.svg" alt="">
                      Welcome cocktails
                    </li>
                    <li>
                      <img src="@/assets/images/icons/check_green.svg" alt="">
                      DJ<br> zone
                    </li>
                    <li>
                      <img src="@/assets/images/icons/check_green.svg" alt="">
                      Opportunity to join the advertiser's table, where food, drinks, and alcohol will be complimentary for you
                    </li>
                  </ul>
                  <button class="main_btn">
                    Купить тариф
                  </button>
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
          <h4 class="gradient_text">
            Партнерская программа
          </h4>
          <h6>
            Мы готовы платить до 50% с каждой продажи. Самая щедрая партнерская программа.
          </h6>
          <p>
            Если вы имеете свой Ютуб, Телеграм канал, сайт, блог и тд, то мы предлагаем Вам партнерскую систему работы.
            Свяжитесь с нами в Телеграм <a href="#">@ник</a> или по почте <a href="#">почта@почта.com</a>
          </p>
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
      scanner_list: [
        'Уведомления присылаются лично в Telegram каждому пользователю',
        'Вся работа происходит в облаке, вам ничего не нужно дополнительно устанавливать',
        'Поддержка 30 000 монет на 60CEX и 25 DEX',
        'Уведомления присылаются раз в 4 секунды',
        'Добавление любой монеты и настройка бота занимает не более 1 минуты',
        'Поддержка 12 основных блокчейнов (Ethereum, BNB chain, optimism, arbitrum и т.д.)',
      ],
      scanner_right_texts: [
        'Обеспечивает поддержку более 60CEX и 25 DEX бирж на более чем 40 блокчейнах',
        'Является полностью ручным, мы не запрашиваем никакого доступа к вашим API-ключам',
        'Только вы имеете полный контроль над своими средствами',
        'Все уведомления направляются непосредственно в ваш телеграм-чат, обеспечивая безопасность и прозрачность в управлении активами.',
      ],
      screener_list: [
        'Поддержка 15 CEX бирж, 200+ DEX на 12 блокчейнах',
        'Мгновенные уведомления о всех доступных монетах на рынке ',
        'Настройка занимает всего несколько минут',
        'Уведомления присылаются лично в телеграм каждому пользователю',
        'Фильтры:сети для депозита и вывода, статус для сетей ввода и вывода (открыто или закрыто), фильтр "биржа покупки" и "биржа продажи", фильтр для выбора сети вывода и сети депозита, фильтр для выбора статуса сети для ввода и вывода',
        'Телеграм версия скринера',
        'Удобная версия скринера в вашем личном кабинете на сайте',
      ],
      wallet_slider: null,
      history_lists: [
        'Поиск по ключевым словам по всем чатам, которые вы настроите',
        'Удобный вывод данных в Exel-таблицу',
        'Максимально полная информация по анализируемому проекту или рынку',
        'Использование бота не только для криптовалютной сферы ',
        'Получение достоверной информации и реального мнения пользователей',
      ],
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