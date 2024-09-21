import React from 'react'

const TextInput = ({screen, name, placeholder, label, required, onChange, theme, isError, errorMsg}) => {
  return (
    <div className='w-full flex flex-col gap-y-2 md:gap-y-4 items-start'>
      <label htmlFor={name} className={`font-secondary font-normal text-sm md:text-base ${theme === 'dark' ? 'text-text-light' : 'text-text-dark'}`} >{label}</label>
      <div className={`w-full flex items-center px-3 md:px-4 py-[8px] md:py-3 gap-x-[10px] bg-inputBg border-solid border-2 ${isError ? 'border-alert' : 'border-transparent'} rounded-full`}>
        {screen === 'mobile' ?
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.969 3.28308C4.916 3.17034 4.83201 3.07501 4.72684 3.00824C4.62167 2.94146 4.49967 2.90601 4.37509 2.90601C4.25051 2.90601 4.12851 2.94146 4.02334 3.00824C3.91817 3.07501 3.83418 3.17034 3.78118 3.28308L0.281184 10.7206C0.211119 10.8774 0.205352 11.0555 0.265123 11.2166C0.324893 11.3776 0.445434 11.5088 0.600863 11.582C0.756292 11.6552 0.934214 11.6645 1.09643 11.6079C1.25864 11.5513 1.39221 11.4334 1.46845 11.2795L2.32103 9.46878H6.42915L7.28118 11.2795C7.3553 11.437 7.48895 11.5586 7.65274 11.6176C7.81652 11.6766 7.99703 11.6681 8.15454 11.5939C8.31206 11.5198 8.43368 11.3862 8.49265 11.2224C8.55162 11.0586 8.54311 10.8781 8.469 10.7206L4.969 3.28308ZM2.939 8.15628L4.37509 5.10363L5.81173 8.15628H2.939ZM10.9376 5.09378C10.1802 5.09378 9.58298 5.30488 9.16298 5.7216C9.09693 5.7811 9.04366 5.85339 9.0064 5.9341C8.96914 6.01481 8.94867 6.10225 8.94623 6.19111C8.94378 6.27997 8.95941 6.3684 8.99218 6.45104C9.02494 6.53367 9.07415 6.60879 9.13682 6.67184C9.19949 6.73488 9.27432 6.78453 9.35676 6.81778C9.4392 6.85103 9.52754 6.86719 9.61642 6.86526C9.70529 6.86334 9.79284 6.84338 9.87377 6.8066C9.9547 6.76982 10.0273 6.71698 10.0872 6.65128C10.2513 6.48722 10.5389 6.4041 10.9376 6.4041C11.5392 6.4041 12.0313 6.79675 12.0313 7.2791V7.51917C11.6885 7.361 11.3152 7.2798 10.9376 7.28128C9.61087 7.28128 8.53134 8.26238 8.53134 9.46878C8.53134 10.6752 9.61087 11.6563 10.9376 11.6563C11.3566 11.6573 11.7695 11.5563 12.1407 11.3621C12.2186 11.4795 12.3322 11.5687 12.4648 11.6166C12.5973 11.6644 12.7417 11.6683 12.8767 11.6277C13.0116 11.5871 13.1299 11.5042 13.214 11.3911C13.2982 11.2781 13.3437 11.1409 13.3438 11V7.28128C13.3438 6.07488 12.2643 5.09378 10.9376 5.09378ZM10.9376 10.3438C10.336 10.3438 9.84384 9.95113 9.84384 9.46878C9.84384 8.98644 10.336 8.59378 10.9376 8.59378C11.5392 8.59378 12.0313 8.98644 12.0313 9.46878C12.0313 9.95113 11.5392 10.3438 10.9376 10.3438Z" fill="#555555"/>
          </svg> :
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.67882 3.68058C5.61825 3.55173 5.52226 3.44278 5.40207 3.36647C5.28187 3.29016 5.14244 3.24963 5.00007 3.24963C4.85769 3.24963 4.71826 3.29016 4.59807 3.36647C4.47788 3.44278 4.38188 3.55173 4.32132 3.68058L0.321318 12.1806C0.241244 12.3598 0.234654 12.5633 0.302963 12.7474C0.371272 12.9315 0.509033 13.0814 0.686666 13.165C0.864298 13.2487 1.06764 13.2593 1.25302 13.1947C1.43841 13.13 1.59106 12.9953 1.67819 12.8193L2.65257 10.75H7.34757L8.32132 12.8193C8.40602 12.9993 8.55877 13.1383 8.74595 13.2057C8.93314 13.2731 9.13943 13.2634 9.31944 13.1787C9.49946 13.094 9.63845 12.9413 9.70585 12.7541C9.77324 12.5669 9.76352 12.3606 9.67882 12.1806L5.67882 3.68058ZM3.35882 9.24995L5.00007 5.7612L6.64194 9.24995H3.35882ZM12.5001 5.74995C11.6344 5.74995 10.9519 5.9912 10.4719 6.46745C10.3965 6.53545 10.3356 6.61808 10.293 6.71031C10.2504 6.80255 10.227 6.90248 10.2242 7.00404C10.2214 7.10559 10.2393 7.20666 10.2767 7.3011C10.3142 7.39554 10.3704 7.48139 10.442 7.55344C10.5137 7.62549 10.5992 7.68223 10.6934 7.72023C10.7876 7.75823 10.8886 7.7767 10.9902 7.7745C11.0917 7.7723 11.1918 7.74949 11.2843 7.70746C11.3768 7.66542 11.4597 7.60503 11.5282 7.52995C11.7157 7.34245 12.0444 7.24745 12.5001 7.24745C13.1876 7.24745 13.7501 7.6962 13.7501 8.24745V8.52183C13.3582 8.34106 12.9316 8.24826 12.5001 8.24995C10.9838 8.24995 9.75007 9.3712 9.75007 10.75C9.75007 12.1287 10.9838 13.25 12.5001 13.25C12.9789 13.2511 13.4508 13.1357 13.8751 12.9137C13.9641 13.0479 14.0939 13.1499 14.2454 13.2046C14.3969 13.2592 14.562 13.2637 14.7162 13.2173C14.8704 13.1709 15.0056 13.0761 15.1017 12.9469C15.1979 12.8177 15.2499 12.661 15.2501 12.5V8.24995C15.2501 6.8712 14.0163 5.74995 12.5001 5.74995ZM12.5001 11.75C11.8126 11.75 11.2501 11.3012 11.2501 10.75C11.2501 10.1987 11.8126 9.74995 12.5001 9.74995C13.1876 9.74995 13.7501 10.1987 13.7501 10.75C13.7501 11.3012 13.1876 11.75 12.5001 11.75Z" fill="#555555"/>
          </svg>
        }
        <input 
          type="text" 
          name={name}
          id={name}
          placeholder={placeholder} 
          required={required}
          className='font-secondary font-medium text-sm/normal md:text-base/normal text-text-dark placeholder:font-semibold placeholder:text-text-placeholder bg-transparent border-none outline-none'
          onChange={onChange}
        />
      </div>
      {isError && 
        <p className='font-secondary font-medium text-alert ml-3'>
          * {errorMsg}
        </p>
      }
    </div>
  )
}

export default TextInput