import React, { useState } from 'react'
import dollar from "../images/icon-dollar.svg";
import logo from "../images/logo.svg";
import person from "../images/icon-person.svg";

function Calculator() {

    // State variables for bill amount, tip percentage, number of people, and errors
    const [billAmount, setBillAmount] = useState('');
    const [tipPercentage, setTipPercentage] = useState(0);
    const [customTip, setCustomTip] = useState('');
    const [numOfPeople, setNumOfPeople] = useState('');
    const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
    const [totalPerPerson, setTotalPerPerson] = useState(0);
    const [billError, setBillError] = useState(false);
    const [peopleError, setPeopleError] = useState(false);

    // Function to handle bill amount input change
    const handleBillChange = (e) => {
        const amount = parseFloat(e.target.value);
        setBillAmount(amount);
        calculateTip(amount, tipPercentage, numOfPeople);
    };

    // Function to handle tip percentage selection
    const handleTipPercentage = (percentage) => {
        setTipPercentage(percentage);
        calculateTip(billAmount, percentage, numOfPeople);
    };

    // Function to handle custom tip input change
    const handleCustomTip = (e) => {
        const custom = parseFloat(e.target.value);
        setCustomTip(custom);
        handleTipPercentage(custom / 100);
    };

    // Function to handle number of people input change
    const handlePeopleChange = (e) => {
        const people = parseInt(e.target.value);
        setNumOfPeople(people);
        calculateTip(billAmount, tipPercentage, people);
    };

    // Function to calculate tip and total amounts
    const calculateTip = (bill, tip, people) => {
        if (bill && tip && people) {
            const tipAmount = bill * tip;
            const totalAmount = bill + tipAmount;
            setTipAmountPerPerson(tipAmount / people);
            setTotalPerPerson(totalAmount / people);
            setBillError(false);
            setPeopleError(false);
        } else {
            setTipAmountPerPerson(0);
            setTotalPerPerson(0);
            if (!bill) setBillError(true);
            if (!people) setPeopleError(true);
        }
    };

    // Function to handle reset button click
    const handleReset = () => {
        setBillAmount('');
        setTipPercentage(0);
        setCustomTip('');
        setNumOfPeople('');
        setTipAmountPerPerson(0);
        setTotalPerPerson(0);
        setBillError(false);
        setPeopleError(false);
    };
    
    return(

        <div className='w-screen'>

            <div className='flex justify-center items-center pb-[40px]'>
                <img src={logo} alt="Logo" />
            </div>

            <section className='bg-white rounded-[20px] max-w-[600px] md:max-w-[900px] w-full mx-auto my-0 p-[30px]'>

                <form className='md:grid md:grid-cols-2 md:justify-items-center md:content-center md:gap-[30px]'>

                    <div className='md:w-full'>

                        <div className='pb-[20px]'>

                        <div className='flex items-center justify-between pb-[5px]'>
                            <h2 className='text-[13px] text-grayishCyan font-spaceMonoBold'>Bill</h2>
                            { billError && <p className='font-spaceMonoBold text-[10px] text-red-600'>Can't be zero</p> }
                        </div>

                            <span className='relative'>

                                <input 
                                    type="text" 
                                    className='text-right bg-veryLightGrayishCyan rounded-[5px] px-[15px] py-[10px] w-full focus:outline-strongCyan' 
                                    placeholder='0'
                                    value={billAmount}
                                    onChange={handleBillChange}
                                />
                                <img src={dollar} alt="Dollar" className='w-[10px] absolute top-[5px] left-[15px]' />

                            </span>

                        </div>

                        <div className='pb-[20px]'>

                            <h2 className='text-[13px] text-grayishCyan font-spaceMonoBold'>Select Tip %</h2>

                            <div className='grid grid-cols-2 gap-3 md:grid-cols-3'>
                                
                                <button type='button' className='bg-veryDarkCyan hover:bg-strongCyan text-center text-white font-spaceMonoBold py-[5px] rounded-[4px]' onClick={() => handleTipPercentage(0.05)}>5%</button>
                                <button type='button' className='bg-veryDarkCyan hover:bg-strongCyan text-center text-white font-spaceMonoBold py-[5px] rounded-[4px]' onClick={() => handleTipPercentage(0.5)}>10%</button>
                                <button type='button' className='bg-veryDarkCyan hover:bg-strongCyan text-center text-white font-spaceMonoBold py-[5px] rounded-[4px]' onClick={() => handleTipPercentage(0.15)}>15%</button>
                                <button type='button' className='bg-veryDarkCyan hover:bg-strongCyan text-center text-white font-spaceMonoBold py-[5px] rounded-[4px]' onClick={() => handleTipPercentage(0.25)}>25%</button>
                                <button type='button' className='bg-veryDarkCyan hover:bg-strongCyan text-center text-white font-spaceMonoBold py-[5px] rounded-[4px]' onClick={() => handleTipPercentage(0.5)}>50%</button>
                                <input type="text" placeholder='Custom' className='bg-veryLightGrayishCyan text-center text-grayishCyan font-spaceMonoBold py-[5px] rounded-[4px]' value={customTip} onChange={handleCustomTip}/>

                            </div>

                        </div>

                        <div className='relative pb-[20px]'>

                            <div className='flex items-center justify-between pb-[5px]'>
                                <h2 className='text-[13px] text-grayishCyan font-spaceMonoBold'>Number of People</h2>
                                { billError && <p className='font-spaceMonoBold text-[10px] text-red-600'>Can't be zero</p> }
                            </div>

                            <span>

                                <input 
                                    type="text" 
                                    className={`text-right bg-veryLightGrayishCyan rounded-[5px] px-[15px] py-[10px] w-full focus:outline-strongCyan`}
                                    placeholder='0'
                                    value={numOfPeople}
                                    onChange={handlePeopleChange}
                                />
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

                                        <input 
                                            type="text" 
                                            placeholder='$0.00' 
                                            className='w-full py-[25px] text-center bg-transparent text-strongCyan placeholder:text-strongCyan font-spaceMonoBold text-[25px] outline-none'
                                            value={`$${tipAmountPerPerson.toFixed(2)}`}
                                            readOnly
                                        />

                                    </div>

                                </div>

                                <div className='flex justify-between items-center gap-[25px]'>

                                    <h2 className='text-[12px] text-white font-spaceMonoBold'>Total <br /><span className='text-grayishCyan'>/ person</span></h2>

                                    <div>

                                        <input 
                                            type="text" 
                                            placeholder='$0.00' 
                                            className='w-full py-[25px] text-center bg-transparent text-strongCyan placeholder:text-strongCyan font-spaceMonoBold text-[25px] outline-none'
                                            value={`$${totalPerPerson.toFixed(2)}`}
                                            readOnly
                                        />

                                    </div>

                                </div>

                            </section>

                            <section>

                                <div>

                                    <button 
                                        type='button' 
                                        className='w-full uppercase bg-strongCyan font-spaceMonoBold outline-none py-[5px] rounded-[4px] text-veryDarkCyan hover:bg-grayishCyan'
                                        onClick={handleReset}
                                    >reset</button>

                                </div>

                            </section>

                        </div>

                    </div>

                </form>

            </section>

        </div>
    )
}

export default Calculator;