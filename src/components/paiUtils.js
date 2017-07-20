function shuffle () {
  var mahjongs = []

  // 筒 (0 ~ 8 表示筒子
  var index = 0
  for (var i = 0; i < 9; ++i) {
    for (var c = 0; c < 4; ++c) {
      mahjongs[index] = i
      index++
    }
  }

  // 条 9 ~ 17表示条子
  for (i = 9; i < 18; ++i) {
    for (c = 0; c < 4; ++c) {
      mahjongs[index] = i
      index++
    }
  }

  // 万
  // 条 18 ~ 26表示万
  for (i = 18; i < 27; ++i) {
    for (c = 0; c < 4; ++c) {
      mahjongs[index] = i
      index++
    }
  }

  // 27 中
  // 28 发
  // 29 白板

  // 30 东
  // 31 西
  // 32 南
  // 33 北
  for (i = 27; i < 34; ++i) {
    for (c = 0; c < 4; ++c) {
      mahjongs[index] = i
      index++
    }
  }

  // 34 春
  // 35 夏
  // 36 秋
  // 37 冬
  // 38 梅花
  // 39 兰花
  // 40 竹子
  // 41 菊花
  for (i = 34; i < 42; ++i) {
    mahjongs[index] = i
    index++
  }

  return mahjongs
}

/**
 *
 * 根据ID获取牌的名称
 *
 * @param {any} id
 * @returns
 */
function getType (id) {
  const typeList = [
    '1筒', '2筒', '3筒', '4筒', '5筒', '6筒', '7筒', '8筒', '9筒',
    '1条', '2条', '3条', '4条', '5条', '6条', '7条', '8条', '9条',
    '1万', '2万', '3万', '4万', '5万', '6万', '7万', '8万', '9万',
    '中', '发', '白',
    '东', '西', '南', '北',
    '春', '夏', '秋', '冬',
    '梅', '兰', '竹', '菊'
  ]

  return typeList[id]
}

export default {
  shuffle,
  getType
}
