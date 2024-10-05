import React from 'react'

const CardsHappystudent = () => {
  return (
<>
<section className="fact-one pt-pb mt-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 p-0">
        <div className="fact-one__item text-center bg-color1">
          <span>
            <i className="fa-solid fa-users text-white" />
          </span>
          <div className="fact-one__count">
            <span className="count-box counted">
              <span className="count-text" data-stop="30.3" data-speed={1500}>
                20,000
              </span>
            </span>
            +
          </div>
          <h3 className="fact-one__title">Happy Students</h3>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 p-0">
        <div className="fact-one__item text-center bg-color2">
          <span>
            <i className="fa-solid fa-trophy text-white" />
          </span>
          <div className="fact-one__count">
            <span className="count-box counted">
              <span className="count-text" data-stop="40.5" data-speed={1500}>
                25
              </span>
            </span>
            +
          </div>
          <h3 className="fact-one__title">Best Awards Won</h3>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 p-0">
        <div className="fact-one__item text-center bg-color3">
          <span>
            <i className="fa-solid fa-chair text-white" />
          </span>
          <div className="fact-one__count">
            <span className="count-box counted">
              <span className="count-text" data-stop="88.9" data-speed={1500}>
                1500+
              </span>
            </span>
          </div>
          <h3 className="fact-one__title">Batches Completed</h3>
        </div>
      </div>
    
    </div>
  </div>
</section>

</>
  )
}

export default CardsHappystudent
