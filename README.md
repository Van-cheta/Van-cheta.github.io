# Van-cheta.github.io

这是chentao fan的个人blog，记录有关学习，科研以及日常

## 网站框架

网站使用 Jekyll + GitHub Pages，采用白底、单栏、以文字为主的简洁布局。
目前只搭建结构，没有添加博客文章、个人介绍或示例内容。

| 文件或目录 | 用途 |
| --- | --- |
| `_config.yml` | 网站名称、作者、网址、语言、文章网址和默认设置 |
| `index.html` | 首页，自动按时间倒序展示文章；没有文章时显示空状态 |
| `archive.html` | 归档页，自动按年份整理文章 |
| `about.md` | 关于页面，预留给以后的个人介绍 |
| `_layouts/default.html` | 所有页面共用的外壳，包括网页信息、导航、正文位置和页脚 |
| `_layouts/page.html` | 关于、归档等普通页面的模板 |
| `_layouts/post.html` | 博客文章的模板，显示标题、日期、标签和正文 |
| `_includes/` | 可重复使用的小组件：导航、页脚和数学公式加载设置 |
| `_posts/` | 以后存放 Markdown 文章，现在为空 |
| `assets/css/style.css` | 控制颜色、字体、宽度、间距、代码高亮和手机排版 |
| `assets/images/` | 以后存放文章配图，现在为空 |
| `404.html` | 访问不存在的地址时展示的页面 |
| `Gemfile` | 以后需要本地运行 Jekyll 时使用的依赖清单 |
| `.gitignore` | 防止构建产物、缓存等临时文件被提交到 Git |

`_posts/` 和 `assets/images/` 中的 `.gitkeep` 只是让 Git 保留空文件夹，不会显示在网站中。

详细说明见 [网站使用说明](docs/网站使用说明.md)。
