(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{1228:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。")]),t._v(" "),a("p",[t._v("整个小程序框架系统分为两部分: "),a("RouterLink",{attrs:{to:"/code/mini-app/guide/service/"}},[a("strong",[t._v("逻辑层")])]),t._v(" (App Service) 和 "),a("RouterLink",{attrs:{to:"/code/mini-app/guide/view/"}},[a("strong",[t._v("视图层")])]),t._v(" (../view)。小程序提供了自己的视图层描述语言 "),a("RouterLink",{attrs:{to:"/code/mini-app/guide/view/wxml.html"}},[t._v("WXML")]),t._v(" 和 "),a("RouterLink",{attrs:{to:"/code/mini-app/guide/view/wxss.html"}},[t._v("WXSS")]),t._v("，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。")],1),t._v(" "),a("h2",{attrs:{id:"响应的数据绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应的数据绑定"}},[t._v("#")]),t._v(" 响应的数据绑定 "),a("MyBadge",{attrs:{text:"务必理解",type:"error"}})],1),t._v(" "),a("p",[t._v("框架的核心是一个响应的数据绑定系统，可以让数据与视图非常简单地保持同步。当做数据修改的时候，只需要在逻辑层修改数据，视图层就会做相应的更新。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developers.weixin.qq.com/s/l0gLEKmv6gZa",target:"_blank",rel:"noopener noreferrer"}},[t._v("在开发者工具中预览效果"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- This is our View --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Hello {{name}}! "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtap")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("changeName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Click me! "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is our App Service.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is our data.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" helloData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WeChat"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Register a Page.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" helloData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sent data change to view")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MINA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("ol",[a("li",[t._v("开发者通过框架将逻辑层数据中的 "),a("code",[t._v("name")]),t._v(" 与视图层的 "),a("code",[t._v("name")]),t._v(" 进行了绑定，所以在页面一打开的时候会显示 "),a("code",[t._v("Hello WeChat!")]),t._v("；")]),t._v(" "),a("li",[t._v("当点击按钮的时候，视图层会发送 "),a("code",[t._v("changeName")]),t._v(" 的事件给逻辑层，逻辑层找到并执行对应的事件处理函数；")]),t._v(" "),a("li",[t._v("回调函数触发后，逻辑层执行 "),a("code",[t._v("setData")]),t._v(" 的操作，将 "),a("code",[t._v("data")]),t._v(" 中的 "),a("code",[t._v("name")]),t._v(" 从 "),a("code",[t._v("WeChat")]),t._v(" 变为 "),a("code",[t._v("MINA")]),t._v("，因为该数据和视图层已经绑定了，从而视图层会自动改变为 "),a("code",[t._v("Hello MINA!")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"页面管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面管理"}},[t._v("#")]),t._v(" 页面管理")]),t._v(" "),a("p",[a("strong",[t._v("框架")]),t._v(" 管理了整个小程序的页面路由，可以做到页面间的无缝切换，并给以页面完整的 "),a("RouterLink",{attrs:{to:"/code/mini-app/guide/service/lifetime.html"}},[t._v("生命周期")]),t._v("。开发者需要做的只是将页面的数据、方法、生命周期函数注册到 "),a("strong",[t._v("框架")]),t._v(" 中，其他的一切复杂的操作都交由 "),a("strong",[t._v("框架")]),t._v(" 处理。")],1),t._v(" "),a("h2",{attrs:{id:"基础组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础组件"}},[t._v("#")]),t._v(" 基础组件")]),t._v(" "),a("p",[a("strong",[t._v("框架")]),t._v(" 提供了一套基础的 "),a("RouterLink",{attrs:{to:"/code/mini-app/guide/view/component.html"}},[t._v("组件")]),t._v("，"),a("RouterLink",{attrs:{to:"/code/mini-app/guide/view/component.html"}},[t._v("这些组件")]),t._v(" 自带微信风格的样式以及特殊的逻辑，开发者可以通过组合基础组件，创建出强大的微信小程序 。")],1),t._v(" "),a("h2",{attrs:{id:"丰富的-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#丰富的-api"}},[t._v("#")]),t._v(" 丰富的 API")]),t._v(" "),a("p",[a("strong",[t._v("框架")]),t._v(" 提供丰富的 "),a("RouterLink",{attrs:{to:"/code/mini-app/guide/service/api/"}},[t._v("微信原生 API")]),t._v("，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。")],1)])}),[],!1,null,null,null);s.default=e.exports},1229:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this.$createElement,s=this._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[s("h2",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[this._v("#")]),this._v(" 目录")]),this._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/code/mini-app/guide/frame/intro.html"}},[this._v("小程序框架介绍")])],1),this._v(" "),s("li",[s("RouterLink",{attrs:{to:"/code/mini-app/guide/frame/scene.html"}},[this._v("场景值")])],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);