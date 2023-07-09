import {
    combineReducers,
    legacy_createStore
  } from "redux";
  import { repairListReducer } from "./repairListReducer"
import { repairFormReducer } from "./repairFormReducer"
import { checkEditReducer } from "./checkEditReducer"

  

  function configureStore() {
    return legacy_createStore(
      combineReducers({
        repairList: repairListReducer,
        repairForm: repairFormReducer,
        checkEdit: checkEditReducer,
      }),
      undefined,
    );
  }
  
export default configureStore