import Typed from 'react-typed'
import { motion } from 'framer-motion'
import BookingComponent from '../components/BookingComponent'
import { useState } from 'react'

export default function IndexPage() {

    const [showBookingComponent, setShowBookingComponent] = useState(false)
    return (
        <>
            <BookingComponent visible={showBookingComponent} onClose={() => setShowBookingComponent(false)} />

            <div className="w-full bg-blue-600 text-white z-10  p-4">
                <div className="max-w-5xl mx-auto flex space-x-8">
                    <p className='flex-1 text-sm md:text-base '>To book your appointment, <a className='underline font-bold' href="tel:2392160011">give us call</a> or <button onClick={() => setShowBookingComponent(true)} className='underline font-bold' >complete 2 minute booking</button> online.</p>

                    <p className='space-x-4'>
                        <i className='fas fa-phone'></i>
                        <i className='fas fa-calendar'></i>
                    </p>
                </div>
            </div>


            <div className='max-w-5xl mx-auto p-12 py-24 md:py-48 space-y-12'>

                <div className="flex flex-col md:flex-row gap-12">
                    <div>
                        <p className='text-6xl md:text-8xl font-serif font-bold text-blue-500'>Window washing in the Golden Gate Estates.</p>
                    </div>
                    <div>
                        <img className="w-32 md:w-96" src="/img/duck.png" alt="" />
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
                <div className='text-3xl font-medium opacity-25'>Complete a 2-minute booking request.</div>
                <motion.button onClick={() => setShowBookingComponent(true)} animate={{ rotate: ['2deg', '-2deg', '2deg'], scale: [0.9, 1.1, 0.9] }} transition={{ repeat: Infinity, duration: 12 }} className="inline-block shadow-xl p-2 text-6xl font-serif font-extrabold rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600" href="">
                    <div className='bg-white p-3 md:p-6 px-6 md:px-12 text-3xl md:text-5xl font-extrabold rounded-2xl'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600'>Book Now</span>
                    </div>
                </motion.button>

                <div>
                    {/* <p className='text-xl opacity-50 font-medium'><a href="tel:2399197712" className='underline'>239 919 7712</a></p> */}
                    <p className='text-lg opacity-50 font-medium'>or contact us anytime at<br className='block md:hidden' /> <a href="tel:2399197712" className='underline'>239 919 7712</a></p>
                    <p className='text-base opacity-40 font-medium'>Naples, Bonita Springs, and Beyond</p>

                </div>
            </div>

            <div className='h-96 bg-cover bg-center flex items-center justify-center p-12' style={{ backgroundImage: 'url("/img/blue-banner.jpg")' }}>
                <p className='text-blue-900 text-7xl text-center md:text-8xl font-extrabold'>Get it done right.</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12 md:space-y-24 p-6 py-24 md:py-48">

                <div className="space-y-2 text-3xl md:text-4xl">
                    <p className="text-center font-medium text-blue-400">Cleaning is what we do.</p>
                    <p className="opacity-50 text-center font-medium text-blue-400">Let us show you, neighbor.</p>
                </div>

                <ul className="grid place-content-center sm:grid-cols-2 gap-8">
                    <li className="flex">
                        <div className="px-4 text-4xl md:text-5xl font-extralight text-blue-400 opacity-50">01.</div>
                        <div>
                            <div className="text-xl font-bold">Windows</div>
                            <p className="max-w-xs py-2">We love numbers! We collect data and insights, analyze
                                them then take the time to learn about your objectives, ask the right questions to understand your
                                business.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="px-4 text-4xl md:text-5xl font-extralight text-blue-400 opacity-50">02.</div>
                        <div>
                            <div className="text-xl font-bold">Glass French Doors</div>
                            <p className="max-w-xs py-2">Solutions are born from proper research, hard work, and
                                strong strategy. We build data-driven roadmaps for every project to make pave the way to success.
                            </p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="px-4 text-4xl md:text-5xl font-extralight text-blue-400 opacity-50">03.</div>
                        <div>
                            <div className="text-xl font-bold">Sliding Glass Doors</div>
                            <p className="max-w-xs py-2">We design the right solution for your business. We
                                craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                            </p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="px-4 text-4xl md:text-5xl font-extralight text-blue-400 opacity-50">04.</div>
                        <div>
                            <div className="text-xl font-bold">Fogged Glass</div>
                            <p className="max-w-xs py-2">We build the right solution for your business. We
                                craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                            </p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="px-4 text-4xl md:text-5xl font-extralight text-blue-400 opacity-50">05.</div>
                        <div>
                            <div className="text-xl font-bold">Deployment</div>
                            <p className="max-w-xs py-2">We build the right solution for your business. We
                                craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                            </p>
                        </div>
                    </li>
                </ul>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                        <div className="rounded-2xl overflow-hidden p-2 rainbow bg-orange-500">
                            <img className="rounded-2xl" src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="" />
                        </div>
                        <div className="text-2xl font-medium">
                            <p>Samuel Alsina</p>
                            <p className="text-sm opacity-50">Founder, Window Professional</p>
                        </div>
                    </div>

                    {/* <div className="space-y-4">
                        <img className="w-full rounded-2xl" src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="" />
                        <div className="text-2xl font-medium">
                            <p>Isabella Alsina</p>
                            <p className="text-sm opacity-50">Billing, Dispatcher</p>
                        </div>
                    </div> */}

                    <div className="space-y-4">
                        <img className="w-full rounded-2xl" src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="" />
                        <div className="text-2xl font-medium">
                            <p>Sebastian Alsina</p>
                            <p className="text-sm opacity-50">Tech & Communications</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="p-6 md:p-12 space-y-8">
                    <div className='flex gap-4 whitespace-nowrap flex-wrap font-medium'>
                        <a href="">Book an Appointment</a>
                        <a href="">Call us</a>
                        <a href="">Email us</a>
                        <a href=""><i className='fab fa-facebook'></i></a>
                        <a href=""><i className='fab fa-twitter'></i></a>
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
