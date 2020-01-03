export const navigateToURL = (url) => () => window.location.href = url 
export const getPicklistOptions = (records, nameProp, valueProp) => {
    return records ? records.map((rec) => { 
      return { name: rec[nameProp], value: rec[valueProp] } 
    }) : []
} 