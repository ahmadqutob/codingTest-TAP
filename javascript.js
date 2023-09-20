 
let theNum = (nums, target) =>{
    for(let i = 0; i <= nums.length; i++){
        for(let j = 0; j <= nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};

 

const nums =[2,7,11,13];
const target=18;
const result= theNum(nums,target);
console.log(result);