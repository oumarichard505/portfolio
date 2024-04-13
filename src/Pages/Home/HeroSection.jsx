import img from "./img/hero_img.jpg"

function HeroSection(){
    return(
      <section id="hero--section" className="hero--section">
        <div className="hero--section-content--box">
            <div className="hero--section--content">
                <p className="hero--section--title">
                     Hello, I am Richard Ouma
                     </p>
                     <h1>
                        <span className="hero--section--title--color">Full Stack</span> 
                        <br /> Developer
                     </h1>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ab dignissimos sapiente culpa commodi vitae temporibus quibusdam laboriosam, tempore voluptatibus dicta veniam accusamus facilis sed tempora aut modi ullam inventore.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui et quia corporis vel esse molestias laborum velit deleniti reiciendis odit quisquam recusandae, ad eum officia. Earum nemo aspernatur sit possimus!
                     </p>

            </div>
            <button className="btn btn-primary">Get in touch</button>
        </div>

        <div className="her--section--img">
            <img src="./img/hero_img.jpg" alt="" />
        </div>
      </section>
    );
    
}

export default HeroSection