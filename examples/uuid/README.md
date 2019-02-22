# UUID

UUID 就是 Universal Unique IDentifier 的缩写，它是一个128位，16字节的值，并确保在时间和空间上唯一。
它是把硬件地址、时间以及随机数结合在一起，它保证对在同一时空中的所有机器都是唯一的。

通常平台会提供生成UUID的API。UUID按照开放软件基金会 (OSF)制定的标准计算，用到了以太网卡地址、纳秒级时间、芯片ID码和许多可能的数字。由以下几部分的组合：当前日期和时间(UUID的第一个部分与时间有关，如果你在生成一个UUID之后，过几秒又生成一个UUID，则第一个部分不同，其余相同)，时钟序列，全局唯一的IEEE机器识别号（如果有网卡，从网卡获得，没有网卡以其他方式获得），UUID的唯一缺陷在于生成的结果串会比较长。关于UUID这个标准使用最普遍的是微软的GUID (Globals Unique Identifiers)。

GUID（Globals Unique Identifiers 全局统一标识符）是微软对UUID这个标准的实现。是指在一台机器上生成的数字，它保证对在同一时空中的所有机器都是唯一的。通常平台会提供生成GUID的API。生成算法很有意思，用到了以太网卡地址、纳秒级时间、芯片ID码和许多可能的数字。GUID的唯一缺陷在于生成的结果串会比较大。

一个GUID为一个128位的整数(16字节)，在使用唯一标识符的情况下，你可以在所有计算机和网络之间使用这一整数。GUID 的格式为“xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx”，其中每个 x 是 0-9 或 a-f 范围内的一个十六进制的字。例如：337c7f2b-7a34-4f50-9141-bab9e6478cc8 即为有效的 GUID 值。

世界上的任何两台计算机都不会生成重复的 GUID 值。GUID 主要用于在拥有多个节点、多台计算机的网络或系统中，分配必须具有唯一性的标识符。在 Windows 平台上，GUID 应用非常广泛：注册表、类及接口标识、数据库、甚至自动生成的机器名、目录名等。一个GUID可以在后台数据库中操作一个主键。

## 适用于分布式唯一标识码的生成算法有哪些？

- 利用数据库生成
- 利用Redis/MongoDB/zookeeper生成
- UUID
  - UUID有基于MAC地址的，加上时间和时钟序列的，也有基于伪随机数的，基于加密哈希的。
- Twitter的snowflake算法
  - Twitter开源，基于zk，41位时间戳（毫秒数）+10位机器的ID+12位毫秒内的流水号+1位符号位（永远是0）。
  - 优点：性能不错，单机内递增。
  - 缺点：依赖zk；依赖于机器时钟，分布式环境内可能会不是全局递增。
- 百度 UidGenerator
  - UidGenerator是百度开源的分布式ID生成器，基于于snowflake算法的实现，看起来感觉还行。不过，国内开源的项目维护性真是担忧。
- 美团 Leaf
  - Leaf 是美团开源的分布式ID生成器，能保证全局唯一性、趋势递增、单调递增、信息安全，里面也提到了几种分布式方案的对比，但也需要依赖关系数据库、Zookeeper等中间件。

参考资料：

- https://blog.csdn.net/forlong401/article/details/7580147
- https://blog.csdn.net/yuanlianming663/article/details/1842267
- https://www.cnblogs.com/pangguoming/p/7090906.html
- http://www.cnblogs.com/snandy/p/3261754.html
- https://m.zjurl.cn/answer/6640244087003808014/?iid=59688834959
- https://tech.meituan.com/2017/04/21/mt-leaf.html
