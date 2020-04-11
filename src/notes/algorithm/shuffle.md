---
title: "Shuffle - Fisher-Yates"
---

```js
const shuffle = (data) => {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
};
```

---

References

How To Randomize (shuffle) A JavaScript Array? » Coder's Cat

https://coderscat.com/how-to-randomize-shuffle-a-javascript-array

JavaScript: 「フィッシャー–イェーツのシャッフル」を読んで関数にしてみた - Qiita
https://qiita.com/ttatsf/items/c2e07c471d06f0a2aee4
