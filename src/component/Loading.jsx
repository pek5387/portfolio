import React, { useState } from 'react';

function Loading(props)  {
    const msg = props.age > 19 ? '성인입니다' : '미성년자입니다'
    const [name, setName] = useState('Mike');
    return(
            <div className="loading">
                <div>
                    {props.cookie}
                    <p></p>
                    { name }{props.age} : {msg}
                </div>
                <button
                    onClick={()=>{
                        setName(name === 'Mike' ? 'Jane' : "Mike");
                    }}
                >
                    test
                </button>
            </div>
        )
}

export default Loading;

