import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="gana">
        {/* <div className="img-bg">
                <img src="/Images/image-13.png" alt="" />
            </div> */}
        <div className="gana-bgimg">

            <div className="gana-logo">
            <img className='gnana-logo' src="./Images/gana-logo.png" alt="" />
            </div>

            <div className="border">
                <p>g</p>
            </div>

            <div className="info-lists">
            <div className="ganalist-1">

                {/* List-1 */}
                <div className="list-1">
                <h2>Discover</h2>
                <p>Editor's Choice</p>
                <p>popular music</p>
                <p>new release songs</p>
                <p>upcoming music</p>
                </div>

                {/* List-2 */}
                <div className="list-2">
                <h2>Helps And Faq</h2>
                <p>My Info Here</p>
                <p>Help centre</p>
                <p>News & Blog</p>
                <p>Hire us</p>
                </div>

                {/* List-3 */}
                <div className="list-3">
                <h2>Meet Gana</h2>
                <p>About gana</p>
                <p>Careers</p>
                <p>Privacy Policy</p>
                <p>Sitemap</p>
                </div>

                {/* List-4 */}
                <div className="list-4">
                <h2>Subscribe Now</h2>
                <p>Subscription our newsletter for get every <br /> update form gana</p>
                <div className="messageBox">

  <div className="fileUploadWrapper">
    <label htmlFor="file">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337">
      </svg>
      <span className="tooltip">Add an image</span>
    </label>
    <input type="file" id="file" name="file" />
  </div>
  <input required="" placeholder="Enter your mail" type="text" id="messageInput" />
  <button id="sendButton">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
      <path
        fill="none"
        d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="33.67"
        stroke="#6c6c6c"
        d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
      ></path>
    </svg>
  </button>
</div>

<p>Agree with our terms & conditions</p>
                </div>
            </div>

            </div>
            <div className="border-3">
                <p>gi</p>
            </div>
            <div className="text-genres">
                <p>Copyright © 2023 gana All Rights Reserved.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
