import actionTypes from './actionTypes';

function skylabersReducer(skylabers = [], action) {
  let updatedSkylabers = [...skylabers];
  switch (action.type) {
    case actionTypes.LOAD_SKYLABERS:
      updatedSkylabers = [...action.skylabers];
      break;
    default:
      break;
  }
  return updatedSkylabers;
}

export default skylabersReducer;
