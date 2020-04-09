const path = require('path'); // path is node.js module https://nodejs.org/api/path.html
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot })

// describe ... テストコードの書き出し
describe('TODOアプリ', () => {
  // beforeEach ... 各テストごと（it or test 実行時）に繰り返し実行したい処理を記述（類：afterEach）
  beforeEach(async () => {
    // path.resolve() ... 絶対パスに変換
    // __dirname ... 実行中のソースコードが格納されているディレクトリパス
    await page.goto('file://' + path.resolve(__dirname, '../index.html'));
  });

  it('初期表示', async () => {
    expect(await page.screenshot()).toMatchImageSnapshot();
  })

  it('タスクの追加', async () => {
    await page.click('#addTodo');
    await page.click('#addTodo');
    expect(await page.screenshot()).toMatchImageSnapshot();
  })

  it('タスクの入力', async () => {
    await page.click('#addTodo');
    await page.click('#addTodo');
    await page.type('.todo:nth-child(1) input', 'サンプルタスク1');
    await page.type('.todo:nth-child(2) input', 'サンプルタスク2');
    expect(await page.screenshot()).toMatchImageSnapshot();
  })

  it('タスクの削除', async() => {
    await page.click('#addTodo');
    await page.click('#addTodo');
    await page.type('.todo:nth-child(1) input', 'サンプルタスク1');
    await page.type('.todo:nth-child(2) input', 'サンプルタスク2');
    await page.click('.todo:nth-child(1) .delete');
    await page.click('.todo:nth-child(1) .delete');
    expect(await page.screenshot()).toMatchImageSnapshot();
  })
})