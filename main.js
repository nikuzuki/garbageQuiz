enchant();

window.onload = function() {
  var core = new Game(320, 320); // 表示領域の大きさを設定
  core.fps = 24;                 // ゲームの進行スピードを設定
  core.onload = function() {     // ゲームの準備が整ったらメインの処理を実行します

    /*
     * タイトルシーンの関数
     */

    var TitleScene = function() {
      var scene = new Scene();                // 新しいシーンを作る
      var label = new Label('福井ゴミクイズ タッチでゲームシーンへ');   // 新しいラベル(文字)を作る

      // TODO: labelのタイトル文字は市町村ごとに変える

      scene.addChild(label);                  // シーンにラベルに追加

      scene.backgroundColor = 'rgba(255, 230, 0, 1)';      // シーンの背景色を設定
      scene.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
        //現在表示しているシーンをゲームシーンに置き換えます
        core.replaceScene(GameScene());
      });
      // この関数内で作ったシーンを呼び出し元に返します(return)
      return scene;
    };

	  /*
     * ゲームシーンの関数
     */

    var GameScene = function() {
      var scene = new Scene();                // 新しいシーンを作る
      var label = new Label('ゲームシーン(クイズ) タッチでゲームオーバーシーンを重ねる');        // 新しいラベル(文字)を作る
      scene.addChild(label);                  // シーンにラベルに追加
      scene.backgroundColor = 'rgba(255, 200, 0, 1)';      // シーンの背景色を設定

      // TODO: 背景は各市町村の観光写真(オープンデータ)

      // TODO: 最終問題が終わり次第終了orハート0で終了

      scene.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
        //現在表示しているシーンの上にゲームオーバーシーンを重ねて表示します
        core.pushScene(GameOverScene());
      });
      // この関数内で作ったシーンを呼び出し元に返します(return)
      return scene;
    };

    /*
     * ゲームオーバーシーンの関数
     */

    var GameOverScene = function() {
      var scene = new Scene();                // 新しいシーンを作る
      var label = new Label('ゲームオーバーシーン タッチでタイトルへ戻る');      // 新しいラベル(文字)を作る
      label.x = 0;                            // 横位置調整
      label.y = 20;                           // 縦位置調整
      scene.addChild(label);                  // シーンにラベルに追加
      scene.backgroundColor = 'rgba(0, 0, 255, 1)';      // シーンの背景色を設定
      scene.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
        //現在表示しているシーンを外し、直前のシーンを表示します
        // core.popScene();
        core.replaceScene(TitleScene());
      });
      // この関数内で作ったシーンを呼び出し元に返します(return)
      return scene;
    };
    // ゲームの_rootSceneをタイトルシーンに置き換えます
    core.replaceScene(TitleScene());

  }

  core.start(); // ゲームをスタートさせます
};
