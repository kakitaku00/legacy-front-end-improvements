const path = require('path'); // path is node.js module https://nodejs.org/api/path.html

// describe ... テストコードの書き出し
describe('TODOアプリ', () => {
  // beforeEach ... 各テストごと（it or test 実行時）に繰り返し実行したい処理を記述（類：afterEach）
  beforeEach(async () => {
    // path.resolve() ... 絶対パスに変換
    // __dirname ... 実行中のソースコードが格納されているディレクトリパス
    await page.goto('file://' + path.resolve(__dirname, '../index.html'));
  });

  it('初期表示', async () => {
    // waitForSelector ... 指定したSelectorが描画されるまで待機
    // visible ... 要素がDOMに存在し、表示されるのを待つかどうか
    await page.waitForSelector('#todoList', {visible: false});
    await page.waitForSelector('#todoEmpty', {visible: true});
    // expect() ... テストの判定
    await expect(page).toMatchElement(
      '#todoEmpty', { text: 'タスクがありません' }
    );
  })
})