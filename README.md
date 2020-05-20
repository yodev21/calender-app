# カレンダーの環境構築

## セットアップ

docker をインストールしたのちに、

```shell
$ make
```

これでもろもろインストールやビルドが終わります。`make`コマンドがない場合は、

```shell
$ npm --prefix ./front install ./front
$ npm --cwd ./front run build
$ npm --prefix ./server install ./server
$ cp ./server/env/env-local ./server/.env
```

の 4 つのコマンドを実行してください。

## サーバーの起動と停止

```shell
$ docker-compose up -d
```

を実行すると[localhost:8080]()にサーバーが立ち上がります。最初はいろいろインストールするので時間がかかると思います。

サーバーを止めたいときは、

```shell
$ docker-compose down
```

と実行すれば ok です。

API ドキュメントは[こちら](./server/README.md)

## フロントの開発をするとき

フロントは`webpack`でビルドしてやる必要があります。

```shell
$ cd front
$ npm run watch
```

とすると、ファイルの変更を検知して自動で差分のビルドが走るようになります。自動でビルドされたものはすぐに docker 内の nginx が配信してくれるので、変更のたびに何かコマンドを打つ必要はありません。


# Reduxの登場人物

## action type
reducerやmiddlwareがどの処理を行うかを判断するために行われます。
直接値を変更できないのでこのような方法が取られます。

## action
どんな処理をするのか（= action type）と「それに必要な引数(=payload)」が入ったオブジェクトを返す関数です。
view側からこのactionをdispatch(= reduxに通知)することでreduxのフローが実行されるという仕組みです。

## reducer
payloadと直前のstateを受け取って次のstateを返す関数です。
reduxにおける関数はreducer介さないと更新できない仕組みになっています。

## middleware
基本的に非同期処理を行うところです。レづx自体には非同期を処理する機能は備わっていないので別ライブラリを使うのが一般的です。

middlewareの関数はその内部で他のdispatchを行うことができます。

## store
reduxの状態そのものはstoreと呼ばれるオブジェクトです。
この中にかくreducerに対応したstateがネストして入っています。
reducerを介してしか変更できないimmutableなグローバル変数です。

## Provider
reactがどのstoreを使うのか定義するためのものです。

## connect
各コンポーネント単位でどのstateを参照してどのdispathを実行するのかを定義するための関数です。
高階関数になっていて、適用したコンポーネントとどのデータをpropsとして渡すのかを定義した関数を引数にとります。

