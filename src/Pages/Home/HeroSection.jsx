

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
                        Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Molestias,
                         ab dignissimos sapiente culpa commodi vitae temporibus<br/> 
                        quibusdam laboriosam, <br/>tempore voluptatibus dicta veniam accusamus
                         facilis sed <br/>tempora aut modi ullam inventore.
                        <br />
                        Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.
                         Qui et quia corporis vel <br/>esse molestias laborum velit deleniti 
                         reiciendis odit quisquam<br/> recusandae, ad eum officia.
                         <br/>Earum nemo aspernatur sit possimus!
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