//Better to use unknown then any type
let generateError = (errMessage: string, code: number) => {
  throw {
    message: errMessage,
    errorCode: code,
  };
};

//never is returned
//THis code crashes the code so never returns anything
//if you do console.log it shows nothing
generateError("An error ocuured", 100);
