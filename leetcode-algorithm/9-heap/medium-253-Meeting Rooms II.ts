
// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

// Example 1:

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2
// Example 2:

// Input: intervals = [[7,10],[2,4]]
// Output: 1


/**
 * 
 * 按照 开始时间 对会议进行排序。
 * 初始化一个新的 最小堆，将第一个会议的结束时间加入到堆中。我们只需要记录会议的结束时间，告诉我们什么时候房间会空。
 * 对每个会议，检查堆的最小元素（即堆顶部的房间）是否空闲。
 * 若房间空闲，则从堆顶拿出该元素，将其改为我们处理的会议的结束时间，加回到堆中。
 * 若房间不空闲。开新房间，并加入到堆中。
 * 处理完所有会议后，堆的大小即为开的房间数量。这就是容纳这些会议需要的最小房间数。
 */

function minMeetingRooms(intervals: number[][]): number {
    if (!intervals || intervals.length === 0) {
        return 0;
    }
    intervals = intervals.sort((a, b) => a[0] - b[0]);

    class Heap {
        value: number[];
        constructor(val: number[]) {
            this.value = val;
        }

        getParentIdx = (idx: number): number => {
            return Math.floor((idx - 1) / 2)
        }

        getLeftChildIdx = (idx: number): number => {
            return 2 * idx + 1
        }
        getRightChildIdx = (idx: number): number => {
            return 2 * (idx + 1)
        }

        shiftDown = (idx: number): void => {
            let rightIdx: number = this.getRightChildIdx(idx);
            let leftIdx: number = this.getLeftChildIdx(idx);
            if (leftIdx < this.value.length && this.value[idx] > this.value[leftIdx]) {
                this.swap(idx, leftIdx);
                this.shiftDown(leftIdx);
            }
            if (rightIdx < this.value.length && this.value[idx] > this.value[rightIdx]) {
                this.swap(idx, rightIdx);
                this.shiftDown(rightIdx);
            }
        }

        swap = (idx1: number, idx2: number): void => {
            [this.value[idx1], this.value[idx2]] = [this.value[idx2], this.value[idx1]];
        }

        shiftUp = (idx: number): void => {
            if (idx <= 0) {
                return
            }
            const pIdx = this.getParentIdx(idx);
            if (this.value[pIdx] > this.value[idx]) {
                this.swap(pIdx, idx);
                this.shiftUp(pIdx);
            }
        }

        insert = (i: number) => {
            this.value.push(i);
            this.shiftUp(this.value.length - 1)
        }

        getMini = (): number => {
            return this.value[0];
        }

        getSize = (): number => {
            return this.value.length;
        }
    }

    let heap: Heap = new Heap([intervals[0][1]]);
    for (let i: number = 1; i < intervals.length; i++) {
        if (heap.getMini() <= intervals[i][0]) {
            heap.value[0] = intervals[i][1];
            heap.shiftDown(0)
        } else {
            heap.insert(intervals[i][1])
        }
    }

    return heap.getSize();
};