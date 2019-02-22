# 哈希表

在计算中，一个 **哈希表(hash table 或hash map)** 是一种实现 *关联数组(associative array)* 的抽象数据类型，该结构可以将 *键映射到值*。

哈希表使用 *哈希函数/散列函数* 来计算一个值在数组或桶(buckets)中或槽(slots)中对应的索引，可使用该索引找到所需的值。

## 基本操作

- hash 计算 hash 值
- set
- get
- delete
- has
- getKeys

## 伪代码

### 计算 hash

为简单起见，我们将只使用密钥中所有字符的字符代码**求和取余**计算散列值。但也可以使用更复杂的方法，如多项式字符串哈希来减少碰撞次数：

```text
hash = charCodeAt(0) * PRIME^(n-1) + charCodeAt(1) * PRIME^(n-2) + ... + charCodeAt(n-1)
```

其中 charCodeAt(i) 是键的第i个字符代码，n是键的长度，PRIME就是任何质数，比如31。

```text
Hash(key)
  Pre: 输入任意长度 key
  Post: 通过散列算法变换成固定长度的散列值输出（消息摘要）
  hash ← Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    );
  return hash % this.buckets.length;
end Hash
```

理想情况下，散列函数将为每个键分配给一个唯一的桶(bucket)，但是大多数哈希表设计采用不完美的散列函数，这可能会导致"哈希冲突(hash collisions)"，也就是散列函数为多个键(key)生成了相同的索引，这种碰撞必须以某种方式进行处理。

如果存在冲突则 `append` 处理，否则直接赋值

![Hash Table](https://upload.wikimedia.org/wikipedia/commons/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg)

通过单独的链接解决哈希冲突

![Hash Collision](https://upload.wikimedia.org/wikipedia/commons/d/d0/Hash_table_5_0_1_1_1_1_1_LL.svg)

## 参考

- [Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
- [YouTube](https://www.youtube.com/watch?v=shs0KM3wKv8&index=4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [LinkedHashMap、HashMap比较](https://www.jianshu.com/p/979bc680b79f)
