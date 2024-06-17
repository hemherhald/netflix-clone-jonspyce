import netLogo from './net4.jpg'
import nettLogo from './net2.jpg'
import netsLogo from './net3.jpg'
import netaLogo from './net1.jpg'
const Body = () => {
    return ( 
        <div>
            <section className="color-sec">
                <div>
                    <h1>Enjoy on your TV</h1>
                <h2>Watch on smart TVs,Playstation, 
                    Xbox,Chromecast,Apple TV,Blu-ray,
                    players,and more.
                </h2>
                </div>
                <div>
                    <img src={netLogo} alt='net1' className='net'/>
                </div>     
            </section>
            <section className="color-sec">
                <div>
                  <img src={nettLogo} alt='net2' className='net'/>
                </div>
                <div>
                    <h1>Download your shows to watch offline</h1>
                    <h4>Save your favourites easily and always have something to watch</h4>
                </div>
            </section>
            <section className="color-sec">
                
                <div>
                    <h1>Watch everywhere</h1>
                    <h2>Stream unlimited movies and TV shows 
                        on your phone,tablet,laptop,and TV.
                    </h2>
                </div>
               <div>
                   <img src={netaLogo} alt='net2' className='net'/>
                </div>
            </section >
            <section className="color-sec">
                <div>
                   <img src={netsLogo} alt='net3' className='net' />
                </div>
                <div>
                    <h1>Create profiles for kids</h1>
                    <h2>
                        Send kids on adventures with their 
                        favourites characters in a space made
                        just for them- free with your membership.
                    </h2>
                </div>
                
            </section>
            
            <section className="color-sec">
                <div>
                    <div className="ques-net">
                <h1>Frequently Asked Questions</h1>
                <ul>
                    <li className="one"> What is Netflix?</li>
                    <li className="two"> How much does Netflix cost?</li>
                    <li className="three">Where can i watch?</li>
                    <li className="four">Howw do i cancel?</li>
                    <li className="five">What can i watch on Netflix?</li>
                    <li className="six">Is Netflix good for kids?</li>
                </ul>
            </div>
            <div className="message-net">
                <h4>Ready to watch? Enter your email
                    to create or restart your membership.
                </h4>
                <h1 className="cen">
                    <input type="email" placeholder="Email address"/>
                <button className="but">Get Started  </button>
                </h1>
                
            </div>
                </div>
            
            </section>
            
        </div>
     );
}
 
export default Body;