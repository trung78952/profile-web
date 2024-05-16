<template>
  <div>
    <div id="hero" style="height: calc(100vh - 77px)" class="bg-dark">
      <div class="container-lg align-items-center d-flex h-100">
        <div class="hero-wrap">
          <h1 class="hero-title">
            Hey there !<br />
            I'm Martin Solonick<br />
            Independent <span>Digital Designer</span>
          </h1>
          <div class="hero-subtitle">I create web and graphic design</div>
          <br />
          <div>
            <b-button variant="primary" class="hero-btn">Let's Start</b-button>
          </div>
        </div>
      </div>
    </div>
    <NavBar></NavBar>
    <div class="container" style="height: calc(200vh)"></div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style lang="scss" scoped>
.hero-title {
  padding-bottom: 30px;
  color: #fff;
  font-size: 50px;
  text-align: left;
  font-weight: 600;
  line-height: 70px;
  span {
    color: #06b6d4;
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
}
</style>