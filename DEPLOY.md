# 公開手順

このホームページは静的サイトです。`index.html` と `assets` フォルダを含む、このフォルダの中身をそのままWebサーバーへ置けば公開できます。

## GitHub Pagesに反映する場合

現在の公開URL:

```text
https://tonpuku.github.io/mikihiro-fujii-homepage/
```

このMacでは、このリポジトリ専用のDeploy keyを使ってGitHubへpushできるように設定済みです。Codexで編集したあと、変更をcommitして次を実行するとGitHub Pagesへ反映されます。

```sh
git push origin main
```

GitHub Pagesの更新には通常数十秒から数分かかります。反映確認は次のようにできます。

```sh
curl -I https://tonpuku.github.io/mikihiro-fujii-homepage/
```

## 公開に必要なもの

- `index.html`
- `cv.html`
- `research.html`
- `paper.html`
- `lecture.html`
- `links.html`
- `assets/` フォルダ全体

## 大学サーバー・研究室サーバーへ置く場合

1. サーバーの公開用ディレクトリを確認する。例: `public_html`, `www`, `htdocs`
2. このフォルダの中身をすべてアップロードする。
3. ブラウザで公開URLを開き、トップページ・研究業績・論文詳細ページ・日本語/英語切替を確認する。

SFTPでアップロードする例:

```sh
rsync -av --delete \
  "/Users/mikihirofujii/Documents/New project/mikihirofujii-homepage/" \
  user@example.ac.jp:/path/to/public_html/
```

## zipで渡す場合

公開用zipは次の場所に作成済みです。

```sh
/Users/mikihirofujii/Documents/New project/mikihirofujii-homepage-publish.zip
```

このzipを展開し、中身を公開用ディレクトリにアップロードしてください。

## 注意

- `assets/vendor/katex` を含めてアップロードしてください。数式表示に必要です。
- `paper.html?id=...` の形式で論文詳細ページを表示するため、`paper.html` も必ずアップロードしてください。
- 中国からの閲覧を重視する場合は、GitHub Pagesなどの無料ホスティングより、大学サーバーや中国から確認済みの通常Webサーバーを優先するのが無難です。
