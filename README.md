```javascript
//hooks使用示例
/**
 *  @description useReader，excel读取
 * */
import { useReader } from "excel-react-hooks";
const { reader, data } = useReader(
  ["name", "age", "gender", "phone"],
  () => {
    console.log("success");
  },
  () => {
    console.log("error");
  }
);
```

```html
<input type="file"
        onChange={(e)=>{
          reader.readAsArrayBuffer(e.target.files[0])
        }}
      />
```

```javascript
  useEffect(()=>{
    console.log(data)
  },[data])
```
