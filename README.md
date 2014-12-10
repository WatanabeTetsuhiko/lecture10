# lecture10

第10回のサンプルコードです。

## 初期設定

アプリ作成するため必要な最低限の作業は次のとおりです。

* node.js をインストールする
* gulp をインストールする
* npm を利用して、依存するライブラリーをインストールする

Mac OS 上で、node.js のインストール後に必要なコマンドを次に示します。

    % sudo npm install -g glup
    % cd レポジトリのディレクトリ
    % npm install

## タスク

このテンプレートに含まれるgulpのタスクを列挙します。

* start-server：サーバーの起動
* lint：JSファイルの文法チェック。対象となるファイルは app/js と server 以下の全JSファイル
* watch：app/js と server 以下の全JSファイルの変更を監視し、変更があれば文法チェックを行う

なおデフォルトではserverとwatchのタスクが起動します。デフォルトのタスクは、ターミナルより次のように引数なしでgulpコマンドを実行します。

    % gulp


## Intel's App Framework

このテンプレートはUIに[IntelのApp Framework](http://app-framework-software.intel.com/)を利用しています。

UIの各コンポーネントの利用方法は[Component Menu](http://app-framework-software.intel.com/components.php)を参照してください。

なおこのテンプレートでは次のコンポーネントを利用しています。

* Header
* Footer
* List (with Icons)
* Buttons
* Panel

## 画像について

app/imgに配置されている画像は[フォクすけのFirefox情報局](http://foxkeh.jp/)から取得し、一部加工しました。
これらは[Creative Commons 表示-非営利 2.1 日本](http://creativecommons.org/licenses/by-nc/2.1/jp/deed.ja)ライセンスのもとで自由に使っていただけます。

## jQuery

サーバとの通信には[jQuery](http://www.jquery.com/)を利用しています。
