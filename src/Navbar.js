import netLOgo from './netflix.jpg'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <section>
                
                    <h1>NETFLIX</h1>

            <div className="bot">
                <button className="black">
                <select>
                    <option>English</option>
                    <option>French</option>
                </select>
            </button>
            <button className="but">Sign In</button>
            </div> 
                
            </section>
           
            
            <div className="dark">
                <p>Unlimited films, TV programmes and more</p>
                <h4>Watch anywhere.cancel at any time.</h4>
                <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                <input type="email" placeholder="Email address"/>
                <button className="but">Get Started  </button>
            </div>
            
        </nav>
     );
}
 
export default Navbar;
