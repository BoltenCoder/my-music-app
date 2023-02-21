import React,{ useState } from 'react';
import OnlineMode from './OnlineMode';
import MasterVolume from './MasterVolume';
import SoundQuality from './SoundQuality';


export default function Dashboard() {

    return(<div>
        {/* TODO: style text color, font, margins */}
        <div className="Welcome">Welcome User!</div>
        <OnlineMode />
        <MasterVolume />
        <SoundQuality />
        <h3><strong>System notifications:</strong></h3>
    </div>)
}