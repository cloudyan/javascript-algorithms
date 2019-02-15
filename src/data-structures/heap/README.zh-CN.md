# 堆 (数据结构)

在计算机科学中, 一个 ** 堆(heap)** 是一种特殊的基于树的数据结构，它满足下面描述的堆属性。

在一个 *最小堆(min heap)* 中, 如果 `P` 是 `C` 的一个父级节点, 那么 `P`  的key(或value)应小于或等于 `C` 的对应值.

![最小堆](https://upload.wikimedia.org/wikipedia/commons/6/69/Min-heap.png)

在一个  *最大堆(max heap)* 中,  `P` 的key(或value)大于 `C` 的对应值。

![堆](https://upload.wikimedia.org/wikipedia/commons/3/38/Max-Heap.svg)

在堆“顶部”的没有父级节点的节点, 被称之为根节点。

## 基本操作

堆就是用数组实现的一棵完全二叉树（在时间和空间上很高效），堆是完全二叉树，索引值具有以下关系

```text
        parent(index)
       /             \
left(2*index+1)  right(2*index+2)

- 第 h 层第 n 个元素是 `2 ^ h + n`
- 索引:父计算子
  leftChildIndex 为 `parentIndex * 2 + 1`
  rightChildIndex 为 `parentIndex * 2 + 2`
- 索引:子计算父
  parentIndex 为 `(childIndex - 1) / 2` 后向下取整

因为上面索引值的关系，这也就是为什么可以直接用数组来存储堆的原因。
```

- 索引、父子元素等操作
  - getLeftChildIndex
  - getRightChildIndex
  - getParentIndex
  - hasParent 通过索引值有效性来判断
  - hasLeftChild
  - hasRightChild
  - parent 通过索引值获取
  - leftChild
  - rightChild
- swap 两个值交换位置
- peek 仅仅读取最小值或最大值
- poll 从堆中提取最小值或最大值 `O(1)`
- add 向堆中插入一个新元素 insert(value)
  - buildHeap(array) 通过反复调用 `insert()` 方法将一个（无序）数组转换成一个堆。如果你足够聪明，你可以在 `O(n)` 时间内完成。
- remove 删除堆元素 delete removeAtIndex(index)
- find search(value)
- isEmpty
- toString
- 原始操作，用于保证插入或删除节点以后使其符合堆的性质
  - heapifyUp 将新元素提升使其符合堆的性质
  - heapifyDown 使删除堆顶元素的堆再次成为堆
  - pairIsInCorrectOrder 检查堆元素的顺序是否正确

## 参考

- [Wikipedia](https://en.wikipedia.org/wiki/Heap_(data_structure))
- [YouTube](https://www.youtube.com/watch?v=t0Cq6tVNRBA&index=5&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [数据结构之“堆”](http://www.cnblogs.com/Jason-Damon/archive/2012/04/18/2454649.html)
- [数据结构：堆（Heap）](https://www.jianshu.com/p/6b526aa481b1)
