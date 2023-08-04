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
      },

      /* slot.html 新增 */
      onScoreMenu:false,
      sliderValue: 999999999,

      /* slot Info Menu 新增 */
        /* 右側setMenu */
      slotSetOpen:false,
      slotSetMenu:[
        {
          name:'機台上分',
          imgUrl:"../img/08_Slot/slot_Info/btn_upscore.png",
          active:false,
        },
        {
          name:'機台下分',
          imgUrl:"../img/08_Slot/slot_Info/btn_loadscore.png",
          active:false,
        },
        {
          name:'保留機台',
          imgUrl:"../img/08_Slot/slot_Info/btn_keepslot.png",
          active:false,
        },
        {
          name:'收藏機台',
          imgUrl:"../img/08_Slot/slot_Info/btn_collectslot.png",
          active:false,
          
        },
        {
          name:'視訊線路',
          imgUrl:"../img/08_Slot/slot_Info/btn_line.png",
          active:false,
        },
        {
          name:'機台履歷',
          imgUrl:"../img/08_Slot/slot_Info/btn_record.png",
          active:false,
        },
        {
          name:'機台攻略',
          imgUrl:"../img/08_Slot/slot_Info/btn_direction.png",
          active:false,
        },
        {
          name:'機台重整',
          imgUrl:"../img/08_Slot/slot_Info/btn_reset.png",
          active:false,
        },
        {
          name:'線上客服',
          imgUrl:"../img/08_Slot/slot_Info/btn_service.png",
          active:false,
        },
        
      ],
        /* 視訊線路 */
      slotLine:[
        {
          name:'视讯线路1',
          active:true,
        },
        {
          name:'视讯线路2',
          active:false,
        },
        {
          name:'视讯线路3',
          active:false,
        },
        {
          name:'视讯线路4',
          active:false,
        },
        {
          name:'视讯线路5',
          active:false,
        }
      ],
      slotLineArray:['视讯线路1'],
        /* 左側menu */
      slotMenuOpen:false
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
    menuBtnOn(name,index) {
      // 把當前點擊的 item 的 active 設為 true
      if (this.menuBtnList[name].active === false) {
        this.menuBtnList[name].active = true
      }
      else {
        //判斷如果當前是 true ，則改成false 來關閉
        this.menuBtnList[name].active = false
      }
      
      // 如果其他 newList 的 active 有 true的 都設為 false，並保留當前這個選項的true
      for (let key in this.menuBtnList) {
        if (key !== name && this.menuBtnList[key].active === true) {
          this.menuBtnList[key].active = false;
        }
      }
    },
    enterGame() {
      window.location = './slot.html'
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

    /* slot.html 新增 */
    onScoreMenuSwitch () {
      this.onScoreMenu = !this.onScoreMenu
    },
    confirmOnScore () {
      this.onScoreMenu = !this.onScoreMenu
    },
    setSliderValue(value) {
      this.sliderValue = parseInt(value);
    },

    /* slot Info Menu */
      /* slot set */
    slotSetOpenSwitch(){
      this.slotSetOpen = !this.slotSetOpen
    },
    slotSetLeave(){
      alert('離開機台')
      this.slotSetOpen = !this.slotSetOpen
      window.location = './index.html'
    },
      /* setMenu切換按鈕 開啟各選單 */
    slotSetMenuSwitch(name){
      this.slotSetMenu.forEach((item,index)=>{
        if(item.name === name ) {
          item.active = !item.active
          console.log(item);
        }
      })
      //機台上分
      if( name === '機台上分'){
        this.onScoreMenu = !this.onScoreMenu
        this.slotSetOpen = !this.slotSetOpen
      }
      //機台下分
      if( name === '機台下分'){
        this.slotSetOpen = !this.slotSetOpen
      }
      //保留機台
      if( name === '保留機台'){
        this.slotSetOpen = !this.slotSetOpen
      }
      //收藏機台
      if( name === '收藏機台'){
        return
      }
      //視訊線路
      if( name === '視訊線路'){
        this.slotSetOpen = !this.slotSetOpen
      }
      //機台履歷
      if( name === '機台履歷'){
        this.slotSetOpen = !this.slotSetOpen
      }
      //機台攻略
      if( name === '機台攻略'){
        this.slotSetOpen = !this.slotSetOpen
      }
      //機台重整
      if( name === '機台重整'){
        this.slotSetOpen = !this.slotSetOpen
      }
      //線上客服
      if( name === '線上客服'){
        this.slotSetOpen = !this.slotSetOpen
      }
    },
      /* setMenu各選單 確認按鈕與 預留操作空間 */
    slotSetMenuFunction(name){
      this.slotSetMenu.forEach((item,index)=>{
        if(item.name === name ) {
          item.active = !item.active
          console.log(item);
        }
      })
      //機台上分
      if( name === '機台上分'){
        this.onScoreMenu = !this.onScoreMenu

      }
      //機台下分
      if( name === '機台下分'){

      }
      //保留機台
      if( name === '保留機台'){

      }
      //收藏機台
      if( name === '收藏機台'){
        return
      }
      //視訊線路
      if( name === '視訊線路'){

      }
      //機台履歷
      if( name === '機台履歷'){

      }
      //機台攻略
      if( name === '機台攻略'){

      }
      //機台重整
      if( name === '機台重整'){

      }
      //線上客服
      if( name === '線上客服'){

      }
    },
      /* slotSetMenu 視訊線路切換 */
    slotLineSwitch( index ) {
      this.slotLine.forEach((item,i)=> {
        if(i === index ){
          item.active = !item.active
          console.log(this.slotLine);
          console.log(item);
          console.log(this.slotLineArray);
        }else {
          item.active = false
        }
      })
    },
      /* slotMenu 左側切換 */
    slotMenuOpenSwitch(){
      this.slotMenuOpen = !this.slotMenuOpen
    },
      /* slotMenu登出 */
    slotMenuLogout(){
      alert('登出')
      this.slotMenuOpen = !this.slotMenuOpen
      window.location = './login.html'
    },
    /* loading 動畫 */
    animationEnd(event) {
      if (event.target === loading_img_left) {
        loading_img_left.classList.remove('animateLeft');
        loading_img_right.classList.add('animateRight');
      }
      if (event.target === loading_img_right) {
        loading_img_right.classList.remove('animateRight');
        loading_img_left.classList.add('animateLeft');
      }
    }
  },
  mounted() {
    swiperJs.methods.swiper()
    swiperJs.methods.swiperCarousel()
    swiperJs.methods.swiperSlotmachine()
    this.filterMachine('all')

    /* loading 動畫 */
    const loading_img_left = document.querySelector('#loading_img_left');
    const loading_img_right = document.querySelector('#loading_img_right');
    const loading_container = document.querySelector('.loading_container');

    window.addEventListener('load', () => {
      setTimeout(() => {
        loading_container.style.display = 'none';
      }, 4500);
    });
  },
    /* slot.html 新增 */
  computed: {
    formattedValue() {
      return this.sliderValue.toLocaleString();
    },
  },
})
  //全域註冊
  .component('VForm', VeeValidate.Form)
  .component('VField', VeeValidate.Field)
  .component('ErrorMessage', VeeValidate.ErrorMessage)
  .mount('#app')