<template>
  <div class=" nav-sticky">
    <div class="scroll-down">
      <div class="mousey">
        <div class="scroller"></div>
      </div>
      <p class="m-0">SCROLL DOWN</p>
    </div>
    <div class="scroll-init bg-dark">
      <p v-for="e,i in section" :key="i" class="scroll-section">{{ e.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            section: [
                {name:'Hero'},
                {name:'About'},
                {name:'Resume'},
                {name:'Skills'},
                {name:'Projects'},
                {name:'Clients'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-sticky {
  font-family: 'Titillium Web', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: sticky;
  color: #8b8b8b;

  top: 0;
  display: flex;
  align-items: center;
  background-color: #2d2d32;
  .scroll-down {
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 23px;
  
  }
  .scroll-init {
    display: flex;
    padding: 23px;
    border-right: 1px solid rgba(255, 255, 255, 0.11);
    border-left: 1px solid rgba(255, 255, 255, 0.11);
    .scroll-section {
      margin: 0;
      cursor: pointer;
      position: relative;
      padding: 8px 35px;
      transition: .4s;
    }
    .scroll-section::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 15px;
      height: 2px;
      margin-top: -1px;
      background-color: rgba(255, 255, 255, 0.091);
      transition: .4s;
    }
    .scroll-section::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 0px;
      height: 2px;
      margin-top: -1px;
      background-color: rgba(255, 255, 255, 0.091);
      transition: .4s;
    }
    .scroll-section:hover {
      color: #06b6d4;
      &.scroll-section::after{
        background-color: #06b6d4;
        width: 15px;
      }
    }
  }
}
.mousey {
  width: 3px;
  padding: 0px 6px;
  height: 24px;
  border: 2px solid #8b8b8b;
  border-radius: 5px;
  opacity: 0.75;
  box-sizing: content-box;
}

.scroller {
  width: 3px;
  height: 8px;
  border-radius: 25%;
  background-color: #06b6d4;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;
}

@keyframes scroll {
  0% {
    opacity: 0;
  }
  10% {
    transform: translateY(20%);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(200%);
    opacity: 0;
  }
}
</style>