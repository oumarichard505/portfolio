

function HeroSection(){
    return(
      <section id="hero--section" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="hero--section--title">
                     Hello, I am Richard Ouma
                     </p>
                     <h1>
                        <span className="hero--section--title--color">Full Stack</span> 
                        <br /> Developer
                     </h1>
                     <p>
                     Meet a dynamic software engineer crafting elegant solutions to complex problems.
                     With a passion for innovation, they excel in developing robust, scalable software systems <br />
                     across various technologies. Thriving in collaborative environments, they leverage exceptional communication skills to 
                     drive project success. Committed to continuous learning and excellence, they tackle challenges head-on, delivering exceptional results.
                     </p>

            </div>
            <button className="btn btn-primary">Get in touch</button>
        </div>

        <div className="hero--section--img">
            <img src="./img/hero_img.jpg" alt="" />
        </div>
      </section>
    );
    
}

export default HeroSection