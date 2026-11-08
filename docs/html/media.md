---
title: HTML Audio and Video
sidebar_position: 23
---

# HTML Audio and Video

## Video

```html
<video width="400" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

## Audio

```html
<audio controls>
  <source src="sound.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```

## Useful attributes

| Attribute | Purpose |
| --- | --- |
| `controls` | Shows play, pause and volume buttons. |
| `autoplay` | Starts playing automatically (often blocked by browsers). |
| `loop` | Repeats the media. |
| `muted` | Starts with the sound off. |
| `poster` | An image shown before the video plays (video only). |

## Supported formats

- Video: MP4, WebM, Ogg
- Audio: MP3, WAV, Ogg
