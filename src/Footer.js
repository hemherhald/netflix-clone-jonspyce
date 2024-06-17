const Footer = () => {
    return ( 
        <div className="footer"> 
        <footer>
            <section>
                    <a href="#">Questions?Contact us.</a>
            </section>
            <div className="feet">
                
                <section>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Ways to Watch</a></li>
                        <li><a href="#">Corporate Information</a></li>
                        <li><a href="#">Legal Notices</a></li>
                        <li><a href="#">Help Centre</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Only on Netflix</a></li>
                    </ul>
                </section>

                <section>
                    <ul>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Redeem gift cards</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Speed Test</a></li>
                        <li><a href="#">Advert choices</a></li>
                        <li><a href="#">Media Centre</a></li>
                        <li><a href="#">Buy gift cards</a></li>
                        <li><a href="#">Cookie Preferences</a></li>
                        <li><a href="#">Legal Guarantee</a></li>
                    </ul>
                </section>
            </div>

            <div className="foot">
            <button className="black">
                <select>
                    <option>English</option>
                    <option>French</option>
                </select>
            </button>
            <h4 >Netflix Nigeria</h4>
            </div>
        </footer>

        </div>
     );
}
 
export default Footer;