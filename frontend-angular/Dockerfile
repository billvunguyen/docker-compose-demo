# ############################################################
# # Dockerfile to build front-end angular container image
# ############################################################

# Stage 1: Build Angular application
FROM node:22 as build-stage

ARG WORK_DIR=/frontend-angular
ENV PATH ${WORK_DIR}/node_modules/.bin:$PATH

RUN mkdir ${WORK_DIR}
WORKDIR ${WORK_DIR}

COPY package.json ${WORK_DIR}
COPY package-lock.json ${WORK_DIR}

RUN npm install -g npm
RUN npm install -g @angular/cli@14.2.4
RUN npm install

COPY . ${WORK_DIR}

RUN npm run build --prod

# Stage 2: Serve the built application with NGINX
FROM nginx:stable-alpine as production-stage

ARG WORK_DIR=/frontend-angular

COPY --from=build-stage ${WORK_DIR}/dist/${WORK_DIR} /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]