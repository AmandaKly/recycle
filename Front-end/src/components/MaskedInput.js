// import React from "react";
// import InputMask from 'react-input-mask';

// const onlyNumbers = (str) => str.replace(/[^0-9]/g, '')

// const MaskedInput = ({ value, onChange, name, mask}) => {
//     function handleChange(e) {
//         onChange({
//             ...e,
//             target: {
//                 ...e.target,
//                 name,
//                 value: onlyNumbers(e.target.value),
//             }
//         })
//     }

//     return ( 
//         <InputMask
//         name={name}
//         mask= {mask}
//         value={value}
//         onChange={handleChange}
//     />
//     );
// };

// export default MaskedInput