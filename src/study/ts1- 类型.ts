// 可以函数参数声明类型
function hello (name: string){
  console.log(name)
}
hello('123')

// 直接通过vscode中的code runner运行可能会报错乱码
// 可以 npm i -g typescript ts-node  参考 https://github.com/formulahendry/vscode-code-runner/issues/632


// 也可以自定义接口来规范入参或者控制类型
interface Person {
  name:string;
  age:number
}

function sayHello (person:Person){
  console.log(person.name + person.age) 
}
sayHello({name:'小明',age:9})

// implements 这个语句暂时不知道含义