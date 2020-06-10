<script>
import Cookies from 'js-cookie'
import { setToken } from '@/utils/auth'
import { mapMutations } from 'vuex'

export default {
  mounted() {
    const token = Cookies.get('access_token')

    setToken(token)
    this.SET_TOKEN('SET_TOKEN', token)

    this.$router.push({ path: this.$route.query.redirect || '/' })
  },
  methods: {
    ...mapMutations('user', ['SET_TOKEN'])
  }
}
</script>
