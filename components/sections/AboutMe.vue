<template>
    <section id="about" ref="about" class="section">
        <div class="section-subtitle" :style="`transform: translateY(${scrollY * -0.2 + 100}px);`">
            <span>//</span> Words About
        </div>
        <div class="container">
            <b-row>
                <b-col lg="5" md="5">
                    <div class="about-image">
                        <span class="position-absolute"
                            :style="`transform: translateY(${scrollY * 0.1 - 150}px);`">TERMINATOR.</span>
                        <img class="w-100" src="https://solonick.webredox.net/wp-content/uploads/2018/04/1.jpg">
                    </div>
                </b-col>
                <b-col lg="7" md="7">
                    <div class="about-container">
                        <h5>Curabitur convallis fringilla diam</h5>
                        <h2>Innovative solutions to boost <br>
                            <span>your creative</span> projects
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla
                            finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                            suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla
                            diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a
                            consequat purus viverra.</p>
                    </div>
                </b-col>
            </b-row>
        </div>
        <div class="mt-110 position-relative bg-gray">
            <div class="bg-count bg-dark"></div>
            <div class="bg-image" style="background-image: url('https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2017/07/Project-Management-Skills-HERO.jpg')"></div>
            <div class="container text-light position-relative py-6">
                <h1 class="about-title">NUMBER</h1>
                <h1 class="about-me">SOME INTERISTING <span>FACTS</span> <br>
                    ABOUT ME
                </h1>
                <p class="about-subtitle mb-5">We have a wide range of pneumatic and vacuum components and conveyor belts and
                    systems specifically
                    suiting the precise needs of the print and packaging industry.</p>
                <b-row>
                    <b-col lg="3" class="text-center">
                        <p class="about-num">450</p>
                        <span class="about-box">FINISHED PROJECTS</span>
                    </b-col>
                    <b-col lg="3" class="text-center">
                        <p class="about-num">100</p>
                        <span class="about-box">FINISHED PROJECTS</span>
                    </b-col>
                    <b-col lg="3" class="text-center">
                        <p class="about-num">100</p>
                        <span class="about-box">FINISHED PROJECTS</span> 
                    </b-col>
                    <b-col lg="3" class="text-center">
                        <p class="about-num">100</p>
                        <span class="about-box">FINISHED PROJECTS</span>
                    </b-col>
                </b-row>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        scrollY: {
            type: Number,
        }
    }
}
</script>

<style lang="scss" scoped>
.py-6{
    padding: 130px 0;
}
.about-title {
    position: absolute;
    left: -270px;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 84px;
    letter-spacing: 6px;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    color: rgba(255, 255, 255, 0.11);
    top: 190px;
    white-space: nowrap;
}

.about-subtitle {
    font-size: 13px;
    line-height: 24px;
    padding-bottom: 10px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.71);
}

.about-num {
    font-size: 44px;
    font-weight: 700;
    color: #fff;
}

.about-box {
    position: relative;
    margin-top: 6px;
    color: rgba(255, 255, 255, 0.51);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 12px 30px;
    background: rgba(51, 51, 51, 0.31);

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: -40px;
        width: 20px;
        height: 2px;
        margin-top: -1px;
        background-color: #06b6d4;
    }

   
}

.about-me {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 40px;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: -50px;
        left: 0;
        width: 50px;
        height: 6px;
        background: rgba(255, 255, 255, 0.071);
        border: 1px solid rgba(255, 255, 255, 0.11);
    }
}

.bg-count {
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    height: 100%;
}
.bg-image {
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    position: absolute;
    top: 0;
    left: 30%;
    width: 70%;
    height: 100%;
}
.mt-110 {
    margin-top: 110px;
}

.about-container {
    padding: 0 30px;

    h5 {
        font-family: 'Titillium Web', sans-serif;
        text-align: left;
        font-weight: 600;
        font-size: 16px;
        position: relative;
        color: #999;
        line-height: 16px;
        position: relative;
        padding-bottom: 16px;
    }

    h2 {
        text-align: left;
        font-weight: 700;
        font-size: 34px;
        color: #292929;
        font-family: 'Poppins', sans-serif;
        padding-bottom: 30px;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            bottom: 15px;
            left: 0;
            width: 50px;
            height: 2px;
            background-color: #06b6d4;
        }
    }

    span {
        color: #06b6d4;
    }

    p {
        font-size: 11px;
        line-height: 24px;
        padding-bottom: 10px;
        font-weight: 500;
        color: #878C9F;
    }
}

.section {
    padding-top: 110px;
    position: relative;
    overflow: hidden;
}

.about-image {
    position: relative;

    span {
        position: absolute;
        top: 80px;
        left: -20px;
        font-size: 12px;
        text-transform: uppercase;
        z-index: 3;
        color: rgba(255, 255, 255, 0.71);
        font-weight: 500;
        background: #2D2D32;
        padding: 15px 85px 15px 55px;
        letter-spacing: 15px;
    }

    &::before {
        background-color: #06b6d4;
        content: '';
        position: absolute;
        top: 50px;
        left: -50px;
        right: 0;
        bottom: 50px;
        z-index: -9;
    }
}

.section-subtitle {
    position: absolute;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 150px;
    top: 50px;
    left: 40px;
    color: #ccc;
    right: 0;
    opacity: 0.15;
    text-align: left;

    span {
        font-size: 200px;
        color: #06b6d4;
        font-weight: 1000;
    }
}
</style>