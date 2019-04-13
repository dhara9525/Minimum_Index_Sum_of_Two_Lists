/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) 
{
if((!list1 && !list2) || (list1.length>1000 || list2.length>1000) ) return null;
    if(!list1) return list2;
    if(!list2) return list1;
    var tempArr=[];
    var set=new Set(), map=new Map();
    
    for(let item of list1)
    {
        set.add(item);
    }
    
    for(let item of list2)
    {
        if(set.has(item))
        {
            tempArr.push(item);
        }
    }
    
    if(tempArr.length==1)
        return tempArr;
    
    for(var i=0;i<list1.length;i++)
    {
        for(var j=0; j<tempArr.length; j++)
        {
            if(list1[i]==tempArr[j] && map.get(tempArr[j])==undefined)
            {
                map.set(list1[i],i);
            }
        }
    }
    for(var i=0;i<list2.length;i++)
    {
        for(var j=0; j<tempArr.length; j++)
        {
            if(list2[i]==tempArr[j] && map.get(tempArr[j])!=undefined)
            {
                map.set(list2[i],((map.get(list2[i]))+i));
            }
        } 
    }
  
    var minValue=5000, retKey=[];
    map.forEach(function(value,key){
        minValue=Math.min(minValue,value);
    })
    
    map.forEach(function(value,key){
        if(value==minValue)
             retKey.push(key);
    })
    return retKey;
};