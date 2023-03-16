
export const shortedString = (text: string) => {
  
  if(text.length > 12) {
    const maxLength = 12  
    let trimmedString = text.substring(0, maxLength);    
    let result = trimmedString + '...'
    return result
  } else { 
    return text
  }
}

export const delelteImgUUID = (text: string) => {
  if(text.includes(')(')) {
    return text.split(')(')[1]
  } else {
    return text
  }
}