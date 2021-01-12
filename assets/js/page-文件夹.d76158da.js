(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{1481:function(t,v,s){"use strict";s.r(v);var _=s(1),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"pwd-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwd-命令"}},[t._v("#")]),t._v(" pwd 命令")]),t._v(" "),s("p",[t._v("由于 Linux 文件系统中有许多目录，当用户执行一条 Linux 命令又没有指定该命令或参数所在的目录时，Linux 系统就会首先在当前目录(目前的工作目录)搜寻这个命令或它的参数。因此，用户在执行命令之前，常常需要确定目前所在的工作目录，即当前目录。")]),t._v(" "),s("p",[t._v("当用户登陆 Linux 系统之后，其当前目录就是它的主目录。那么，如何确定当前目录呢? 可以使用 Linux 系统的 pwd 命令来显示当前目录的绝对路径。")]),t._v(" "),s("p",[t._v("pwd 命令，是 Print Working Directory (打印工作目录)的缩写，功能是显示用户当前所处的工作目录。该命令的基本格式为:")]),t._v(" "),s("div",{staticClass:"language-shell-session line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell-session"}},[s("code",[s("span",{pre:!0,attrs:{class:"token output"}},[t._v("[root@localhost ~]# pwd\n")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"cd-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cd-命令"}},[t._v("#")]),t._v(" cd 命令")]),t._v(" "),s("p",[t._v("cd 命令，是 Change Directory 的缩写，用来切换工作目录。")]),t._v(" "),s("p",[t._v("Linux 命令按照来源方式，可分为两种，分别是 Shell 内置命令和外部命令。所谓 Shell 内置命令，就是 Shell 自带的命令，这些命令是没有执行文件的；而外部命令就是由程序员单独开发的，所以会有命令的执行文件。Linux 中的绝大多数命令是外部命令，而 cd 命令是一个典型的 Shell 内置命令，所以 cd 命令没有执行文件所在路径。")]),t._v(" "),s("p",[t._v("cd 命令的基本格式如下:")]),t._v(" "),s("div",{staticClass:"language-shell-session line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell-session"}},[s("code",[s("span",{pre:!0,attrs:{class:"token output"}},[t._v("[root@localhost ~]# cd [相对路径或绝对路径]\n")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("除此之外，cd 命令后面可以跟一些特殊符号，表达固定的含义。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("特殊符号")]),t._v(" "),s("th",[t._v("作 用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("~")])]),t._v(" "),s("td",[t._v("代表当前登录用户的主目录")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("~<用户名>")])]),t._v(" "),s("td",[t._v("表示切换至指定用户的主目录")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("-")])]),t._v(" "),s("td",[t._v("代表上次所在目录")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".")])]),t._v(" "),s("td",[t._v("代表当前目录")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("..")])]),t._v(" "),s("td",[t._v("代表上级目录")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("在 Linux 系统中，根目录确实存在 "),s("code",[t._v(".")]),t._v("(当前目录)以及 "),s("code",[t._v("..")]),t._v("(当前目录的父目录)两个目录，但由于根目录是最顶级目录，因此根目录的 "),s("code",[t._v("..")]),t._v(" 和 "),s("code",[t._v(".")]),t._v(" 的属性和权限完全一致，也就是说，根目录的父目录是自身。")])]),t._v(" "),s("h2",{attrs:{id:"ls-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ls-命令"}},[t._v("#")]),t._v(" ls 命令")]),t._v(" "),s("p",[t._v("ls 命令，list 的缩写，是最常见的目录操作命令，其主要功能是显示当前目录下的内容。此命令的基本格式为:")]),t._v(" "),s("div",{staticClass:"language-shell-session line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell-session"}},[s("code",[s("span",{pre:!0,attrs:{class:"token output"}},[t._v("[root@localhost ~]# ls [选项] 目录名称\n")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("选项")]),t._v(" "),s("th",[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-a")]),t._v(" "),s("td",[t._v("显示全部的文件，包括隐藏文件(开头为 "),s("code",[t._v(".")]),t._v(" 的文件)也一起罗列出来，这是最常用的选项之一。")])]),t._v(" "),s("tr",[s("td",[t._v("-A")]),t._v(" "),s("td",[t._v("显示全部的文件，连同隐藏文件，但不包括 "),s("code",[t._v(".")]),t._v(" 与 "),s("code",[t._v("..")]),t._v(" 这两个目录。")])]),t._v(" "),s("tr",[s("td",[t._v("-d")]),t._v(" "),s("td",[t._v("仅列出目录本身，而不是列出目录内的文件数据。")])]),t._v(" "),s("tr",[s("td",[t._v("-f")]),t._v(" "),s("td",[t._v("ls 默认会以文件名排序，使用 "),s("code",[t._v("-f")]),t._v(" 选项会直接列出结果，而不进行排序。")])]),t._v(" "),s("tr",[s("td",[t._v("-F")]),t._v(" "),s("td",[t._v("在文件或目录名后加上文件类型的指示符号，例如，"),s("code",[t._v("*")]),t._v(" 代表可运行文件，"),s("code",[t._v("/")]),t._v(" 代表目录，= 代表 socket 文件，")])]),t._v(" "),s("tr",[s("td",[t._v("-h")]),t._v(" "),s("td",[t._v("以人们易读的方式显示文件或目录大小，如 1KB、234MB、2GB 等。")])]),t._v(" "),s("tr",[s("td",[t._v("-i")]),t._v(" "),s("td",[t._v("显示 inode 节点信息。")])]),t._v(" "),s("tr",[s("td",[t._v("-l")]),t._v(" "),s("td",[t._v("使用长格式列出文件和目录信息。")])]),t._v(" "),s("tr",[s("td",[t._v("-n")]),t._v(" "),s("td",[t._v("以 UID 和 GID 分别代替文件用户名和群组名显示出来。")])]),t._v(" "),s("tr",[s("td",[t._v("-r")]),t._v(" "),s("td",[t._v("将排序结果反向输出，比如，若原本文件名由小到大，反向则为由大到小。")])]),t._v(" "),s("tr",[s("td",[t._v("-R")]),t._v(" "),s("td",[t._v("连同子目录内容一起列出来，等於将该目录下的所有文件都显示出来。")])]),t._v(" "),s("tr",[s("td",[t._v("-S")]),t._v(" "),s("td",[t._v("以文件容量大小排序，而不是以文件名排序。")])]),t._v(" "),s("tr",[s("td",[t._v("-t")]),t._v(" "),s("td",[t._v("以时间排序，而不是以文件名排序。")])]),t._v(" "),s("tr",[s("td",[t._v("--color=never"),s("br"),t._v("--color=always"),s("br"),t._v("--color=auto")]),t._v(" "),s("td",[s("code",[t._v("never")]),t._v(" 表示不依据文件特性给予颜色显示。"),s("br"),s("code",[t._v("always")]),t._v(" 表示显示颜色，ls 默认采用这种方式。"),s("br"),s("code",[t._v("auto")]),t._v(" 表示让系统自行依据配置来判断是否给予颜色。")])]),t._v(" "),s("tr",[s("td",[t._v("--full-time")]),t._v(" "),s("td",[t._v("以完整时间模式 (包含年、月、日、时、分)输出")])]),t._v(" "),s("tr",[s("td",[t._v("--time={atime,ctime}")]),t._v(" "),s("td",[t._v("输出 access 时间或改变权限属性时间(ctime)，而不是内容变更时间。")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("当 ls 命令不使用任何选项时，默认只会显示非隐藏文件的名称，并以文件名进行排序，同时会根据文件的具体类型给文件名配色(蓝色显示目录，白色显示一般文件)。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("ls 命令使用了 "),s("code",[t._v("-l")]),t._v(" 选项，显示出文件的详细信息，此选项显示的这 7 列的含义分别是:")]),t._v(" "),s("ul",[s("li",[t._v("第一列: 规定了不同的用户对文件所拥有的权限，具体权限的含义将在后续章节中讲解。")]),t._v(" "),s("li",[t._v("第二列: 引用计数，文件的引用计数代表该文件的硬链接个数，而目录的引用计数代表该目录有多少个一级子目录。")]),t._v(" "),s("li",[t._v("第三列: 所有者，也就是这个文件属于哪个用户。默认所有者是文件的建立用户。")]),t._v(" "),s("li",[t._v("第四列: 所属组，默认所属组是文件建立用户的有效组，一般情况下就是建立用户的所在组。")]),t._v(" "),s("li",[t._v("第五列: 大小，默认单位是字节。")]),t._v(" "),s("li",[t._v("第六列: 文件修改时间，文件状态修改时间或文件数据修改时间都会更改这个时间，注意这个时间不是文件的创建时间。")]),t._v(" "),s("li",[t._v("第七列: 文件名或目录名。")])])]),t._v(" "),s("h2",{attrs:{id:"mkdir-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mkdir-命令"}},[t._v("#")]),t._v(" mkdir 命令")]),t._v(" "),s("p",[t._v("mkdir 命令，是 make directories 的缩写，用于创建新目录，此命令所有用户都可以使用。")]),t._v(" "),s("p",[t._v("mkdir 命令的基本格式为:")]),t._v(" "),s("div",{staticClass:"language-shell-session line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell-session"}},[s("code",[s("span",{pre:!0,attrs:{class:"token output"}},[t._v("[root@localhost ~]# mkdir [-mp] 目录名\n")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("-m 选项用于手动配置所创建目录的权限，而不再使用默认权限。")]),t._v(" "),s("li",[t._v("-p 选项递归创建所有目录，以创建 "),s("code",[t._v("/home/test/demo")]),t._v(" 为例，在默认情况下，您需要一层一层的创建各个目录，而使用 "),s("code",[t._v("-p")]),t._v(" 选项，则系统会自动帮您创建 "),s("code",[t._v("/home")]),t._v("、"),s("code",[t._v("/home/test")]),t._v(" 以及 "),s("code",[t._v("/home/test/demo")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"rmdir-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rmdir-命令"}},[t._v("#")]),t._v(" rmdir 命令")]),t._v(" "),s("p",[t._v("和 mkdir 命令(创建空目录)恰好相反，rmdir(remove empty directories 的缩写)命令用于删除空目录，此命令的基本格式为:")]),t._v(" "),s("div",{staticClass:"language-shell-session line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell-session"}},[s("code",[s("span",{pre:!0,attrs:{class:"token output"}},[t._v("[root@localhost ~]# rmdir [-p] 目录名\n")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("-p 选项用于递归删除空目录。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("rmdir 命令的作用十分有限，因为只能刪除空目录，所以一旦目录中有内容，就会报错。")])])])}),[],!1,null,null,null);v.default=e.exports}}]);