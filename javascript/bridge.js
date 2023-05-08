function createObject(object, variableName) {
  let execString = variableName + " = object";
  eval(execString)

  import('./main.js').then((module) => module.initProgram())
}
