import { combineReducers } from "redux"
import topPlanner from "./top_planners_reducer";
import topComment from './comments_reducer'

const rootReducer = combineReducers({
    topComment,
    topPlanner
})

export default rootReducer;