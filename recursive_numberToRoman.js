function numberToRoman(num){
    arrayOfRoman = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'], [100,'C'],[90,'XC'],[50,'L'],[40,'XL'], [10,'X'],[9,'IX'],[5,'V'],[4,'IV'], [1,'I']]
   function getRoman(x,arr)
   { 
    result = ''
    while(x >= arr[0][0])
        {
            result += arr[0][1]
            x -= arr[0][0]

        }
        
    if(x < 4 && arr.length == 1){result += arr[0][1].repeat(x)}
   
    newarr = arr.splice(1)
    return (newarr.length == 0) ? result : result + getRoman(x,newarr)
   }
   console.log(getRoman(num,arrayOfRoman))
}


numberToRoman(123)
