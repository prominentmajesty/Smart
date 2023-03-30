import React, {useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import Header from './../../components/Header';
import smart_2 from './../../assets/newImages/smart_2.jpg';
import smart_5 from './../../assets/newImages/smart_5.jpg';
import smart_4 from './../../assets/newImages/smart_4.jpg';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'material-icons/iconfont/material-icons.css';
import './styles.css';
import Header2 from './../../components/Footer2';
//https://collegeinfogeek.com/personal-website-examples/
//https://blog.hubspot.com/marketing/best-personal-websites
//https://www.quinntonharris.com/about

// https://www.uxpin.com/studio/blog/media-queries-responsive-web-design/
// My GitHub Personal Access=> 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

const Homepage = props =>{

    useEffect(() => {
        
         const timer = setTimeout(() => {
            const myslide = document.querySelectorAll('.myslider');
            let counter = 1;
            slidefun(counter);

            let timer = setInterval(autoslide,22000);
            function autoslide(){
                counter += 1;
                slidefun(counter);
            }
            function resetTimer(){
                clearInterval(timer);
                timer = setInterval(autoslide,22000);
            }
            function slidefun(n){
                let i;
                for(i=0;i<myslide.length;i++){
                    myslide[i].style.display="none";
                }  
                if(n > myslide.length){
                    counter = 1;
                }
                if(n < 1){
                    counter = myslide.length;
                }
                myslide[counter - 1].style.display = "block";
                //dot[counter - 1].classList.add('active');
            }
         },22000);
            return () => {
            clearTimeout(timer) 
        }
     }, []);
    return(
        <>
            <Header/>
            <section className="slider">
                <div className="myslider fade"
                    style={{
                        display:'block',
                        backgroundImage : `url(${smart_2})`
                    }}>
                    <div className="text__holder"
                        style={{
                            position:'relative',
                            height:'100%',
                            width:'100%',
                            margin:'0px, 0px, 0px, 0px',
                            backgroundColor: 'rgba(51,51,51,.3)'
                        }}>
                        <div className="text__ t_"> 
                            <h2 className="bold_font_" 
                                style={{
                                    marginTop:'0px',
                                    marginBottom:'0px',
                                    color: 'white',
                                }}>I'm Okere Wisdom Chinedum, Nwa Samykere
                            </h2>
                            <h4 className="small_font_" style={{fontFamily : 'Odibee Sans'}}>I get the culture i create..</h4>
                        </div>
                        <div className="text_"> 
                            <h4 className="small_font__"
                                style={{
                                    marginTop:'0px',
                                    marginBottom:'0px'
                                }}> 
                                <Typewriter
                                    options={{
                                        strings: [`I'm smart, i have the ability to adapt to a new enviroment and acquire new skills`],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h4>
                        </div>
                    </div> 
                </div>
                <div className="myslider fade"
                    style={{
                        backgroundImage : `url(${smart_5})`
                    }}>
                    <div className="text__holder"
                        style={{
                            position:'relative',
                            height:'100%',
                            width:'100%',
                            margin:'0px, 0px, 0px, 0px',
                            backgroundColor: 'rgba(51,51,51,.3)'
                        }}>
                        <div className="text__ t_"> 
                            <h2 className="bold_font_" 
                                style={{
                                    marginTop:'0px',
                                    marginBottom:'0px',
                                    color: 'white',
                                }}>Yes !! If you know me, you'll know my story.
                            </h2>
                            <h4 className="small_font_" style={{fontFamily : 'Odibee Sans'}}>Liberation is a practice..</h4>
                        </div>
                        <div className="text_"> 
                            <h4 className="small_font__"
                                style={{
                                    marginTop:'0px',
                                    marginBottom:'0px'
                                }}>
                                <Typewriter
                                    options={{
                                        strings: ['I become the best by sustaining the ability to handle the worst'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h4>
                        </div>
                    </div> 
                </div>
                <div className="myslider fade"
                    style={{
                        backgroundImage : `url(${smart_4})`
                    }}>
                    <div className="text__holder"
                        style={{
                            position:'relative',
                            height:'100%',
                            width:'100%',
                            margin:'0px, 0px, 0px, 0px',
                            backgroundColor: 'rgba(51,51,51,.3)'
                        }}>
                        <div className="text__ t_"> 
                            <h2 className="bold_font_" 
                                style={{
                                    marginTop:'0px',    
                                    marginBottom:'0px',
                                    color: 'white',
                                }}> I'm an Administrator & a human rights Activist
                            </h2>
                            <h4 className="small_font_">who believes in equity..</h4>
                        </div>
                        <div className="text_"> 
                            <h4 className="small_font__"
                                style={{
                                    marginTop:'0px',
                                    marginBottom:'0px'
                                }}>
                                <Typewriter
                                    options={{
                                        strings: ['Seeks the promotion & protection of civil, political, cultural, economic & social rights of people'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /> 
                            </h4>
                        </div>
                    </div> 
                </div>
            </section>
            <Header2 />
        </>
    );
};

export default Homepage;