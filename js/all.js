//這是輪播圖元件
import swiperJs from './swiper.js';
// 最新活動的元件
import newsCom from './newsView.js'
// 驗證碼元件
import verifyView from './signUpView.js'

// 讀取外部的資源
VeeValidateI18n.loadLocaleFromURL('./zh_CN.json');

// Activate the locale
VeeValidate.configure({
  generateMessage: VeeValidateI18n.localize('zh_CN'),
  validateOnInput: true, // 調整為：輸入文字時，就立即進行驗證
  //validateOnInput: false, //調整為：點外邊時，才進行驗證
});
//規則帶入
Object.keys(VeeValidateRules).forEach(rule => {
  if (rule !== 'default') {
    VeeValidate.defineRule(rule, VeeValidateRules[rule]);
  }
});

Vue.createApp({
  components: {
    swiperJs,
    newsList: newsCom,
    verifyView,

  },
  data() {
    return {
      point: {
        myMoney: 123456789,
        eMoney: 123456789
      },
      changePoints: 200,
      form: {
        user: {
          username: '',
          password: ''
        },
      },
      menuBtnList: {
        gaming: {
          active: false
        },
        reserve: {
          active: false
        },
        collect: {
          active: false
        },
      },
      product: [
        {
          category: 'gaming',
          title: '黑小丑',
          imageUrl: './img/04_Games/img_game_bg.jpg',
          imageAlt: '遊戲機台圖',
          link: './convertPoints.html',
          number: 'H238-1:2'
        },
        {
          category: 'available',
          title: '黑小丑',
          imageUrl: './img/04_Games/img_game_bg.jpg',
          imageAlt: '遊戲機台圖',
          link: './convertPoints.html',
          number: 'H238-1:2'
        },
        {
          category: 'gaming',
          title: '黑小丑',
          imageUrl: './img/04_Games/img_game_bg.jpg',
          imageAlt: '遊戲機台圖',
          link: './convertPoints.html',
          number: 'H238-1:2'
        },
        {
          category: 'gaming',
          title: '黑小丑',
          imageUrl: './img/04_Games/img_game_bg.jpg',
          imageAlt: '遊戲機台圖',
          link: './convertPoints.html',
          number: 'H238-1:2'
        }

      ],
      itemProduct: [],
      machineCategory: {
        all: true,
        available: false,
        gaming: false
      },
      memberList: {
        changePassword:false,
        profile: true,
        storedRecord: false,
        gameRecord: false,
        convertRecord: false
      }


    }
  },
  methods: {
    toMyMoney() {
      let num = parseInt(this.changePoints)
      if (num > 0 && num <= Math.min(this.point.eMoney)) {
        /* 比值為 1: 5 ， 1元 對 5點點數 */
        this.point.myMoney += num / 5
        this.point.eMoney -= num
        alert('已經轉入你的錢包')
        this.changePoints = 0
      } else {
        alert('注意!輸入額度不能超過電子錢包總額')
      }
    },
    toEMoney() {
      let num = parseInt(this.changePoints)
      if (num > 0 && num <= Math.min(this.point.myMoney)) {
        this.point.eMoney += num * 5
        this.point.myMoney -= num
        alert('已經轉入電子錢包')
        this.changePoints = 0
      } else {
        alert('注意!輸入額度不能超過你的錢包總額')
      }
    },
    logout() {
      window.location = './login.html'
    },
    login() {
      window.location = './index.html'
    },
    // 規則
    isPhone(value) {
      const phoneNumber = /^[0-9]{11}$/;
      return phoneNumber.test(value) ? true : '需要正确11码的电话号码'
    },
    returnBack() {
      window.history.go(-1);
    },
    toMenu() {
      window.location = './menu.html'
    },
    menuBtnOn(name) {
      // 把當前點擊的 item 的 active 設為 true
      if (this.menuBtnList[name].active === false) {
        this.menuBtnList[name].active = true
      }
      else {
        //判斷如果當前是 true ，則改成false 來關閉
        this.menuBtnList[name].active = false
      }

      // 如果其他 newList 的 active 有 true的 都設為 false，並保留當前這個選項的true
      /*      for (let i = 0; i < this.menuBtnList.length; i++) {
                if (this.menuBtnList[i].active === true) {
                    this.menuBtnList[i].active = false;
                    this.menuBtnList[index].active = true
                    console.log('4',this.menuBtnList[index].active);
                
                }
            } */
    },
    enterGame() {
      window.location = './gameVideo.html'
    },
    filterMachine(txt) {
      this.itemProduct = []

      switch (txt) {
        case 'all':
          this.machineCategory.all = true
          this.machineCategory.gaming = false
          this.machineCategory.available = false
          this.itemProduct = this.product
          break
        case 'gaming':
          this.machineCategory.gaming = true
          this.machineCategory.all = false
          this.machineCategory.available = false
          this.itemProduct = this.product.filter((item) => {
            return item.category === 'gaming'
          })
          break
        case 'available':
          this.machineCategory.available = true
          this.machineCategory.all = false
          this.machineCategory.gaming = false
          this.itemProduct = this.product.filter((item) => {
            return item.category === 'available'
          })
          break
      }
    },
    switchMemberList(name) {
      const lis = document.querySelectorAll('.member_content_list_container > li');
      switch (name) {
        case 'changePassword':
          this.memberList.changePassword=true
          this.memberList.profile = false
          this.memberList.storedRecord = false
          this.memberList.gameRecord = false
          this.memberList.convertRecord = false
          lis.forEach(li => li.style.transform = 'translateX(0%)');
          break;
        case 'profile':
          this.memberList.changePassword=false
          this.memberList.profile = true
          this.memberList.storedRecord = false
          this.memberList.gameRecord = false
          this.memberList.convertRecord = false
          lis.forEach(li => li.style.transform = 'translateX(calc(-100% - 6px ))');
          break;
        case 'storedRecord':
          this.memberList.changePassword=false
          this.memberList.profile = false
          this.memberList.storedRecord = true
          this.memberList.gameRecord = false
          this.memberList.convertRecord = false
          lis.forEach(li => li.style.transform = 'translateX(calc(-200% - 12px ))');
          break;
        case 'gameRecord':
          this.memberList.changePassword=false
          this.memberList.profile = false
          this.memberList.storedRecord = false
          this.memberList.gameRecord = true
          this.memberList.convertRecord = false
          lis.forEach(li => li.style.transform = 'translateX(calc(-300% - 18px ))');
          break;
        case 'convertRecord':
          this.memberList.changePassword=false
          this.memberList.profile = false
          this.memberList.storedRecord = false
          this.memberList.gameRecord = false
          this.memberList.convertRecord = true
          lis.forEach(li => li.style.transform = 'translateX(calc(-400% - 24px ))');
          break;
      }
    },
    changePasswordBtn() {
      window.location = './member.html'
    },
  },
  mounted() {
    swiperJs.methods.swiper()
    swiperJs.methods.swiperCarousel()
    swiperJs.methods.swiperSlotmachine()
    this.filterMachine('all')
  },
})
  //全域註冊
  .component('VForm', VeeValidate.Form)
  .component('VField', VeeValidate.Field)
  .component('ErrorMessage', VeeValidate.ErrorMessage)
  .mount('#app')