# モジリアクト

ブラウザだけで遊べる、静的なローマ字タイピングゲームです。
コンセプトは「打つたび、ことばの意味が文字に出る」。入力方式対応はゲームの土台として扱い、画面体験の主役は単語ごとに変わる文字エフェクトに寄せています。

## 公開URL

- 遊ぶ: https://omicreate.github.io/mojireact-typing-game/
- リポジトリ: https://github.com/omicreate/mojireact-typing-game

## 主な機能

- 意味と見た目が連動する100語のお題
- ローマ字入力、正解判定、ミス判定、結果表示
- 単語ごとの文字色、濃さ、揺れ、光り方、背景演出
- 結果画面の称号表示とSNS投稿用テキストのコピー
- 外部API、外部CDN、ビルド工程なし

## 使い方

1. 公開URLをブラウザで開きます。
2. 表示された単語をローマ字で入力します。
3. 終了後に結果と称号を確認します。
4. 必要に応じて結果テキストをコピーします。

## データ/プライバシー

- アカウント登録は不要です。
- 外部APIへの送信はありません。
- 入力内容と結果はゲーム中の表示・判定に使うだけで、開発者や外部サービスへ送信しません。
- 個人情報や実在の人物名を入力する用途は想定していません。

## 権利/ライセンス

- コード: [MIT License](LICENSE)
- ロゴ、画像、OGP、固有の作品素材、画面文言、単語リストは、別途明記がない限り omicreate に帰属します。
- MIT Licenseはコードの再利用を許可するものであり、作品素材の無断転載や再配布を許可するものではありません。

## 技術構成

- 実行方式: 静的HTML / CSS / JavaScript
- 公開方式: GitHub Pages
- 主なファイル: `index.html`, `app/script.js`, `app/romaji-engine.js`
- OGP画像: `app/assets/ogp.svg`
- ドキュメント: [docs/ROMAJI_ENGINE.md](docs/ROMAJI_ENGINE.md), [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md)

## 確認方法

```sh
node --check app/script.js
node --check app/romaji-engine.js
```

公開URLで開始、正解、ミス、終了、再挑戦、結果テキストのコピーを確認します。
