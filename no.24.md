#### element diff
- insert_markup、move_existing、delete_node
##### move_existing
generateComponentChildren调用 receiveComponent, prev = next
![](./element_diff.png)
删A加B，删B加A，删C加D，删D加C
key--diff算法中给我们的唯一标识，同层diff当中比较的时候
![](./element_diff_with_key.png)
B不变，A往后移，D不变，C往后移
lastindex、顺序优化（当前index大于lastindex的时候说明是新增节点，不会对其他节点产生影响,小于lastindex说明是之前的,不做操作？？？）
##### homework
![](./dom-diff-update1.png)
![](./dom-diff-update2.png)
ABC移动到D后面
D对应的是lastindex，新的Dindex小于lastindex,所以D不变
尽量避免将最后一个节点，直接移动到所有节点之前，真正移动并不是移动的1个，而是移动的之前所有的，会影响react的性能
### 总结
- O(n^3) => O(n) (diff算法)
- 分层比较
- component diff
- key -> element diff
- 建议：开发组件，dom结构稳定，提升性能
- 建议：避免直接将行尾的元素插到最前面
- 擅用 shouldComponentUpdate() (告诉react需不需要去做diff)
### snabbdom (vue、react)--》经典、解决了上述的问题、vue2.0也引用的此库
双端比较算法

inferno.js vue3.0借鉴的此库对算法进行的优化，号称最快的diff算法
eg. react中会将abc移动到相应的位置，在inferno.js中会将d移动到abc前面
abcd
dabc
