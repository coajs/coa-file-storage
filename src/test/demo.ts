// @ts-nocheck
import { CoaFileStorage } from '..'

// 创建一个新的示例
const fileStorage = new CoaFileStorage('/path/file-storage/data')

// 获取一个未设置的值，此时返回undefined
fileStorage.get('key1') // undefined

// 设置储存信息
fileStorage.set('key1', { info: 'this is value' }, 60 * 1000)

// 获取设置的值，能得到正确的存储数据
fileStorage.get('key1') // { info: 'this is value' }

// 超过60秒后，数据过期，返回undefined
fileStorage.get('key1') // undefined


