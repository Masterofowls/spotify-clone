/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose} from "react-icons/io";

interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title: string;
    children: React.ReactNode;
    description: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onChange,
    title,
    children,
    description
}) => {
    return (
    <Dialog.Root
        open={isOpen}
        defaultOpen={isOpen}
        onOpenChange={onChange}
    >
        <Dialog.Portal>
            <Dialog.Overlay
            className="
                bg-neutral-900/90
                background-blur-sm
                fixed
                inset-0
    " />
        <Dialog.Content
            className="
                fixed
                drop-shadow-md
                border
                border-neutral-700
                top-1/2
                left-1/2
                max-h-full
                h-full
                md:h-auto
                md:max-h-[85vh]
                w-full
                md:w-[90vw]
                md:max-w-[450px]
                translate-x-[-50%]
                translate-y-[-50%]
                rounded-md
                bg-neutral-800
                p-[25px]
                focus:outline-none
            "
        >
            <Dialog.Title
            className="
                text-xl
                text-center
                font-bold
                mb-4
            ">
                {title}
            </Dialog.Title>
            <Dialog.Description
            className="
                mb-5
                text-sm
                leading-normal
                text-center
            ">
                {description}
            </Dialog.Description>
            <div>
                {children}
            </div>
            <Dialog.Close asChild>
                <button
                className="
                    text-neutral-400
                    hover:text-white
                    absolute
                    top-[10px]
                    right-[10px]
                    inline-flex
                    h-[25px
                    w-[25px]
                    appearance-none
                    items-centerjustify-center
                    rounded-full
                    focus:outline-none
                    ]
                ">
                    <IoMdClose />
                </button>
            </Dialog.Close>
        </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
    )
}

export default Modal;