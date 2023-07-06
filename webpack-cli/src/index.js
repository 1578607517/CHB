 import $ from 'jquery'
//   import './css/1.css'
 import './css/1.less'
 import axios from 'axios'

   const baseUrl = 'https://www.fastmock.site/mock/cf71e466ea27cb38535a09f9d5d6508b/1234567'
 $(function () {
  
     axios.get(`${baseUrl}/test`)
     .then(({data} )=>{
         console.log("data",data);
     })
     $('li:odd').css('background-color', 'yellow')
      $('li:even').css('background-color', 'lightblue')

 })
class Person {
    static info = 'aaa'
}
console.log(Person.info)