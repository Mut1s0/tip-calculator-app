import React from 'react'
import dollar from "../images/icon-dollar.svg";
import logo from "../images/logo.svg";
import person from "../images/icon-person.svg";

function Calculator() {
    return(

        <div className='w-screen'>

            <div className='flex justify-center items-center pb-[40px]'>
                <img src={logo} alt="Logo" />
            </div>

            <section className='bg-white rounded-[20px] max-w-[600px] md:max-w-[900px] w-full mx-auto my-0 p-[30px]'>

                <form className='md:grid md:grid-cols-2 md:justify-items-center md:content-center md:gap-[30px]'>

                    <div className='md:w-full'>

                        <div className='pb-[20px]'>

                            <h2 className='text-[13px] text-grayishCyan font-spaceMonoBold'>Bill</h2>

                            <span className='relative'>

                                <input type="text" className='text-right bg-veryLightGrayishCyan rounded-[5px] px-[15px] py-[10px] w-full focus:outline-strongCyan' placeholder='0'/>
                                <img src={dollar} alt="Dollar" className='w-[10px] absolute top-[5px] left-[15px]' />

                            </span>
                        </div>

                        <div className='pb-[20px]'>

                            <h2 className='text-[13px] text-grayishCyan font-spaceMonoBold'>Select Tip %</h2>

                            <div className='grid grid-cols-2 gap-3 md:grid-cols-3'>
                                
                                <button type='submit' className='bg-veryDarkCyan hover:bg-strongCyan text-center text-white font-spaceMonoBold py-[5px] rounded-[4px]'>5%</button>
                                <button type='submit' className='bg-veryDarkCyan hover:bg-strongCyan text-center text-white font-spaceMonoBold py-[5px] rounded-[4px]'>10%</button>
                                <button type='submit' className='bg-veryDarkCyan hover:bg-strongCyan text-center text-white font-spaceMonoBold py-[5px] rounded-[4px]'>15%</button>
                                <button type='submit' className='bg-veryDarkCyan hover:bg-strongCyan text-center text-white font-spaceMonoBold py-[5px] rounded-[4px]'>25%</button>
                                <button type='submit' className='bg-veryDarkCyan hover:bg-strongCyan text-center text-white font-spaceMonoBold py-[5px] rounded-[4px]'>50%</button>
                                <input type="text" placeholder='Custome' className='bg-veryLightGrayishCyan text-center text-grayishCyan font-spaceMonoBold py-[5px] rounded-[4px]' />
                            </div>

                        </div>

                        <div className='relative pb-[20px]'>

                            <div className='flex items-center justify-between pb-[5px]'>
                                <h2 className='text-[13px] text-grayishCyan font-spaceMonoBold'>Number of People</h2>
                                <p className='font-spaceMonoBold text-[10px] text-red-600 hidden'>Can't be zero</p>
                            </div>

                            <span>

                                <input type="text" className='text-right bg-veryLightGrayishCyan rounded-[5px] px-[15px] py-[10px] w-full focus:outline-strongCyan' placeholder='0'/>
                                <img src={person} alt="Person" className='w-[11px] absolute top-[35px] left-[15px]' />

                            </span>
                            
                        </div>

                    </div>

                    <div>

                        <div className='bg-veryDarkCyan rounded-[10px] p-[20px] md:h-full md:grid'>

                            <section>

                                <div className='flex justify-between items-center gap-[25px]'>

                                    <h2 className='text-[12px] text-white font-spaceMonoBold'>Tip Amount <br /><span className='text-grayishCyan'>/ person</span></h2>

                                    <div className=''>

                                        <input type="text" placeholder='$0.00' className='w-full py-[25px] text-center bg-transparent text-strongCyan placeholder:text-strongCyan font-spaceMonoBold text-[25px] outline-none' />

                                    </div>

                                </div>

                                <div className='flex justify-between items-center gap-[25px]'>

                                    <h2 className='text-[12px] text-white font-spaceMonoBold'>Total <br /><span className='text-grayishCyan'>/ person</span></h2>

                                    <div>

                                        <input type="text" placeholder='$0.00' className='w-full py-[25px] text-center bg-transparent text-strongCyan placeholder:text-strongCyan font-spaceMonoBold text-[25px] outline-none' />

                                    </div>

                                </div>

                            </section>

                            <section>

                                <div>

                                    <button type='submit' className='w-full uppercase bg-strongCyan font-spaceMonoBold outline-none py-[5px] rounded-[4px] text-veryDarkCyan hover:bg-grayAA'>reset</button>

                                </div>

                            </section>

                        </div>

                    </div>

                </form>

            </section>

        </div>
    )
}

export default Calculator