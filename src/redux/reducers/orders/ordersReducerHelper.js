export const getAddedOrder = (action) => {
  let d = new Date();
  return {
    items: action.items, 
    addresses: action.addresses,
    date: `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`,
  };
} 