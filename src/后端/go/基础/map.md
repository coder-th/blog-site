---
title: map
editLink: false
tag: ["go"]
---

## 定义

map是一种无序的基于key-value的数据结构，Go语言中的map是**引用类型**，**必须初始化才能使用**。也就是要通过`make`分配了内存才能使用。

语法定义如下

```go
map[KeyType]ValueType
/**
 KeyType:表示键的类型。
 ValueType:表示键对应的值的类型。
*/
```

`map`类型定义的变量默认是`nil`，不具有内存，无法存储数据，这也就是为什么需要`make`之后才能使用的原因

## 使用

`map`的数据是成对出现的，而且只能存储相同类型的值。

```go
func initMap() {
	sourceMap := make(map[string]int, 2)
	sourceMap["age"] = 18
	fmt.Println(sourceMap["age"])           //18
	fmt.Printf("type of a:%T\n", sourceMap) // type of a:map[string]int
}
```

`map`当然也支持在定义的时候就填充元素，例如

```go
func fillMapWhenInit() {
	userInfo := map[string]string{
		"name": "tianheng",
		"age":  "18",
	}
	fmt.Printf("type of a:%T\nvalue=> %#v\n", userInfo, userInfo)
	//  type of a:map[string]string
	//value=> map[string]string{"age":"18", "name":"tianheng"}
}
```

## `map`与切片

### 元素类型是`map`的切片

```go
func main() {
    var mapSlice = make([]map[string]string, 3)
    for index, value := range mapSlice {
        fmt.Printf("index:%d value:%v\n", index, value)
    }
    fmt.Println("after init")
    // 对切片中的map元素进行初始化
    mapSlice[0] = make(map[string]string, 10)
    mapSlice[0]["name"] = "王五"
    mapSlice[0]["password"] = "123456"
    mapSlice[0]["address"] = "红旗大街"
    for index, value := range mapSlice {
        fmt.Printf("index:%d value:%v\n", index, value)
    }
}
```

### 值类型为切片的`map`

```go
func main() {
    var sliceMap = make(map[string][]string, 3)
    fmt.Println(sliceMap)
    fmt.Println("after init")
    key := "中国"
    value, ok := sliceMap[key]
    if !ok {
        value = make([]string, 0, 2)
    }
    value = append(value, "北京", "上海")
    sliceMap[key] = value
    fmt.Println(sliceMap)
}
```

## `map`的常见操作

### 判断某个键是否存在

```go
func main() {
    scoreMap := make(map[string]int)
    scoreMap["张三"] = 90
    scoreMap["小明"] = 100
    // 如果key存在ok为true,v为对应的值；不存在ok为false,v为值类型的零值
    v, ok := scoreMap["张三"]
    if ok {
        fmt.Println(v)
    } else {
        fmt.Println("查无此人")
    }
}
```

### 遍历

`Go`语言中使用`for range`遍历`map`。

```go
func main() {
    scoreMap := make(map[string]int)
    scoreMap["张三"] = 90
    scoreMap["小明"] = 100
    scoreMap["王五"] = 60
    for k, v := range scoreMap {
        fmt.Println(k, v)
    }
}
```

### 删除

```go
func main(){
    scoreMap := make(map[string]int)
    scoreMap["张三"] = 90
    scoreMap["小明"] = 100
    scoreMap["王五"] = 60
    delete(scoreMap, "小明")//将小明:100从map中删除
    for k,v := range scoreMap{
        fmt.Println(k, v)
    }
}
```

### 按照指定顺序遍历map

```go
func main() {
    rand.Seed(time.Now().UnixNano()) //初始化随机数种子

    var scoreMap = make(map[string]int, 200)

    for i := 0; i < 100; i++ {
        key := fmt.Sprintf("stu%02d", i) //生成stu开头的字符串
        value := rand.Intn(100)          //生成0~99的随机整数
        scoreMap[key] = value
    }
    //取出map中的所有key存入切片keys
    var keys = make([]string, 0, 200)
    for key := range scoreMap {
        keys = append(keys, key)
    }
    //对切片进行排序
    sort.Strings(keys)
    //按照排序后的key遍历map
    for _, key := range keys {
        fmt.Println(key, scoreMap[key])
    }
}
```

