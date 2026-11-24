# x-post-promote

![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)
![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/bima77993-bit/x-post-promote/rank.svg)
![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/bima77993-bit/x-post-promote/reward.svg)

Entry for [Promote make.fun's make-your-own-bounty post on X](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) on make.fun.

The entry is a single post on X that quotes make.fun's make-your-own-bounty post, with a photo of its own attached and the play code in its text:

https://x.com/steve_austinnn/status/2125331712926441843

The post's address is handed to the grader in `POST.json`. Places go by the post's replies + reposts + quotes at the deadline.

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `POST.json` to `out/POST.json`.
