<template>
    <div class="auth-wrap">
        <div class="auth-window">
            <div class="welcome-block">
                <span class="welcome-txt">Welcome to Rencons InfoSystem</span>
            </div>
            <form action="" class="auth-form">
                <div class="txt-field">
                    <input v-model="login" class="form-input" type="text" required>
                    <span></span>
                    <label class="form-label" for="">login</label>
                </div>
                <div class="txt-field">
                    <input v-if="isPasswordVisible" v-model="password" class="form-input" type="text" required>
                    <input v-else v-model="password" class="form-input" type="password" required>
                    <span></span>
                    <label class="form-label" for="">password</label>
                </div>
                <div class="show-password">
                    <label for="">
                        <input class="show-password-checkbox" @change="isPasswordVisible = !isPasswordVisible" type="checkbox"> Show password
                    </label>
                </div>
            </form>
            <div class="err-area">
                <span class="error_message"></span>
            </div>
            <div class="login-btn-block">
                <input @click="logIn" type="submit" value="login" class="login-btn">
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name: "AuthPage",
        data(){
            return {
                login: "",
                password: "",
                isPasswordVisible: false
            }
        },
        methods: {
            logIn(){
                this.$store.dispatch("login", {login: this.login, password: this.password}, (err) => {
                    console.log(err)
                    document.getElementsByClassName("error_message")[0].textContent = err.response.data["detail"]
                    this.$store.commit("setIsAuthenticated", false)
                })
            }
        },
    }
</script>


<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap");
    *{
        font-family: "Poppins", sans-serif;
        box-sizing: border-box;
    }
    .welcome-block{
        color: #393838;
        margin-top: 30px;
        text-align: center;
        font-size: 21px;
        font-weight: 500;
    }
    .err-area{
        position: absolute;
        width: 100%;
        color: red;
        text-align: center;
    }
    .auth-wrap{
        width: 100vw;
        height: 100vh;
        background-image: url("@/assets/constraction_site.png");
        background-size: cover;
    }
    .auth-window{
        position: absolute;
        border-radius: 15px;
        top: 50%;
        left: 50%;
        max-width: 400px;
        width: 100%;
        height: 380px;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.719);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
    }
    .auth-form{
        box-sizing: border-box;
        position: absolute;
        width: 70%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    form .txt-field {
        position: relative;
        border-bottom: 2px solid #7f7e7e;
        margin: 25px 15px 40px 15px;
    }
    .txt-field input {
        width: 100%;
        padding: 0 5px;
        height: 40px;
        font-size: 16px;
        border: none;
        background: none;
        outline: none;
    }
    .txt-field label {
        position: absolute;
        top: 50%;
        left: 5px;
        color: #7f7e7e;
        transform: translateY(-50%);
        font-size: 16px;
        pointer-events: none;
        transition: 0.4s;
    }
    .auth-form span::before{
        content: "";
        height: 2px;
        top: 40px;
        left: 0;
        width: 0;
        color: #2691d9;
        transition: 0.4s;
    }
    .txt-field input:focus ~ label,
    .txt-field input:valid ~ label{
        top: -5px;
        color: #2691d9;
    }
    .txt-field input:focus > span::before,
    .txt-field input:valid > span::before{
        width: 100%;
    }
    .login-btn-block{
        text-align: center;
        margin-top: 60%;
    }
    .login-btn{
        border: none;
        background: #2691d9;
        outline: none;
        border-radius: 15px;
        color: white;
        width: 340px;
        font-size: 16px;
        padding: 7px;
    }
    .login-btn:hover{
        cursor: pointer;
    }
    .show-password{
        top: 50%;
        transform: translateY(-50%);
    }
    input.show-password-checkbox[type="checkbox"]{
        vertical-align: middle;
    }
</style>