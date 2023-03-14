let arr = [1, 3, 5, 7],
  arrB = [2, 4, 6];

let point = 0,
  pointB = arr.length;
arr = arr.concat(arrB);

while (point !== pointB) {
  if (arr[point] > arr[pointB]) {
    arr.splice(point, 0, ...arr.splice(pointB++, 1));
  }
  if (pointB >= arr.length) {
    break;
  }
  point++;
}

console.log(JSON.stringify(arr));
