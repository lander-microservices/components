import React, { useEffect } from "react";
import "./index.scss";

export default function Footer({
  privacyPolicyRoute,
  termsAndConditionsRoute,
  partnerListRoute,
  eventID,
  footerTitle,
  fullName,
}) {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div class="logoholder">
              <div class="logo">
                <img src="/assets/images/logo.png" alt="logo" />
                <div class="sitename">
                  <h1>Health-benefits.co</h1>
                  <h2>a non-government aca site</h2>
                </div>
              </div>
              <hr className="horizontal" />
            </div>
            <small>
              Disclaimer: Health-benefits.co is a referral source that provides
              information and access to a helpline to match consumers with
              companies that may provide certain insurance coverage to them.
              qualifyaca.com does not act as an insurance broker and does not
              make decisions about insurance coverage that may be available to
              you. qualifyaca.com doesn’t promise a specific outcome or the
              results you may achieve by calling the helpline. The helpline is
              free to call but the services or programs that you pursue may have
              costs associated with them. Neither qualifyaca.com nor any of the
              supplemental insurance plans to which you may be connected are
              endorsed by the U.S. Government or the federal health
              program.Terms and Conditions, and Privacy Policy. Not affiliated
              with the U. S. government or federal Medicare program. A licensed
              agent may contact you regarding this insurance-related
              information.
            </small>
            <div class="footer-links color-dark-grey">
              <div class="font-13">Copyright © 2022 | Health benefits</div>
              <div class="footer-vertical-divider"></div>
              <div class="font-13">
                <a
                  target="_blank"
                  href="https://quotes.health-benefits.co/privacy-policy"
                >
                  PRIVACY POLICY
                </a>
              </div>
              <div class="footer-vertical-divider"></div>
              <div class="font-13">
                <a
                  target="_blank"
                  href="https://quotes.health-benefits.co/terms"
                >
                  TERMS OF USE
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <AddEventId eventID={eventID} />
    </>
  );
}

function AddEventId({ eventID }) {
  const viewContentKey = "PageView";

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.fbcFunc && !sessionStorage.getItem(viewContentKey)) {
        window.fbcFunc &&
          window.fbcFunc("track", "PageView", { eventID: eventID });
        sessionStorage.setItem(viewContentKey, "true");
      }
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 20000);

    return () => clearInterval(interval);
  }, []);
  return <></>;
}
