(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{1655:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("我们已经成功地添加并提交了一个 readme.txt 文件，继续修改 readme.txt 文件，改成如下内容:")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[s._v("Git is a distributed version control system.\nGit is free software.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("现在，运行 "),a("code",[s._v("git status")]),s._v(" 命令看看结果:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch master\nChanges not staged "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" commit:\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <file>..."')]),s._v(" to update what will be committed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git checkout -- <file>..."')]),s._v(" to discard changes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" working directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    modified:   readme.txt\n\nno changes added to commit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add"')]),s._v(" and/or "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git commit -a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("code",[s._v("git status")]),s._v(" 命令可以输出仓库当前的状态，上面的命令输出告诉我们，readme.txt 被修改过了，但还没有准备提交的修改。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("简介输出")]),s._v(" "),a("p",[a("code",[s._v("git status")]),s._v(" 命令的输出十分详细，但其用语有些繁琐。Git 有一个选项可以帮你缩短状态命令的输出，这样可以以简洁的方式查看更改。如果你使用 "),a("code",[s._v("git status -s")]),s._v(" 命令或 "),a("code",[s._v("git status --short")]),s._v(" 命令，你将得到一种格式更为紧凑的输出。")]),s._v(" "),a("p",[s._v("一个案例:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status -s\n M README\nMM Rakefile\nA  lib/git.rb\nM  lib/simplegit.rb\n?? LICENSE.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("新添加的未跟踪文件前面有 "),a("code",[s._v("??")]),s._v(" 标记，新添加到暂存区中的文件前面有 "),a("code",[s._v("A")]),s._v(" 标记，修改过的文件前面有 "),a("code",[s._v("M")]),s._v(" 标记。输出中有两栏，左栏指明了暂存区的状态，右栏指明了工作区的状态。例如，上面的状态报告显示: "),a("code",[s._v("README")]),s._v(" 文件在工作区已修改但尚未暂存，而 "),a("code",[s._v("lib/simplegit.rb")]),s._v(" 文件已修改且已暂存。"),a("code",[s._v("Rakefile")]),s._v(" 文件已修改，暂存后又作了修改，因此该文件的修改中既有已暂存的部分，又有未暂存的部分。")])]),s._v(" "),a("p",[s._v("Git 现在只告诉我们 readme.txt 被修改了，我们用 "),a("code",[s._v("git diff")]),s._v(" 这个命令能看看具体修改了什么内容:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" readme.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --git a/readme.txt b/readme.txt\nindex 46d49bf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("9247db6 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v("\n--- a/readme.txt\n+++ b/readme.txt\n@@ -1,2 +1,2 @@\n-Git is a version control system.\n+Git is a distributed version control system.\n Git is "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" software.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("code",[s._v("git diff")]),s._v(" 顾名思义就是查看 difference，显示的格式正是 Unix 通用的 diff 格式，可以从上面的命令输出看到，我们在第一行添加了一个 distributed 单词。")]),s._v(" "),a("p",[s._v("知道了对 readme.txt 作了什么修改后，再把它提交到仓库就放心多了，提交修改和提交新文件是一样的两步，第一步是 "),a("code",[s._v("git add")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" readme.txt\n--no output --\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("同样没有任何输出。在执行第二步 "),a("code",[s._v("git commit")]),s._v(" 之前，我们再运行 "),a("code",[s._v("git status")]),s._v(" 看看当前仓库的状态:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch master\nChanges to be committed:\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git reset HEAD <file>..."')]),s._v(" to unstage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    modified:   readme.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("code",[s._v("git status")]),s._v(" 告诉我们，将要被提交的修改包括 readme.txt，下一步，就可以放心地提交了:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add distributed"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master e475afc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" distributed\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" deletion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("提交后，我们再用 "),a("code",[s._v("git status")]),s._v(" 命令看看仓库的当前状态:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch master\nnothing to commit, working tree clean\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("Git 告诉我们当前没有需要提交的修改，而且，工作目录是干净(working tree clean)的。")]),s._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("要随时掌握工作区的状态，使用 "),a("code",[s._v("git status")]),s._v(" 命令。")])]),s._v(" "),a("li",[a("p",[s._v("如果 "),a("code",[s._v("git status")]),s._v(" 告诉您有文件被修改过，用 "),a("code",[s._v("git diff")]),s._v(" 可以查看修改内容。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);