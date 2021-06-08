# coa-file-storage

[![GitHub license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![npm version](https://img.shields.io/npm/v/coa-file-storage.svg?style=flat-square)](https://www.npmjs.org/package/coa-file-storage)
[![npm downloads](https://img.shields.io/npm/dm/coa-file-storage.svg?style=flat-square)](http://npm-stat.com/charts.html?package=coa-file-storage)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/coajs/coa-file-storage/pulls)

轻量的文件储存/缓存工具 for Node.js

可为轻量应用、演示应用或简单的静态应用等提供数据存储的能力，使用文件作为存储介质，零依赖，性能高，方便快捷。

## 特性

- **简单轻量** 不超过 100 行代码，不依赖于其他第三方库
- **自动缓存** 内置内存缓存，不需要频繁读写 IO，性能友好（请在单机应用下使用）
- **TypeScript** 全部使用 TypeScript 书写，类型约束、IDE 友好

## 快速开始

### 安装

```shell
yarn add coa-file-storage
```

### 快速开始

```typescript
import { CoaFileStorage } from 'coa-file-storage'

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
```
