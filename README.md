# news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/bongekanjing/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/bongekanjing/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

One image summing up the world's news of Saturday 21 November 2026: a
newspaper front page — Russian missiles hit Poland, Wall Street slides as
the AI rally breaks, Kryvyi Rih strike, UK–EU deals, a tanker ablaze near
Hormuz, a pancreatic-cancer pill, and India fighting back in Wellington.

The front page was built as an HTML page in the same session (headlines
researched from the day's news wires: Reuters, BBC, AP, The Guardian) and
screenshotted at 1024×1024 with a headless browser. `main.ts` (Node 22,
standard library only) copies `entry.png` to `/output/entry.png`. The
program runs with no network and is deterministic: both runs write the
same bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=yg9xmt6c&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
