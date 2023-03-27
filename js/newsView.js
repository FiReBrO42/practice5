export default {
    template: `
        <li class="news_popup_list" v-for="(item, index) in newsList" :key="index" >
            <!-- 標題 -->
            <div class="news_popup_list_title">
                <h2>{{ item.title }}</h2>
                <!-- icon  根據active來展開關閉-->
                <button class="btn btn-warning btn_news_popup" 
                :class="{ active: item.active }" 
                @click="newsPopupOn( index )">﹀</button>
            </div>
            <!-- 內文 -->
            <div class="news_popup_list_content" :class="{ active: item.active }">
                <p>{{ item.text }}</p>
            </div>
        </li>
    `,
    data() {
        return {
            /* 活動內容資訊 */
            newsList: [
                {
                    title: `1. 兔來運轉!PS5轉出來!好評加碼`,
                    text: `活動期間每消耗300枚轉運幣,
                    即可轉一次轉輪,
                    每轉都有獎!最大獎PS5主機卡(價值19,570鑽石)購買1鑽石或100i幣可獲得1點,使用「信用卡」、「LinePay」、「全支付」儲值可獲得1.25點。
                    每次旋轉轉輪可累積轉次,累積168次即可抽一次神祕福袋,最大獎PS5主機卡(價值19,570鑽石)。
                    本活動需手動遊玩,並於2023/3/31(五)23:59:59前使用完畢,逾期無效`,
                    active: false
                },
                {
                    title: `2. 閃耀卡NFT限時活動 `,
                    text: `遊玩閃耀卡BINGO可獲得連線獎勵，全盤再獲得NFT動態稱號『閃耀卡獵人』

                    1.完成本次閃耀卡BINGO全盤的前500名玩家，可獲得NFT動態稱號『閃耀卡獵人』(依排行榜為主)
                    2.連線獎勵，人人都可獲得`,
                    active: false
                }, 
                {
                    title: `3.GASH儲值 立即獲得115%ｉ幣 `,
                    text: `活動期間內使用GASH點卡儲值指定面額3,000點、1,000點、500點、300點、150點，
                    儲值成功進入遊戲內，
                    即可額外獲得加贈ｉ幣！
                    
                    (限單筆儲值指定品項；不累積計算、不限次數)`,
                    active: false
                },
                {
                    title: `4.【活動】寶石幻想．閃耀交織 `,
                    text: `步驟一：取得藍色代幣
                    於 04/10 中午12:00前，選擇儲值中心990GS點(神點)，贈品選藍色代幣15枚方案
                    
                    步驟二：前往大廳轉蛋
                    進入 遊戲大廳＞本月主打＞轉蛋機＞藍色轉蛋 使用(每次須消耗5枚藍色代幣)
                    
                    (限單筆儲值指定品項；不累積計算、不限次數)`,
                    active: false
                },
            ]
        }
    },
    methods: {
        newsPopupOn(index) {
            // 把當前點擊的 item 的 active 設為 true
            if (this.newsList[index].active === false) {
                this.newsList[index].active = true
                console.log('2', this.newsList[index].active);
            }
            else {
                //判斷如果當前是 true ，則改成false 來關閉
                this.newsList[index].active = false
                console.log('3',this.newsList[index].active);
            }

            // 如果其他 newList 的 active 有 true的 都設為 false，並保留當前這個選項的true
/*             for (let i = 0; i < this.newsList.length; i++) {
                if (this.newsList[i].active === true) {
                    this.newsList[i].active = false;
                    this.newsList[index].active = true
                    console.log('4',this.newsList[index].active);
                
                }
            } */
        }
    }
}