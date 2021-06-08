import { _ } from 'coa-helper'
import { mkdirSync, readFileSync, writeFileSync } from 'fs'

export class CoaFileStorage {
  private readonly dir: string
  private readonly store: { [key: string]: [number, any] } = {}

  constructor(dir: string) {
    this.dir = dir
    mkdirSync(dir, { recursive: true })
  }

  get(name: string) {
    name = _.snakeCase(name)
    if (!this.store[name]) this.store[name] = this.fileRead(name) || [0]
    const data = this.store[name]
    if (data[0] > -1 && data[0] < Date.now()) return undefined
    else return data[1]
  }

  set(name: string, value: any, ms: number = -1) {
    name = _.snakeCase(name)
    const expire = ms > 0 ? Date.now() + ms : -1
    this.store[name] = [expire, value]
    this.fileWrite(name, this.store[name])
  }

  private fileRead(name: string) {
    try {
      const string = readFileSync(`${this.dir}/${name}`).toString() || ''
      return JSON.parse(string)
    } catch (e) {
      return undefined
    }
  }

  private fileWrite(name: string, data: any) {
    const string = JSON.stringify(data)
    writeFileSync(`${this.dir}/${name}`, string)
  }
}
