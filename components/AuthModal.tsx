/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
"use client"

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";

import Modal from "./Modal";
import { useRouter } from "next/navigation";

import {  Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModalStore from "@/hooks/useAuthModal";
import { useEffect } from "react";

const AuthModal = () => {
    const SupabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();
    const { onClose, isOpen } = useAuthModalStore();

    useEffect(() => {
        if (session) {
            router.refresh();
    onClose()
        }
    },  [session, router, onClose]);

    const  onChange =(open: boolean) => {
        if (!open) {
            onClose();
        }
    }

    return (
        <Modal
            title = "Welcome back"
            description = "Login to your account"
            isOpen = {isOpen}
            onChange={onChange}
        >
            <Auth
                theme="dark"
                magicLink
                providers={["github"]}
                supabaseClient={SupabaseClient}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: "#404040",
                                brandAccent: "#22c55e",
                            },
                        },
                    }
                }}
            />
            </Modal>
    );
};

export default AuthModal;