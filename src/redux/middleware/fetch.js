__devMode__&& console.log('src/redux/middleware/fetch')

export default store => next => action =>
{
  next(action)

  const state= store.getState()

  Object.keys(state.comps).forEach
  (
    key=>
    {
      const comp = state.comps[key]
      comp.show&& comp.pending&& store.dispatch(comp.fetch())
    }
  )
}
