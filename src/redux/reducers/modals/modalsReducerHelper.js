
export const createModal = (action) => {
  return { 
    id: action.modalId, 
    isVisible: false, 
    validationObject: {
      action:()=>{
        console.log("Empty action object");
      }
    }
  }
}
