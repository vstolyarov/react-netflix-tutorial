import React from 'react'
import Img from '../images/tab-1-pic.png'
import styled from 'styled-components'

function TabContentOne() {
    return (
        <TabContentContainer>
            <div className="container">
                <div className="tab-content">
                    <span style={{marginBottom: '2rem'}}>
                        If you decide Neflix isn't for you - no problem.No commitement. Cancel online anytime.
                    </span>
                    <br />
                    <button>try it now</button>
                    <img src={Img} alt={"Img"} />
                </div>
            </div>
        </TabContentContainer>
    )
}

export default TabContentOne;

//Main Conent Container

const TabContentContainer = styled.div`
    background: var(--main-deep-dark);
    
    .container {
        margin: 0 10%;
    }
    
    img {
        width: 31.875rem;
    }

    .tab-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        align-items: center;
        font-size: 2rem;
        font-padding: 2.5rem;
    }
`;