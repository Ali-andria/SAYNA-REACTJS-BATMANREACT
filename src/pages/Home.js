import React from 'react'

function Home() {
    return (
        <header id="area">                       
            <div class="batman-home">
                <div class="container">			
                    <div class="content">                    
                        <p>Au nom de ses parents assassinés, Bruce Wayne mène une guerre éternelle contre les
                            criminels de Gotham City. Il est vengeur. Il est la nuit.</p>
                        <p class="h2">Il est Batman.</p>
                        <div class="home-btn">
                            <a href="#batman-cinema" class="default-btn">
                                VOIR LE HEROS
                                <span></span>
                            </a>
                            <a href="#nemesis" class="default-btn">
                                LES ADVERSAIRES
                                <span></span>
                            </a>
                        </div>                    
                    </div>
                    <div class="scroll-btn">
                        <img src="assets/Logos/flèche_down_header.png" alt="fleche down"/>
                    </div>			
                </div>                               
            </div>            
        </header>
    )
}

export default Home
