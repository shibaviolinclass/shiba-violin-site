# 柴ヴァイオリン教室 ホームページ 管理・更新ガイド

GitHub Pagesで公開できる、シンプルな静的サイトです。HTML/CSS/JavaScriptだけで構成しているため、管理画面やビルド作業は不要です。

## ファイル構成

```text
./
├── index.html              # ページ本文・SEO設定・問い合わせ先
├── assets/css/styles.css   # デザイン、レスポンシブ表示
├── assets/js/main.js       # メニュー開閉、フッター年表示など
└── assets/images/          # 写真・アイコン・SNS共有画像
```

## 公開方法

1. このリポジトリ直下の `index.html` と `assets/` をGitHubリポジトリにアップロードします。
2. GitHubのリポジトリ画面で `Settings` を開きます。
3. `Pages` で公開元を `Deploy from a branch` にします。
4. ブランチを `main`、フォルダを `/ (root)` にして保存します。
5. 数分後に表示されるURLで公開されます。

## 更新前の確認チェックリスト

- 変更前に `index.html` と画像ファイルのバックアップ、またはGitのコミットを残します。
- メールアドレス、料金、教室の場所、レッスン実施状況など、古くなりやすい情報を優先して確認します。
- 個人住所や生徒さんの写真など、公開範囲に注意が必要な情報が含まれていないか確認します。
- 更新後はパソコン幅とスマートフォン幅の両方で表示を確認します。

## よく更新する内容

### メールアドレスの変更

`index.html` 内の `example@example.com` を実際のメールアドレスに置き換えてください。

検索すると、問い合わせボタン、問い合わせ本文、表示用メールアドレスの場所が見つかります。

### 公開URLの変更

公開URLは `https://shibaviolinclass.github.io/shiba-violin-site/` に設定済みです。変更する場合は、`index.html` 内のURLを実際の公開URLに置き換えてください。SEO用の `canonical` とSNS共有用の `og:url` に使っています。

### 料金の変更

`index.html` の「月謝・レッスン時間」部分を編集してください。現在は旧ホームページの「月4回 初級 15000円～」を参考情報として入れています。

### 教室・レッスン内容の変更

`index.html` の各セクションを編集してください。

- `id="about"`: 教室について
- `id="features"`: 教室の特徴
- `id="lessons"`: レッスン案内、料金
- `id="locations"`: 教室案内
- `id="gallery"`: 教室の様子
- `id="video"`: 動画
- `id="contact"`: お問い合わせ

## 画像の差し替え

画像は `assets/images` にまとめています。

同じファイル名で差し替える場合は、HTMLを変更せずに画像ファイルだけを置き換えられます。別のファイル名にする場合は、`index.html` 内の `src="assets/images/..."` を変更してください。

主な画像:

- `hero-lesson-placeholder.svg`: ファーストビュー
- `lesson-room-placeholder.svg`: レッスン室
- `recital-placeholder.svg`: 発表会
- `grand-piano-placeholder.svg`: グランドピアノ
- `violin-placeholder.svg`: ヴァイオリン
- `ogp-placeholder.svg`: SNS共有用画像

画像を差し替えるときは、表示速度のために横幅2000px以下、ファイルサイズ1MB以下を目安にしてください。生徒さんが写る写真を使う場合は、事前に掲載許可を確認してください。

## 動画の埋め込み

`index.html` の `id="video"` セクションにある `video-placeholder` の部分を、YouTubeの埋め込みコードに置き換えてください。

例:

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/動画ID"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>
```

## 更新後の確認方法

### 自分のパソコンで確認する場合

ローカルで表示を確認する場合は、リポジトリ直下で次のコマンドを実行します。

```bash
python3 -m http.server 8000
```

同じパソコンのブラウザで `http://localhost:8000/` を開きます。`127.0.0.1` や `localhost` は「いま操作している自分のパソコン」を指すため、別の環境で起動したサーバーにはアクセスできません。

### Codex・Codespaces・クラウド環境で確認する場合

クラウド上でサーバーを起動した場合、手元のブラウザで `http://127.0.0.1:8000/` を開いても接続できません。利用している環境の「ポート転送」「Ports」「Preview」などから、ポート `8000` の公開URLを開いてください。

GitHub Pagesに公開済みの場合は、GitHubの `Settings` → `Pages` に表示される公開URLから確認できます。

今回の修正を確認する場合は、「教室案内」セクションまでスクロールし、西永福教室カードの見出し上に「メイン教室」ラベルが表示されていないことを確認してください。

表示できたら、次の点を確認してください。

- ページ上部のメニューが各セクションへ移動する
- スマートフォン幅でメニューが開閉する
- 問い合わせボタンからメール作成画面が開く
- 画像が欠けずに表示される
- フッターの年が現在年で表示される

## トラブル対応

- **変更が反映されない**: ブラウザの再読み込み、GitHub Pagesの反映待ち、アップロード先ブランチを確認してください。
- **画像が表示されない**: ファイル名の大文字・小文字、拡張子、`assets/images` への配置を確認してください。
- **レイアウトが崩れた**: 直前に編集したHTMLタグの閉じ忘れや、CSSの余分な記号を確認してください。
