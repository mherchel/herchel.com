---
title: Common uses for FFMPEG
date: "2019-05-13T00:00:00.000Z"
subtitle: "Convert and compress videos"
---

FFMPEG is a free open source command line tool used to convert any video type into any other video type! It's used by the likes of Youtube (who are major contributors), VLC, and many more.

## Installation
On MacOS

```
brew install ffmpeg
```

## Convert a weird file into a normal MP4

```
ffmpeg -i inputfile.mov  -movflags +faststart outputfile.mp4
```

## Convert an animated gif into an MP4

 We had to do this with the new launch of Lullabot.com

 ```
 ffmpeg -i input-file.gif -movflags +faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" output-file.mp4
 ```

 ## Compress a video file

```
ffmpeg -i input.mp4  -movflags +faststart -vcodec libx264  -crf 20 output.mp4
```

The `20` is the [constant rate factor](https://slhck.info/video/2017/02/24/crf-guide.html) and should be between `18` and `28`. The default is `23`. According to the previously linked article, a change of ±6 should result in about half/double the file size, although your results might vary.
