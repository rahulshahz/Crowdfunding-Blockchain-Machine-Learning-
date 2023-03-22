import React from 'react'

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange, isSelect }) => {

    return (
        <label className='flex-1 w-full flex flex-col'>
            {labelName && (
                <span className='font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]'>{labelName}</span>
            )}
            {isTextArea ? (
                <textarea required value={value}
                    onChange={handleChange}

                    rows={10}
                    placeholder={placeholder}
                    className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]' />
            ) :
                isSelect ? (
                    <select onChange={handleChange} className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]' required placeholder={placeholder}>
                        <option hidden value="select">Select</option>
                        <option  value="Business">Business</option>
                        <option value="Education">Education</option>
                        <option value="Audi">Audi</option>
                    </select>
                ) :
                    <input required value={value}
                        onChange={handleChange}
                        type={inputType}
                        step="0.1"
                        placeholder={placeholder}
                        className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]' />
            }

        </label>
    )
}

export default FormField