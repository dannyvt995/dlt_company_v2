import React from 'react'

export default function TabService() {
  return (
    <section  style={{ opacity: 1 }} className="section_about-product">
    <div className="padding-global">
        <div className="container-medium">
            <div className="about-product_wrapper">
                <div className="about-product_left">
                    <div className="label">
                        <div className="text-styles-label">Our services</div>
                    </div>
                    <h2 className="text-styles-h2">
                        <strong>The Power of the Right Tools</strong>
                    </h2>
                </div>
                <div className="about-product_right">
                    <div className="text-styles-content">Ever tried driving a nail into the wall without a hammer? Then you know how crucial the right tools are.</div>
                    <div className="text-styles-content">We believe that software like ours should be just as essential on every construction site. From project managers to foremen to apprentices, our users save up to an hour per day.</div>
                    <h3 className="text-styles-h3">
                        <strong>That’s a productivity increase of </strong>
                        <span text-color="orange">
                            <strong>over 12%.</strong>
                        </span>
                    </h3>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
