const defaultSuccessMessage = `
---------------------------------------
> Your files were successfully created
---------------------------------------`

const defaultErrorMessage = (error: Error) => `
Ops! Some error ocurred during the creation of your files...

Send the error below to the responsible dev:

${error}
`

const fileAlreadyExistsMessage =
  "A folder we are trying to create already exists, and it's not empty!"

const noPathMessage = `You must specify a path!

To know more about the "new" command, type: "econverse new -h"`

export {
  defaultSuccessMessage,
  fileAlreadyExistsMessage,
  noPathMessage,
  defaultErrorMessage,
}
