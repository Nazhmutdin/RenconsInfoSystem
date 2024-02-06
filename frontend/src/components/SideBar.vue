<template>
    <div class="sidebar">
        <div class="logo side-bar-header-item">
            <router-link :to="{ name: 'main' }" class="logo_img_container" href="">
                <img class="logo-img" src="@/assets/logo.png" alt="Image">
            </router-link>
        </div>
        <div class="nav_container side-bar-header-item">
            <ul class="nav_bar_urls">
                <li class="registry_url">
                    <router-link :to="{ name: 'welderRegistry' }" class="header_url">
                        Welder registry
                    </router-link>
                </li>
                <li class="registry_url">
                    <router-link :to="{ name: 'welderNDTRegistry' }" class="header_url" href="#">
                        NDT registry
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="authorization_buttons side-bar-header-item">
            <div class="authorization_actions">
                <div class="logout">
                    <a class="header_url authorization_action" href="#">Log out</a>
                </div>
                <div class="login">
                    <a class="header_url authorization_action" href="#">Log in</a>
                </div>
            </div>
        </div>
    </div>
</template>


<!--
<=====================================================================>
-->


<script>
    export default{
        name: "SideBar"
    }
</script>


<!--
<=====================================================================>
-->


<style scoped>
    .sidebar{
        width: 100%;
        background-color: rgb(24, 114, 217);
        height: 60px;
        display: flex;
        border-bottom: 2px solid #4d4d4d;
    }
    .logo{
        margin-left: 25px;
        margin-right: 25px;
        float: left;
    }
    .logo_img_container{
        transition: all .2 ease;
    }
    .nav_container{
        margin-left: 70px;
        float: left;
    }
    .registry_url{
        padding-right: 20px;
        float: left;
        list-style: none;
    }
    .header_url{
        color: #fff;
        font-size: clamp(12px, 5vw, 23px);
        text-decoration: none;
        display: block;
        transition: all .2 ease;
    }
    .authorization_buttons{
        margin-right: 15px;
    }
    .login{
        float: right;
        padding-right: 10px;
    } 
    .logout{
        float: right;
    }
    .logo_img_container:hover{
        cursor: auto;
    }
    .header_url:hover{
        color: #fff;
        transform: scale(1.025);
        text-decoration: underline;
    }
</style>