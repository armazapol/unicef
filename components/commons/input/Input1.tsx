import { forwardRef } from 'react';

const Input1 = forwardRef((props: any, ref) => {
    const { type, id,label, ...inputProps } = props;
  return (
    <div className="mt-2">
      <label htmlFor={id} className="text-gray-200 italic ml-2" >{label}
      <input className="w-full bg-input p-3 px-5 outline-none rounded-full text-gray-800 mt-2" type={type} id={id} {...inputProps}  ref={ref} /></label>
       
      </div>
  );
});

export default Input1

