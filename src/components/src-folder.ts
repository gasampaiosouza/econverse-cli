import * as fs from 'fs-extra'
import * as process from 'process'
import assetsFolder from './assets-folder'

const srcFolder = async (userPath: string, fileName: string, log: any) => {
  const userDirectory = userPath === '.' ? 'src' : userPath

  await fs.mkdir(userDirectory)
  process.chdir(userDirectory)

  if (userPath !== '.') {
    await fs.mkdir('src')
    process.chdir('src')
  }

  await fs.mkdir('assets')
  await fs.mkdir('html')

  return assetsFolder(fileName, log)
}

export default srcFolder
