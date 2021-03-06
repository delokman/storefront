import { store } from '@ecomplus/client'
import ecomPassport from '@ecomplus/passport-client'
import EcOrderInfo from './../EcOrderInfo.vue'

export default {
  name: 'EcOrder',

  components: {
    EcOrderInfo
  },

  props: {
    order: {
      type: Object,
      required: true
    },
    skipDataLoad: {
      type: Boolean
    },
    accountOrdersUrl: {
      type: String,
      default: '/app/#/account/orders'
    },
    ecomPassport: {
      type: Object,
      default: () => ecomPassport
    }
  },

  data () {
    return {
      isReady: this.skipDataLoad,
      orderBody: {
        _id: '',
        ...this.order
      }
    }
  },

  computed: {
    localOrder: {
      get () {
        return this.orderBody
      },
      set (body) {
        this.orderBody = body
        this.$emit('update:order', body)
      }
    }
  },

  methods: {
    fetchOrder () {
      const url = `/orders/${this.orderBody._id}.json`
      const request = this.ecomPassport.checkLogin()
        ? this.ecomPassport.requestApi(url)
        : store({ url })
      request.then(({ data }) => {
        this.localOrder = data
        this.isReady = true
      })
    }
  },

  watch: {
    'order._id' (_id) {
      if (_id && _id !== this.orderBody._id) {
        this.orderBody = this.order
      }
    },

    'orderBody._id' (_id) {
      if (_id && !this.skipDataLoad) {
        this.fetchOrder()
      }
    }
  },

  created () {
    if (!this.skipDataLoad) {
      if (this.order._id) {
        this.fetchOrder()
      } else if (this.order.number) {
        this.ecomPassport.fetchOrdersList().then(orders => {
          this.localOrder = orders.find(({ number }) => number === this.order.number) || {}
        })
      } else {
        // TODO: alert invalid order body
      }
    }
  }
}
