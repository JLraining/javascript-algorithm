/**
 * 堆是一种特殊的完全二叉树
 * 所有节点都大于等于它的子节点(最大堆: 根节点最大) 或者 小于等于它的子节点(最小堆: 根节点最小)
 * JS一般使用数组来表示堆
 * 应用：
 *  1. 快速找到最大值或者最小值，时间复杂度 O(1)
 *  2. 找到第K个最大(小)元素
 */

 const miniHeap = [1,3,6,5,9,8];
 const maxHeap = [6,5,3,4,2,1];


// 假设当前节点的位置为index

const n = miniHeap[index]

// 左侧子节点的位置为 2*index + 1
const left = miniHeap[2*index + 1]

// 右侧子节点的位置为 2*index + 2
const right = miniHeap[2*index + 2]

// 父节点位置为
const parent = miniHeap[(index - 1) >> 1] // >> 1表示整除2的结果 例如 5 >> 1结果为2
