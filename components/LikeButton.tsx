'use client'

import useAuthModalStore from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSessionContext, useUser as useSupaUser } from '@supabase/auth-helpers-react';
import { useRouter } from "next/navigation";
import { useState } from "react";



interface LikeButtonProps {
    songId: string;
}

const   LikeButton: React.FC<LikeButtonProps> = ({
    songId
}) => {
    const router = useRouter();
    const { supabaseClient } = useSessionContext();

    const authModal = useAuthModalStore();
    const { user } = useUser();

    const [isLiked, setIsLiked] = useState(false);

    return ( 
        <div>
            Like Button!
        </div>
     );
}
 
export default LikeButton;