/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Song } from "@/types";


interface PlayerContentProps {
    song: Song
    songUrl: string;
}

const PlayerContent = () => {
    return ( 
        <div>
            Player Content!
        </div>
     );
}
 
export default PlayerContent;