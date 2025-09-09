import React ,{useState} from "react";
import img from '../../assets/subscribe-img.png'
import './subscribe.css'
import { HOST_NAME } from "../../../globals";

const currencies = [
    {
        name:'XAF',
        amt:'6,000'
    },
    {
        name:'NGN',
        amt:'15,000'
    },
    {
        name:'kes',
        amt:'1,300'
    },
    {
        name:'GHS',
        amt:'150'
    },
    {
        name:'ZER',
        amt:'190'
    },
    {
        name:'EGT',
        amt:'430'
    },
    {
        name:'SAF',
        amt:'7,000'
    },
    {
        name:'DRC',
        amt:'1,800'
    },
]

const Subscribe = () => {

    const [activeCurrency , setActiveCurrency] = useState({name:'XAF' ,amt:'6,000'})
    const [loading ,setLoading] = useState(false)
    const [error ,setError] = useState('')
    const [option ,setOption] = useState('')
    const [info ,setInfo] = useState({
        name:'',
        phone:'',
        account:'',
        amount:''
    })

    async function subscribe(e){
        e.preventDefault()
        setError('')
        setLoading(true)
            
        try{    
            const response = await fetch(`${HOST_NAME}/api/subscribe` ,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({...info})
            })
            const data = await response.json()
            if(response.ok){
                // payment validation page
            }else{
                setError(data.error)
            }
        }
        catch(e){
            console.log(e.message);
            setError('Verify your connection !')
            
        }finally{
            setLoading(false)
        }
    }

    return(
        <React.Fragment>

        <div className="subscribe-page">
            <div className="subscribe-header">
                <div className="subs-title">
                    <h2>Subscribe to unlock Your Coding Journey</h2>
                    <p>Access labs, challenges and live sessions just for $10. <br/><br/>
                    <strong>🔥 First 100 users get bonus points!</strong></p>
                </div>
                <div className="subs-img">
                    <img src={img} alt="learning" />
                </div>                
            </div>

            <div>
                <div className="currency-container">
                    <span className="currency-block">Currency: USD $10</span>
                    {currencies.map(currency => <span className={activeCurrency.name == currency.name ? 'currency-block active-currency':"currency-block"} key={currency.name}>{currency.name} {currency.amt}</span>)}
                    <span> You will be charged: {activeCurrency.amt}{activeCurrency.name} </span>
                </div><br/>
                <div className="subs-adv-container">
                    <div className="subs-adv">
                        <span>☑</span>
                        <div>
                            <b>Practive hands on with real example</b>
                            <span>Unlimited access to to coding labs</span>
                        </div>
                    </div>

                    <div className="subs-adv">
                        <span>🚀</span>
                        <div>
                            <b>Access project submission and ranking</b>
                            <span>Build portfolio ready projects</span>
                        </div>
                    </div>

                    <div className="subs-adv">
                        <span>🎖</span>
                        <div>
                            <b>Earn points and badges on challenges</b>
                            <span>Stay motivated as you climb the ranks</span>
                        </div>
                    </div>

                    <div className="subs-adv">
                        <span><i className="bi bi-users"></i></span>
                        <div>
                            <b>Participate in live sessions with mentors</b>
                            <span>Ask questions, get feedbacks</span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h4 style={{textIndent:'50px'}}>Payment Options</h4>
                <div className="payment-option-container">
                    <div className="payment-option">
                        <span>MTN Mobile Money</span>
                        <span>Yellow</span>
                    </div>
                    <div className="payment-option">
                        <span>Orange Money</span>
                        <span>Orange</span>
                    </div>
                    <div className="payment-option">
                        <span>Bank Transfer</span>
                        <span>Local</span>
                    </div>
                    <div className="payment-option">
                        <span>Debit/Credit Card</span>
                        <span>Visa . Master Card</span>
                    </div>
                </div>
            </div>

            <div>
                <h4 style={{textIndent:'50px'}}>Payment details</h4>
                <form action="" onSubmit={subscribe}>
                <div className="payment-detail-container">
                    <div>
                        <span>Account Name</span>
                        <input 
                            type="text" 
                            placeholder="The User Name"
                            value={info.name}
                            onChange={e=>setInfo({...info, name:e.target.value})}
                            required
                        />
                    </div>

                    <div>
                        <span>Amount</span>
                        <input type="text" disabled value={activeCurrency.amt} />
                    </div>

                    <div>
                        <span>Internship Program</span>
                        <input type="text" disabled value={'Front-end development'} />
                    </div>

                    <div>
                        <span> Duration</span>
                        <input type="text" disabled value={'1 month'} />
                    </div>
                </div>
                {/* <div>
                    <span>Account Number | Card Number</span>
                    <input type="text" />
                </div> */}
                <br />
                <center>
                    <div style={{textAlign:'center' ,color:'crimson'}}>{error && error}</div>
                    <button disabled={loading}>Subscribe</button>
                </center>
                </form>
            </div><br /><br /><br /><br /><br />
        </div>

        </React.Fragment>
    )
}

export default Subscribe