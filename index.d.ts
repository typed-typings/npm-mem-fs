import File = require('vinyl')
declare namespace memFs {
  function create(): Store

  interface Store {
    get(file: string): File
    add(file: File): Store
    each(onEach: (file: File, index: number) => any): Store
    stream(): NodeJS.ReadWriteStream
  }
}

export = memFs;
