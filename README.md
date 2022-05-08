## 支持功能

- [x] 直播挂机获取小心心 （scf 和 docker 运行）
- [x] 直播间弹幕（每日首次获得 100 亲密度，自动点亮灰色勋章）
- [x] 直播赠送即将过期的礼物（为确保安全，只赠送辣条和小心心）
- [x] 多账号独立配置
- [ ] 支持 Docker 、腾讯 SCF 、阿里 FC、百度 CFC、华为 FG、青龙面板等方式运行，支持执行消息推送

## 使用方法

详细文档查看 [docs 目录](./docs)  
**若 Github 无法查看图片，请访问 [Gitee](https://gitee.com/catlair/BiliTools/tree/main/docs)**

使用必读：

- [Cookies/UA 获取方法](./docs/readme.md)
- [配置详情（必看）](./docs/configuration.md)
- [参考配置](./config/config.example.json)

运行方法：

- [腾讯 SCF（即将无免费额度）](./docs/手动部署到SCF.md)：想白嫖？没门。
- [阿里 FC](./docs/手动部署到FC.md)：除了文档奇烂，其它都挺好，暂时有免费的额度。
- [百度 CFC](./docs/手动部署到CFC.md)：功能欠缺，编辑器只能看到入口文件，但是每日任务足够了。
- [华为 FG](./docs/手动部署到FG.md)：网页交互极差，错误提示不明显甚至没有，没有 loading 效果，偶尔发生无法跳转。
- [华为 AGC-FC](./docs/手动部署到AGC-FC.md)：功能欠缺，上传代码无法看到入口文件。页面交互体验比自家云函数好。
- ~~[Action 部署到 SCF](./docs/Action部署到SCF.md)~~（使用量一直为 0，再加上收费的原因，取消该方法）
- [使用 Docker 运行](./docs/使用Docker运行.md)
- [本地运行](./docs/本地运行.md)
- [gzip 在线压缩](https://www.baidufe.com/fehelper/en-decode/index.html)
- [青龙面板](./docs/%E9%9D%92%E9%BE%99%E9%9D%A2%E6%9D%BF.md): 自行添加 Node 依赖 `pako axios qs`, 自行创建 `cat_bili_ql.js` 文件（脚本管理中）。参考 [#46](https://github.com/catlair/BiliTools/issues/49)。
- [已编译文件下载](./docs/%E7%BC%96%E8%AF%91%E6%96%87%E4%BB%B6%E4%BB%8B%E7%BB%8D.md)

### Docker 镜像

- `catlair/bilitools` 用于直接运行

## 责任声明

1. 不会以任何方式收集用户 mid、Cookies、关注列表、收藏记录等信息。
2. 仓库中内置的任何 B 站相关用户信息，都不会影响你的投币、充电、打赏，权利掌握在使用者手中。
3. **不会强制或者引导你去关注或为某个UP投币充电**
