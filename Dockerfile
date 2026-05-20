# Static container for The Maxx Report. Used by Fly.io and any other
# container-based static host. The cloud build does not run the local
# importer; it only serves what is committed under `data/`.

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY index.html /usr/share/nginx/html/index.html
COPY app.js /usr/share/nginx/html/app.js
COPY styles.css /usr/share/nginx/html/styles.css
COPY data /usr/share/nginx/html/data

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
