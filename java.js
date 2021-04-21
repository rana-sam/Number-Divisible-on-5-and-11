var check;
check=parseInt(prompt("Enter number foe checking:"));
 if(check % 11 == 0 && check % 5==0)
{
console.log(check+" Is divisible on both 5 and 11")
}
else if(check % 5 == 0)
{
console.log(check+" Is divisible on 5")
}
 else if(check % 11 == 0)
{
console.log(check+" Is divisible on 11")
}

else{
    console.log(check+" Is not divisible on 5 or 11.")
}