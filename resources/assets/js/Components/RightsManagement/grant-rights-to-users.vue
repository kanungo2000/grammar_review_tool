<template>
  <div>
    <h3>Grant access</h3>
    <vue-multiselect v-model="selectedUsers" label="name"
                     placeholder="Type user nickname or email"
                     :options="users" :multiple="true" :searchable="true"
                     :loading="isLoading" :internal-search="false"
                     :clear-on-select="false" :close-on-select="false"
                     @search-change="searchUsers" class="users" track-by="id">
      <span
        slot="noResult">No users found. Consider changing the search query.</span>
    </vue-multiselect>
    <vue-multiselect v-model="rightLevel" :options="rightLevels"
                     :searchable="false" :allow-empty="false"
                     :show-labels="false" :show-pointer="false"
                     :placeholder="''" class="rightLevels"/>
    <button class="btn btn-primary" @click="grant">Grant</button>
  </div>
</template>

<script>
  import debounce from 'debounce'

  export default {
    props: {
      grammarId: {
        required: true,
      },
    },
    data: () => {
      return {
        rightLevels: ['view', 'comment'],
        rightLevel: 'view',
        users: [],
        selectedUsers: [],
        isLoading: false,
      }
    },
    methods: {
      grant() {
        if (this.selectedUsers.length === 0) {
          return
        }

        const users = []
        this.selectedUsers.map(user => {
          users.push(user.id)
        })

        $.post({
          url: `${Laravel.absPath}/api/grammars/${this.grammarId}/rights`,
          data: {
            users,
            view: this.rightLevel === 'view' ? 1 : 0,
            comment: this.rightLevel === 'comment' ? 1 : 0,
          },
        })
          .done(response => {
            this.selectedUsers = []

            const rights = response.data
            for (const right of rights) {
              right.user = right.user.data
            }

            this.$emit('granted', rights)
          })
      },
      searchUsers: debounce(function (query) {
        this.isLoading = true

        $.get({
          url: `${Laravel.absPath}/api/users/${this.grammarId}/find`,
          data: {query},
        })
          .done(response => {
            this.users = response.data
          })
          .always(() => {
            this.isLoading = false
          })
      }, 500),
    },
  }
</script>

<style lang="styl" rel="stylesheet/stylus" scoped>
  .rightLevels
    width 110px
    display inline-block

  .users
    width 65%
    display inline-block
</style>