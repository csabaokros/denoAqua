# syntax=docker/dockerfile:1
FROM denoland/deno:alpine-1.15.3
COPY ./src ./app
COPY ./.env ./app/
COPY ./.env.defaults ./app/
WORKDIR /app
CMD ["deno", "run", "--unstable", "--allow-net", "--allow-read", "--allow-env", "./main.ts"]