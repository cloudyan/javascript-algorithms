# UUID

UUID 就是 Universal Unique IDentifier 的缩写，它是一个128位，16字节的值，并确保在时间和空间上唯一。
它是把硬件地址、时间以及随机数结合在一起，它保证对在同一时空中的所有机器都是唯一的。

通常平台会提供生成UUID的API。UUID按照开放软件基金会 (OSF)制定的标准计算，用到了以太网卡地址、纳秒级时间、芯片ID码和许多可能的数字。由以下几部分的组合：当前日期和时间(UUID的第一个部分与时间有关，如果你在生成一个UUID之后，过几秒又生成一个UUID，则第一个部分不同，其余相同)，时钟序列，全局唯一的IEEE机器识别号（如果有网卡，从网卡获得，没有网卡以其他方式获得），UUID的唯一缺陷在于生成的结果串会比较长。关于UUID这个标准使用最普遍的是微软的GUID (Globals Unique Identifiers)。

GUID（Globals Unique Identifiers 全局统一标识符）是微软对UUID这个标准的实现。是指在一台机器上生成的数字，它保证对在同一时空中的所有机器都是唯一的。通常平台会提供生成GUID的API。生成算法很有意思，用到了以太网卡地址、纳秒级时间、芯片ID码和许多可能的数字。GUID的唯一缺陷在于生成的结果串会比较大。

一个GUID为一个128位的整数(16字节)，在使用唯一标识符的情况下，你可以在所有计算机和网络之间使用这一整数。GUID 的格式为“xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx”，其中每个 x 是 0-9 或 a-f 范围内的一个十六进制的字。例如：337c7f2b-7a34-4f50-9141-bab9e6478cc8 即为有效的 GUID 值。

世界上的任何两台计算机都不会生成重复的 GUID 值。GUID 主要用于在拥有多个节点、多台计算机的网络或系统中，分配必须具有唯一性的标识符。在 Windows 平台上，GUID 应用非常广泛：注册表、类及接口标识、数据库、甚至自动生成的机器名、目录名等。一个GUID可以在后台数据库中操作一个主键。

参考资料：

- https://blog.csdn.net/forlong401/article/details/7580147
- https://blog.csdn.net/yuanlianming663/article/details/1842267
- https://www.cnblogs.com/pangguoming/p/7090906.html
- http://www.cnblogs.com/snandy/p/3261754.html
