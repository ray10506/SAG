<template>
  <v-app-instance ref="instance" class-name="SYNO.SAG.Application.Instance" id="app">
    <v-app-window
      width="850"
      height="574"
      ref="appWindow"
      :resizable="false"
      syno-id="SYNO.SAG.Application.Window"
    >
      <div class="synologyapplicationgateway-app">
        <router-view ref="view" />
      </div>
    </v-app-window>
  </v-app-instance>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tabKey: 'first-page',
    }
  },
  computed: {},
  created() {},
  async mounted() {
    console.log(2);
  },
  methods: {
    pureMount(fragment, params) {
      console.log(22222);
      const mountEl = document.createElement('div')
      fragment.appendChild(mountEl)
      SYNO.SDS.Desktop.getElement().appendChild(fragment)
      this.$mount(mountEl)
      this.$refs.instance.open(params)
    },
  },
}
</script>

<style lang="scss" scoped>
.synologyapplicationgateway-app {
    height: 100%;
}
</style>