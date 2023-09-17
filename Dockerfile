FROM oven/bun

ADD . .
RUN bun install

CMD ["bun", "./index.ts"]
