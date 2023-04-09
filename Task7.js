try {
    console.log (a)
    let a = 3

} catch (error) {
    console.log('let must be declared')
}

const division =(number)=>{
    try {
        if(number === 0){
            throw new Error('cannot be divided by zero')
        }
        const div = 1/number
      console.log(div)
 
  } catch (error) {
      console.log(error.message)
  }
}
division(0)
