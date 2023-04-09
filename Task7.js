try {
    console.log (a)
    let a = 3

} catch (error) {
    console.log('let must be declared')
}

// try {
//       const b = 1/0
//    throw new Error('cannot be divided by zero')

// } catch (error) {
//     console.log(error.message)
// }

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
