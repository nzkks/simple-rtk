const createSlice = require('@reduxjs/toolkit').createSlice;

const { cakeActions } = require('../cake/cakeSlice');

const initialState = {
  numberOfIceCreams: 20
};

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    ordered: state => {
      state.numberOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numberOfIceCreams += action.payload;
    }
  },
  // The object notation for `createSlice.extraReducers` has been removed
  // extraReducers: {
  //   ['cake/ordered']: state => {
  //     state.numberOfIceCreams--;
  //   }
  // }
  extraReducers: builder => {
    builder.addCase(cakeActions.ordered, state => {
      state.numberOfIceCreams--;
    });
  }
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
