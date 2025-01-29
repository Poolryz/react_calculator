import ButtonNum from '../../views/ButtonNum/ButtonNum.jsx'
import ButtonDot from '../../views/ButtonDot/ButtonDot.jsx'
import ButtonFunc from '../../views/ButtonFunc/ButtonFunc.jsx'
import ButtonResult from '../../views/ButtonResult/ButtonResult.jsx'
import ButtonDelNum from '../../views/ButtonDelNum/ButtonDelNum.jsx'
import ButtonDelAllNum from '../../views/ButtonDelAllNum/ButtonDelAllNum.jsx'
import ButtonSign from '../../views/ButtonSign/ButtonSign.jsx'
import ButtonProcent from '../../views/ButtonProcent/ButtonProcent.jsx'







export default function MenuComponent({ getFirstNum, getDot, getFunc, resultCalc, delNum, delAllNum, addSign, addProcent, ...props }) {
    return (
        <>
            <div className="wrapp-line">
                <ButtonProcent addProcent={addProcent}>%</ButtonProcent>
                <ButtonDelAllNum delAllNum={delAllNum}>CE</ButtonDelAllNum>
                <ButtonDelNum delNum={delNum}>C</ButtonDelNum>
                <ButtonFunc getFunc={getFunc}>/</ButtonFunc>
            </div>
            <div className="wrapp-line">
                <ButtonNum getFirstNum={getFirstNum}>7</ButtonNum>
                <ButtonNum getFirstNum={getFirstNum}>8</ButtonNum>
                <ButtonNum getFirstNum={getFirstNum}>9</ButtonNum>
                <ButtonFunc getFunc={getFunc}>*</ButtonFunc>
            </div>
            <div className="wrapp-line">
                <ButtonNum getFirstNum={getFirstNum}>4</ButtonNum>
                <ButtonNum getFirstNum={getFirstNum}>5</ButtonNum>
                <ButtonNum getFirstNum={getFirstNum}>6</ButtonNum>
                <ButtonFunc getFunc={getFunc}>-</ButtonFunc>
            </div>
            <div className="wrapp-line">
                <ButtonNum getFirstNum={getFirstNum}>1</ButtonNum>
                <ButtonNum getFirstNum={getFirstNum}>2</ButtonNum>
                <ButtonNum getFirstNum={getFirstNum}>3</ButtonNum>
                <ButtonFunc getFunc={getFunc}>+</ButtonFunc>
            </div>
            <div className="wrapp-line">
                <ButtonSign addSign={addSign}>+/-</ButtonSign>
                <ButtonNum getFirstNum={getFirstNum}>0</ButtonNum>
                <ButtonDot getDot={getDot}>.</ButtonDot>
                <ButtonResult resultCalc={resultCalc}>=</ButtonResult>
            </div>

        </>
    )
}