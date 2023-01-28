---
title: vue组件初识
editLink: false
icon: component
---

![](https://www.runoob.com/wp-content/uploads/2017/01/components.png)

vue组件认识

::: playground#vue 使用自定义导入的 Vue 案例

@file App.vue

```vue
<script setup>
import { ref } from "vue";

import Comp from "./Comp.vue";

const msg = ref("内置组件!");
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <Comp />
</template>
```

@file Comp.vue

```vue
<template>
  <div>Comp</div>
</template>
```

@import

```json
{
  "imports": {
    "vue": "https://sfc.vuejs.org/vue.runtime.esm-browser.js"
  }
}
```

:::
