import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer : {
        text : "Let's hit the beach",
        iconName :'sun'
    },
    winter : {
        text  : 'Burr, it is chilly',
        iconName : 'snowflake'
    }
};

const getSeason = (lat,month) => {

    let season = '';

    if(month > 2 && month < 9){
       season = ( lat > 0 ) ? 'summer' : 'winter';
    }else{
        season = ( lat > 0 ) ? 'winter' : 'summer';
    }

    return season;
}

const seasonDisplay = (props) => {

    const lat = props.lat,
          currentMonth = new Date().getMonth(),
          season = getSeason(lat,currentMonth),
          {text,iconName} =  seasonConfig[season];
    
    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )
}

export default seasonDisplay;