__devMode__&& console.log('src/helpers/helpers')

export const deserialize= (serialized)=>
{
  return eval('(' + serialized + ')');
}
