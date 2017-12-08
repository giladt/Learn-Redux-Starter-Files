// a reducer takes in two things:

// 1. copy of the current state
// 2. the action (info about what happaned)

function comments(state=[], action) {
  console.log(state, action);
  return state;
}

export default comments;