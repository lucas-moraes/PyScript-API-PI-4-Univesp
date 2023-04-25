function createObject(object, variableName) {
    let execString = variableName + " = object"
    console.log("Running '" + execString + "'");
    eval(execString)
  }