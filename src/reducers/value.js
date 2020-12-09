


export const value = (state = '0', action) => {

  switch (action.type) {
    case 'number':
      return state = action.payload;
    default:
      return state;
  }
}

export const extra = (state = [], action) => {

  if (action.type === 'ADD') {

    return state.concat(...state, ...action.payload)
  }

  if (action.type === 'CALCULATE') {

    return state;
  }

  return state;
}