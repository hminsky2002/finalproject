import React, {useEffect, useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';

const RadioStream = () =>{
    const [date,setDate] = useState(new Date());
    const [currentProgram,setCurrentProgram] = useState('')

    useEffect(() => {
        const getCurrent = async() =>{
            const response = await fetch('/api/getPrograms/curr/getCurr',{
                headers:{
                    'day': date.getDay(),
                    'time': date.getHours()
                }
            })
            const json = await response.json();
            if (response.ok){
                if(json.hasOwnProperty('programName')) {
                    setCurrentProgram(json.programName)
                }
                else{
                    setCurrentProgram("You're Listening to the Juke!")
                }
            }
        }

        getCurrent()
    });


    return(

        <div className="player-container">
            <h2>Live Now: {currentProgram}</h2>
        <ReactAudioPlayer
        src="https://wnyuicecasttestserver.tk/wnyu128.mp3"
        autoPlay
        controls
        />
            <div>
                <p> Time : {date.toLocaleTimeString()}</p>
                <p> Date : {date.toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export default RadioStream