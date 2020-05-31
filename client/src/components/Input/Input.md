Input example:

```jsx
import React, { useState } from 'react';
import { Input } from '../index'; //component path
const inputRef = useRef(null);
const [value, setValue] = useState('');
<Input ref={inputRef} type="text" value={value} />
```

Property Refference: [Ant Design Input](https://ant.design/components/input/#Input)