# HASH 算法

常用 HASH 函数

- 直接取余法：f(x) = x mod maxM; maxM一般是不太接近 2^t 的一个质数。
- 乘法取整法：f(x) = trunc((x/maxX)*maxlongit) mod maxM，主要用于实数。
- 平方取中法：f(x) = (x*x div 1000 ) mod 1000000); 平方后取中间的，每位包含信息比较多。

散列函数能使对一个数据序列的访问过程更加迅速有效，通过散列函数，数据元素将被更快地定位。

常用hash算法

- MD5
  - MD4(RFC 1320)是 MIT 的Ronald L. Rivest在 1990 年设计的，MD 是 Message Digest（消息摘要） 的缩写。它适用在32位字长的处理器上用高速软件实现——它是基于 32位操作数的位操作来实现的。
  - MD5(RFC 1321)是 Rivest 于1991年对MD4的改进版本。它对输入仍以512位分组，其输出是4个32位字的级联，与 MD4 相同。MD5比MD4来得复杂，并且速度较之要慢一点，但更安全，在抗分析和抗差分方面表现更好。
- SHA 家族
  - SHA1是由NIST NSA设计为同DSA一起使用的，它对长度小于2^64的输入，产生长度为160bit的散列值，因此抗穷举(brute-force)性更好。SHA-1 设计时基于和MD4相同原理，并且模仿了该算法。

HASH 主要用于信息安全领域中加密算法，它把一些不同长度的信息转化成杂乱的128位的编码里，叫做HASH值. 也可以说，hash就是找到一种数据内容和数据存放地址之间的映射关系。Hash算法在信息安全方面的应用主要体现在以下的3个方面：

- 文件校验
  - 我们比较熟悉的校验算法有奇偶校验和CRC校验，这2种校验并没有抗数据篡改的能力，它们一定程度上能检测并纠正数据传输中的信道误码，但却不能防止对数据的恶意破坏。
  - MD5 Hash算法的"数字指纹"特性，使它成为目前应用最广泛的一种文件完整性校验和（Checksum）算法，不少Unix系统有提供计算md5 checksum的命令。
- 数字签名
  - Hash 算法也是现代密码体系中的一个重要组成部分。由于非对称算法的运算速度较慢，所以在数字签名协议中，单向散列函数扮演了一个重要的角色。对 Hash 值，又称"数字摘要"进行数字签名，在统计上可以认为与对文件本身进行数字签名是等效的。而且这样的协议还有其他的优点。
- 鉴权协议
  - 鉴权协议又被称作"挑战--认证模式：在传输信道是可被侦听，但不可被篡改的情况下，这是一种简单而安全的方法。

参考资料：

- [Hash（散列函数）](https://baike.baidu.com/item/Hash/390310)
- [MD5](https://baike.baidu.com/item/MD5)
- [SHA家族](https://baike.baidu.com/item/SHA%E5%AE%B6%E6%97%8F/9849595)
- [npm: md5](https://www.npmjs.com/package/md5)
- [常见hash算法的原理](http://www.cnblogs.com/zhoug2020/p/6984191.html)
- [转 从头到尾彻底解析Hash表算法](https://www.cnblogs.com/dancheblog/p/3512284.html)
- [Hash 函数的常用算法和应用领域](http://www.cnblogs.com/qianxun/archive/2011/07/03/2096773.html)
