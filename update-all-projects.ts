import fs from 'fs'
import { globSync } from 'glob'
import { execSync } from 'child_process'
import path from 'path'

const version = JSON.parse(fs.readFileSync('./package.json', 'utf8')).version
const basePath = '/Users/bebejane/work/konstochteknik'
const packages = globSync(`${basePath}/**/package.json`, { maxDepth: 3, ignore: ['**/node_modules/**', '**/.git/**'] })

console.log(`running updates for version ${version}`)


const update = async () => {
  for (let i = 0; i < packages.length; i++) {
    const pckg = JSON.parse(fs.readFileSync(packages[i], 'utf8'))
    if (!pckg.dependencies || !Object.keys(pckg.dependencies).includes('dato-nextjs-utils'))
      continue;

    const name = path.dirname(packages[i]).split('/').pop()
    const cwd = path.dirname(packages[i])
    const currentVersion = JSON.parse(fs.readFileSync(`${cwd}/node_modules/dato-nextjs-utils/package.json`, 'utf8')).version
    const isClean = execSync(`git status --porcelain --untracked-files=no`, { cwd }).length === 0

    if (isClean && currentVersion === version) {
      console.log(`skipping: (already up to date) ${name} `)
      continue;
    }
    if (isClean) {
      console.log(`updating package: ${name}`)
      execSync(`pnpm un dato-nextjs-utils`, { cwd })
      execSync(`pnpm i github:bebejane/dato-nextjs-utils`, { cwd })
      console.log(`git push: ${name}`)
      execSync(`git add . && git commit -m \"update dato-nextjs-utils@${version}\" && git push`, { cwd })
    }
    else
      console.log(`skipping: (not clean) ${name} `)
  }
}

update()