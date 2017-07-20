<template>
  <div class="indexPage">
    <h3>牌场</h3>
    <el-button
      @click="select(pai)"
      v-for="pai in pais"
      type="primary"
      size="mini">
      {{ getType(pai) }}
    </el-button>

    <h3>手牌</h3>
    <el-radio class="radio" v-model="radio" label="0">玩家0</el-radio>
    <el-button
      v-for="pai in users[0]"
      type="primary"
      size="mini">
      {{ getType(pai) }}
    </el-button>
    <span>{{ users[0].length }}</span>
    <br>

    <el-radio class="radio" v-model="radio" label="1">玩家1</el-radio>
    <el-button
      v-for="pai in users[1]"
      type="primary"
      size="mini">
      {{ getType(pai) }}
    </el-button>
    <span>{{ users[1].length }}</span>
    <br>

    <el-radio class="radio" v-model="radio" label="2">玩家2</el-radio>
    <el-button
      v-for="pai in users[2]"
      type="primary"
      size="mini">
      {{ getType(pai) }}
    </el-button>
    <span>{{ users[2].length }}</span>
    <br>

    <el-radio class="radio" v-model="radio" label="3">玩家3</el-radio>
    <el-button
      v-for="pai in users[3]"
      type="primary"
      size="mini">
      {{ getType(pai) }}
    </el-button>
    <span>{{ users[3].length }}</span>
    <br>

    <h3>代码</h3>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textarea">
    </el-input>
    <el-button @click="copy">复制</el-button>
  </div>
</template>

<script>
import paiUtils from './paiUtils'
import clipboard from 'clipboard-js'

export default {
  name: 'indexPage',
  mounted () {
  },
  data () {
    return {
      radio: '0',
      users: [[], [], [], []],
      userSelected: 0,
      pais: paiUtils.shuffle(),
      textarea: ''
    }
  },
  watch: {
    pais () {
      this.textarea = JSON.stringify(this.users)
    }
  },
  methods: {
    getType: paiUtils.getType,
    copy () {
      clipboard.copy(this.textarea)
    },
    select (pai) {
      if (this.users[this.radio].length === 13) {
        return
      }

      this.users[this.radio].push(pai)
      this.pais.splice(this.pais.indexOf(pai), 1)
    }
  }
}
</script>

<style scoped>
</style>
