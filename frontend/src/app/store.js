
import { CryptoApi } from '../services/CryptoApi'

import {configureStore} from '@reduxjs/toolkit'

export default configureStore ({
  reducer:{
    [CryptoApi.reducerPath]: CryptoApi.reducer
  }, 
})