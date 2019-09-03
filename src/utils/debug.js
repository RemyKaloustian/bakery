 const debug = {
   log : (title, content) => {
    const DEBUG_MODE = true;
    if (DEBUG_MODE) {
      console.log(`%c ${title}`, 
        'color:#8e44ad; font-weight: bold; text-transform: uppercase;');
      console.log(content);
    }
  },
}

export default debug;

