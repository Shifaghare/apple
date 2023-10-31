
// var matrix = [[1,2,3],[4,5,6],[7,8,9]]

// var rotate = function(matrix) {
//     // Trans ose the matrix
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = i; j < matrix[0].length; j++) {
//             const temp = matrix[i][j];
//             matrix[i][j] = matrix[j][i];
//             matrix[j][i] = temp;
//         }
//     }

//     // Reverse each row
//     for (let i = 0; i < matrix.length; i++) {
//         matrix[i].reverse();
//     }
//     return matrix
// };
// console.log(rotate(matrix))






//Search index
// var nums=[1,2,3,4,5,6,7]
// var target=[5]
// var searchindex=function(nums,target){
//     let left=0,right=nums.length
//     while(left<=right){
//         let mid=left+right >> 1
//         if(nums[mid]===target) return mid
//         if (nums [mid]<target) left =mid+1
//         else right =mid-1
//     }
//     return left
// }
// console.log(searchindex(nums,target))

// //Remove duplicates

// nums=[1,1,2,2,2,3]
// var removeDuplicates = function(nums) {
//     let i = 0;
//     for (let j = 1; j < nums.length; j++) {
//         if (nums[j] !== nums[i]) {
//             i++;
//             nums[i] = nums[j];
//         } }
//     return i + 1;
// };
// console.log(removeDuplicates(nums))








// var matrix=[[1,2,3],[4,5,6],[7,8,9]]
// var rotate= function(matrix){
// for (let i=0;i<matrix.length;i++){
//     for(let j=i;j<matrix[0].length;j++){

//      const temp=matrix[i][j];
//      matrix[i][j]=matrix[j][i];
//      matrix [j][i]=temp
     
//     }

//   }
//   for (var i=0;i<=matrix.length-1;i++){
//     matrix[i].reverse()
//     }
//      return matrix

// }
// console.log(rotate(matrix))

// var nums =  [0,1,2,2,3,0,4,4,4,2]
// var value=2
// var removeElement=function(nums,value){
//     let left = 0;
//     let right = nums.length -1;
//     console.log(right)
    
//     while (left <= right) {
//         if (nums[left] === value) {
//             nums[left] = nums[right];
//             right--;
//         }
//         else {
//             left++;
//         }
//     }
    
//     return left;
// };



// console.log(removeElement(nums,value))

// var nums1=[1,2,3,4]
// var m=4
// var nums2=[2,3,4,5]
// var n=4

// var mergee = function(nums1, m, nums2, n) {
//     nums1.length = m;
//     nums2.length = n;
//     nums1.push(...nums2);
//     nums1.sort((a, b) => a-b);
    
// };

// console.log(mergee(nums1,m,n,nums2))







// nums.sort((a,b)=>a-b)



// var array= [2,2,1,1,1,2,2]

// var majorityelement=function(array){
//     array.sort((a,b)=>a-b)
//     const n = array.length
//      array[Math.floor(n/2)]
//      console.log(Math.floor((n/2)+1))
// }
// majorityelement(array)


// let object1 = {value: 10};
// let object2 = object1;
// let object3 = {value: 10};

// console.log(object1 == object2);
// console.log(object1 == object3);




var s="A man, a plan, a canal: Panama"
var newstr =s.replace(/[^a-z0-9]/gi,"").toLowerCase()
var palindrome=function(s,newstr){
    return newstr===newstr.split('').reverse().join('')?true :false
 
}

console.log(palindrome(s,newstr))







