<template>
  <div class="indexPage">
    <h3>牌场</h3>
    <span>筒</span>
    <el-button
      v-if="getMJType(pai) === 0"
      @click="select(pai)"
      v-for="pai in pais"
      size="mini">
      {{ getType(pai) }}
    </el-button>
    <br>
    <span>条</span>
    <el-button
      v-if="getMJType(pai) === 1"
      @click="select(pai)"
      v-for="pai in pais"
      size="mini">
      {{ getType(pai) }}
    </el-button>
    <br>
    <span>万</span>
    <el-button
      v-if="getMJType(pai) === 2"
      @click="select(pai)"
      v-for="pai in pais"
      size="mini">
      {{ getType(pai) }}
    </el-button>
    <br>
    <span>风牌</span>
    <el-button
      @click="select(pai)"
      v-if="pai <= 33 && pai > 29"
      v-for="pai in pais"
      size="mini">
      {{ getType(pai) }}
    </el-button>
    <br>

    <span>花牌</span>
    <el-button
      @click="select(pai)"
      v-if="pai > 33 || pai === 27 || pai === 28 || pai === 29"
      v-for="pai in pais"
      size="mini">
      {{ getType(pai) }}
    </el-button>

    <h3>手牌</h3>
    <el-radio class="radio" v-model="radio" label="0">玩家0</el-radio>
    <el-button
      v-for="pai in users[0]"
      type="primary"
      @click="remove(0, pai)"
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
    users () {
      const self = this
      let data = []

      for (let i = 0; i < 14; i++) {
        for (let j = 0; j < 4; j++) {
          if (self.users[j][i]) {
            data.push(self.users[j][i])
          }
        }
      }

      self.textarea = JSON.stringify(data.concat(self.pais))
    }
  },
  methods: {
    getType: paiUtils.getType,
    getMJType: paiUtils.getMJType,
    remove (user, pai) {
      const self = this
      self.pais.push(pai)
      self.users[user].splice(self.users[user].indexOf(pai), 1)
    },
    copy () {
      const self = this
      clipboard
        .copy(self.textarea)
        .then(() => {
          self.$message({
            message: '复制成功',
            type: 'success'
          })
        })
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
.el-button {
  margin-bottom: 3px;
}
</style>
