import Portal from './Portal'
import { AnimatePresence, motion } from 'framer-motion'

export default function Modal({ visible, onClose, children }) {
    return <>
        <AnimatePresence>
            {visible &&
                <Portal>
                    <motion.div
                        initial={{ opacity: '0' }}
                        animate={{ opacity: [0, 1] }}
                        exit={{ opacity: 0 }}
                        className="fixed z-50 inset-0 flex lg:items-center justify-center bg-black bg-opacity-90 p-6" onClick={() => onClose()}>
                        <motion.div
                            // initial={{ translateX:'-10' }}
                            // animate={{ opacity: [0, 1] }}
                            // exit={{ opacity: 0 }}
                            className="max-w-lg w-full h-auto bg-white rounded shadow-xl p-6 md:p-12 overflow-auto" onClick={e => e.stopPropagation()}>{children}</motion.div>
                    </motion.div>
                </Portal>
            }
        </AnimatePresence>
    </>
}
