import Typed from 'react-typed'
import { motion } from 'framer-motion'
import BookingComponent from '../components/BookingComponent'
import { useState } from 'react'
import Portal from '../components/Portal'

export default function IndexPage() {

    const [showBookingComponent, setShowBookingComponent] = useState(false)

    return (
        <>
            <BookingComponent visible={showBookingComponent} onClose={() => setShowBookingComponent(false)} />

            {/* <Portal>
                <div className='fixed bottom-0 w-full z-10 p-6 bg-yellow-400'>
                    <div className='max-w-screen mx-auto'>
                        Special offer available for new customers.
                        Get your windows done for just $99.
                    </div>
                </div>
            </Portal> */}

            <div className="w-full bg-blue-600 text-white z-10  p-4">
                <div className="max-w-5xl mx-auto flex space-x-8">
                    <p className='flex-1 text-sm md:text-base '>To book your appointment, <a className='underline font-bold' href="tel:2392160011">give us call</a> or <button onClick={() => setShowBookingComponent(true)} className='underline font-bold' >complete 2 minute booking</button> online.</p>

                    <p className='space-x-4'>
                        <a href="tel:2392160011"><i className='fas fa-phone' /></a>
                        <button onClick={() => setShowBookingComponent(true)}><i className='fas fa-calendar' /></button>
                    </p>
                </div>
            </div>

            <div className='max-w-5xl mx-auto p-12 py-24 md:py-48 space-y-12'>

                <div className="flex flex-col md:flex-row gap-12">
                    <div>
                        <p className='text-5xl md:text-8xl font-serif font-bold text-blue-500'>Window washing in the Golden Gate Estates.</p>
                    </div>
                    <div>
                        <img className="w-32 md:w-96" src="/img/logo-2.png" alt="" />
                    </div>
                </div>

                <p className="opacity-50 text-3xl">
                    <Typed
                        strings={[
                            "See the world in a clearer light with our streak-free window washing service. Let us bring sparkle to your home with our professional window cleaning.",
                            "Leave the grime and dirt to us - we'll make your windows shine like new. Don't let dirty windows bring down your home's beauty - trust us to keep them clean.",
                        ]}
                        typeSpeed={40}
                    />
                </p>

            </div>

            <div className="p-12 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-white bg-gradient-to-tr from-blue-400 to-blue-600 shadow-xl rounded-2xl p-6 md:p-12 space-y-2">
                    <p className="text-4xl font-extrabold">Fast.</p>
                    <p className="opacity-75 text-xl md:text-2xl">Book your appointment in under 2 minutes and forget. Poof. Windows are clean. Like it was done by some ninjas.</p>
                </div>
                <div className="md:-mt-12">
                    <div className="text-white bg-gradient-to-b from-indigo-400 to-indigo-600 shadow-xl rounded-2xl p-6 md:p-12 space-y-2">
                        <p className="text-4xl font-extrabold">Friendly.</p>
                        <p className="opacity-75 text-xl md:text-2xl">Run by humans who live next-door to you. We strive to give you a pleasent and memorable experience, so you can count on us everytime.</p>
                    </div>
                </div>
                <div className="text-white bg-gradient-to-br from-purple-400 to-purple-600 shadow-xl rounded-2xl p-6 md:p-12 space-y-2">
                    <p className="text-4xl font-extrabold">Familiar.</p>
                    <p className="opacity-75 text-xl md:text-2xl">Ducky Windows is a 100% family-owned company based in right at home — in the heart of the Golden Gate Estates.</p>
                </div>
            </div>
            <div className='text-center space-y-8 p-12 pb-24 md:pb-48'>
                <div className="space-y-2">
                    <div className='text-3xl font-medium opacity-50'>Complete a 2-minute booking request.</div>
                    <div className='text-xl font-medium opacity-25'>First time buyer $10 window on average. </div>
                </div>
                <motion.button onClick={() => setShowBookingComponent(true)} animate={{ rotate: ['2deg', '-2deg', '2deg'], scale: [0.9, 1.1, 0.9] }} transition={{ repeat: Infinity, duration: 12 }} className="inline-block shadow-xl p-2 text-6xl font-serif font-extrabold rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600" href="">
                    <div className='bg-white p-3 md:p-6 px-6 md:px-12 text-3xl md:text-5xl font-extrabold rounded-2xl'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600'>Book Quote Now</span>
                    </div>
                </motion.button>

                <div>
                    {/* <p className='text-xl opacity-50 font-medium'><a href="tel:2399197712" className='underline'>239 919 7712</a></p> */}
                    <p className='text-lg opacity-50 font-medium'>or contact us anytime at<br className='block md:hidden' /> <a href="tel:2392160011" className='underline'>239 216 0011</a></p>
                    <p className='text-base opacity-40 font-medium'>Naples, Bonita Springs, and Beyond</p>

                </div>
            </div>

            <div className='bg-cover bg-center flex items-center justify-center p-24 md:p-48' style={{ backgroundImage: 'url("/img/blue-banner-2.png")' }}>
                <p className='text-blue-900 max-w-4xl mx-auto text-4xl md:text-7xl text-center md:text-8xl font-extrabold'>No streaks, grime, or bugs. Get it done right the first time.</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12 md:space-y-24 p-6 py-24 md:py-48">

                <div className="space-y-2 text-3xl md:text-4xl">
                    <p className="text-center font-medium text-blue-400">Cleaning is what we do.</p>
                    <p className="opacity-50 text-center font-medium text-blue-400">Let us show you, neighbor.</p>
                </div>


                <div className='space-y-8'>
                    {/* <p className='text-center text-3xl font-bold opacity-25 uppercase tracking-widest'>Our services</p> */}
                    <ul className="grid place-content-center sm:grid-cols-2 gap-8">
                        <li className="flex">
                            <div className="px-4 text-4xl md:text-5xl font-extralight text-blue-400 opacity-50">01.</div>
                            <div>
                                <div className="text-2xl font-bold">Windows</div>
                                <p className="text-xl max-w-xs py-2">All kinds of windows, any size on the first floor. No matter the grime, we'll make it look brand new.</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="px-4 text-4xl md:text-5xl font-extralight text-blue-400 opacity-50">02.</div>
                            <div>
                                <div className="text-2xl font-bold">Glass French Doors</div>
                                <p className="text-xl max-w-xs py-2">
                                    Some windows have features — that doesn't scare us. We'll get the glass between all the mullions to make sure your glass is crystal clear.
                                </p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="px-4 text-4xl md:text-5xl font-extralight text-blue-400 opacity-50">03.</div>
                            <div>
                                <div className="text-2xl font-bold">Sliding Glass Doors</div>
                                <p className="text-xl max-w-xs py-2">
                                    Sliding glass doors are like big windows — we'll make sure to treat it with care so you've got the best experience when walking out to your patio.
                                </p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="px-4 text-4xl md:text-5xl font-extralight text-blue-400 opacity-50">04.</div>
                            <div>
                                <div className="text-2xl font-bold">Fogged Glass</div>
                                <p className="text-xl max-w-xs py-2">
                                    Bathrooms tend to have fogged windows for privacy. We'll clean, ensuring to keep the fogging intact to keep your privacy at the forefront.
                                </p>
                            </div>
                        </li>
                        {/* <li className="flex">
                            <div className="px-4 text-4xl md:text-5xl font-extralight text-blue-400 opacity-50">05.</div>
                            <div>
                                <div className="text-xl font-bold">Deployment</div>
                                <p className="max-w-xs py-2">We build the right solution for your business. We
                                    craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                                </p>
                            </div>
                        </li> */}
                    </ul>
                    <p className='text-2xl opacity-25 text-center max-w-xl mx-auto'>Glass is our specialty. If you've got glass, we'll get it done. Just make sure you don't forget the glass is there, we don't want anyone getting hurt on their brand-new crystal clear doors. <span className='underline'>Yes, that was a joke.</span></p>
                </div>

            </div>

            <div className='bg-yellow-400 p-12 md:p-24'>
                <div className="mx-auto max-w-lg space-y-12">
                    <div className="space-y-8">
                        <div className="rounded-2xl overflow-hidden border-4 border-b-8 border-black transform -rotate-2">
                            <img className="rounded-2xl" src="/img/sam.jpg" alt="" />
                        </div>
                        <div className="text-2xl font-medium">
                            <p>Samuel Alsina</p>
                            <p className="text-sm opacity-50">Founder, Window Professional</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-medium opacity-50'>"Samuel Alsina has 5+ years of experience in the window washing industry. Known for his charisma and family-oriented work-style, Samuel has always strived to provide the friendliest services in Naples."</p>
                    </div>
                    {/* <div className="space-y-4">
                            <img className="w-full rounded-2xl" src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="" />
                            <div className="text-2xl font-medium">
                                <p>Isabella Alsina</p>
                                <p className="text-sm opacity-50">Billing, Dispatcher</p>
                            </div>
                        </div>
                
                        <div className="space-y-4">
                            <img className="w-full rounded-2xl" src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="" />
                            <div className="text-2xl font-medium">
                                <p>Sebastian Alsina</p>
                                <p className="text-sm opacity-50">Tech & Communications</p>
                            </div>
                        </div> */}
                </div>
            </div>

            <div>
                <div className="p-6 md:p-12 space-y-8">
                    <div className='flex gap-4 whitespace-nowrap flex-wrap font-medium'>
                        <button onClick={() => setShowBookingComponent(true)}>Book an Appointment</button>
                        <a href="tel:2392160011">Call us</a>
                        <a href="mailto:info@duckywindows.com">Email us</a>
                        {/* <a href=""><i className='fab fa-facebook'></i></a> */}
                        {/* <a href=""><i className='fab fa-twitter'></i></a> */}
                    </div>
                    <div className=' text-xs md:text-2xl flex items-center'>
                        <p className="flex-1 font-medium">🦆 Ducky Windows</p>
                        <p className="opacity-25 font-medium">Based in Naples, FL</p>
                    </div>
                </div>
            </div>

            {/* <div className='shadow-inner bg-black text-white'>
                <div className='p-12'>
                    <p className='text-8xl font-black'>Need a website like this one for your local buisness?</p>
                </div>
            </div> */}
        </>
    )
}
