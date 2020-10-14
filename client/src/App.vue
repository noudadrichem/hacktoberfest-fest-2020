<template>
  <div id="app">
      <Nav />
      <WidgetContainer />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    WidgetContainer: () => import("./components/WidgetContainer"),
    Nav: () => import("./components/Nav"),
  },
};
</script>

<style lang="scss">
:root {
  --text-color: #616364;
  --root-background-color: #fff;
  --secondary-background-color: #f2f2f2;

  --indi-blue-1: #72c9e0;
  --indi-blue-2: #97d5e5;
  --indi-blue-3: #dbeff4;

  --indi-green-1: #73c2b6;
  --indi-green-2: #97cfc7;
  --indi-green-3: #dbedea;

  --indi-grey: #eff0f0;
  --indi-success: var(--indi-green-2);
  --indi-warning: #fac052;
  --indi-error: #cf9797;

  --panel-background: #f3f8fa;
  --inner-sidebar-background: #f8f9f9;

  --sidebar-width: 286px;

  --header-font: "Roboto", sans-serif;
  --text-font: "Calibri", sans-serif;
}

[data-theme="dark"] {
  --text-color: #f2f2f2;
  --root-background-color: #090e11;
  --secondary-background-color: #2f3437;

  --indi-blue-1: #448596;
  --indi-blue-2: #97d5e5;
  --indi-blue-3: #2a4146;

  --indi-green-1: #73c2b6;
  --indi-green-2: #97cfc7;
  --indi-green-3: #dbedea;

  --indi-grey: #eff0f0;
  --indi-success: var(--indi-green-2);
  --indi-warning: #fac052;
  --indi-error: #cf9797;

  --panel-background: #000;
  --inner-sidebar-background: #f8f9f9;
}
// Breakpoints
$bp-mobile-sm: 321px;
$bp-mobile-md: 376px;
$bp-mobile-lg: 414px;
$bp-tablet-sm: 562px;
$bp-tablet-md: 768px;
$bp-desktop-sm: 1120px;
$bp-desktop-md: 1280px;
$bp-desktop-lg: 1536px;

@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap");

* {
    box-sizing: border-box;
}

body {
    margin: 0 ;
    padding: 0;
  font-family: "Roboto", sans-serif;
  color: var(--text-color);
  overflow-x: hidden;
  max-width: 100vw;
  background-color: var(--root-background-color);

  * {
    transition: background 300ms;
  }
}

ul {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

img,
.img {
  max-width: 100%;
  box-sizing: border-box;
}

.fadeInUp {
  animation-name: fadeInUp;
  animation-direction: forwards;
}

@keyframes fadeInUp {
  0% {
    -webkit-transform: translate3d(0, 100%, 0);
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  100% {
    -webkit-transform: translateZ(0);
    opacity: 1;
    transform: translateZ(0);
  }
}

h1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 140%;
  font-style: normal;
  color: var(--text-color);
  margin-bottom: 0;

  @media screen and (max-width: $bp-tablet-md) {
    font-size: 44px;
  }

  @media screen and (max-width: $bp-mobile-lg) {
    font-size: 24px;
  }
}

h2 {
  font-size: 40px;
  font-weight: 500;
  line-height: 140%;
  color: var(--text-color);

  @media screen and (max-width: $bp-tablet-md) {
    font-size: 36px;
  }

  @media screen and (max-width: $bp-mobile-lg) {
    font-size: 32px;
  }
}

h3 {
  font-size: 32px;
  line-height: 140%;
  color: var(--text-color);
  font-weight: 500;

  @media screen and (max-width: $bp-tablet-md) {
    font-size: 28px;
  }

  @media screen and (max-width: $bp-mobile-lg) {
    font-size: 24px;
  }
}

h4 {
  font-size: 24px;
  font-weight: 500;
  line-height: 140%;
  color: var(--text-color);
  margin: 8px 0;
}

h5 {
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  color: var(--text-color);
  margin-bottom: 8px;
}

p {
  font-size: 18px;
  line-height: 140%;
  color: var(--text-color);

  &.small {
    font-size: 14px;
  }

  &.large {
    font-size: 24px;
  }
}

.no-margin {
  margin: 0;
}

a {
  &.text-link {
    text-decoration: none;
    font-size: 16px;
    color: var(--blue-500);
    letter-spacing: -0.2px;
    line-height: 24px;
    position: relative;
    font-weight: 500;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: var(--blue-200);
      left: 0;
      bottom: 0;
      z-index: -1;
    }

    &.small {
      font-size: 14px;
    }
  }
}

span {
  &.extra-bold {
    font-weight: 900;
  }
  &.bold {
    font-weight: 700;
  }

  &.medium {
    font-weight: 500;
  }

  &.light {
    font-weight: 300;
  }
}

.center {
  text-align: center;
}
</style>
