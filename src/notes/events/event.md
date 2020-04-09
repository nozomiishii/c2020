---
title: 'Events'
---

addEventListenerがあるのに
なぜonClick()があるのか

いや、正確には
なぜonClick()があるのに
addEventListenerがあるのかが正しい。

もともと、ユーザーのイベントを処理するに当たって
htmlの中に書く

`<button id="btn-alert" onClick="alert()">Click!!<button>`

が始まる。
styleタグが嫌われているように
とても、htmlの中に書くonClickは美しくない。

それで、scriptタグの中に書くことに変更。
function alert(){
  console.log('aaa!');
}
const p = document.getElementById('btn-alert');
p.onclick = alert;

が、
しかし！！！
onClickはプロパティで一つの値しかとれない。
追加でonClickしたときは後に追加された方に上書きされてしまう。

そこで出たのが
addEventListener


資料

JSのaddEventListenerって何さ。onclickで良くね？
https://hirokonakahara.com/blog/?p=98

JavaScriptイベントハンドラ／イベントリスナの違い
https://yokonoji.work/043-javascript-event

Introduction to events - Learn web development | MDN
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

三章第一回　イベントプロパティ — JavaScript初級者から中級者になろう — uhyohyo.net
https://uhyohyo.net/javascript/3_1.html
