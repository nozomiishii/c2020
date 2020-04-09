---
title: "Class - polymorphism"
---

ポリモーフィズムとは個性

class ヒトカゲ extends ポケモン{
  たたかう（){
    return ひのこ();
  }
}

class ゼニガメ extends ポケモン{
  たたかう（){
    return みずでっぽう();
  }
}

class フシギダネ extends ポケモン{
  たたかう（){
    return つるのむち();
  }
}

const てもちのポケモン = ['ヒトカゲ', 'ゼニガメ', 'フシギダネ'];

てもちのポケモン.forEach(ポケモン　=> ポケモン.たたかう());

戦い方は人それぞれ

資料
https://jpazamu.com/object-polymorphism/
