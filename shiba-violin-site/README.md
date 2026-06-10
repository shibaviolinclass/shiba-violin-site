# 柴ヴァイオリン教室 ホームページ

GitHub Pagesで公開できる、シンプルな静的サイトです。

## 公開方法

1. このフォルダの内容をGitHubリポジトリにアップロードします。
2. GitHubのリポジトリ画面で `Settings` を開きます。
3. `Pages` で公開元を `Deploy from a branch` にします。
4. ブランチを `main`、フォルダを `/ (root)` にして保存します。
5. 数分後に表示されるURLで公開されます。

## メールアドレスの変更

`index.html` 内の `example@example.com` を実際のメールアドレスに置き換えてください。

検索すると、問い合わせボタン、問い合わせ本文、表示用メールアドレスの場所が見つかります。

## 公開URLの変更

公開URLが決まったら、`index.html` 内の `https://example.com/` を実際のURLに置き換えてください。SEO用の `canonical` とSNS共有用の `og:url` に使っています。

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

## 料金の変更

`index.html` の「月謝・レッスン時間」部分を編集してください。現在は旧ホームページの「月4回 初級 15000円～」を参考情報として入れています。
