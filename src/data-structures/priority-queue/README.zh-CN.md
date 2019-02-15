# 优先队列

在计算机科学中,  **优先级队列(priority queue)** 是一种抽象数据类型, 它类似于常规的队列或栈, 但每个元素都有与之关联的“优先级”。

在优先队列中, 低优先级的元素之前前面应该是高优先级的元素。 如果两个元素具有相同的优先级, 则根据它们在队列中的顺序是它们的出现顺序即可。

优先队列虽通常用堆来实现, 但它在概念上与堆不同。优先队列是一个抽象概念, 就像“列表”或“图”这样的抽象概念一样;

正如列表可以用链表或数组实现一样, 优先队列可以用堆或各种其他方法实现, 例如无序数组。

## 基本操作

此处实现 inherit MinHeap，按优先级排序存储数据

- add
- remove
- changePriority
- findByValue
- hasValue
- comparePriority
- compareValue

优先队列的作用是能保证每次取出的元素都是队列中权值最小的（Java的优先队列每次取最小元素，C++的优先队列每次取最大元素）。这里牵涉到了大小关系，元素大小的评判可以通过元素本身的自然顺序（natural ordering），也可以通过构造时传入的比较器（Comparator，类似于C++的仿函数）。

优先队列的应用比较广泛，比如作业系统中的调度程序，当一个作业完成后，需要在所有等待调度的作业中选择一个优先级最高的作业来执行，并且也可以添加一个新的作业到作业的优先队列中。

问题：

这里执行 poll 时，优先队列里存储的优先级并未删除，可以覆写处理

## 参考

- [Wikipedia](https://en.wikipedia.org/wiki/Priority_queue)
- [YouTube](https://www.youtube.com/watch?v=wptevk0bshY&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=6)
- [深入理解Java PriorityQueue](http://www.cnblogs.com/CarpenterLee/p/5488070.html)
