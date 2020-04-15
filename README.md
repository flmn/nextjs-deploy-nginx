# next-deploy-nginx

要点是，使用 Nginx 的缓存机制来提高静态文件的处理速度。

## Nginx 配置

Nginx 配置文件在 nginx/nextjs.conf，将 `your.domain.com` 改成你自己的域名。

配置中包含 HTTPS 和 HTTP/2，需要提前[申请证书](https://www.jitao.tech/blog/2020/01/devops-lets-encrypt/)，如不需要可去掉。

/etc/nginx/ssl/dhparam.pem 文件的生成方式

```bash
mkdir -p /etc/nginx/ssl
cd /etc/nginx/ssl
openssl dhparam -out dhparam.pem 2048
```

## Nexj.js 应用启动方式

```bash
npm run build
npm run start
```
