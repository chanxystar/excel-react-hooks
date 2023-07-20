```javascript
//use
/**
 *  @description useReader，excel读取
 * */
import {useReader} from "excel-react-hooks";
const {reader,data} = useReader(['name','age','gender','phone'],()=>{console.log('success')},()=>{console.log('error')})

```
