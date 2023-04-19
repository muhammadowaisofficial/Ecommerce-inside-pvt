import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./HeaderModal.css";


function HeaderModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="default-btn orange-btn popupBox" onClick={handleShow}>
      <span>Request Info</span>
      </Button>

      <Modal className="header-main-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
      <div className="modal-content">
              <div className="popup-box-wrap">
                <div className="row">
                  <div className="col-lg-9 popup-images-wrap">
                    <div className="popup-image popup-image-1">
                      <img
                        data-src="<?php echo get_template_directory_uri(); ?>/assets/images/popup-image-1.webp"
                        alt=""
                        className="img-fluid lazy"
                      />
                    </div>
                    <div className="popup-image popup-image-2">
                      <img
                        data-src="<?php echo get_template_directory_uri(); ?>/assets/images/popup-image-2.webp"
                        alt=""
                        className="img-fluid lazy"
                      />
                    </div>
                    <div className="popup-image popup-image-3">
                      <img
                        data-src="<?php echo get_template_directory_uri(); ?>/assets/images/popup-image-3.webp"
                        alt=""
                        className="img-fluid lazy"
                      />
                    </div>
                    <div className="popup-image popup-image-4">
                      <img
                        data-src="<?php echo get_template_directory_uri(); ?>/assets/images/popup-image-4.webp"
                        alt=""
                        className="img-fluid lazy"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 popup-form-box-wrap">
                    <h3>
                      GET UPTO <br />
                      <span>75% OFF</span>
                      <br /> on all Services
                    </h3>
                    <p>*OFFER IS AVAILABLE FOR A LIMITED TIME!</p>
                    <div className="popup-form">
                      {/* <?php echo do_shortcode( '[gravityform id="2" title="false"]' ); ?> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </Modal.Header>
      </Modal>
    </>
  );
}

export default HeaderModal;
