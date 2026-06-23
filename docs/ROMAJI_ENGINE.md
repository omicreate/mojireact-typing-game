# ローマ字入力エンジン

`app/romaji-engine.js` は、今後のタイピングゲームでも流用するための入力判定エンジンです。

ゲームのコンセプトにはせず、どのタイピングゲームでも自然に期待される基盤機能として扱います。

## 役割

- お題の読みから、受け付けるローマ字入力候補を生成する。
- 複数の一般的な入力方法を同じ正解として扱う。
- ゲーム本体から独立させ、別プロジェクトでも使い回しやすくする。

## 使い方

HTMLではゲーム本体より前に読み込みます。

```html
<script src="romaji-engine.js"></script>
<script src="script.js"></script>
```

JavaScriptでは `RomajiEngine.buildRoutes(reading)` を使います。

```js
const routes = RomajiEngine.buildRoutes("しゃしんさぎ");
// sha..., sya... などを含む候補配列
```

## 主な対応例

| 読み | 入力例 |
| --- | --- |
| し | `shi`, `si` |
| ち | `chi`, `ti` |
| つ | `tsu`, `tu` |
| ふ | `fu`, `hu` |
| しゃ | `sha`, `sya` |
| ちゃ | `cha`, `tya`, `cya` |
| じゃ | `ja`, `jya`, `zya` |
| じゅ | `ju`, `jyu`, `zyu` |
| ん | `n`, `nn`, `n'`, `xn` |
| っ | 次の子音を重ねる |
| っ | `xtu`, `ltu`, `xtsu` |
| ぁぃぅぇぉ | `xa`, `xi`, `xu`, `xe`, `xo`, `la`, `li`, `lu`, `le`, `lo` |
| ゃゅょ | `xya`, `xyu`, `xyo`, `lya`, `lyu`, `lyo` |

## 追加方針

- ユーザーから「この入力も通したい」という声が出たら `kanaRoutes` に追加する。
- 判定仕様はこのファイルに閉じ込め、ゲーム側では入力候補を受け取るだけにする。
- 外部APIや辞書サービスは使わない。
- 新しいタイピングゲームを作る場合は、このファイルをコピーし、ゲーム側は `buildRoutes(reading)` の戻り値だけを見る。
