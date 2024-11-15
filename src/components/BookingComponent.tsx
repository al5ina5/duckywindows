import axios from "axios";
import classNames from 'classnames';
import { useEffect, useState } from "react";
import validator from 'validator';
import Modal from "./Modal";
import Input from "./input";

export default function BookingComponent({ visible, onClose }) {

    const [state, setState] = useState<'complete' | 'loading' | 'error' | 'idle'>('idle')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [comments, setComments] = useState('')
    const [contactMethod, setContactMethod] = useState('text-message')

    const onSubmit = async (e) => {
        try {
            e.preventDefault()
            setState('loading')
            await axios.post('/api/booking', { name, phone, email, address, comments, contactMethod })
            setState('complete')
        } catch (error) {
            setState('error')
            // error state
        }
    }

    const reset = () => {
        setState('idle')
        setName('')
        setPhone('')
        setEmail('')
        setAddress('')
        setComments('')
    }
    const ready = name && validator.isMobilePhone(phone, 'en-US') && address && (email ? validator.isEmail(email) : true)

    useEffect(() => { setState('idle') }, [visible])

    return <>

        {/* <Modal visible={state === 'complete'} onClose={() => setState('idle')}>
            <div className="space-y-4 text-center">
                <p className="text-lg">Your information has been sent. Someone will reach out very soon.</p>
                <p className="text-lg">Thank you for choosing us.</p>
            </div>
        </Modal> */}

        <Modal visible={visible} onClose={onClose}>
            <form className="block space-y-8">
                <div className="space-y-2">
                    {/* <p className="font-medium opacity-50 text-center">Booking</p> */}
                    <p className="text-3xl font-serif font-bold">Complete your 30-second booking request.</p>
                    <p className="text-lg opacity-50">You can also <a className="underline">give us a call at 239 216 0011</a> to complete your booking over the phone.</p>
                </div>

                {state !== 'complete' && <>
                    <div className="space-y-4">
                        <Input autoFocus label="Name *" placeholder="Billybob Saunders" value={name} onChange={e => setName(e.target.value)} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="Email Address" placeholder="help@duckywindows.com" type='email' value={email} onChange={e => setEmail(e.target.value)} />
                            <Input label="Phone Number *" placeholder="239 216 0011" type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
                        </div>
                        <Input label="Home Address *" placeholder="2211 Sunshine Street, Naples FL, 34120" value={address} onChange={e => setAddress(e.target.value)} />

                        <div className="space-y-1">
                            <label htmlFor="contact-method" className="text-base opacity-50 font-medium">Preferred Contact Method</label>
                            <select value={contactMethod} onChange={e => setContactMethod(e.target.value)} name="contact-method" id="contact-method" className="border p-2 w-full rounded">
                                <option value="text-message">Text Message</option>
                                <option value="phone-call">Phone Call</option>
                                <option value="email">Email</option>
                            </select>
                        </div>

                        <Input label="Optional Additional Comments" placeholder="Can you guys clean my fish tank glass?" value={comments} onChange={e => setComments(e.target.value)} />
                    </div>

                    {state === 'error' && <p className="text-red-600 font-medium text-sm">Oops! Looks like an unexpected error occurred. Please try again later or <a href="tel:2392160011" className="underline">give us a call</a>. The robots are sorry about that!</p>}
                </>}

                <div className="bg-gray-100 border text-sm font-medium p-4 rounded text-gray-600 space-y-2">
                    <p>Once you complete you submit your data, we'll reach out via text message to complete the booking.</p>
                    <p>You'll be provided with a good-faith estimate based on the information provided, and the ability to make a partial retainer payment on your upcoming cleaning session.</p>
                </div>

                {state !== 'complete' && <>
                    <button onClick={onSubmit} disabled={!ready} className={classNames(!ready && "opacity-50 cursor-not-allowed", "bg-blue-500 border-b-2 border-blue-600 text-white w-full rounded p-2")}>Submit Information</button>
                </>}


                {state == 'complete' && <>
                    <div className="border-2 p-12 rounded text-center text-lg space-y-4">
                        <i className="fas fa-check-circle text-3xl text-green-400"></i>
                        <p className="font-medium opacity-50">Your information has been submitted.<br /> Thank you for choosing us.</p>
                        <button onClick={() => reset()} className="opacity-50 text-xs underline">Send another booking request</button>
                    </div>
                </>}
            </form>
        </Modal>
    </>
}