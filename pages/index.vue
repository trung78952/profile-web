<template>
  <div>
    <div id="hero" style="height: calc(100vh - 77px)" class="bg-dark position-relative">
      <div class="hero-backround">
        <div class="hero-img"
          style="background: linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100% ), url('https://solonick.webredox.net/wp-content/uploads/2018/04/18.jpg') ;"
          :style="`transform: ${layer1Transform};`" />
        <div class="hero-decor"></div>
        <div class="hero-grpoint">
          <div v-for="e, i in 12" :key="i" class="point" :class="{ 'point-active': i === randomIndex }"></div>
        </div>
        <div class="hero-decor-numb">
          <span>10.8493352</span>
          <span>106.6655111</span>
          <span class="hero-decor-numb-tooltip">HO CHI MINH</span>
        </div>
      </div>
      <div class="hero-wrap">
        <h1 class="hero-title">
          Hey there !<br />
          I'm Martin Solonick<br />
          Independent <span class="text-primary">Digital Designer</span>
        </h1>
        <p class="hero-subtitle m-0">I create web and graphic design</p>
        <b-button variant="primary" class="hero-btn">Let's Start</b-button>
      </div>
    </div>
    <NavBar></NavBar>
    <div class="container" style="height: calc(200vh)"></div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      scrollY: 0,
      randomIndex: null,
    }
  },
  computed: {
    layer1Transform() {
      return `translateY(${this.scrollY * 0.4}px)`
    },
    layer2Transform() {
      return `translateY(${this.scrollY * 0.1}px)`
    },
  },
  mounted() {
    this.scrollY = window.scrollY
    window.addEventListener('scroll', this.handleScroll)
    setInterval(() => {
      this.generateRandomNumber()
    }, 3000);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    },
    generateRandomNumber() {
      this.randomIndex = Math.floor(Math.random() * 12);
    }
  },
}
</script>
<style lang="scss" scoped>
#hero {
  overflow: hidden;
}

.hero-wrap {
  position: absolute;
  left: 25%;
  top: 29%;

  .hero-title {
    position: relative;
    padding-bottom: 30px;
    color: #fff;
    font-size: 50px;
    text-align: left;
    font-weight: 600;
    line-height: 70px;

    &::before {
      content: '';
      position: absolute;
      top: -30px;
      left: 0;
      width: 50px;
      height: 6px;
      border: 1px solid rgba(255, 255, 255, 0.21);
    }
  }

  .hero-subtitle {
    font-family: 'Titillium Web', sans-serif;
    padding: 15px 30px;
    background: rgba(0, 0, 0, 0.21);
    text-align: left;
    font-size: 11px;
    width: fit-content;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.71);
    letter-spacing: 6px;
    font-weight: 600;
  }

  .hero-btn {
    font-family: 'Titillium Web', sans-serif;
    padding: 15px 30px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-top: 50px;
  }
}

.hero-backround {
  position: relative;
  height: 100%;

  .hero-img {
    position: absolute;
    top: 0;
    right: 0;
    width: 65%;
    height: 100%;

  }

  .hero-decor {
    position: absolute;
    bottom: 0;
    width: 50%;
    height: 30%;
    z-index: 3;
    right: 0;
    background: url('https://solonick.webredox.net/wp-content/themes/solonick/includes/images/pattern.png') repeat;
    opacity: 0.2;
  }

  .hero-decor-numb {
    position: absolute;
    z-index: 20;
    left: 40%;
    top: 40px;
    padding-left: 80px;
    cursor: pointer;
    overflow: hidden;
    font-family: 'Titillium Web', sans-serif;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.51);
    letter-spacing: 10px;

    .hero-decor-numb-tooltip {
      position: absolute;
      left: 80px;
      top: -40px;
      opacity: 0;
      visibility: hidden;
      transition: all 200ms linear;
      margin: 0;
    }

    span {
      float: left;
      margin-right: 60px;
      position: relative;
      top: 0;
      transition: all 200ms linear
    }

    &:hover {
      .hero-decor-numb-tooltip {
        top: 0;
        opacity: 1;
        visibility: visible;
      }

      span {
        top: 50px;
        opacity: 0;
        visibility: hidden;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 20px;
      width: 20px;
      height: 1px;
      background: #06b6d4;
    }
  }

  .hero-grpoint {
    position: absolute;
    top: 10%;
    left: 5.5%;
    width: 20%;
    height: 80%;
    padding-left: 80px;

    .point {
      float: left;
      width: 33.3%;
      height: 25%;
      position: relative;
    }

    .point-active::before {
      background-color: #fff;
    }

    .point::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      margin: -4px 0 0 -4px;
      border-radius: 100%;
      border: 1px solid rgba(255, 255, 255, 0.31);
      box-sizing: border-box;
      -webkit-transition: all 500ms linear;
      transition: all 500ms linear;
      z-index: 3;
    }
  }
}
</style>