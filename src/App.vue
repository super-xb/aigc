<template>
  <div id="app">

      <router-view/>
    
  </div>
</template>

<style lang="scss">

/* 全局重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #0e0e0e;
  color: #fff;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #0e0e0e;
  color: #fff;
  font-size: 16px;
}

button {
  cursor: pointer;
  border: 0;
  font-weight: 700;
  color: #FFFFFF;
}

input {
  border: 0;
}

input:focus-visible {
  border: 0;
  outline: 0;
}

nav {
  padding: 0;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>