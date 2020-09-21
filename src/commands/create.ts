import { Command, flags } from '@oclif/command'
import otherFiles from '../components/create-command/other-files'
import srcFolder from '../components/create-command/src-folder'

import {
  defaultErrorMessage,
  defaultSuccessMessage,
  fileAlreadyExistsMessage,
  noPathMessage,
} from '../helpers/messages'

export default class Create extends Command {
  static description =
    'Create a new project boiler-plate with Econverse template. Type `econverse create -h` for more info.'

  static examples = [
    '$ econverse create my-cool-project',
    '$ econverse create my-cool-project --file-name project-general',

    '$ econverse create .',
    '$ econverse create . --file-name=test-file',

    '$ econverse create test -f test-name',
  ]

  static flags = {
    help: flags.boolean({ char: 'h' }),

    'file-name': flags.string({
      char: 'f', // shorter flag version
      description:
        'Change all of the default file names - e.g. main.scss -> skeleton-general.scss', // help description for flag
      multiple: false, // allow setting this flag multiple times
      default: 'main', // default value if flag not passed
    }),
  }

  static args = [{ name: 'path' }]

  async run() {
    const { flags, args } = this.parse(Create)

    if (flags.help) return this._help()
    if (!args.path) this.error(noPathMessage)

    try {
      // create src folder
      await srcFolder(args.path, flags['file-name'] || '', this)

      // create other files
      await otherFiles(args.path, flags['file-name'] || '', this)

      setTimeout(() => {
        this.log(defaultSuccessMessage)
      }, 1000)
    } catch (error) {
      if (error.toString().includes('file already exists')) {
        return this.error(fileAlreadyExistsMessage, {
          code: 'fae1',
          suggestions: ['Delete this repeated folder and try again'],
        })
      }

      this.error(defaultErrorMessage(error), {
        code: '1',
      })
    }
  }
}
