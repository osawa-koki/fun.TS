# Fun.TS

TypeScriptで静的型付け言語の強みを活かした関数群。  
  
## 関数の説明

```js
// 引数2つが同値ないしは同じ参照先である場合に「true」を返します。
eq
// 「eq」関数の逆です。
ne
// 第一引数が第二引数よりも大きい場合に「true」を返します。
gt
// 第一引数が第二引数以上の場合に「true」を返します。
gtEq
// 第一引数が第二引数よりも小さい場合に「true」を返します。
lt
// 第一引数が第二引数以下の場合に「true」を返します。
ltEq

// 第一引数と第二引数の和を返します。
add
// 第一引数から第二引数を引いた値を返します。
reduce
// 第一引数と第二引数の積を返します。
times
// 第一引数を第二引数で割った値を返します。
divide
// 第一引数の第二引数乗を返します。
power

// 配列の先頭の要素を取得します。
fst
// 配列の二番目の要素を取得します。
snd
// 配列の最後の要素を取得します。
last

// 配列の中で最小の要素を返します。
min
// 配列の中で最大の要素を返します。
max

// 引数として受け取った真偽値の論理積を返します。
and
// 引数として受け取った真偽値の論理和を返します。
or
// 引数として受け取った真偽値の排他的論理和を返します。
xor
// 引数として受け取った真偽値を逆転させます。
not
// 引数として受け取った値が「true」っぽいかを返します。
truthy
// 引数として受け取った値が「false」っぽいかを返します。
falsy

// 関数を引数として受取り、引数に適用する関数を返します。
apply
// 自分自身を引数にとって適用する関数を返します。
rec

// 第二引数に指定した配列のうち、第一引数として受け取った関数の評価結果が「true」となる要素だけを抽出します。
// 第一引数の関数の引数には配列の各要素が渡されます。
filter
// 第二引数に指定した配列の各要素に、第一引数に渡した関数を実行した結果を取得します。
map
// 「map」関数の第一引数と第二引数の順番を入れ替えたものです。
looper
// 第一引数に渡した配列の要素に対して第二引数として渡した関数を適用した結果、「true」となる要素がひとつでもあれば「true」を返します。
any
// 第一引数に渡した配列の要素に対して第二引数として渡した関数を適用した結果、全ての要素の評価結果が「true」となれば「true」を返します。
all
// ★★★
countSatisfy
minFx
maxFx
reducer

getElm
mkElm
mkElmSVG
zFill
URLencodeAssoc
between
switcher

regex
mailCheck

regexGrouping

removeChildren

append
mkBr
appendText
push

doNtimes

random
round
round100

NxN
NxNfx

fromAtoB

flatter
mixupMesh

removeClassifiedItems

```

## 環境構築手順

```shell
npm install -y yarn

mkdir ★★★
cd ★★★

yarn init -y

npm install --save-dev typescript @types/node
npx tsc --init

npm install eslint --save-dev
npx eslint --init

# コンパイル
npx tsc

# 常時コンパイル
tsc --watch
```
