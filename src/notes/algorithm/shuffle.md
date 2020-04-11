---
title: "Shuffle - Fisher-Yates"
---

```js
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
```

https://coderscat.com/how-to-randomize-shuffle-a-javascript-array
