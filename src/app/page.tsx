'use client'

import { useEffect, useState } from "react";

export default function Home() {

  const [baseCost, setBaseCost] = useState<number>(0)
  const [percent, setPercent] = useState<number>(0)
  const [people, setPeople] = useState<number>(0)
  const [finalTip, setFinalTip] = useState<number>(0)
  const [finalCost, setFinalCost] = useState<number>(0)
  const [customInputValue, setCustomInputValue] = useState<string>('')
  const [costInput, setCostInput] = useState<string>('')
  const [peopleInput, setPeopleInput] = useState<string>('')
  const [activeButton, setActiveButton] = useState<number | null>(null)
  const [noZero, setNoZero] = useState<boolean>(false)
  const [noZeroTwo, setNoZeroTwo] = useState<boolean>(false)
  const [resetOn, setResetOn] = useState<boolean>(false)

  const handleBtnOne = () => {
    setPercent(.05)
    setCustomInputValue('')
    setActiveButton(1)
  }
  const handleBtnTwo = () => {
    setPercent(.1)
    setCustomInputValue('')
    setActiveButton(2)
  }
  const handleBtnThree = () => {
    setPercent(.15)
    setCustomInputValue('')
    setActiveButton(3)
  }
  const handleBtnFour = () => {
    setPercent(.25)
    setCustomInputValue('')
    setActiveButton(4)
  }
  const handleBtnFive = () => {
    setPercent(.5)
    setCustomInputValue('')
    setActiveButton(5)
  }

  const caculateStuff = () => {
    if (baseCost !== 0 && percent !== 0 && people !== 0) {
      setFinalTip(baseCost * percent / people)
      setFinalCost(baseCost / people)
      setResetOn(true)
      console.log('Current decimal: ' + percent)
      console.log('Current cost: $' + baseCost)
      console.log('Current People: ' + people)
      console.log('Final Tip Per: ' + finalTip)
      console.log('Final Cost Per: ' + finalCost)
    }
  }

  useEffect(() => {
    caculateStuff()
  }, [baseCost, people, percent, finalCost, finalTip, caculateStuff])

  const handleReset = () => {
    setPercent(0)
    setBaseCost(0)
    setPeople(0)
    setFinalTip(0)
    setFinalCost(0)
    setCustomInputValue('')
    setCostInput('')
    setPeopleInput('')
    setActiveButton(null)
    setNoZero(false)
    setNoZeroTwo(false)
    setResetOn(false)
  }

  return (
    <div className="mainBg">

      <p className="text-center tracking-widest lg:pt-36 lg:pb-20 py-14 fw">
        <span className="">S</span>
        <span className="px-2">P</span>
        <span className="pe-2">L</span>
        <span>I</span>
        <br />
        <span>T</span>
        <span className="px-2">T</span>
        <span className="pe-2">E</span>
        <span>R</span>
      </p>

      <div className="lg:mx-64 cardColor lg:rounded-3xl rounded-t-3xl lg:h-auto h-screen">
        <div className="grid xl:grid-cols-2 lg:p-8 lg:ps-10 p-5 ps-6 gap-10">
          <div className="">

            <div className="pb-5">
              <div className="grid grid-cols-2">
                <div>
                  <p className="py-2">
                    Bill
                  </p>
                </div>
                <div className={`text-end ${noZero ? 'block' : 'hidden'}`}>
                  <p className="py-2">
                    Can't be 0
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-12">
                  <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setBaseCost(parseInt(e.target.value)); setCostInput(e.target.value); }} value={costInput} type="number" className="text-end inputClass1" placeholder="0" onBlur={(e: React.FocusEvent<HTMLInputElement>) => { if (e.target.value === '0' || e.target.value === '') { e.target.classList.add('invalidInput'); setNoZero(true) } else { e.target.classList.remove('invalidInput'); setNoZero(false) } }} />
                </div>
                <div className="absolute inputImg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17"><path fill="#9EBBBD" d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z" /></svg>
                </div>
              </div>
            </div>

            <div className="pt-3 pb-8">
              <p className="pb-4">
                Select Tip %
              </p>
              <div className="grid sm:grid-cols-3 grid-cols-2 text-center gap-4 pb-3">
                <div className='col-span-1 btnClass'>
                  <button onClick={handleBtnOne} className={`width ${activeButton === 1 ? 'buttonClicked' : 'buttonNormal'}`}>
                    5%
                  </button>
                </div>
                <div className='col-span-1 btnClass'>
                  <button onClick={handleBtnTwo} className={`width ${activeButton === 2 ? 'buttonClicked' : 'buttonNormal'}`}>
                    10%
                  </button>
                </div>
                <div className='col-span-1 btnClass pb-2'>
                  <button onClick={handleBtnThree} className={`width ${activeButton === 3 ? 'buttonClicked' : 'buttonNormal'}`}>
                    15%
                  </button>
                </div>

                <div className='col-span-1 btnClass'>
                  <button onClick={handleBtnFour} className={`width ${activeButton === 4 ? 'buttonClicked' : 'buttonNormal'}`}>
                    25%
                  </button>
                </div>
                <div className='col-span-1 btnClass'>
                  <button onClick={handleBtnFive} className={`width ${activeButton === 5 ? 'buttonClicked' : 'buttonNormal'}`}>
                    50%
                  </button>
                </div>
                <div className='col-span-1'>
                  <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPercent(parseInt(e.target.value) / 100); setCustomInputValue(e.target.value); }} value={customInputValue} onClick={() => { setActiveButton(null); setPercent(0) }} type="number" placeholder="Custom" className="text-end pe-4 customInput" />
                </div>
              </div>
            </div>

            <div className="pb-4">
              <div className="grid grid-cols-12">
                <div className="col-span-7">
                  <p className="py-2">
                    Number of people
                  </p>
                </div>
                <div className={`text-end col-span-5 ${noZeroTwo ? 'block' : 'hidden'}`}>
                  <p className="py-2">
                    Can't be 0
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-12">
                  <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPeople(parseInt(e.target.value)); setPeopleInput(e.target.value) }} value={peopleInput} type="number" className="text-end inputClass1" placeholder="0" onBlur={(e: React.FocusEvent<HTMLInputElement>) => { if (e.target.value === '0' || e.target.value === '') { e.target.classList.add('invalidInput'); setNoZeroTwo(true) } else { e.target.classList.remove('invalidInput'); setNoZeroTwo(false) } }} />
                </div>
                <div className="absolute inputImg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16"><path fill="#9EBBBD" d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z" /></svg>                </div>
              </div>
            </div>
          </div>

          {/* right side */}

          <div className="rightSide lg:p-8 p-6">
            <div className="grid grid-cols-12 pt-3">
              <div className="lg:col-span-4 col-span-6 lg:pt-3 pt-1">
                <p className="white">
                  Tip Amount
                </p>
                <p className="text-[12px] tracking-wider">
                  / person
                </p>
              </div>
              <div className="text-end outputs lg:text-[45px] text-[30px] lg:col-span-8 col-span-6">
                {isNaN(finalTip) ? <p>$0.00</p> : '$' + finalTip.toFixed(2)}
              </div>
            </div>

            <div className="grid grid-cols-12 lg:pt-6 pt-5">
              <div className="col-span-4 lg:pt-3 pt-1">
                <p className="white">
                  Total
                </p>
                <p className="text-[12px] tracking-wider">
                  / person
                </p>
              </div>
              <div className="text-end outputs lg:text-[45px] text-[30px] col-span-8">
                {isNaN(finalCost) ? <p>$0.00</p> : '$' + finalCost.toFixed(2)}
              </div>
            </div>

            <div className="text-center lg:pt-32 pt-8">
              <button onClick={handleReset} className={`py-2 font-black ${resetOn ? 'resetBtn' : 'disableReset'}`}>
                Reset
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}