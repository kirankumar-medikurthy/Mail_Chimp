import "./complete.css";
import Button from "./Button";
import Button1 from "./Button1";
import { Button3 } from "../Buttons/Buttons";
import { Logo, ChevronRight, ChevronLeft } from "../Icons/Icons";
import { Link } from "react-router-dom";

const Complete = () => {
  return (
    <>
      <div className="import-contact-container-mk">
        <div className="import-contact-nav-mk">
          <div className="import-contact-nav-item-mk">
            <ChevronLeft />
            <Logo />
            <div className="import-contact-items-mk">
              <p className="import-contact-heading-mk">Import Contacts</p>
              <div className="breadcrumbs">
                <p>Choose Method</p>
                <ChevronRight />
                <p>Import</p>
                <ChevronRight />
                <p>Organise</p>
                <ChevronRight />
                <p>Tag</p>
                <ChevronRight />
                <p>Match</p>
                <ChevronRight />
                <p>Complete</p>
              </div>
            </div>
          </div>
          <div>
            <Button3 text="Exit" />
          </div>
        </div>
      </div>
      <div className="cont11">
        <div className="cont111">
          <div className="h111">Match column labels to contact information</div>
          <div className="p111">10 contacts were recognised in this file</div>

          <ul>
            <li>
              <b>Imported from: </b>Copy and Paste
            </li>
            <li>
              <b>Email marketing status: </b>Subscribed
            </li>
            <li>
              <b>Update existing contatcs: </b>Yes
            </li>
            <li>
              <b>Tagged: </b>Customer
            </li>
          </ul>

          <div className="cont113">
            The maximum number of contacts allowed on your Free plan is 2,000.
            If you go 2,000 contacts with this import, your ability to send
            email campaigns may be imposed.
          </div>

          <div className="cont114">
            <Link to="/dashboard/complete/success">
              <Button name="Complete Import" />
            </Link>
            <Button1 name1="Cancel Import" />
          </div>

          <img
            className="quest"
            src={
              require("../../project_images/landingpage_images/ques.svg")
                .default
            }
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Complete;
