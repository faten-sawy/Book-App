const initialState ={
    favouritesList:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
       case 'ADD_TO_FAVOURITES':
         return {favouritesList:[...state.favouritesList,action.payload ]}
       case 'DELETE_FROM_FAVOURITES':
         return {favouritesList: state.favouritesList.filter((item)=>item.id!==action.payload.id)}
       default: return state
    }
 }
 export default reducer;