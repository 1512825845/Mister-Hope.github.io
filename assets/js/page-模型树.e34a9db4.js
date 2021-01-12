(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{1637:function(t,r,s){"use strict";s.r(r);var a=s(1),e=Object(a.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("使用“模型开发器”时，可通过以在默认的模型树中添加节点并编辑节点设置来构建模型。")]),t._v(" "),s("p",[t._v("默认模型树中的所有节点均为顶层父节点。可以右键单击这些节点以查看可在其中添加的子节点的列表。这是将节点添加到模型树的方式。")]),t._v(" "),s("p",[t._v("当您单击某个子节点时，可以在设置窗口中查看其节点设置。您可以在此编辑节点设置。")]),t._v(" "),s("h2",{attrs:{id:"根节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根节点"}},[t._v("#")]),t._v(" 根节点")]),t._v(" "),s("p",[t._v("模型树始终包含根节点 (初始标签为 Untitled.mph)、全局定义节点和结果节点。根节点的标签是用来保存模型的多物理场模型文件 (或 MPH 文件)的名称。根节点包含作者姓名、默认单位制等设置。")]),t._v(" "),s("h2",{attrs:{id:"全局定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局定义"}},[t._v("#")]),t._v(" 全局定义")]),t._v(" "),s("p",[t._v("默认情况下，全局定义节点包含参数和材料子节点，用于定义可在整个模型树中使用的参数、变量、函数及耦合等。例如，可用于定义材料属性、力、几何及其他相关特征的值和函数依赖关系。全局定义节点本身不含任何设置，但其子节点包含许多设置。材料子节点用于存储材料属性，可在模型的组件节点中引用。")]),t._v(" "),s("h2",{attrs:{id:"组件和研究节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件和研究节点"}},[t._v("#")]),t._v(" 组件和研究节点")]),t._v(" "),s("p",[t._v("组件节点和研究节点通常在创建新模型时由 “模型向导”创建。使用 “模型向导”指定要建模的物理场类型以及要执行的研究类型 (如稳态、瞬态、频域或特征频率分析)后，“模型向导”会自动为每种类型创建一个节点并显示其内容。")]),t._v(" "),s("p",[t._v("您还可以在开发模型时添加更多的组件和研究节点。模型可以包含多个组件和研究节点，如果它们的名称都相同，可能会造成混淆。因此，您可以根据这些节点类型各自的用途将其重命名。")]),t._v(" "),s("p",[t._v("如果模型包含多个组件节点，可以将其耦合在一起，形成一系列更为复杂的仿真步骤。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("每个研究节点都可以执行不同类型的计算，因此每个节点都有单独的计算按钮。同时，这也意味着您可以用同一个模型来进行多个不同研究。")])]),t._v(" "),s("h2",{attrs:{id:"结果节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结果节点"}},[t._v("#")]),t._v(" 结果节点")]),t._v(" "),s("p",[t._v("结果节点用于访问通过执行仿真得到的解，其中还提供多个数据处理工具。结果节点最初包含五个子节点:")]),t._v(" "),s("ul",[s("li",[t._v("数据集: 包含一组可供使用的解。")]),t._v(" "),s("li",[t._v("派生值: 使用大量后处理工具来定义要从解中派生的值。")]),t._v(" "),s("li",[t._v("表格: 一个非常方便的目标位置，用于存储探针生成的派生值或结果，这些探针在仿真运行期间实时监视解。")]),t._v(" "),s("li",[t._v("导出: 定义要导出至文件的数值数据、图像及动画。")]),t._v(" "),s("li",[t._v("报告: 包含自动生成或定制的模型报告，格式为 HTML 或 Microsoft Word。")])]),t._v(" "),s("p",[t._v("除了这五个默认子节点，您还可以添加更多绘图组子节点，用于定义要在图形或绘图窗口中显示的图形。其中一些节点可根据所执行的仿真类型自动创建，您也可以右键单击结果节点，并从绘图类型列表中进行选择来包含其他图形")]),t._v(" "),s("h2",{attrs:{id:"参数、函数、变量和范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数、函数、变量和范围"}},[t._v("#")]),t._v(" 参数、函数、变量和范围")]),t._v(" "),s("h3",{attrs:{id:"全局参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局参数"}},[t._v("#")]),t._v(" 全局参数")]),t._v(" "),s("p",[t._v("全局参数是用户定义的常数标量，可在整个模型中使用。也就是说，这些参数具有 “全局”性质。其重要用途包括:")]),t._v(" "),s("ul",[s("li",[t._v("参数化几何尺寸。")]),t._v(" "),s("li",[t._v("指定网格单元大小。")]),t._v(" "),s("li",[t._v("定义参数化扫描 (即针对频率或载荷等各种不同的参数值反复运行仿真)。")])]),t._v(" "),s("p",[t._v("全局参数表达式可以包含数字、全局参数、内置常数、使用全局参数表达式作为变元的内置和用户定义函数，以及一元和二元运算符。")]),t._v(" "),s("p",[t._v("您可以在模型树的全局定义下的参数节点中定义全局参数。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("参数名称区分大小写")])]),t._v(" "),s("h3",{attrs:{id:"结果参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结果参数"}},[t._v("#")]),t._v(" 结果参数")]),t._v(" "),s("p",[t._v("为了实现更高的灵活性，可定义仅在结果节点中使用的参数。使用这些参数时无需解析模型。")]),t._v(" "),s("h3",{attrs:{id:"函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),s("p",[t._v("函数可用于全局定义和组件 > 定义，其中包含一系列预定义的函数模板，这在建立多物理场仿真时非常有用。例如，阶跃函数模板可以创建平滑的阶跃函\n数，用于定义不同类型的空间或时间过渡。")]),t._v(" "),s("h3",{attrs:{id:"变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[t._v("#")]),t._v(" 变量")]),t._v(" "),s("p",[t._v("变量在模型树中具有关联的变量节点，可在全局定义节点中定义，也可在任意组件节点的定义子节点中定义。")]),t._v(" "),s("p",[t._v("当然，选择在何处定义变量取决于您希望该变量是全局 (即在整个模型树中可用)的，还是在单个组件节点内进行局部定义。与参数表达式类似，变量表达式可以包含数字、参数、内置常数以及一元和二元运算符。不过，变量表达式还可以包含变量 (如 t、x、y 或 z)；以变量表达式为变元的函数；以及要求解的因变量及其空间和时间的导数。")]),t._v(" "),s("p",[t._v("如果模型包含许多变量节点，则可以使用节点组特征将其组合在一起。节点组可用于对全局定义、组件下的定义、材料、物理场接口和结果中的节点进行分组。")]),t._v(" "),s("h3",{attrs:{id:"app-中使用的变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-中使用的变量"}},[t._v("#")]),t._v(" App 中使用的变量 "),s("MyBadge",{attrs:{text:"高级用法"}})],1),t._v(" "),s("p",[t._v("模型参数和变量可在 App 中使用。例如，您可以让 App 用户更改参数值。此外，还可以在 “App 开发器”中 App 树的声明节点下定义要在 App 中使用的变量。此类变量也能在模型方法中使用。")]),t._v(" "),s("h3",{attrs:{id:"范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#范围"}},[t._v("#")]),t._v(" 范围")]),t._v(" "),s("p",[t._v("参数或变量的 “范围”是一条声明该参数或变量在表达式中的使用位置的语句。所有全局参数均在模型树的全局定义节点中定义为参数子节点。这意味着它们的范围是全局性的，可在整个模型树中使用。")]),t._v(" "),s("p",[t._v("变量也可以在 “全局定义”节点中定义为变量子节点，此时变量具有全局范围，但受到其他限制。例如，变量不能用于几何、网格或研究节点 (在确定仿真停止时间的表达式中使用变量的情况除外)。")]),t._v(" "),s("p",[t._v("在组件节点的定义子节点下定义的变量具有局部范围，仅在这一特定组件中使用 (但同样不用于几何或网格节点)。例如，这些变量可用于在组件的材料子节点中指定材料属性，或用于指定边界条件或相互作用。有时，需要将变量的范围限制在几何的特定部分，如某些边界。为此，变量的设置中提供了一些预设值，可供您选择是将定义应用于整个组件几何，还是仅应用于某个域、边界、边或点。")])])}),[],!1,null,null,null);r.default=e.exports},1638:function(t,r,s){"use strict";s.r(r);var a=s(1),e=Object(a.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("关于 COMSOL 多物理场在理论上使用的公式，及其对公式进行的简化与对应计算，请见 "),s("a",{attrs:{href:"http://cn.comsol.com/multiphysics/introduction-to-physics-pdes-and-numerical-modeling",target:"_blank",rel:"noopener noreferrer"}},[t._v("物理定律、偏微分方程、数学和数值建模"),s("OutboundLink")],1),t._v("。因个人能力不足，本教程不包含这一部分的摘录，精简与批注。")])]),t._v(" "),s("li",[s("p",[t._v("关于各物理定律在各模块以及模型的具体应用、简化，请移步 "),s("a",{attrs:{href:"http://cn.comsol.com/multiphysics/",target:"_blank",rel:"noopener noreferrer"}},[t._v("COMSOL 多物理场仿真百科"),s("OutboundLink")],1),t._v("。本教程同样不做介绍。")])]),t._v(" "),s("li",[s("p",[t._v("关于 COMSOL 中的各个模块能够解决的领域及问题，以及各个模块的特点与优点，请查阅 "),s("a",{attrs:{href:"https://cn.comsol.com/products",target:"_blank",rel:"noopener noreferrer"}},[t._v("COMSOL"),s("sup",[t._v("®")]),t._v(" 软件产品库"),s("OutboundLink")],1),t._v("。本教程不做摘录与列出。")])])]),t._v(" "),s("h2",{attrs:{id:"官方文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官方文档"}},[t._v("#")]),t._v(" 官方文档")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("关于各个模块(物理场)，请观看 "),s("a",{attrs:{href:"http://cn.comsol.com/video/basics-comsol-multiphysics-18-minutes",target:"_blank",rel:"noopener noreferrer"}},[t._v("COMSOL Multiphysics 18 分钟入门"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("关于 COMSOL 的案例库，您可以查看 "),s("a",{attrs:{href:"https://cn.comsol.com/models",target:"_blank",rel:"noopener noreferrer"}},[t._v("COMSOL 案例下载"),s("OutboundLink")],1)])])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("这些是我在模拟过程中觉得很有用的视频教程。")])]),t._v(" "),s("h3",{attrs:{id:"传热"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传热"}},[t._v("#")]),t._v(" 传热")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cn.comsol.com/blogs/conjugate-heat-transfer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("共轭传热"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"传热视频教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传热视频教程"}},[t._v("#")]),t._v(" 传热视频教程")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cn.comsol.com/video/conduction-convection-radiation-heat-transfer",target:"_blank",rel:"noopener noreferrer"}},[t._v("传热中的传导、对流和辐射模拟"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"流体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流体"}},[t._v("#")]),t._v(" 流体")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://cn.comsol.com/blogs/which-turbulence-model-should-choose-cfd-application/",target:"_blank",rel:"noopener noreferrer"}},[t._v("针对 CFD 应用选择合适的湍流模型"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://cn.comsol.com/blogs/compressibility-options-and-buoyancy-forces-for-flow-simulations/",target:"_blank",rel:"noopener noreferrer"}},[t._v("流场仿真问题中的可压缩性选项和浮力"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://cn.comsol.com/blogs/introduction-to-modeling-natural-convection-in-comsol-multiphysics/",target:"_blank",rel:"noopener noreferrer"}},[t._v("COMSOL Multiphysics"),s("sup",[t._v("®")]),t._v(" 自然对流建模简介"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://cn.comsol.com/blogs/how-to-set-up-a-mesh-in-comsol-multiphysics-for-cfd-analyses/",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何在 COMSOL Multiphysics"),s("sup",[t._v("®")]),t._v(" 中设置网格进行 CFD 分析"),s("OutboundLink")],1)])])]),t._v(" "),s("h4",{attrs:{id:"动网格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动网格"}},[t._v("#")]),t._v(" 动网格")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cn.comsol.com/blogs/analyze-a-mixers-design-elements-with-comsol-multiphysics/",target:"_blank",rel:"noopener noreferrer"}},[t._v("借助 COMSOL Multiphysics"),s("sup",[t._v("®")]),t._v(" 分析搅拌器的设计元素"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=e.exports}}]);