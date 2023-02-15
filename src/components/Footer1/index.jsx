import React, { useEffect } from "react";
import "./index.scss"

export default function Footer({
  privacyPolicyRoute,
  termsAndConditionsRoute,
  partnerListRoute,
  eventID,
  footerTitle, 
  fullName
}) {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <small>
              {footerTitle} is not an insurance or
              operating company but connects individuals with insurance
              providers and other affiliates. Plans are insured or covered by a
              Medicare Advantage organization with a Medicare contract and/or a
              Medicare-approved Part D sponsor.
            </small>
            <small>
              Enrollment in the plan depends on the plan’s contract renewal with
              Medicare. Possible options include, but are not limited to Major
              Medical Plans, Short Term Plans, Christian Health Plans, Health
              Sharing Plans, discount cards and Fixed Indemnity Plans.
            </small>
            <small>
              Descriptions are for informational purposes only and subject to
              change. {footerTitle} is not affiliated with
              any insurance plan nor does it represent or endorse any plan. We
              do not offer every plan available in your area. Any information we
              provide is limited to those plans we do offer in your area. Please
              contact Medicare.gov or 1–800 MEDICARE to get information on all
              of your options.
            </small>
            <small>
              By using this site, you acknowledge that you have read and agree
              to the{" "}
              <a
                target={"_blank"}
                rel="noreferrer"
                href={termsAndConditionsRoute}
              >
                Terms of Service
              </a>
              , and{" "}
              <a target={"_blank"} rel="noreferrer" href={privacyPolicyRoute}>
                Privacy Policy
              </a>
              . Not affiliated with the U. S. government or federal Medicare
              program. A licensed agent may contact you regarding this
              insurance-related information.
            </small>
            <ul className="menu">
              <li>
                <a target={"_blank"} rel="noreferrer" href={privacyPolicyRoute}>
                  Privacy Policy /
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href={termsAndConditionsRoute}
                >
                  Terms of Service /
                </a>
              </li>
            </ul>
            <small>© {fullName} 2023.</small>
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
