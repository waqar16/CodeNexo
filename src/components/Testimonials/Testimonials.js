import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <>
      <section className=" py-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="fs-6 text-secondary mb-2 text-uppercase text-center">Happy Customers</h2>
              <p className="display-5 mb-4 mb-md-5 text-center">We deliver what we promise. See what clients are expressing about us.</p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container overflow-hidden">
          <div className="row gy-4 gy-md-0 gx-xxl-5">
            <div className=" col-12 col-md-4">
              <div className="card border-0 border-bottom border-primary shadow-sm">
                <div className="card-body p-4 p-xxl-5">
                  <figure>
                    <img
                      className="img-fluid rounded rounded-circle mb-4 border border-5"
                      loading="lazy"
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                      alt=""
                      style={{ width: '100px', height: '100px' }}
                    />
                    <figcaption>
                      <div className="bsb-ratings text-warning mb-3" data-bsb-star="5" data-bsb-star-off="0"></div>
                      <blockquote className="bsb-blockquote-icon mb-4">Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum euismod massa, at aliquet erat turpis quis diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</blockquote>
                      <h4 className="mb-2">Luna John</h4>
                      <h5 className="fs-6 text-secondary mb-0">UX Designer</h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="review-01 card border-0 border-bottom border-primary shadow-sm">
                <div className="card-body p-4 p-xxl-5">
                  <figure>
                    <img
                      className="img-fluid rounded rounded-circle mb-4 border border-5"
                      loading="lazy"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0FJEZshodcu8UFzdHQUdMz5t7BgdiGA2V9mQZ5aQL2LA_N8qGLPYfR3sYGJkydZqwg58&usqp=CAU"
                      alt=""
                      style={{ width: '100px', height: '100px' }}
                    />
                    <figcaption>
                      <div className="bsb-ratings text-warning mb-3" data-bsb-star="4" data-bsb-star-off="1"></div>
                      <blockquote className="bsb-blockquote-icon mb-4">Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum euismod massa, at aliquet erat turpis quis diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</blockquote>
                      <h4 className="mb-2">Mark Smith</h4>
                      <h5 className="fs-6 text-secondary mb-0">Marketing Specialist</h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 border-bottom border-primary shadow-sm">
                <div className="card-body p-4 p-xxl-5">
                  <figure>
                    <img
                      className="img-fluid rounded rounded-circle mb-4 border border-5"
                      loading="lazy"
                      src="https://static.vecteezy.com/system/resources/previews/026/408/914/non_2x/man-handsome-smile-face-isolated-fashion-portrait-t-shirt-white-happiness-hipster-background-lifestyle-photo.jpg"
                      alt=""
                      style={{ width: '100px', height: '100px' }}
                    />
                    <figcaption>
                      <div className="bsb-ratings text-warning mb-3" data-bsb-star="5" data-bsb-star-off="0"></div>
                      <blockquote className="bsb-blockquote-icon mb-4">Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum euismod massa, at aliquet erat turpis quis diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</blockquote>
                      <h4 className="mb-2">Luke Reeves</h4>
                      <h5 className="fs-6 text-secondary mb-0">Sales Manager</h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
