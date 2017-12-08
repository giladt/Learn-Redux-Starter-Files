// a reducer takes in two things:

// 1. copy of the current state
// 2. the action (info about what happaned)

function posts(state=[], action) {
  // switch(action.type){
  //   case 'INCREMENT_LIKES':
  //     //state.posts.
  //     break;
  //   default:
  // }
    console.log(state, action);
  return state;
}

export default posts;