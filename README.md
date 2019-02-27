# vit-blog说明


### 目录结构

    |-- .gitignore
    |-- client                             客户端
    |   |-- .babelrc
    |   |-- .editorconfig
    |   |-- .eslintrc.js
    |   |-- .gitignore
    |   |-- .prettierrc
    |   |-- jest.config.js
    |   |-- nuxt.config.js
    |   |-- package-lock.json
    |   |-- package.json
    |   |-- README.md
    |   |-- .nuxt
    |   |   |-- App.js
    |   |   |-- axios.js
    |   |   |-- client.js
    |   |   |-- empty.js
    |   |   |-- index.js
    |   |   |-- loading.html
    |   |   |-- middleware.js
    |   |   |-- nuxt-icons.js
    |   |   |-- router.js
    |   |   |-- server.js
    |   |   |-- utils.js
    |   |   |-- components
    |   |   |   |-- no-ssr.js
    |   |   |   |-- nuxt-child.js
    |   |   |   |-- nuxt-error.vue
    |   |   |   |-- nuxt-link.client.js
    |   |   |   |-- nuxt-link.server.js
    |   |   |   |-- nuxt-loading.vue
    |   |   |   |-- nuxt.js
    |   |   |-- views
    |   |       |-- app.template.html
    |   |       |-- error.html
    |   |-- assets
    |   |   |-- README.md
    |   |-- components
    |   |   |-- README.md
    |   |-- dist
    |   |-- layouts
    |   |   |-- default.vue
    |   |   |-- README.md
    |   |-- middleware
    |   |   |-- README.md
    |   |-- pages
    |   |   |-- index.vue
    |   |   |-- README.md
    |   |   |-- register.vue
    |   |-- plugins
    |   |   |-- element-ui.js
    |   |   |-- README.md
    |   |-- server
    |   |   |-- index.js
    |   |-- static
    |   |   |-- favicon.ico
    |   |   |-- icon.png
    |   |   |-- README.md
    |   |   |-- sw.js
    |   |-- store
    |   |   |-- README.md
    |   |-- test
    |       |-- Logo.spec.js
    |-- server                            服务器端文件
        |-- app.js
        |-- package-lock.json
        |-- package.json
        |-- bin
        |   |-- www
        |-- config
        |   |-- index.js
        |-- controller
        |   |-- admin
        |   |   |-- article.js
        |   |   |-- index.js
        |   |   |-- user.js
        |   |-- client
        |       |-- article.js
        |       |-- index.js
        |-- model
        |   |-- article.js
        |   |-- user.js
        |-- mongodb
        |   |-- index.js
        |-- public
        |   |-- images
        |   |-- javascripts
        |   |-- stylesheets
        |       |-- style.css
        |-- routes
        |   |-- index.js
        |-- util
        |   |-- md5.js
        |   |-- result.js
        |-- views
            |-- error.ejs
            |-- index.ejs

### 技术栈

* vue
* nuxt
* element-ui
* koa2
* mongoose
* jwt

### 项目运行
```
# 克隆
git clone https://github.com/qw572386/vit-blog.git

# 安装依赖

## 客户端依赖
cd client && npm install

## 服务端依赖
cd server && npm install

# 启动运行（前提：启动mongodb服务）

## 启动客户端
cd client && npm run dev

## 启动服务端
cd server && npm run dev

```

