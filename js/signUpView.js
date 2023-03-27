export default {
    /* HTML資料 */
    template:`
    <v-form class="" v-slot="{ errors }" @submit="siginUp()">
    <div class="mb-1">
        <label for="account" class="form-label">帐号</label>
        <v-field id="account" name="帐号" type="text" class="form-control form_input"
            placeholder="帐号" :class="{ 'is-invalid': errors['帐号'] }" rules="required"
            v-model="form.siginUp.name">
        </v-field>
        <error-message name="帐号" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-1">
        <label for="password" class="form-label">密码</label>
        <v-field id="password" name="密码" type="password" class="form-control form_input"
            placeholder="密码" :class="{ 'is-invalid': errors['密码'] }" rules="required|min:8"
            v-model="form.siginUp.password"></v-field>
        <error-message name="密码" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-1">
        <label for="confirmPassword" class="form-label">确认密码</label>
        <v-field id="confirmPassword" name="确认密码" type="password"
            class="form-control form_input" placeholder="确认密码"
            :class="{ 'is-invalid': errors['确认密码'] }" rules="required|confirmed:@密码"
            v-model="form.siginUp.confirmPassword"></v-field>
        <error-message name="确认密码" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-1">
        <label for="tel" class="form-label">电话</label>
        <v-field id="tel" name="电话" type="tel" class="form-control form_input"
            placeholder="电话" :class="{ 'is-invalid': errors['电话'] }"
            rules="required"
            :rules="isPhone"
            v-model="form.siginUp.tel"></v-field>
        <error-message name="电话" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-1">
        <label for="recommender" class="form-label">推荐码</label>
        <v-field id="recommender" name="推荐码" type="text" class="form-control form_input"
            placeholder="推荐码" :class="{ 'is-invalid': errors['推荐码'] }" rules=""
            v-model="form.siginUp.recommender"></v-field>
        <error-message name="推荐码" class="invalid-feedback"></error-message>
    </div>

    <div class="d-flex" style="width: 100%;">
        <div class="">
            <label for="verifyCode" class="form-label">验证码</label>
            <v-field id="verifyCode" name="验证码" type="text" class="form-control form_input"
                placeholder="验证码" :class="{ 'is-invalid': errors['验证码'] }" rules="required"
                v-model="userVerifyCode" ></v-field>
                <!-- 驗證碼圖 -->
            <error-message name="验证码" class="invalid-feedback"></error-message>
        </div>
        <canvas id="canvas" ref="canvas" width="100" height="30" @click="refreshCaptcha"></canvas>
    </div>

    <div class="form_siginup_btn_container text-center">
        <button type="submit" class="btn form_siginup_btn">
            <img src="./img/07_Register/btn/btn_register.png" alt="註冊按鈕">
        </button>
    </div>
</v-form>`,

    /* 資料儲存地方 */
    data() {
        return {
            form: {
                siginUp: {}
              },
            userVerifyCode:'',
            verifyCode: ''
        }
    },
    methods: {
        siginUp() {
            /* 輸入的驗證碼 與 隨機驗證碼比對  */
            if(this.userVerifyCode !== this.verifyCode){
                /* 當不同時彈出視窗 */
              alert('驗證碼錯誤')
              return
            }
            else{
                /* 通過時 轉址 */
              window.location = '../Login.html'
            }
          },

            // 驗證碼
        drawCaptcha() {
            const show_num = [];
            // 取得該 HTML
            const canvas = this.$refs.canvas;
            // 取得渲染環境及繪圖函數(2D繪圖)
            const context = canvas.getContext('2d');
            // 取得 畫布的寬高
            const canvas_width = canvas.width;
            const canvas_height = canvas.height;
            // 定義裡面的資料有哪些
            const sCode = 'a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0';
            // 組成陣列，以逗號為分隔條件
            const aCode = sCode.split(',');
            // 陣列長度
            const aLength = aCode.length;
            // 清空畫布
            context.clearRect(0, 0, canvas_width, canvas_height);
            // 迴圈 條件 不超過 4 
            for (let i = 0; i < 4; i++) {
            // 回傳小於等於所給數字的最大整數
            // 偽隨機小數 (pseudo-random) 介於 0 到 1 之間(包含 0，不包含 1) 
            const j = Math.floor(Math.random() * aLength);
            // 旋轉角度隨機數值
            const deg = Math.random() - 0.5;
            // 陣列第J個資料
            const txt = aCode[j];
            // 陣列資料的i個 傳入 txt的資料並小寫化
            show_num[i] = txt;
            // XY軸 隨機數值
            const x = 10 + i * 20;
            const y = 20 + Math.random() * 8;
            //字體設定
            context.font = 'bold 23px 微软雅黑';
    
            // XY軸 位置 ，旋轉角度
            context.translate(x, y);
            context.rotate(deg);
    
            // 設定填滿圖形時用的顏色
            context.fillStyle = this.randomColor();
            // 在畫布上繪製填塞的文字,X座標,Y座標
            context.fillText(txt, 0, 0);
    
            context.rotate(-deg);
            context.translate(-x, -y);
            }
    
            // 裝飾背景線
            for (let i = 0; i <= 5; i++) {
            // 設定勾勒圖形時用的顏色.
            context.strokeStyle = this.randomColor();
            // 產生新路徑
            context.beginPath();
            // 移動到 隨機 X Y
            context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
            // 畫線調到 隨機 XY
            context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
            // 執行繪圖這個功能
            context.stroke();
            }
            
            // 裝飾背景的點
            for (let i = 0; i <= 30; i++) {
            context.strokeStyle = this.randomColor();
            context.beginPath();
            const x = Math.random() * canvas_width;
            const y = Math.random() * canvas_height;
            context.moveTo(x, y);
            // 畫線調到 隨機 XY+1單位 (看起來就會像點)
            context.lineTo(x + 1, y + 1);
            context.stroke();
            }
    
            this.verifyCode = show_num.join('');
        },
        // 重新更新驗證碼渲染
        refreshCaptcha() {
            this.drawCaptcha();
        },
        // 隨機顏色RGB數值
        randomColor() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r},${g},${b})`;
        },
    },
    mounted() {
        this.drawCaptcha();
    },
}