
function toRoman (numCheck)
{
  
    var dict = [ ['M', 1000], ['D', 500], ['C', 100], ['L', 50], ['X', 10], ['V', 5], ['I', 1] ]
    

    var result = ''

    function getRoman (dictGR, angka)
      {

        if (angka === 0 || dictGR.length === 0)    
          {
            return result
          }

        else if( angka === dictGR[0][1])
          {
            result += dictGR[0][0]
            return result
          }

        else if ( String(angka)[0] === '9')
          {
            var multiplier = Math.pow(10, (String(angka).length)) 

            for (var x = 0; x < dictGR.length; x++)
              {
                if (multiplier === dictGR[x][1])
                  {
                    result += dictGR[x+2][0] 
                    result += dictGR[x][0]

                    angka -= Number(String(angka)[0]) * Math.pow(10, (String(angka).length-1))
                    
                    return result + getRoman(dictGR, angka)
                  }

              }
          }

        else
          {
            var temp = Math.floor( angka / dictGR[0][1])


            if (temp <= 0)
              {
                dictGR = dictGR.slice(1)

                return result + getRoman (dictGR, angka)
              }
            else 
              {
                result += dictGR[0][0]

                angka = angka - dictGR[0][1]

                return result + getRoman (dictGR, angka)

              }


          }

      }


  getRoman(dict, numCheck)


  

  if (result.length >= 4 )
    {
      var resultReinsert = []
      for ( var x = result.length-1; x >=0; x--)
        {

          if (result[x] === result[x-1] 
                && result[x] === result[x-2] 
                    && result[x] === result[x-3] )
            {
              for (var y = 0; y < dict.length; y++)
                {
                  if (result[x] === dict[y][0])
                    {
                      resultReinsert.unshift(dict[y-1][0])
                      x -= 2
                    }
                }
            }
          else
            {
              resultReinsert.unshift(result[x])
            }

        }
      return resultReinsert.join('')  
    }
  else
    {
      return result
    }


  
  

}



console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('______|__________|_______')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))
console.log('tambahan self test')
console.log('2999  | MMCMXCIX | ', toRoman(2999))
console.log('1999  | MCMXCIX  | ', toRoman(1999))
console.log('1444  | MCCDXLIV | ', toRoman(1444))
console.log('444   | CDXLIV   | ', toRoman(444))



