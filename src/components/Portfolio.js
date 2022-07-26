
export default function Portfolio() {
  return (
    <section className="component">
    <div id="Work" className="component-title">
        <h2>Work</h2>
    </div>

    <div className="component-info-work">
        <div className="work-big-box">
            <figure className="figure">
                <div className="box-heading">
                    <h3>Project 2: Let's Party!</h3>
                    <a target="_blank" href="https://morning-reef-54412.herokuapp.com/" rel="noopener noreferrer" >Kids party ideas blog</a>
                </div>
            </figure>
        </div>

        <div className="work-small-boxes">

            <div>
                <figure className="figure-half bg-image-1">
                    <div className="box-heading-half">
                        <h3>Project 1: Search it</h3>
                        <a target="_blank" href="https://kyliegilbert.github.io/Searchit/" rel="noopener noreferrer">Weather Forecast</a>
                    </div>
                </figure>
            </div>

            <div>
                <figure className="figure-half bg-image-2">
                    <div className="box-heading-half">
                        <h3>ecommerce</h3>
                        <a target="_blank" href="https://github.com/kyliegilbert/ecommerce" rel="noopener noreferrer">Backend ecommerce program</a>
                    </div>
                </figure>
            </div>

            <div>
                <figure className="figure-half bg-image-3">
                    <div className="box-heading-half">
                        <h3>Tech blog</h3>
                        <a target="_blank" href="https://agile-caverns-78697.herokuapp.com/" rel="noopener noreferrer">Tech blog using MCV architecture</a>
                    </div>
                </figure>
            </div>

            <div>
                <figure className="figure-half bg-image-4">
                    <div className="box-heading-half">
                        <h3>Weather Dashboard</h3>
                        <a target="_blank" href="https://kyliegilbert.github.io/Weather-Dashboard/" rel="noopener noreferrer">Weather Forcasting app</a>
                    </div>
                </figure>
            </div>
        </div>

        
    </div>

    </section>

  )


}