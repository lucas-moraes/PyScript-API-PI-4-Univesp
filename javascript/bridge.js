function createObject(object, variableName) {
  let execString = variableName + " = object";
  console.log("Running '" + execString + "'");
  eval(execString)

  import('./main.js').then((module) => module.initProgram())
}
